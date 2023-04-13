import { MOCK_RESOURCES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'

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
  getStaticProps: (): GetStaticProps =>
    makeGetStaticProps({ props: { resources: MOCK_RESOURCES[MOCK_KEY] } }),
}

export const ResourceDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const resource = fetchResourceBySlug(context.params.slug)
    return makeGetStaticProps({
      props: {
        resource,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_RESOURCES[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
