import { MOCK_RESOURCES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { GetDynamicPageConfigs } from '../utils/getDynamicPage'

const { MOCK_KEY } = process.env

// ==============================
// Methods
// ==============================
export const fetchResourceBySlug = (injectedSlug) => {
  return MOCK_RESOURCES[MOCK_KEY].find(({ slug }) => slug === injectedSlug)
}

// ==============================
// Export
// ==============================
export const ResourceList = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const resources = MOCK_RESOURCES[MOCK_KEY]
      return { props: { resources } }
    },
}

export const ResourceDetail = {
  getStaticProps:
    ({ configs }: { configs: GetDynamicPageConfigs }): GetStaticProps =>
    (context) => {
      const resource = fetchResourceBySlug(context.params.slug)
      return {
        props: {
          resource,
        },
      }
    },
  getStaticPaths: (): GetStaticPaths => async () => {
    return {
      paths: MOCK_RESOURCES[MOCK_KEY].map(({ slug }) => ({
        params: { slug },
      })),
      fallback: false,
    }
  },
}
