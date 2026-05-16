const DEFAULT_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxP2PJlo3TVoho3TC5bZFayOtpq8cpp7I9rBVp875ghNN_Kr7rRjKN1puLPGD59r_ywUg/exec"

export async function submitLeadToGoogleSheet(payload) {
  const url =
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || DEFAULT_SHEET_URL

  const response = await fetch("/api/landing-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok || data.ok === false) {
    throw new Error(data.message || "Google Sheet submission failed")
  }

  return data
}
