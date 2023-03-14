import appConfig from './appConfig'
import routeConfig from './routeConfig'

const { companyAbsoluteUrl } = appConfig

export const brands = [
  {
    title: 'One X Tech',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: 'https://onextech.com',
  },
  {
    title: 'One X Design',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://onexdesign.com',
  },
  {
    title: 'One X Data',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://onexdata.com',
  },
  {
    title: 'One X Digital',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: 'https://onexdigital.com',
  },
  {
    title: 'One X Studio',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://onexstudio.com',
  },
  {
    title: 'One X Ventures',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: 'https://onexventures.com',
  },
  {
    title: 'One X Labs',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://onexlabs.com',
  },
  {
    title: 'Fin X',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://finx.com',
  },
  {
    title: 'Gov X',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: 'https://govx.com',
  },
].map((brand) => ({
  hrefProps: { targetBlank: true },
  ...brand,
}))

// Shared across pages
export const pages = [
  {
    title: 'About Us',
    slug: 'about',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: `${companyAbsoluteUrl}${routeConfig.ABOUT}`,
  },
  {
    title: 'Contact Us',
    slug: 'contact',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: `${companyAbsoluteUrl}${routeConfig.CONTACT}`,
  },
  {
    title: 'Careers',
    slug: 'careers',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: `${companyAbsoluteUrl}${routeConfig.CAREERS}`,
  },
].map((page) => ({
  href: `/${page.slug}`,
  ...(appConfig.companyAbsoluteUrl && { hrefProps: { targetBlank: true } }),
  ...page,
}))

// Data shared across pages
export const legalPages = [
  {
    title: 'Terms',
    slug: routeConfig.TERMS,
    href: `${companyAbsoluteUrl}${routeConfig.TERMS}`,
    html: '<div>Terms</div>',
  },
  {
    title: 'Privacy',
    slug: routeConfig.PRIVACY,
    href: `${companyAbsoluteUrl}${routeConfig.PRIVACY}`,
    html: '<div>Privacy Policy</div>',
  },
  {
    title: 'Cookies',
    slug: routeConfig.COOKIES,
    href: `${companyAbsoluteUrl}${routeConfig.COOKIES}`,
    html: '<div>Cookie Policy</div>',
  },
].map((legalPage) => ({
  ...(appConfig.companyAbsoluteUrl && { hrefProps: { targetBlank: true } }),
  html: '<div>Hello world</div>',
  ...legalPage,
}))
