import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { TechPage, TechPageProps } from '@onex/pages'
import { MOCK_TECH_PAGE, MOCK_TECH_SHOWCASES } from '@onex/mocks'
import getDynamicPage from '@app/utils/getDynamicPage'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const tech = getDynamicPage(MOCK_TECH_PAGE)
  const showcases = MOCK_TECH_SHOWCASES
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
      tech,
      showcases,
    },
  }
}

export interface NextTechPageProps
  extends TechPageProps,
    InferGetStaticPropsType<typeof getStaticProps> {}

const NextTechPage: React.FC<NextTechPageProps> = (props) => {
  const { tech, showcases } = props
  const router = useRouter()
  const { t } = useTranslation('common')
  const changeTo = router.locale === 'en' ? 'de' : 'en'

  return (
    <LandingLayout
      seo={tech.seo}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <div>
        <h3>{t('blog.appDir.question')}</h3>
        <Link href="/" locale={changeTo}>
          <button>{t('change-locale', { changeTo })}</button>
        </Link>
      </div>

      <TechPage tech={tech} showcases={showcases || MOCK_TECH_SHOWCASES} />
    </LandingLayout>
  )
}

export default NextTechPage
