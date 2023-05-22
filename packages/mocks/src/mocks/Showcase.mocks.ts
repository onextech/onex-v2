import type { Showcase } from '@onex/types'

export const MOCK_GROUP_SHOWCASES: Showcase[] = [
  {
    title: 'Rewarding Canon employees in a modern workplace.',
    slug: 'canon',
    subtitle:
      'A company specific rewards platform that automates reward orders and provides a wide array of gifts and experience.',
    hero_src: '/showcases/canon/hero.png',
    hero_alt: 'Canon showcase',
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
        hero_alt: 'Canon website showcase',
      },
      gallery: {
        title: 'Exclusive rewards curated specially for you',
        subtitle:
          'A company specific rewards platform that automates reward orders and provides a wide array of gifts and experience. Everyone can find something they love.',
        items: [
          {
            title: '/showcases/canon/gallery_1.png',
            titleProps: { alt: 'Canon website login page' },
          },
          {
            title: '/showcases/canon/gallery_2.png',
            titleProps: { alt: 'Canon rewards program my account page' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Hundreds of gifts and experiences to choose from',
        subtitle:
          'Canon wanted to show employees how much the company appreciates and values their hard work. We created a scalable and enticing online rewards program where staff are awarded points they can use to redeem their preferred gift.',
        hero_src: '/showcases/canon/right.png',
        hero_alt: 'Integrated rewards marketplace showcase',
      },
    },
  },
  {
    title: 'Preparing the future of payments with SG Pay.',
    slug: 'sg-pay',
    subtitle: 'Discover SG Pay, a cutting-edge payment solution. Simplify transactions and enhance user experiences with a secure and seamless platform.',
    hero_src: '/showcases/sg-pay/hero.png',
    hero_alt: 'Temperature adjustment app',
    mode: 'light',
    backgroundColor: '#c6dcc0',

    // Sections
    sections: {
      leftGridSticky: {
        title: 'Software + Hardware Integration',
        subtitle:
          'Set up your SG Pay Point of Sale system with ease. The intuitive order and payment flow makes POS transactions a snap and let you effortlessly manage customers and your entire business.',
        hero_src: '/showcases/sg-pay/left.png',
        hero_alt: 'Cashless payments showcase',
      },
      gallery: {
        title: 'Let your customers take the reign',
        subtitle:
          "There's no need to carry a wallet full of credit cards or have numerous banking apps. All you need is your SG Pay app.",
        items: [
          {
            title: '/showcases/sg-pay/gallery_1.png',
            titleProps: { alt: 'SG Pay merchant guide' },
          },
          {
            title: '/showcases/sg-pay/gallery_2.png',
            titleProps: { alt: 'Security encryption and set up guides' },
          },
          {
            title: '/showcases/sg-pay/gallery_3.png',
            titleProps: { alt: 'Simplified shopping showcase' },
          },
          {
            title: '/showcases/sg-pay/gallery_4.png',
            titleProps: { alt: 'Mobile payments showcase' },
          },
        ],
      },
      rightGridSticky: {
        title: 'A new fully integrated cashless system',
        subtitle:
          'With many payment apps out there, the key goal was to establish how SG Pay was different and better.',
        hero_src: '/showcases/sg-pay/right.png',
        hero_alt: 'Mobile payment system showcase',
      },
    },
  },
  {
    title: 'Luxury Jewellery with Marilyn Tan Jewellery.',
    slug: 'marilyn-tan-jewellery',
    subtitle:
      'Changing the Face of Luxury E-Commerce with Marilyn Tan Jeweller. Building an online presence reflective of a bold and elegant jewellery brand.',
    hero_src: '/showcases/marilyn-tan-jewellery/hero.png',
    hero_alt: 'App controlling Philips lights',
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
        hero_alt: 'Marilyn Tan jewellery website showcase',
      },
      gallery: {
        title: 'Depicting the lifestyle: Bold, independent and beautiful',
        subtitle:
          'In the high fashion spirit of the brand, we kept the photography bright, stunning and inspiring.',
        items: [
          {
            title: '/showcases/marilyn-tan-jewellery/gallery_1.png',
            titleProps: { alt: 'Jewellery website showcase' },
          },
          {
            title: '/showcases/marilyn-tan-jewellery/gallery_2.png',
            titleProps: { alt: 'Jewellery displayed in a bowl' },
          },
          {
            title: '/showcases/marilyn-tan-jewellery/gallery_3.png',
            titleProps: { alt: 'Marilyn Tan jewellery website showcase' },
          },
          {
            title: '/showcases/marilyn-tan-jewellery/gallery_4.png',
            titleProps: { alt: 'Model wearing jewellery' },
          },
        ],
      },
      rightGridSticky: {
        title: "Uncover each gem's story",
        subtitle:
          'All that sparkles delivered to you. Enabling customers to discover one-of-a-kind pieces from anywhere in the world',
        hero_src: '/showcases/marilyn-tan-jewellery/right.png',
        hero_alt: 'Marilyn Tan jewellery website showcase',
      },
    },
  },
  {
    title: 'Wealthscale: Reinventing financial advisory.',
    slug: 'wealthscale',
    subtitle: 'Learn about WealthScale\'s impressive portfolio of innovative wealth management solutions. Harness cutting-edge technology to elevate financial success.',
    hero_src: '/showcases/wealthscale/hero.png',
    hero_alt: 'App with surgery dates',
    mode: 'dark',
    backgroundColor: '#2b698a',

    // Sections
    sections: {
      leftGridSticky: {
        title: 'Your finances made easy',
        subtitle:
          'Our all-in-one solution gives you the financial expertise you need, right in your pocket. No spreadsheets, no annoying sales calls, no judgment.',
        hero_src: '/showcases/wealthscale/left.png',
        hero_alt: 'Wealthscale website invest page',
      },
      gallery: {
        title: 'Personal investment recommendation',
        subtitle:
          'Built-in risk profiling showcases a tailored approach to every single investor.',
        items: [
          {
            title: '/showcases/wealthscale/gallery_1.png',
            titleProps: { alt: 'Wealthscale asset class allocation page' },
          },
          {
            title: '/showcases/wealthscale/gallery_2.png',
            titleProps: { alt: 'Wealthscale investment plan page' },
          },
          {
            title: '/showcases/wealthscale/gallery_3.png',
            titleProps: { alt: 'Wealthscale survey page' },
          },
          {
            title: '/showcases/wealthscale/gallery_4.png',
            titleProps: { alt: 'Wealthscale page ' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Investing in the future',
        subtitle:
          'Our biggest challenge was explaining how the Roboadvisory platform works and covering all its features at one go. We segmented the content in a way that was inclusive for all verticals but also specific enough to speak to particular audiences.',
        hero_src: '/showcases/wealthscale/right.png',
        hero_alt: 'Wealthscale website showcase',
      },
    },
  },
].map((showcase, i) => ({ id: i + 1, ...showcase }))

export const MOCK_TECH_SHOWCASES = MOCK_GROUP_SHOWCASES

export const MOCK_DATA_SHOWCASES = MOCK_GROUP_SHOWCASES

export const MOCK_DESIGN_SHOWCASES = MOCK_GROUP_SHOWCASES

export const MOCK_SHOWCASES = {
  GROUP: MOCK_GROUP_SHOWCASES,
  TECH: MOCK_TECH_SHOWCASES,
  DATA: MOCK_DATA_SHOWCASES,
  DESIGN: MOCK_DESIGN_SHOWCASES
}
