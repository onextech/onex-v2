import type { Showcase } from '@onex/types'

export const MOCK_TECH_SHOWCASES: Showcase[]= [
  {
    title: 'Luxury Jewellery with Marilyn Tan Jewellery.',
    slug: 'marilyn-tan-jewellery',
    subtitle:
      'Changing the Face of Luxury E-Commerce with Marilyn Tan Jeweller. Building an online presence reflective of a bold and elegant jewellery brand.',
    hero_src: '/showcases/marilyn-tan-jewellery/hero.png',
    hero_alt: 'App controlling Philips lights',
    mode: 'light',
    backgroundColor: '#f2efec',

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
    backgroundColor: '#1d71cf',

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
  {
    title: 'OctiFi',
    slug: 'octifi',
    subtitle:
      'Fintech Platform. Shop Now, Pay Later.',
    hero_src: '/showcases/octifi/hero.png',
    hero_alt: 'octifi showcase',
    mode: 'dark',
    backgroundColor: '#31639C',
    sections: {
      leftGridSticky: {
        title: 'Meet Octifi',
        subtitle:
          'Enjoy true credit with Singapore’s first Pay Later credit card by paying in installments with no extra charges.',
        hero_src: '/showcases/octifi/left.png',
        hero_alt: 'Octifi Showcase 1',
      },
      gallery: {
        title: 'Effective Conversion',
        subtitle:
          'Convert site visitors into loyal customers using a superior interface that delivers delightful customer experiences.',
        items: [
          {
            title: '/showcases/octifi/gallery_1.png',
            titleProps: { alt: 'Octifi Gallery 1' },
          },
          {
            title: '/showcases/octifi/gallery_2.png',
            titleProps: { alt: 'Octifi Gallery 2' },
          },
          {
            title: '/showcases/octifi/gallery_3.png',
            titleProps: { alt: 'Octifi Gallery 3' },
          },
          {
            title: '/showcases/octifi/gallery_4.png',
            titleProps: { alt: 'Octifi Gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Shop Now. Pay Later.',
        subtitle:
          'Using fresh and exciting designs to convey the groundbreaking nature of a revolutionary change to the way customers pay.',
        hero_src: '/showcases/octifi/right.png',
        hero_alt: 'Octifi Showcase 2',
      },
    }
  },
].map((showcase, i) => ({ id: i + 1, ...showcase }))

export const MOCK_GROUP_SHOWCASES: Showcase[] = [
  {
    title: 'Preparing the future of payments with SG Pay.',
    slug: 'sg-pay',
    subtitle: 'Discover SG Pay, a cutting-edge payment solution. Simplify transactions and enhance user experiences with a secure and seamless platform.',
    hero_src: '/showcases/sg-pay/hero.png',
    hero_alt: 'Temperature adjustment app',
    mode: 'dark',
    backgroundColor: '#9B2727',
    reverse: true,

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
    title: 'A beautifully crafted self-pick up service app.',
    slug: 'suntec',
    subtitle:
      'Allow users to enjoy scrumptious meals while avoiding long queues.',
    hero_src: '/showcases/suntec/hero.png',
    hero_alt: 'Suntec showcase',
    mode: 'light',
    backgroundColor: '#ffae81',

    sections: {
      leftGridSticky: {
        title: 'A One-Stop F&B Solution Application',
        subtitle:
          'Search and filter through a plethora of eatery options to find the perfect one, no matter the occasion.',
        hero_src: '/showcases/suntec/left.png',
        hero_alt: 'Suntec Showcase 1',
      },
      gallery: {
        title: 'Enjoy Hassle-free Ordering',
        subtitle:
          'Whether it be for delivery or self pickup, order conveniently on the Suntec+ App anywhere, at anytime. ',
        items: [
          {
            title: '/showcases/suntec/gallery_1.png',
            titleProps: { alt: 'Suntec Gallery 1' },
          },
          {
            title: '/showcases/suntec/gallery_2.png',
            titleProps: { alt: 'Suntec Gallery 2' },
          },
          {
            title: '/showcases/suntec/gallery_3.png',
            titleProps: { alt: 'Suntec Gallery 3' },
          },
          {
            title: '/showcases/suntec/gallery_4.png',
            titleProps: { alt: 'Suntec Gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'A Seamless Experience, From Start to Finish',
        subtitle:
          'Our application is optimized for the entire user journey to ensure a delightful customer experience.',
        hero_src: '/showcases/suntec/right.png',
        hero_alt: 'Suntec Showcase 2',
      },
    }
  },
  {
    title: 'Singapore Realtors Inc: SRI',
    slug: 'sri',
    subtitle:
      'Real Estate Platform. Dare to Be Different.',
    hero_src: '/showcases/sri/hero.png',
    hero_alt: 'sri showcase',
    mode: 'light',
    reverse: true,
    backgroundColor: '#DACEE1',
    sections: {
      leftGridSticky: {
        title: 'Meet SRI',
        subtitle:
          'As one of the top Real Estate Agency in Singapore, SRI stands out by championing the experience of both its clients and realtors as what matters most.',
        hero_src: '/showcases/sri/left.png',
        hero_alt: 'SRI Showcase 1',
      },
      gallery: {
        title: 'Delivering exceptional, customized products',
        subtitle:
          'Making the SRI application stand out while honing in on what matters.',
        items: [
          {
            title: '/showcases/sri/gallery_1.png',
            titleProps: { alt: 'SRI Gallery 1' },
          },
          {
            title: '/showcases/sri/gallery_2.png',
            titleProps: { alt: 'SRI Gallery 2' },
          },
          {
            title: '/showcases/sri/gallery_3.png',
            titleProps: { alt: 'SRI Gallery 3' },
          },
          {
            title: '/showcases/sri/gallery_4.png',
            titleProps: { alt: 'SRI Gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'It\'s all about the experience',
        subtitle:
          'A titan in the business with over 10 years under their belt, we use clean and diverse designs to propel the vision of SRI to the forefronts of Real Estate in Singapore.',
        hero_src: '/showcases/sri/right.png',
        hero_alt: 'SRI Showcase 2',
      },
    }
  },
].map((showcase, i) => ({ id: i + 1, ...showcase }))

export const MOCK_DESIGN_SHOWCASES = [
  {
    title: 'NextGEN Global Decarbonisation Initiative.',
    slug: 'nextgen',
    subtitle:
      'How we created an intuitive platform for the International Maritime Organisation & Maritime Port Authority of Singapore.',
    hero_src: '/showcases/nextgen/hero.png',
    hero_alt: 'NextGEN showcase',
    mode: 'dark',
    backgroundColor: '#013157',
    reverse: true,
    
    sections: {
      leftGridSticky: {
        title: 'Designing for the Future',
        subtitle:
          'Delivering impactful messages of change through purposeful designs.',
        hero_src: '/showcases/nextgen/left.png',
        hero_alt: 'NextGEN Showcase 1',
      },
      gallery: {
        title: 'Simplifying the Process',
        subtitle:
          'Easy-to-follow layouts provides important information for users in clearly defined categories.',
        items: [
          {
            title: '/showcases/nextgen/gallery_1.png',
            titleProps: { alt: 'NextGEN Gallery 1' },
          },
          {
            title: '/showcases/nextgen/gallery_2.png',
            titleProps: { alt: 'NextGEN Gallery 2' },
          },
          {
            title: '/showcases/nextgen/gallery_3.png',
            titleProps: { alt: 'NextGEN Gallery 3' },
          },
          {
            title: '/showcases/nextgen/gallery_4.png',
            titleProps: { alt: 'NextGEN Gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Building an Immersive Experience',
        subtitle:
          'Making users a part of the initiative through interactive and immersive site experiences.',
        hero_src: '/showcases/nextgen/right.png',
        hero_alt: 'NextGEN Showcase 2',
      },
    }
  },
  { // TODO: ADD DETAIL
    title: 'Mr. Bucket',
    slug: 'mr-bucket',
    subtitle:
      'A Chocolaterie E-Commerce',
    hero_src: '/showcases/mr-bucket/hero.png',
    hero_alt: 'Mr. Bucket showcase',
    mode: 'dark',
    backgroundColor: '#430114',
    reverse: true,
    sections: {
      leftGridSticky: {
        title: 'Meet Mr. Bucket',
        subtitle:
          'Explosion of chocolatey-goodness with every bite into these delightfully hand-crafted bon-bons.',
        hero_src: '/showcases/mr-bucket/left.png',
        hero_alt: 'Mr Bucket Showcase 1',
      },
      gallery: {
        title: 'Delivering quality UX/UI products ',
        subtitle:
          'Creating an intuitive and visually stunning UX that allows customers to view and purchase products with ease.',
        items: [
          {
            title: '/showcases/mr-bucket/gallery_1.png',
            titleProps: { alt: 'Mr Bucket Gallery 1' },
          },
          {
            title: '/showcases/mr-bucket/gallery_2.png',
            titleProps: { alt: 'Mr Bucket Gallery 2' },
          },
          {
            title: '/showcases/mr-bucket/gallery_3.png',
            titleProps: { alt: 'Mr Bucket Gallery 3' },
          },
          {
            title: '/showcases/mr-bucket/gallery_4.png',
            titleProps: { alt: 'Mr Bucket Gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Where Modern Design meets History',
        subtitle:
          'A family-run business of 120 years, we complement this history with elegant designs which showcase the bold and fresh take Mr. Bucket has on chocolate treats.',
        hero_src: '/showcases/mr-bucket/right.png',
        hero_alt: 'Mr Bucket Showcase 2',
      },
    }
  },
  {
    title: 'IIX Impact Partners',
    slug: 'iix',
    subtitle:
      'Pioneer in Impact Investing. Global leader in sustainability.',
    hero_src: '/showcases/iix/hero.png',
    hero_alt: 'iix showcase',
    mode: 'light',
    backgroundColor: '#DDECF2',
    sections: {
      leftGridSticky: {
        title: 'Meet IIX',
        subtitle:
          'An investment enterprise with the vision of creating a platform for SMEs to make their investment impacts measurable and sustainble.',
        hero_src: '/showcases/iix/left.png',
        hero_alt: 'IIX Impact Partners Showcase 1',
      },
      gallery: {
        title: 'Designs with Clarity, with Purpose',
        subtitle:
          'Convey the impact of your vision with simplicity.',
        items: [
          {
            title: '/showcases/iix/gallery_1.png',
            titleProps: { alt: 'IIX Impact Partners Gallery 1' },
          },
          {
            title: '/showcases/iix/gallery_2.png',
            titleProps: { alt: 'IIX Impact Partners Gallery 2' },
          },
          {
            title: '/showcases/iix/gallery_3.png',
            titleProps: { alt: 'IIX Impact Partners Gallery 3' },
          },
          {
            title: '/showcases/iix/gallery_4.png',
            titleProps: { alt: 'IIX Impact Partners Gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'A Pioneer and Global Leader',
        subtitle:
          'We translate the vision of impact investing with functional and clean designs which support IIX’s movement to become a global leader in sustainability.',
        hero_src: '/showcases/iix/right.png',
        hero_alt: 'IIX Impact Partners Showcase 2',
      },
    }
  },
].map((showcase, i) => ({ id: i + 1, ...showcase }))

export const MOCK_DATA_SHOWCASES: Showcase[] = [
  {
    title: 'Rewarding Canon employees in a modern workplace.',
    slug: 'canon',
    subtitle:
      'A company specific rewards platform that automates reward orders and provides a wide array of gifts and experience.',
    hero_src: '/showcases/canon/hero.png',
    hero_alt: 'Canon showcase',
    mode: 'dark',
    backgroundColor: '#641718',
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
    title: 'People\'s Association: Intelligent Chatbot Assistant.',
    slug: 'tgb',
    subtitle:
      'We\'ve envisioned an end-to-end sharing solution for communities, corporate fleets, and rental companies.',
    hero_src: '/showcases/tgb/hero.png',
    hero_alt: 'TGB showcase',
    mode: 'light',
    backgroundColor: '#c3e8c1',
    reverse: true,
    
    sections: {
      leftGridSticky: {
        title: 'Effective Digitalization',
        subtitle:
          'Providing an intelligent, secure and accessible solution for local communities.',
        hero_src: '/showcases/tgb/left.png',
        hero_alt: 'TGB Showcase 1',
      },
      gallery: {
        title: 'Harnessing the Power of Automation',
        subtitle:
          'Effectively utilizing leading-edge technologies to automate processes and provide 24/7 assistance. ',
        items: [
          {
            title: '/showcases/tgb/gallery_1.png',
            titleProps: { alt: 'TGB Gallery 1' },
          },
          {
            title: '/showcases/tgb/gallery_2.png',
            titleProps: { alt: 'TGB Gallery 2' },
          },
          {
            title: '/showcases/tgb/gallery_3.png',
            titleProps: { alt: 'TGB Gallery 3' },
          },
          {
            title: '/showcases/tgb/gallery_4.png',
            titleProps: { alt: 'TGB Gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Expanding Digital Capabilities',
        subtitle:
          'Providing scalable software that can be used for multiple categories.',
        hero_src: '/showcases/tgb/right.png',
        hero_alt: 'TGB Showcase 2',
      },
    }
  },
  {
    title: 'Blockchain & Artificial Intelligence.',
    slug: 'spk',
    subtitle:
      'How we curated historical cryptocurrency market data for a Crypto Trading AI platform.',
    hero_src: '/showcases/spk/hero.png',
    hero_alt: 'SPK showcase',
    mode: 'dark',
    backgroundColor: '#071323',
    sections: {
      leftGridSticky: {
        title: 'Maximizing the Value of Data',
        subtitle:
          'We ensure that relevant market information is not lost in the sea of data and effectively utilize them for the trading platform.',
        hero_src: '/showcases/spk/left.png',
        hero_alt: 'SPK Showcase 1',
      },
      gallery: {
        title: 'Providing User-Centric Data ',
        subtitle:
          'Building customized views based on what is important to the user.',
        items: [
          {
            title: '/showcases/spk/gallery_1.png',
            titleProps: { alt: 'TGB Gallery 1' },
          },
          {
            title: '/showcases/spk/gallery_2.png',
            titleProps: { alt: 'TGB Gallery 2' },
          },
          {
            title: '/showcases/spk/gallery_3.png',
            titleProps: { alt: 'TGB Gallery 3' },
          },
          {
            title: '/showcases/spk/gallery_4.png',
            titleProps: { alt: 'TGB Gallery 4' },
          },
        ],
      },
      rightGridSticky: {
        title: 'Everything At A Glance',
        subtitle:
          'Learn more about the digital landscape in an intuitive and effortless manner.',
        hero_src: '/showcases/spk/right.png',
        hero_alt: 'SPK Showcase 2',
      },
    }
  },
].map((showcase, i) => ({ id: i + 1, ...showcase }))

export const MOCK_SHOWCASES = {
  GROUP: MOCK_GROUP_SHOWCASES,
  TECH: MOCK_TECH_SHOWCASES,
  DATA: MOCK_DATA_SHOWCASES,
  DESIGN: MOCK_DESIGN_SHOWCASES
}
