import { makeGetLayoutProviderProps } from '../nextjs'
import layoutConfig from './layoutConfig'

const getLayoutProviderProps = makeGetLayoutProviderProps(layoutConfig) as any

export default getLayoutProviderProps
