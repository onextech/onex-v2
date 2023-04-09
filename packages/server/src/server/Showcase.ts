import { MOCK_SHOWCASES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import getDynamicPage, { GetDynamicPageConfigs } from '../utils/getDynamicPage'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchShowcaseBySlug = (injectedSlug) => {
  return MOCK_SHOWCASES[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const ShowcaseList = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const showcases = MOCK_SHOWCASES[MOCK_KEY]
      return { props: { showcases } }
    },
}

export const ShowcaseDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const showcase = fetchShowcaseBySlug(context.params.slug)
      const showcasePage = getDynamicPage(showcase, configs)
      return { props: { showcase: showcasePage } }
    },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_SHOWCASES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
    }),
}
