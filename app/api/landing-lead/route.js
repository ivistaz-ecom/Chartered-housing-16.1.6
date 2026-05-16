const DEFAULT_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbxP2PJlo3TVoho3TC5bZFayOtpq8cpp7I9rBVp875ghNN_Kr7rRjKN1puLPGD59r_ywUg/exec"

function buildPayload(body) {
  return {
    submitted_at: body.submitted_at ?? new Date().toISOString(),
    name: body.name ?? "",
    mobile: body.mobile ?? "",
    email: body.email ?? "",
    form_source: body.form_source ?? "",
    utm_source: body.utm_source ?? "",
    utm_campaign: body.utm_campaign ?? "",
    utm_medium: body.utm_medium ?? "",
    utm_term: body.utm_term ?? "",
    utm_content: body.utm_content ?? "",
    gclid: body.gclid ?? "",
    fbclid: body.fbclid ?? "",
    utm_touchpoints: body.utm_touchpoints ?? "",
    page_url: body.page_url ?? "",
    referrer: body.referrer ?? "",
    user_agent: body.user_agent ?? "",
  }
}

function isGoogleHtmlError(text) {
  return (
    text.includes("<!DOCTYPE html>") ||
    text.includes("unable to open the file") ||
    text.includes("Page not found")
  )
}

function parseSheetResponse(text) {
  try {
    return JSON.parse(text)
  } catch {
    return null
  }
}

/** Matches GAS doPost: JSON.parse(e.postData.contents) */
async function postToGoogleSheet(sheetUrl, payload) {
  const response = await fetch(sheetUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    redirect: "follow",
    cache: "no-store",
  })

  const text = await response.text()
  const json = parseSheetResponse(text)

  if (json?.success === true) {
    return { ok: true, data: json }
  }

  if (json?.success === false) {
    throw new Error(json.error || "Google Sheet script returned an error")
  }

  if (isGoogleHtmlError(text)) {
    throw new Error(
      "Google Apps Script could not access the spreadsheet. Redeploy the web app (Execute as: Me, Who has access: Anyone) and use SpreadsheetApp.openById('YOUR_SHEET_ID') instead of getActiveSpreadsheet().",
    )
  }

  if (!response.ok) {
    throw new Error(text.slice(0, 300) || `Sheet webhook HTTP ${response.status}`)
  }

  // Some deployments return plain text on success
  return { ok: true, sheetResponse: text }
}

export async function POST(request) {
  try {
    const body = await request.json()
    const sheetUrl =
      process.env.GOOGLE_SHEET_WEBHOOK_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_WEBHOOK_URL ||
      DEFAULT_SHEET_URL

    const payload = buildPayload(body)
    const result = await postToGoogleSheet(sheetUrl, payload)

    return Response.json(result)
  } catch (error) {
    console.error("landing-lead API error:", error)
    return Response.json(
      {
        ok: false,
        message: error.message || "Google Sheet submission failed",
      },
      { status: 502 },
    )
  }
}
