import sampleSize from 'lodash/sampleSize'
import { MOCK_TECH_TAGS } from './Tag.mocks'

export const MOCK_COMMON_RESOURCE = {
  // Sections
  sections: {
    features: {
      overline: 'What We Do',
      title: 'In this guide, we cover:',
      subtitle:
        'Dive into a comprehensive guide that takes you from introduction to custom software, its construction basics, initiation processes, solution definition, through to implementation methodologies, all the way to efficient review and management strategies for your custom software development journey.',
      items: [
        {
          fa_icon: 'fa-laptop-code',
          title: 'Why Build Custom Software',
          subtitle:
            'An introduction to the realm of custom software solutions, and how it provides a competitive edge, aligns with unique business needs, and fosters innovation.',
        },
        {
          fa_icon: 'fa-rocket',
          title: 'Getting Started with Your Custom Software',
          subtitle:
            'Learn about the crucial initial steps to embarking on a custom software development project, including setting goals, defining requirements, and aligning stakeholders.',
        },
        {
          fa_icon: 'fa-hammer',
          title: 'Crafting Your Solutions',
          subtitle:
            'Dive into the intricate process of designing and planning custom software, and how our team tailors these to perfectly fit your business needs and objectives.',
        },
        {
          fa_icon: 'fa-cogs',
          title: 'Implementation Process',
          subtitle:
            'Uncover the step-by-step process of bringing your custom software to life, from coding and testing to deploying, ensuring seamless integration into your business operations.',
        },
        {
          fa_icon: 'fa-search-plus',
          title: 'Review and Managing',
          subtitle:
            'Master the art of continual improvement with ongoing software reviews, updates, and management, ensuring your custom software remains a powerful tool for your business success.',
        },
        {
          fa_icon: 'fa-lightbulb',
          title: 'Our Distinct Approach to Software',
          subtitle:
            "Discover One X Group's unique path to crafting impactful custom software solutions.",
        },
      ],
    },
    benefits: {
      overline: 'Why Us',
      title: 'What you will learn',
      subtitle:
        'Embrace the potential of bespoke software to streamline operations, drive innovation, enhance value delivery, and ensure a sustainable tech evolution tailored to your unique business environment.',
      items: [
        {
          fa_icon: 'fa-chart-line',
          title: 'Streamlined Business Operations',
          subtitle:
            'Discover how custom software can optimize your business processes for better efficiency.',
        },
        {
          fa_icon: 'fa-puzzle-piece',
          title: 'Customized Technological Assets',
          subtitle:
            'Explore the potential of technology designed uniquely for your business, driving innovation and growth.',
        },
        {
          fa_icon: 'fa-sitemap',
          title: 'Effective Deployment Strategy',
          subtitle:
            'Acquire knowledge on strategic execution, enhancing the value delivered by your tailored software.',
        },
        {
          fa_icon: 'fa-sync-alt',
          title: 'Sustainable Tech Evolution',
          subtitle:
            'Understand how to ensure your technological assets remain future-proof, keeping pace with the dynamic business environment.',
        },
      ],
    },
  },
  // Images
  avatar_src: '/resources/resource_book.png',
  avatar_alt: 'Resource_book',
  hero_src: '/resources/resource_book.png',
  hero_alt: 'Resource Book',
  // Author
  author_avatar_src: '/images/author_joel_koh.png',
  author_avatar_alt: 'about_shape_circle_radial',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
  // Tags
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  // Html
  html:
    '<h4>Innovation that drives real impact.</h4>\n' +
    '\n' +
    '<p>In the past decade, digital transformation and innovation completely changed the way the world does business. In the decade ahead, technological, social and environmental forces will make strategic innovation essential for the survival of any business operating at scale. For many organisations, however, innovation can feel like fumbling in the dark, leading to new products and posts that don&rsquo;t contribute to the health and longevity of the business. In an increasingly complex world, strategy and creativity are the keys to successful, impactful innovation.</p>\n' +
    '\n' +
    '<p>Strategic innovation requires organisations to have a deep understanding of the fundamental value propositions, offerings and objectives of their core business. From that foundation, they must identify the most valuable and viable paths for innovation based on their market position and internal capabilities. By aligning internal systems and stakeholders behind an innovation strategy crafted to achieve specific business impacts, organisations can empower growth and innovation from the inside out.</p>\n',
}

const mapResourceWithCommonResource = (resource, i) => ({
  ...MOCK_COMMON_RESOURCE,
  id: i + 1,
  seo: { title: resource.title, description: resource.subtitle },
  ...resource,
})

