import React from 'react'
import LandingLayout from '@app/layouts/LandingLayout'
import { IndustrysPageProps, IndustrysPage } from '@onex/pages'
import { IndustryList } from '@onex/server'
import configs from '@app/configs'

export const getStaticProps = IndustryList.getStaticProps({ configs })

export interface NextIndustrysPageProps extends IndustrysPageProps {}

const NextIndustrysPage: React.FC<NextIndustrysPageProps> = (props) => {
  const { industrys } = props
  return (
    <LandingLayout seo={{ title: 'Industries' }}>
      <IndustrysPage industrys={industrys} />
    </LandingLayout>
  )
}

export default NextIndustrysPage
