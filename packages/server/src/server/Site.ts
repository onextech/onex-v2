import { MOCK_SITE } from '@onex/mocks'

const { MOCK_KEY = '' } = process.env

// ==============================
// Methods
// ==============================
export const fetchSite = () => {
  return MOCK_SITE[MOCK_KEY]
}
