import { MOCK_PRESS_RELEASES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetDynamicPageConfigs } from '../utils/getDynamicPage'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchPressReleaseBySlug = (injectedSlug) => {
  return MOCK_PRESS_RELEASES[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const PressReleaseList = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const pressReleases = MOCK_PRESS_RELEASES[MOCK_KEY]
      return { props: { pressReleases } }
    },
}

export const PressReleaseDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const pressRelease = fetchPressReleaseBySlug(context.params.slug)
      const otherPressReleases = MOCK_PRESS_RELEASES[MOCK_KEY].filter(
        ({ slug }) => slug !== context.params.slug
      ).slice(0, 3)
      return {
        props: {
          pressRelease,
          otherPressReleases,
        },
      }
    },
  getStaticPaths: (): GetStaticPaths => async () => {
    return {
      paths: MOCK_PRESS_RELEASES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
      fallback: false,
    }
  },
}
