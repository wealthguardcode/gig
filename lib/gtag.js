export const GA_TRACKING_ID = `${process.env.NEXT_PUBLIC_GA_ID}`

// https://developers.google.com/tag-platform/gtagjs/reference#config
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
}

// https://developers.google.com/tag-platform/gtagjs/reference#event
export const event = (event_name = 'click', event_params = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', event_name, event_params)
  }
}
