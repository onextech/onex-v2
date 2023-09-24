import { makeGetLayoutProviderProps } from '@gravis-os/landing/server'

import layoutConfig from './layoutConfig'

const getLayoutProviderProps = makeGetLayoutProviderProps(layoutConfig) as any

export default getLayoutProviderProps
