import { makeGetStaticPropsWithLayout } from '@gravis-os/landing/server'
import layoutConfig from './layoutConfig'

/**
 * An abstracted getStaticProps function to set default parameters
 *
 * Abstracted from @link https://github.com/i18next/next-i18next/blob/master/examples/ssg/lib/getStatic.js
 * @param staticPropsResult
 */
const getStaticPropsWithLayout = makeGetStaticPropsWithLayout(
  layoutConfig as any
)
// TODO@Joel: Remove any

export default getStaticPropsWithLayout
