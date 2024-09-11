import { CrudItem } from './crud'

export interface Feature extends CrudItem {}
export interface Tier extends CrudItem {
  feature: Feature[]
  feature_ids: Array<{ title: string }>
}
export interface Workspace extends CrudItem {
  slug: string
  tier: Tier
  title: string
}
