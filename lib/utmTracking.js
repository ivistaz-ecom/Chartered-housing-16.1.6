const UTM_STORAGE_KEY = "landing_utm_params"

export const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_campaign",
  "utm_touchpoints",
  "utm_medium",
  "utm_content",
  "utm_term",
]

export const EMPTY_UTM_TAGS = {
  utm_source: "",
  utm_campaign: "",
  utm_touchpoints: "",
}

/** Read UTM fields from URLSearchParams; missing keys become "". */
export function readUtmFromSearchParams(searchParams) {
  const raw = {}
  for (const key of UTM_PARAM_KEYS) {
    raw[key] = searchParams?.get(key)?.trim() ?? ""
  }
  return raw
}

/** Persist URL UTMs in sessionStorage when any standard UTM param is present. */
export function persistUtmFromSearchParams(searchParams) {
  if (typeof window === "undefined" || !searchParams) return EMPTY_UTM_TAGS

  const raw = readUtmFromSearchParams(searchParams)
  const hasAny = UTM_PARAM_KEYS.some((key) => raw[key])

  if (hasAny) {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(raw))
  }

  return getUtmTagsForSubmit(searchParams)
}

/** Tags sent with form / sheet: empty string when not set. */
export function getUtmTagsForSubmit(searchParams) {
  if (typeof window === "undefined") return { ...EMPTY_UTM_TAGS }

  const fromUrl = readUtmFromSearchParams(searchParams)
  const hasUrl = UTM_PARAM_KEYS.some((key) => fromUrl[key])

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
    utm_touchpoints: resolveTouchpoints(raw),
  }
}

function resolveTouchpoints(raw) {
  if (raw.utm_touchpoints) return raw.utm_touchpoints
  return [raw.utm_medium, raw.utm_content, raw.utm_term].filter(Boolean).join(" | ")
}
