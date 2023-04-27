import Page from './Page.types'

interface Technology extends Page {
  avatar_src?: string
  avatar_alt?: string
  avatar_width?: number
  avatar_height?: number
  hero_src?: string
  hero_alt?: string
  is_featured?: boolean
  is_hidden_from_nav?: boolean
}

export default Technology
