import {
  ClientHighlight,
  ClientLogo,
  ClientTestimonial,
  Industry,
  Page,
  PostCategory,
  PressRelease,
  Service,
  ServiceCategory,
  Showcase,
  Site,
  Technology,
  Workspace,
} from '@onex/types'

export interface LayoutConfig {
  clientHighlights?: ClientHighlight[]
  clientLogos?: ClientLogo[]
  clientTestimonials?: ClientTestimonial[]
  industrys?: Industry[]
  pages?: Page[]
  postCategorys?: PostCategory[]
  pressReleases?: PressRelease[]
  routeConfig?: Record<string, string>
  serviceCategorys?: ServiceCategory[]
  services?: Service[]
  showcases?: Showcase[]
  site?: Site
  technologys?: Technology[]
  workspaces?: Workspace[]
}
