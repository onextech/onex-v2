export interface ServiceOverview {
  title: string;
  heading: string;
  description: string;
  href: string;
}

export interface ServicesContent {
  services: ServiceOverview[];
  mainHeader: string;
  mainLinkTitle: string;
  mainLinkHref: string;
}

export interface Service {
  title: string;
  iconUrl: string;
  description: string;
  href: string;
}

export interface ServicesHero {
  title: string;
  heading: string;
  description: string;
}

export interface ServiceSlide {
  alt: string;
  imgSrc: string;
}
