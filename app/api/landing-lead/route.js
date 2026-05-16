const DEFAULT_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwZtT9mvsU10bWWroyu4mkz_s7xaDjQANvg0GjZnLpNjAJ3Njs3q2mz3d_AOgXMS8RQyw/exec"

export async function POST(request) {
  try {
    const body = await request.json()
    const sheetUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL ||
      DEFAULT_SHEET_URL

    const payload = {
      name: body.name ?? "",
      email: body.email ?? "",
      mobile: body.mobile ?? "",
      form_source: body.form_source ?? "",
      utm_source: body.utm_source ?? "",
      utm_campaign: body.utm_campaign ?? "",
      utm_touchpoints: body.utm_touchpoints ?? "",
      submitted_at: body.submitted_at ?? new Date().toISOString(),
    }

    const response = await fetch(sheetUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    })

    const text = await response.text()

    if (!response.ok) {
      return Response.json(
        { ok: false, message: text || "Sheet webhook error" },
        { status: 502 },
      )
    }

    return Response.json({ ok: true, sheetResponse: text })
  } catch (error) {
    console.error("landing-lead API error:", error)
    return Response.json(
      { ok: false, message: error.message || "Server error" },
      { status: 500 },
    )
  }
}
