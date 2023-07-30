import { makeGetLayoutProviderProps } from '@gravis-os/landing/server'
import layoutConfig from './layoutConfig'

// TODO@Joel: Remove any
const getLayoutProviderProps: any = makeGetLayoutProviderProps(
  layoutConfig as any
)

export default getLayoutProviderProps
