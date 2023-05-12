import type { Showcase } from '@onex/types'

export const MOCK_GROUP_SHOWCASES: Showcase[] = [
  {
    title: 'Rewarding Canon employees in a modern workplace.',
    slug: 'canon',
    subtitle:
      'A company specific rewards platform that automates reward orders and provides a wide array of gifts and experience.',
    hero_src: '/showcases/canon/hero.png',

    mode: 'dark',
    backgroundColor: '#111',
    reverse: true,

    // Sections
    sections: {
      leftGridSticky: {
        title: 'An Integrated Rewards Marketplace',
        subtitle:
          "With hundreds of options, use the filters, categories and budget to find the perfect reward. There's something for everyone.",
        hero_src: '/showcases/canon/left.png',
        hero_alt: 'showcase detail sticky 1',
      },
      gallery: {
        title: 'Exclusive rewards curated specially for you',
        subtitle:
          'A company specific rewards platform that automates reward orders and provides a wide array of gifts and experience. Everyone can find something they love.',
        items: [
          {
            title: '/showcases/canon/gallery_1.png',
            titleProps: { alt: 'showcase detail gallery 1' },
          },
          {
            title: '/showcases/canon/gallery_2.png',
            titleProps: { alt: 'showcase detail gallery 2' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Hundreds of gifts and experiences to choose from',
        subtitle:
          'Canon wanted to show employees how much the company appreciates and values their hard work. We created a scalable and enticing online rewards program where staff are awarded points they can use to redeem their preferred gift.',
        hero_src: '/showcases/canon/right.png',
        hero_alt: 'showcase detail sticky 2',
      },
    },
  },
  {
    title: 'Preparing the future of payments with SG Pay.',
    slug: 'sg-pay',
    subtitle: 'Effortless mobile payments made possible with SG Pay.',
    hero_src: '/showcases/sg-pay/hero.png',

    mode: 'light',
    backgroundColor: '#c6dcc0',

    // Sections
    sections: {
      leftGridSticky: {
        title: 'Software + Hardware Integration',
        subtitle:
          'Set up your SG Pay Point of Sale system with ease. The intuitive order and payment flow makes POS transactions a snap and let you effortlessly manage customers and your entire business.',
        hero_src: '/showcases/sg-pay/left.png',
        hero_alt: 'showcase detail sticky 1',
      },
      gallery: {
        title: 'Let your customers take the reign',
        subtitle:
          "There's no need to carry a wallet full of credit cards or have numerous banking apps. All you need is your SG Pay app.",
        items: [
          {
            title: '/showcases/sg-pay/gallery_1.png',
            titleProps: { alt: 'showcase detail gallery 1' },
          },
          {
            title: '/showcases/sg-pay/gallery_2.png',
            titleProps: { alt: 'showcase detail gallery 2' },
          },
          {
            title: '/showcases/sg-pay/gallery_3.png',
            titleProps: { alt: 'showcase detail gallery 3' },
          },
          {
            title: '/showcases/sg-pay/gallery_4.png',
            titleProps: { alt: 'showcase detail gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'A new fully integrated cashless system',
        subtitle:
          'With many payment apps out there, the key goal was to establish how SG Pay was different and better.',
        hero_src: '/showcases/sg-pay/right.png',
        hero_alt: 'showcase detail sticky 2',
      },
    },
  },
  {
    title: 'Luxury Jewellery with Marilyn Tan Jewellery.',
    slug: 'marilyn-tan-jewellery',
    subtitle:
      'Changing the Face of Luxury E-Commerce with Marilyn Tan Jeweller. Building an online presence reflective of a bold and elegant jewellery brand.',
    hero_src: '/showcases/marilyn-tan-jewellery/hero.png',

    mode: 'dark',
    backgroundColor: '#202941',
    reverse: true,

    // Sections
    sections: {
      leftGridSticky: {
        title: 'Easy access with all omni-channel touchpoints',
        subtitle:
          'Everything you always wanted to know about your orders, past and present.',
        hero_src: '/showcases/marilyn-tan-jewellery/left.png',
        hero_alt: 'showcase detail sticky 1',
      },
      gallery: {
        title: 'Depicting the lifestyle: Bold, independent and beautiful',
        subtitle:
          'In the high fashion spirit of the brand, we kept the photography bright, stunning and inspiring.',
        items: [
          {
            title: '/showcases/marilyn-tan-jewellery/gallery_1.png',
            titleProps: { alt: 'showcase detail gallery 1' },
          },
          {
            title: '/showcases/marilyn-tan-jewellery/gallery_2.png',
            titleProps: { alt: 'showcase detail gallery 2' },
          },
          {
            title: '/showcases/marilyn-tan-jewellery/gallery_3.png',
            titleProps: { alt: 'showcase detail gallery 3' },
          },
          {
            title: '/showcases/marilyn-tan-jewellery/gallery_4.png',
            titleProps: { alt: 'showcase detail gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: "Uncover each gem's story",
        subtitle:
          'All that sparkles delivered to you. Enabling customers to discover one-of-a-kind pieces from anywhere in the world',
        hero_src: '/showcases/marilyn-tan-jewellery/right.png',
        hero_alt: 'showcase detail sticky 2',
      },
    },
  },
  {
    title: 'Wealthscale: Reinventing financial advisory.',
    slug: 'wealthscale',
    subtitle: 'Showcasing a tailored approach to every single investor.',
    hero_src: '/showcases/wealthscale/hero.png',

    mode: 'dark',
    backgroundColor: '#2b698a',

    // Sections
    sections: {
      leftGridSticky: {
        title: 'Your finances made easy',
        subtitle:
          'Our all-in-one solution gives you the financial expertise you need, right in your pocket. No spreadsheets, no annoying sales calls, no judgment.',
        hero_src: '/showcases/wealthscale/left.png',
        hero_alt: 'showcase detail sticky 1',
      },
      gallery: {
        title: 'Personal investment recommendation',
        subtitle:
          'Built-in risk profiling showcases a tailored approach to every single investor.',
        items: [
          {
            title: '/showcases/wealthscale/gallery_1.png',
            titleProps: { alt: 'showcase detail gallery 1' },
          },
          {
            title: '/showcases/wealthscale/gallery_2.png',
            titleProps: { alt: 'showcase detail gallery 2' },
          },
          {
            title: '/showcases/wealthscale/gallery_3.png',
            titleProps: { alt: 'showcase detail gallery 3' },
          },
          {
            title: '/showcases/wealthscale/gallery_4.png',
            titleProps: { alt: 'showcase detail gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Investing in the future',
        subtitle:
          'Our biggest challenge was explaining how the Roboadvisory platform works and covering all its features at one go. We segmented the content in a way that was inclusive for all verticals but also specific enough to speak to particular audiences.',
        hero_src: '/showcases/wealthscale/right.png',
        hero_alt: 'showcase detail sticky 2',
      },
    },
  },
].map((showcase, i) => ({ id: i + 1, ...showcase }))

export const MOCK_SHOWCASES = {
  GROUP: MOCK_GROUP_SHOWCASES,
  TECH: MOCK_GROUP_SHOWCASES,
}
