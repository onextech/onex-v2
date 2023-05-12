import sampleSize from 'lodash/sampleSize'
import {
  MOCK_GROUP_POST_CATEGORYS,
  MOCK_TECH_POST_CATEGORYS,
} from './PostCategory.mocks'
import { MOCK_GROUP_TAGS, MOCK_TECH_TAGS } from './Tag.mocks'
import getCategoryFromCrudItem from '../utils/getCategoryFromCrudItem'

export const MOCK_TECH_POSTS = [
  {
    title:
      'All You Need to Know About Chirashi Don Making and How to Make the Best Chirashi Don',
    slug: 'all-you-need-to-know-about-chirashi-don-making-and-how-to-make-the-best-chirashi-don',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
    exclusive_locales: ['jp'],
  },
  {
    category_id: 2,
    title: 'Advanced React Development Techniques to Enhance Your Web Apps.',
    slug: 'advanced-react-development-techniques-to-enhance-your-web-apps',
    subtitle:
      "Unleash React's potential with advanced techniques for faster, user-friendly, and scalable web apps.",
    hero_src: 'https://source.unsplash.com/tzFVsg6nWtM/1600x900',
    hero_alt: 'city',
    html:
      '<blockquote>\n' +
      "<p><em><strong>Summary:</strong> React is a well-known front-end framework for building web applications. Developers must learn advanced development strategies to improve the speed, usability, and functionality of their web applications in order to fully realize React's potential. This article looks at a few cutting-edge React development initiatives that can help to strengthen online applications and improve user experience. React Hooks, Context API, React Router, Redux, React Native, Server-Side Rendering, Code Splitting, React Animations, React Performance Optimization, and Accessibility are some of the features available. Developers can use these techniques to create strong, scalable, and resilient applications that meet the needs of users and businesses. Integrating these techniques with cloud infrastructure and best practices can improve the applications even further.</em></p>\n" +
      '</blockquote>\n' +
      "<p>One of the most popular&nbsp;and extensively used front-end frameworks for creating web applications is React. It is the best option for creating cutting-edge, dynamic web applications that can be deployed to the cloud because to its flexibility, scalability, and component-based architecture. To maximise React's potential, developers must learn cutting-edge development strategies&nbsp;that will enhance the speed, usability, and functionality of their web applications.</p>\n" +
      "<p>In this article, we'll explore a few cutting-edge React development initiatives that can reinforce your online applications and enhance the user experience you provide.</p>\n" +
      '<h3>1. <strong>React Hooks:</strong></h3>\n' +
      '<p>React Hooks is a powerful new feature that enables developers to access and utilise state and other React features in functional components. By removing the requirement for class components, hooks can streamline and increase the readability of code while also enhancing performance.</p>\n' +
      '<h3>2. <strong>Context API:</strong></h3>\n' +
      '<p>The Context API is an effective tool for controlling state and properties across several components. Without the requirement for prop drilling, it enables developers to establish a global state that can be accessed and modified from any component.</p>\n' +
      '<h3>3. <strong>React Router:</strong></h3>\n' +
      '<p>React Router is a popular library for routing and navigation in React applications. It may be used to build intricate navigational structures and nested routes and offers a straightforward, declarative API for managing routes.</p>\n' +
      '<h3>4. <strong>Redux:</strong></h3>\n' +
      '<p>Redux is a popular state management library for React applications. Data flow and application design can be greatly simplified, and it enables developers to consolidate and regulate the state of their program in a consistent and predictable way.</p>\n' +
      '<h3>5. <strong>React Native:</strong></h3>\n' +
      '<p>React Native is is a framework for building native mobile apps using React. It provides a means for developers to centralise and control the state of their program in a reliable and predictable manner. Data flows and application design are made simpler.</p>\n' +
      '<h3>6. <strong>Server-Side Rendering:</strong></h3>\n' +
      '<p>Server-Side Rendering is a technique that allows React components to be rendered on the server instead of through the browser&nbsp;enhancing&nbsp;functionality and SEO. As such, users with&nbsp;sluggish or unreliable connections are also provided with better user experience.</p>\n' +
      '<h3>7. <strong>Code Splitting:</strong></h3>\n' +
      '<p>Code splitting is a method for breaking down big codebases into smaller, more manageable portions. It can enhance performance by reducing the amount of code that the browser must load, and it can also make complex applications easier to manage and debug.</p>\n' +
      '<h3>8. <strong>React Animations:</strong></h3>\n' +
      '<p>React Animations is a potent tool for designing dynamic and captivating user interfaces. It can be used to generate a wide range of effects, from straightforward hover animations to intricate 3D animations, and it enables developers to construct complicated animations and transitions using simple, declarative syntax.</p>\n' +
      '<h3>9. <strong>React Performance Optimisation:</strong></h3>\n' +
      '<p>React Performance Optimisation is a set of techniques used to make React applications run faster. This may include optimising rendering, reducing the application bundle, and minimising the quantity of network queries needed to load the application.</p>\n' +
      '<h3>10. <strong>Accessibility</strong></h3>\n' +
      '<p>Accessibility is an important determinant for any modern web application. It ensures that users with physical or mental limitations can access and use your application successfully. React provides a variety of tools and techniques for improving reach to a larger group of audience, including ARIA attributes, keyboard navigation, and semantic HTML.</p>\n' +
      "<p>In conclusion, by enhancing performance, usability, and functionality, advanced React development techniques can elevate your web applications to a new level. Learning these techniques can help you provide a more interesting and satisfying user experience whether you're using React for web or mobile development. You can build strong, scalable, and resilient applications that satisfy the requirements of your users and your business by integrating these techniques with cloud infrastructure and best practices.</p>",
  },
  {
    title:
      'Powering Up Your Frontend Development: Discover the Latest Trends and Techniques',
    slug: 'powering-up-your-frontend-development-discover-the-latest-trends-and-techniques',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title:
      'Designing for Impact: How Frontend Development Can Boost Conversions and Revenue',
    slug: 'designing-for-impact: how-frontend-development-can-boost-conversions-and-revenue',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title:
      'Product Management in the Age of AI: Strategies for Incorporating Machine Learning into Your Roadmap',
    slug: 'product-management-in-the-age-of-ai-strategies-for-incorporating-machine-learning-into-your-roadmap',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
  },
  {
    title:
      'Accessibility in the Spotlight: Best Practices for Building Inclusive Products and Experiences',
    slug: 'accessibility-in-the-spotlight-best-practices-for-building-inclusive-products-and-experiences',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 2,
  },
  {
    title:
      'The Future of Frontend Development: Trends, Challenges, and Opportunities for Enterprise Product Managers in 2023',
    slug: 'the-future-of-frontend-development-trends-challenges-and-opportunities-for-enterprise-product-managers-in-2023',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 2,
  },
  {
    title:
      'Building Scalable Frontends: Best Practices for Managing Complex Enterprise Products',
    slug: 'building-scalable-frontends-best-practices-for-managing-complex-enterprise-products',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 2,
  },
  {
    title:
      'Digital Transformation in Government: Modernising Public Services for the 21st Century',
    slug: 'digital-transformation-in-government-modernising-public-services-for-the-21-st-century',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 3,
  },
  {
    title:
      'The New Era of Real Estate: How Technology Is Reshaping Buying, Selling, and Property Management',
    slug: 'the-new-era-of-real-estate-how-technology-is-reshaping-buying, selling, and-property-management',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 3,
  },
  {
    title:
      'The Future of Finance: Embracing Automation and Analytics for Better Customer Experience',
    slug: 'the-future-of-finance-embracing-automation-and-analytics-for-better-customer-experience',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 3,
  },
  {
    title:
      'Maritime Logistics in the Digital Age: Unlocking New Opportunities with Technology',
    slug: 'maritime-logistics-in-the-digital-age-unlocking-new-opportunities-with-technology',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title:
      'Government Data Analytics: Turning Insights into Actionable Solutions for the Public Good',
    slug: 'government-data-analytics-turning-insights-into-actionable-solutions-for-the-public-good',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title:
      'Innovation in Maritime: Emerging Trends and Technologies for Efficiency and Profitability',
    slug: 'innovation-in-maritime-emerging-trends-and-technologies-for-efficiency-and-profitability',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 4,
  },
  {
    title:
      'Real Estate Investment in the Digital Age: How to Capitalize on the Latest Trends and Technologies',
    slug: 'real-estate-investment-in-the-digital-age-how-to-capitalize-on-the-latest-trends-and-technologies',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title:
      'The Future of Work in the Digital Age: Navigating the Challenges of a Remote Workforce',
    slug: 'the-future-of-work-in-the-digital-age-navigating-the-challenges-of-a-remote-workforce',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title:
      'The Impact of Fintech on Traditional Banking: Preparing the Workforce for Digital Disruption',
    slug: 'the-impact-of-fintech-on-traditional-banking-preparing-the-workforce-for-digital-disruption',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 5,
  },
  {
    title:
      'The Role of DevOps in Enterprise Software Development: Best Practices and Emerging Trends',
    slug: 'the-role-of-dev-ops-in-enterprise-software-development-best-practices-and-emerging-trends',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
  {
    title:
      'How to Build High-Performance Teams for Enterprise Product Management',
    slug: 'how-to-build-high-performance-teams-for-enterprise-product-management',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
  {
    title:
      'Cybersecurity in the Digital Age: Protecting Your Enterprise Products and Customers from Emerging Threats',
    slug: 'cybersecurity-in-the-digital-age-protecting-your-enterprise-products-and-customers-from-emerging-threats',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 6,
  },
].map((item, i) => ({
  id: i + 1,
  // Category
  category: getCategoryFromCrudItem(item, MOCK_TECH_POST_CATEGORYS),

  // Images
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: 'about_shape_circle_radial',
  hero_src: '/images/about_working_in_office.png',
  hero_alt: 'working in office',
  // Author
  author_avatar_src: '/images/about_shape_circle_radial.svg',
  author_avatar_alt: 'about_shape_circle_radial',
  author_title: 'Jared Palmer',
  author_job_title: 'CEO',
  // Tags
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  // Html
  html:
    '<h4>Innovation that drives real impact.</h4>\n' +
    '\n' +
    '<p>In the past decade, digital transformation and innovation completely changed the way the world does business. In the decade ahead, technological, social and environmental forces will make strategic innovation essential for the survival of any business operating at scale. For many organizations, however, innovation can feel like fumbling in the dark, leading to new products and posts that don&rsquo;t contribute to the health and longevity of the business. In an increasingly complex world, strategy and creativity are the keys to successful, impactful innovation.</p>\n' +
    '\n' +
    '<p>Strategic innovation requires organizations to have a deep understanding of the fundamental value propositions, offerings and objectives of their core business. From that foundation, they must identify the most valuable and viable paths for innovation based on their market position and internal capabilities. By aligning internal systems and stakeholders behind an innovation strategy crafted to achieve specific business impacts, organizations can empower growth and innovation from the inside out.</p>\n',
  ...item,
}))

export const MOCK_GROUP_POSTS = MOCK_TECH_POSTS.map((item, i) => ({
  ...item,
  // Category
  category: getCategoryFromCrudItem(item, MOCK_GROUP_POST_CATEGORYS),
  // Tags
  tags: sampleSize(MOCK_GROUP_TAGS, 3),
}))

export const MOCK_POSTS = {
  GROUP: MOCK_GROUP_POSTS,
  TECH: MOCK_TECH_POSTS,
}
