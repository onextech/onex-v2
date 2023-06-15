import { MOCK_PRESS_RELEASES } from '@onex/mocks'
import { GetStaticPaths, GetStaticProps } from 'next'
import dayjs from 'dayjs'
import makeGetStaticPaths from '../utils/makeGetStaticPaths'
import makeGetStaticProps from '../utils/makeGetStaticProps'

const { MOCK_KEY = '' } = process.env

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
  getStaticProps: (): GetStaticProps =>
    makeGetStaticProps({
      props: {
        pressReleases: MOCK_PRESS_RELEASES[MOCK_KEY].filter(
          ({ is_active }) => is_active
        ).filter(
          ({ published_at }) =>
            published_at && dayjs(published_at).isBefore(dayjs())
        ),
      },
    }),
}

export const PressReleaseDetail = {
  getStaticProps: (): GetStaticProps => (context) => {
    const pressRelease = fetchPressReleaseBySlug(context.params?.slug)
    const otherPressReleases = MOCK_PRESS_RELEASES[MOCK_KEY].filter(
      ({ slug }) => slug !== context.params?.slug
    ).slice(0, 3)

    return makeGetStaticProps({
      props: {
        pressRelease,
        otherPressReleases,
      },
    })(context)
  },
  getStaticPaths: (): GetStaticPaths =>
    makeGetStaticPaths({
      paths: MOCK_PRESS_RELEASES[MOCK_KEY].map(
        ({ slug, exclusive_locales, blocked_locales }) => ({
          params: { slug, exclusive_locales, blocked_locales },
        })
      ),
    }),
}
