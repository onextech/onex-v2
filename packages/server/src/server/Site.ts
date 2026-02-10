import { MOCK_CLIENT_TESTIMONIALS, MOCK_CLIENT_LOGOS, MOCK_SITE, MOCK_SHOWCASES, MOCK_POSTS } from '@onex/mocks'

const { MOCK_KEY = '' } = process.env

// ==============================
// Methods
// ==============================
export const fetchSite = (options: { locale?: string } = {}) => {
  const { locale } = options || {}
  const key = locale ? `${MOCK_KEY}_${locale.toUpperCase()}` : MOCK_KEY
  return MOCK_SITE[key] || MOCK_SITE[MOCK_KEY] || {}
}

export const fetchClientTestimonials = (options: { locale?: string } = {}) => {
  const { locale } = options || {}
  const key = locale ? `${MOCK_KEY}_${locale.toUpperCase()}` : MOCK_KEY
  return MOCK_CLIENT_TESTIMONIALS[key] || MOCK_CLIENT_TESTIMONIALS[MOCK_KEY] || []
}

export const fetchClientLogos = (options: { locale?: string } = {}) => {
  const { locale } = options || {}
  const key = locale ? `${MOCK_KEY}_${locale.toUpperCase()}` : MOCK_KEY
  return MOCK_CLIENT_LOGOS[key] || MOCK_CLIENT_LOGOS[MOCK_KEY] || []
}

export const fetchShowcases = (options: { locale?: string } = {}) => {
  const { locale } = options || {}
  const key = locale ? `${MOCK_KEY}_${locale.toUpperCase()}` : MOCK_KEY
  return MOCK_SHOWCASES[key] || MOCK_SHOWCASES[MOCK_KEY] || []
}

export const fetchPosts = (options: { locale?: string } = {}) => {
  const { locale } = options || {}
  const key = locale ? `${MOCK_KEY}_${locale.toUpperCase()}` : MOCK_KEY
  return MOCK_POSTS[key] || MOCK_POSTS[MOCK_KEY] || []
}
