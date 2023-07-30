import { makeWithLayoutProviderPropsToStaticProps } from '@gravis-os/landing/server'
import layoutConfig from './layoutConfig'

const withLayoutProviderPropsToStaticProps =
  makeWithLayoutProviderPropsToStaticProps(layoutConfig as any)
// TODO@Joel: Remove any

export default withLayoutProviderPropsToStaticProps
