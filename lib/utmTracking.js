const UTM_STORAGE_KEY = "landing_utm_params"

export const TRACKING_PARAM_KEYS = [
  "utm_source",
  "utm_campaign",
  "utm_touchpoints",
  "utm_medium",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
]

export const EMPTY_TRACKING = {
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

/** Read tracking fields from URLSearchParams; missing keys become "". */
export function readTrackingFromSearchParams(searchParams) {
  const raw = {}
  for (const key of TRACKING_PARAM_KEYS) {
    raw[key] = searchParams?.get(key)?.trim() ?? ""
  }
  return raw
}

/** Persist URL params in sessionStorage when any tracking param is present. */
export function persistUtmFromSearchParams(searchParams) {
  if (typeof window === "undefined" || !searchParams) return EMPTY_TRACKING

  const raw = readTrackingFromSearchParams(searchParams)
  const hasAny = TRACKING_PARAM_KEYS.some((key) => raw[key])

  if (hasAny) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(raw))
  }

  return getTrackingForSubmit(searchParams)
}

/** Full tracking payload for Google Sheet / analytics; empty string when not set. */
export function getTrackingForSubmit(searchParams) {
  if (typeof window === "undefined") return { ...EMPTY_TRACKING }

  const fromUrl = readTrackingFromSearchParams(searchParams)
  const hasUrl = TRACKING_PARAM_KEYS.some((key) => fromUrl[key])

  const raw = hasUrl
    ? fromUrl
    : (() => {
        try {
          return JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) || "{}")
        } catch {
          return {}
        }
      })()

  return {
    utm_source: raw.utm_source ?? "",
    utm_campaign: raw.utm_campaign ?? "",
    utm_medium: raw.utm_medium ?? "",
    utm_term: raw.utm_term ?? "",
    utm_content: raw.utm_content ?? "",
    utm_touchpoints: resolveTouchpoints(raw),
    gclid: raw.gclid ?? "",
    fbclid: raw.fbclid ?? "",
    page_url: window.location.href ?? "",
    referrer: document.referrer ?? "",
    user_agent: navigator.userAgent ?? "",
  }
}

function resolveTouchpoints(raw) {
  if (raw.utm_touchpoints) return raw.utm_touchpoints
  return [raw.utm_medium, raw.utm_content, raw.utm_term].filter(Boolean).join(" | ")
}

// Backwards-compatible aliases
export const UTM_PARAM_KEYS = TRACKING_PARAM_KEYS
export const EMPTY_UTM_TAGS = EMPTY_TRACKING
export const getUtmTagsForSubmit = getTrackingForSubmit
