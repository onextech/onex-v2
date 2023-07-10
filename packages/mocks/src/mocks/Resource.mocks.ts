import sampleSize from 'lodash/sampleSize'
import { MOCK_GROUP_TAGS, MOCK_TECH_TAGS } from './Tag.mocks'

export const MOCK_TECH_RESOURCES = [
  {
    title:
      'Empower Your Business with Our Comprehensive Guide on Custom Software Solutions',
    slug: 'empower-business-guide-custom-software-solutions',
    subtitle:
      'Adopt best practices for utilizing custom software to achieve your strategic objectives. This guide seeks to help you navigate your way to success with proven software solutions built for your business needs.',
  },
  {
    title:
      'Powering Up Your Frontend Development: Discover the Latest Trends and Techniques',
    slug: 'powering-up-your-frontend-development-discover-the-latest-trends-and-techniques',
    subtitle:
      'Learn how frontend development can turn your company strategy into a success. This guide breaks down frontend development frameworks and gives you access to templates, examples, and more.',
  },
].map((item, i) => ({
  id: i + 1,
  // Seo
  seo: {
    title: item.title,
    description: item.subtitle,
  },
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
  avatar_src: '/images/resource_book.png',
  avatar_alt: 'resource_book',
  hero_src: '/images/resource_book.png',
  hero_alt: 'OKR Resource Book',
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
  ...item,
}))

export const MOCK_GROUP_RESOURCES = MOCK_TECH_RESOURCES.map((item, i) => ({
  ...item,
  // Tags
  cta: {
    hero_src: '/images/about_nodes_above_city.png',
    hero_alt: 'Laser net over city',
    overline: 'Get Started',
    title: 'Partnering with {appTitle}',
    subtitle:
      '{appTitle} partners with enterprise clients to tackle the most challenging software hurdles. With a keen focus on bespoke enterprise software development, we leverage leading technologies and methodologies tailored to your business requirements. Our approach is meticulously customized for each project, promising seamless collaboration with your team to choose the most suitable technologies. We shine in enterprise software development and consulting, and we are equipped to apply our knowledge and skills to your project, no matter its current stage in the product lifecycle.',
  },
  tags: sampleSize(MOCK_GROUP_TAGS, 3),
}))

export const MOCK_DATA_RESOURCES = MOCK_GROUP_RESOURCES

export const MOCK_DESIGN_RESOURCES = MOCK_GROUP_RESOURCES

export const MOCK_DIGITAL_RESOURCES = MOCK_GROUP_RESOURCES

export const MOCK_FINX_RESOURCES = MOCK_GROUP_RESOURCES

export const MOCK_GOVX_RESOURCES = MOCK_GROUP_RESOURCES

export const MOCK_RESOURCES = {
  GROUP: MOCK_GROUP_RESOURCES,
  TECH: MOCK_TECH_RESOURCES,
  DATA: MOCK_DATA_RESOURCES,
  DESIGN: MOCK_DESIGN_RESOURCES,
  DIGITAL: MOCK_DIGITAL_RESOURCES,
  FINX: MOCK_FINX_RESOURCES,
  GOVX: MOCK_GOVX_RESOURCES,
}
