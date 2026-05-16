const DEFAULT_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwZtT9mvsU10bWWroyu4mkz_s7xaDjQANvg0GjZnLpNjAJ3Njs3q2mz3d_AOgXMS8RQyw/exec"

export async function submitLeadToGoogleSheet(payload) {
  const url =
    process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL || DEFAULT_SHEET_URL

  const response = await fetch("/api/landing-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const err = await response.json().catch(() => ({}))
    throw new Error(err.message || "Google Sheet submission failed")
  }

  return response.json()
}
