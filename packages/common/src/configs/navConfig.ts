import appConfig from './appConfig'
import routeConfig from './routeConfig'

const { companyAbsoluteUrl } = appConfig
const isDev = process.env.NODE_ENV === 'development'

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
].map((brand, i) => ({
  hrefProps: { targetBlank: true },
  ...brand,
  href: isDev ? `http://localhost:${3000 + i + 1}` : brand.href,
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
    title: 'Mission',
    slug: 'mission',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: `${companyAbsoluteUrl}${routeConfig.MISSION}`,
  },
  {
    title: 'Careers',
    slug: 'careers',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: `${companyAbsoluteUrl}${routeConfig.CAREERS}`,
  },
  {
    title: 'Design',
    slug: 'design',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: `${companyAbsoluteUrl}${routeConfig.DESIGN}`,
  },
  {
    title: 'Data',
    slug: 'data',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: `${companyAbsoluteUrl}${routeConfig.DATA}`,
  },
  {
    title: 'Digital',
    slug: 'digital',
    subtitle:
      'Learn how we keep our employees happy and see our values, culture, and initiatives.',
    href: `${companyAbsoluteUrl}${routeConfig.DIGITAL}`,
  },
  {
    title: 'Contact Us',
    slug: 'contact',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: `${companyAbsoluteUrl}${routeConfig.CONTACT}`,
  },
  {
    title: 'News',
    slug: 'news',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: `${companyAbsoluteUrl}${routeConfig.PRESS_RELEASES}`,
  },
  {
    title: 'Newsletter',
    slug: 'newsletter',
    subtitle:
      'Discover the Agile process that makes 98% of tech executives recommend us',
    href: `${companyAbsoluteUrl}${routeConfig.NEWSLETTER}`,
  },
].map((page) => ({
  href: `/${page.slug}`,
  ...(appConfig.companyAbsoluteUrl && { hrefProps: { targetBlank: true } }),
  ...page,
}))

// Data shared across pages
export const legalPages = [
  {
    seo: { title: 'Terms' },
    title: 'Terms',
    slug: routeConfig.TERMS.slice(1),
    href: `${companyAbsoluteUrl}${routeConfig.TERMS}`,
    html: '<div>Terms</div>',
  },
  {
    seo: { title: 'Privacy' },
    title: 'Privacy',
    slug: routeConfig.PRIVACY.slice(1),
    href: `${companyAbsoluteUrl}${routeConfig.PRIVACY}`,
    html: '<div>Privacy Policy</div>',
  },
  {
    seo: { title: 'Cookies' },
    title: 'Cookies',
    slug: routeConfig.COOKIES.slice(1),
    href: `${companyAbsoluteUrl}${routeConfig.COOKIES}`,
    html: '<div>Cookie Policy</div>',
  },
].map((legalPage) => ({
  ...(appConfig.companyAbsoluteUrl && { hrefProps: { targetBlank: true } }),
  ...legalPage,
}))
