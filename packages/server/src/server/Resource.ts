import { MOCK_RESOURCES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getStaticPathsWithLayout } from '@gravis-os/landing/server'
import getStaticPropsWithLayout from '../utils/getStaticPropsWithLayout'

const { MOCK_KEY = '' } = process.env

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
    getStaticPropsWithLayout({
      props: { resources: MOCK_RESOURCES[MOCK_KEY] },
    }),
}

export const ResourceDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const resource = fetchResourceBySlug(context.params?.slug)
    const relatedResources = MOCK_RESOURCES[MOCK_KEY]?.filter(
      (resource) => resource.slug !== context.params?.slug
    ).slice(0, 3)
    return getStaticPropsWithLayout({
      props: {
        resource,
        relatedResources: relatedResources || null,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    getStaticPathsWithLayout({
      paths: MOCK_RESOURCES[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
