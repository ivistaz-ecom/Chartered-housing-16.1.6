"use client"

import { useState } from "react"
import { validatePlainTextOnly, sanitizeText } from "@/lib/sanitizeText"
import { getTrackingForSubmit } from "@/lib/utmTracking"
import { submitLeadToGoogleSheet } from "@/lib/googleSheetLead"

// Default form data
const defaultFormData = {
  purpose: "",
  name: "",
  email: "",
  mobile: "",
  message: "",
  company: "",
  resume: null, // ✅ Make this `null` (not empty string) to properly handle file objects
  consent: false,
}

// Mobile number validation - exactly 10 digits only
const validateMobileNumber = (mobile) => {
  if (!mobile || !mobile.trim()) {
    return "Mobile number is required"
  }

  // Remove all non-digit characters except +
  let cleanMobile = mobile.replace(/[^\d+]/g, "")

  // Remove country code if present
  if (cleanMobile.startsWith("+91")) {
    cleanMobile = cleanMobile.substring(3)
  } else if (cleanMobile.startsWith("+")) {
    cleanMobile = cleanMobile.substring(1)
  }

  // Check if only digits remain
  if (!/^\d+$/.test(cleanMobile)) {
    return "Mobile number should contain only digits"
  }

  const length = cleanMobile.length

  // Must be exactly 10 digits
  if (length !== 10) {
    return "Mobile number must be exactly 10 digits"
  }

  // First digit must be 6, 7, 8, or 9 for Indian numbers
  const firstDigit = cleanMobile[0]
  if (!["6", "7", "8", "9"].includes(firstDigit)) {
    return "Invalid Indian mobile number format"
  }

  return null
}

const getTrackingAtSubmit = () => {
  if (typeof window === "undefined") {
    return {
      utm_source: "",
      utm_campaign: "",
      utm_touchpoints: "",
      utm_medium: "",
      utm_term: "",
      utm_content: "",
      gclid: "",
      fbclid: "",
      page_url: "",
      referrer: "",
      user_agent: "",
    }
  }
  return getTrackingForSubmit(new URLSearchParams(window.location.search))
}

