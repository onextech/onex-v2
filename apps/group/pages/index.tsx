import React from 'react'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import LandingLayout from '@app/layouts/LandingLayout'
import { AboutPage } from '@onex/pages'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common', 'footer'])),
  },
})

export interface NextHomePageProps
  extends InferGetStaticPropsType<typeof getStaticProps> {}

const NextHomePage: React.FC<NextHomePageProps> = () => {
  const router = useRouter()
  const { t } = useTranslation('common')
  const changeTo = router.locale === 'en' ? 'de' : 'en'

  return (
    <LandingLayout
      seo={{ title: 'Home' }}
      headerProps={{ dark: true, translucent: true, position: 'fixed' }}
    >
      <div>
        <h3>{t('blog.appDir.question')}</h3>
        <Link href="/" locale={changeTo}>
          <button>{t('change-locale', { changeTo })}</button>
        </Link>
      </div>
      <AboutPage />
    </LandingLayout>
  )
}

export default NextHomePage
