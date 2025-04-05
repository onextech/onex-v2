import { MOCK_CLIENT_TESTIMONIALS, MOCK_SITE } from '@onex/mocks'

const { MOCK_KEY = '' } = process.env

// ==============================
// Methods
// ==============================
export const fetchSite = (options: { locale?: string } = {}) => {
  const { locale } = options || {}
  const key = locale ? `${MOCK_KEY}_${locale.toUpperCase()}` : MOCK_KEY
  return MOCK_SITE[key] || MOCK_SITE[MOCK_KEY]
}

export const fetchClientTestimonials = (options: { locale?: string } = {}) => {
  const { locale } = options || {}
  const key = locale ? `${MOCK_KEY}_${locale.toUpperCase()}` : MOCK_KEY
  return MOCK_CLIENT_TESTIMONIALS[key] || MOCK_CLIENT_TESTIMONIALS[MOCK_KEY]
}