export const useFormHandler = (formId) => {
  const [formData, setFormData] = useState(defaultFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [fieldErrors, setFieldErrors] = useState({})
  const [lastSubmission, setLastSubmission] = useState(null)

  const handleChange = (e) => {
    if (!e?.target) return // ✅ Prevent runtime error

    const { name, type, value, checked } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      // ✅ Store the actual file object in formData
      setFormData((prev) => ({
        ...prev,
        resume: file,
      }))

      if (fieldErrors["resume"]) {
        setFieldErrors((prev) => ({
          ...prev,
          resume: null,
        }))
      }
    }
  }

  const validateField = (name, value) => {
    let error = null
    switch (name) {
      case "name": {
        const nameSafe = validatePlainTextOnly(value)
        if (nameSafe) {
          error = nameSafe
          break
        }
        if (formId === 5862) {
          if (value && value.trim() && value.trim().length < 2) {
            error = "Name must be at least 2 characters"
          }
        } else {
          if (!value || !value.trim()) {
            error = "Name is required"
          } else if (value.trim().length < 2) {
            error = "Name must be at least 2 characters"
          }
        }
        break
      }
      case "email":
        if (!value || !value.trim()) {
          error = "Email is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Please enter a valid email address"
        }
        break
      case "resume":
        // Only validate resume for careers form (5856)
        if (formId === 5856) {
          if (!value) {
            error = "Resume is required"
          } else if (!/\.(pdf|doc|docx)$/i.test(value.name)) {
            error = "Please upload a PDF, DOC, or DOCX file"
          }
        }
        break
      case "mobile":
        error = validateMobileNumber(value)
        break
      case "purpose":
        if (
          formId !== 5855 &&
          formId !== 5854 &&
          formId !== 5858 &&
          formId !== 5859 &&
          formId !== 5850 &&
          formId !== 5862 &&
          formId !== 5856 &&
          formId !== 5871 &&
          formId !== 5877 &&
          (!value || !value.trim())
        ) {
          // Different error messages based on form type
          if (formId === 5856) {
            error = "Please select a department"
          } else {
            error = "Please select a property"
          }
        }
        break
      case "company":
        if (formId === 1186 && !value) {
          error = "Company name is required"
        }
        break
      case "message": {
        const messageSafe = validatePlainTextOnly(value)
        if (messageSafe) {
          error = messageSafe
          break
        }
        if (value && value.trim() && value.trim().length < 10) {
          error = "Message must be at least 10 characters"
        }
        break
      }
      case "consent":
        if (
          (formId === 1067 ||
            formId === 5858 ||
            formId === 5859 ||
            formId === 5871 ||
            formId === 5877) &&
          !value
        ) {
          error = "You must agree to the terms and conditions"
        }
        break
      default:
        break
    }
    return error
  }

  const validateAllFields = () => {
    const errors = {}
    let hasError = false

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field])
      if (error) {
        errors[field] = error
        hasError = true
      }
    })

    console.log("Validation errors:", errors)
    setFieldErrors(errors)
    return !hasError
  }

  const handleSubmit = async (e, extraData = {}) => {
    e.preventDefault()
    console.log("Form submission started", formData)

    if (!validateAllFields()) {
      console.log("Validation failed - errors set")
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Clean mobile number - remove all non-digits and country code (guard for SSR/edge)
      let cleanMobile = (formData.mobile || "").replace(/[^\d]/g, "")

      // Remove country code if present (91 for India)
      if (cleanMobile.startsWith("91") && cleanMobile.length > 10) {
        cleanMobile = cleanMobile.substring(2)
      }

      // Ensure only 10 digits
      cleanMobile = cleanMobile.slice(0, 10)

      const cf7Data = new FormData()
      const safeName = sanitizeText(
        formData.name || (formId === 5862 ? "" : "Not provided"),
        "name",
      )
      const safeMessage = sanitizeText(
        formData.message || "No message provided",
        "message",
      )
      // Some CF7 forms include both tags in mail templates, causing duplicates.
      // For 5877, send only the "your-*" fields.
      if (formId === 5877) {
        cf7Data.append(
          "name",
          safeName || (formId === 5862 ? "" : "Not provided"),
        )
        cf7Data.append("email", formData.email?.trim() || "")
      } else {
        cf7Data.append(
          "name",
          safeName || (formId === 5862 ? "" : "Not provided"),
        )
        cf7Data.append(
          "your-name",
          safeName || (formId === 5862 ? "" : "Not provided"),
        ) // CF7 forms that use your-name
        cf7Data.append("email", formData.email?.trim() || "")
        cf7Data.append("your-email", formData.email?.trim() || "") // CF7 forms that use your-email
      }
      cf7Data.append("mobile", cleanMobile)
      cf7Data.append("purpose", formData.purpose || "")
      cf7Data.append("company", formData.company || "")
      cf7Data.append("message", safeMessage || "No message provided")
      if (extraData.recaptchaToken) {
        cf7Data.append("g-recaptcha-response", extraData.recaptchaToken)
      }

      // ✅ Append file object properly
      if (formData.resume) {
        cf7Data.append("resume", formData.resume)
      } else {
        cf7Data.append("resume", "No resume provided")
      }

      cf7Data.append("consent", formData.consent ? "Yes" : "No")

      const response = await fetch(
        `https://docs.charteredhousing.com/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
        {
          method: "POST",
          body: cf7Data,
        },
      )

      const result = await response.json()
      console.log("Response result:", result)

      if (response.ok && result.status === "mail_sent") {
        const submissionSnapshot = {
          name: safeName || "",
          email: formData.email?.trim() || "",
          mobile: cleanMobile,
        }
        setLastSubmission(submissionSnapshot)

        if (formId === 5877) {
          const tracking = getTrackingAtSubmit()
          try {
            await submitLeadToGoogleSheet({
              ...submissionSnapshot,
              ...tracking,
              form_source: extraData.formSource || "",
              submitted_at: new Date().toISOString(),
            })
          } catch (sheetError) {
            console.error("Google Sheet submission error:", sheetError)
          }
        }

        setSubmitStatus("success")
        setFormData(defaultFormData)
        setFieldErrors({})
      } else {
        setSubmitStatus("error")
        console.error("Form submission error:", result)
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Network error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData(defaultFormData)
    setSubmitStatus(null)
    setFieldErrors({})
    setLastSubmission(null)
  }

  return {
    formData,
    setFormData,
    handleChange,
    handleSelectChange,
    handleFileChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    fieldErrors,
    validateField,
    validateAllFields,
    resetForm,
    formId,
    lastSubmission,
  }
}
