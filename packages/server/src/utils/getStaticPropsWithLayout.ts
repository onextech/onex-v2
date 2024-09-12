import { makeGetStaticPropsWithLayout } from '../nextjs'
import layoutConfig from './layoutConfig'

/**
 * An abstracted getStaticProps function to set default parameters
 *
 * Abstracted from @link https://github.com/i18next/next-i18next/blob/master/examples/ssg/lib/getStatic.js
 * @param staticPropsResult
 */
const getStaticPropsWithLayout = makeGetStaticPropsWithLayout(layoutConfig)

export default getStaticPropsWithLayout
