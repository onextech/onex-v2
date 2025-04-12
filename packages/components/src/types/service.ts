export interface ServiceOverview {
  description: string
  heading: string
  href: string
  title: string
}

export interface ServicesContent {
  mainHeader: string
  mainLinkHref: string
  mainLinkTitle: string
  services: ServiceOverview[]
}

export interface Service {
  description: string
  href: string
  iconUrl: string
  title: string
}

export interface ServicesHero {
  description: string
  heading: string
  title: string
}

export interface ServiceSlide {
  alt: string
  imgSrc: string
}