export const MOCK_TECH_RESOURCES = [
  {
    title:
      'Powering Up Your Frontend Development: Discover the Latest Trends and Techniques',
    slug: 'powering-up-your-frontend-development-discover-the-latest-trends-and-techniques',
    filename:
      'powering-up-your-frontend-development-discover-the-latest-trends-and-techniques.pdf',
    subtitle:
      'Learn how frontend development can turn your company strategy into a success. This guide breaks down frontend development frameworks and gives you access to templates, examples, and more.',
  },
].map(mapResourceWithCommonResource)
export const MOCK_GROUP_RESOURCES = [
  {
    title:
      'Empower Your Business with Our Comprehensive Guide on Custom Software Solutions',
    slug: 'empower-business-guide-custom-software-solutions',
    filename: 'empower-business-guide-custom-software-solutions.pdf',
    subtitle:
      'Adopt best practices for utilizing custom software to achieve your strategic objectives. This guide seeks to help you navigate your way to success with proven software solutions built for your business needs.',
  },
].map(mapResourceWithCommonResource)
export const MOCK_DATA_RESOURCES = []
export const MOCK_DESIGN_RESOURCES = []
export const MOCK_DIGITAL_RESOURCES = []
export const MOCK_FINX_RESOURCES = [
  {
    title: 'The Top Applications of Generative AI in Finance',
    slug: 'the-top-applications-of-generative-ai-in-finance',
    filename: 'Fin X - The Top Applications of Generative AI in Finance.pdf',
    subtitle:
      'A comprehensive guide for financial firms to leverage generative AI for enhanced decision making, improved efficiency, and transformational workflows.',
    avatar_src:
      '/resources/the_top_applications_of_generative_ai_in_finance_avatar.png',
    avatar_alt: 'The Top Applications of Generative AI in Finance Report',
    hero_src:
      '/resources/the_top_applications_of_generative_ai_in_finance_avatar.png',
    hero_alt: 'The Top Applications of Generative AI in Finance Report',
    sections: {
      features: {
        overline: 'What We Cover',
        title: 'In this guide, we explore:',
        subtitle:
          'Dive into an exhaustive guide that takes you from the basics of Generative AI, its financial applications, strategic implementations, through to review and management strategies for your Generative AI integration journey.',
        items: [
          {
            fa_icon: 'fa-brain',
            title: 'The Power of Generative AI',
            subtitle:
              'An introduction to the realm of generative AI, and how it provides a competitive edge, aligns with financial modeling, and fosters innovation.',
          },
          {
            fa_icon: 'fa-money-check-alt',
            title: 'Generative AI in Finance',
            subtitle:
              'Explore the critical financial applications of generative AI, including risk assessment, fraud detection, and portfolio optimization.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Strategic Implementations',
            subtitle:
              "Dive into the process of strategizing and implementing generative AI tools, tailored to fit your financial firm's needs and objectives.",
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Quantifying the Impact',
            subtitle:
              'Learn about the metrics and indicators to assess the effectiveness of Generative AI on your financial operations.',
          },
          {
            fa_icon: 'fa-tools',
            title: 'Review and Management',
            subtitle:
              'Master the art of continual improvement with ongoing AI model reviews, updates, and management, ensuring your generative AI remains a powerful tool for your business success.',
          },
          {
            fa_icon: 'fa-comments-dollar',
            title: 'Transforming Customer Experience',
            subtitle:
              'Discover how Generative AI can revolutionize customer experience in finance, from personalized advisory services to striking a balance between customization and data privacy.',
          },
        ],
      },
      benefits: {
        overline: 'Why This Guide',
        title: 'What you will learn',
        subtitle:
          'Embrace the potential of Generative AI to streamline operations, drive innovation, enhance decision-making, and ensure a sustainable tech evolution tailored to your financial environment.',
        items: [
          {
            fa_icon: 'fa-chart-line',
            title: 'Improved Financial Decisions',
            subtitle:
              'Discover how Generative AI can optimize your financial decisions for better performance.',
          },
          {
            fa_icon: 'fa-robot',
            title: 'Innovative AI Tools',
            subtitle:
              'Explore the potential of AI tools designed uniquely for your financial needs, driving innovation and growth.',
          },
          {
            fa_icon: 'fa-sitemap',
            title: 'Effective Deployment Strategy',
            subtitle:
              'Acquire knowledge on strategic execution, enhancing the value delivered by your AI tools.',
          },
          {
            fa_icon: 'fa-sync-alt',
            title: 'Sustainable Tech Evolution',
            subtitle:
              'Understand how to ensure your technological assets remain future-proof, keeping pace with the dynamic financial environment.',
          },
        ],
      },
    },
  },
].map(mapResourceWithCommonResource)
export const MOCK_GOVX_RESOURCES = []

export const MOCK_AEL_RESOURCES = []
export const MOCK_SRI_RESOURCES = []
export const MOCK_GVS_RESOURCES = []
export const MOCK_COASTAL_RESOURCES = []

export const MOCK_RESOURCES = {
  GROUP: MOCK_GROUP_RESOURCES,
  TECH: MOCK_TECH_RESOURCES,
  DATA: MOCK_DATA_RESOURCES,
  DESIGN: MOCK_DESIGN_RESOURCES,
  DIGITAL: MOCK_DIGITAL_RESOURCES,
  FINX: MOCK_FINX_RESOURCES,
  GOVX: MOCK_GOVX_RESOURCES,
  AEL: MOCK_AEL_RESOURCES,
  SRI: MOCK_SRI_RESOURCES,
  GVS: MOCK_GVS_RESOURCES,
  COASTAL: MOCK_COASTAL_RESOURCES,
}
