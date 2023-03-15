import { CrudItem } from '@gravis-os/types'

export interface Job extends CrudItem {
  html?: string
  ctaUrl?: string
}

export default Job
