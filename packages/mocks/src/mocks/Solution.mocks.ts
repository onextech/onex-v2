import { routeConfig } from '@onex/common'
import type { Solution } from '@onex/types'

export const MOCK_GROUP_SOLUTIONS: Solution[] = [
  {
    id: 'ai-chatbot',
    // Hero
    title: 'AI Chatbot',
    slug: 'ai-chatbot',
    is_featured: true,
    is_active: true,
    subtitle:
      'Transform customer engagement with intelligent 24/7 AI-powered assistance and multi-language support',
    hero_src: '/unsplash/e0a36587cd3c.jpg',
    hero_alt: 'Abstract gradient background',
    // Seo
    seo: {
      title: 'AI Chatbot - AI-Powered Chatbot Solution',
      description:
        'Transform your customer service with our AI Chatbot. Handle inquiries, qualify leads, and provide 24/7 support in multiple languages.',
    },
    // Sections
    sections: {
      // Solution-specific sections (displayed below hero)
      solutionBenefits: {
        overline: 'Benefits',
        title: 'Your Customer Service, Transformed',
        subtitle:
          'Every conversation. Handled beautifully.',
        items: [
          {
            fa_icon: 'fa-bolt',
            title: 'Instant. Always.',
            subtitle:
              'Your customers get answers in seconds, not hours. Because waiting is so last decade.',
          },
          {
            fa_icon: 'fa-infinity',
            title: 'Never Sleeps',
            subtitle:
              '3am inquiry? Handled. Holiday weekend? Covered. Your business is always on.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Speaks Their Language',
            subtitle:
              '50+ languages. Zero awkward translations. Every customer feels at home.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'Learns. Adapts. Improves.',
            subtitle:
              'Gets smarter with every conversation. Like your best employee, but tireless.',
          },
          {
            fa_icon: 'fa-handshake',
            title: 'Knows When to Hand Off',
            subtitle:
              'Complex questions go to your team. Simple ones never do. Everyone wins.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Turns Visitors Into Customers',
            subtitle:
              'Engages at the perfect moment. Qualifies leads while you focus on closing.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Enterprise-Grade Security',
            subtitle:
              'Your data stays yours. Bank-level encryption. Complete peace of mind.',
          },
          {
            fa_icon: 'fa-plug',
            title: 'Works With Everything',
            subtitle:
              'CRM. Calendar. WhatsApp. Your existing tools, now supercharged.',
          },
        ],
      },
      solutionFeatures: {
        overline: 'Features',
        title: 'AI Chatbot Capabilities',
        subtitle:
          'Our AI-powered solution offers comprehensive features to enhance your customer service operations.',
        items: [
          {
            fa_icon: 'fa-comments',
            title: 'Property Inquiries',
            subtitle:
              'Instantly answer questions about property details, availability, pricing, and amenities with accurate, up-to-date information.',
          },
          {
            fa_icon: 'fa-user-check',
            title: 'Lead Qualification',
            subtitle:
              'Automatically qualify leads by gathering essential information and routing high-potential prospects to your sales team.',
          },
          {
            fa_icon: 'fa-calendar-alt',
            title: 'Viewing Requests',
            subtitle:
              'Enable customers to schedule property viewings seamlessly, with automatic calendar integration and confirmation.',
          },
          {
            fa_icon: 'fa-question-circle',
            title: 'Service Questions',
            subtitle:
              'Handle common service inquiries about processes, documentation, and requirements without human intervention.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Multi-language Support',
            subtitle:
              'Communicate with customers in their preferred language, breaking down barriers and expanding your market reach.',
          },
          {
            fa_icon: 'fa-clock',
            title: '24/7 Availability',
            subtitle:
              'Provide round-the-clock support to customers across all time zones, ensuring no inquiry goes unanswered.',
          },
          {
            fa_icon: 'fa-robot',
            title: 'Natural Conversations',
            subtitle:
              'Advanced NLP understands context and intent, delivering human-like responses that feel genuine.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Analytics Dashboard',
            subtitle:
              'Track conversation metrics, customer satisfaction, and conversion rates in real-time.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Custom Workflows',
            subtitle:
              'Build tailored conversation flows that match your business processes and brand voice.',
          },
          {
            fa_icon: 'fa-file-alt',
            title: 'Document Processing',
            subtitle:
              'Extract and process information from uploaded documents, forms, and images automatically.',
          },
          {
            fa_icon: 'fa-headset',
            title: 'Omnichannel Support',
            subtitle:
              'Deliver consistent experiences across web, mobile, social media, and messaging apps from one platform.',
          },
          {
            fa_icon: 'fa-clipboard-list',
            title: 'Conversation History',
            subtitle:
              'Access complete interaction history for context-aware responses and seamless handoffs to human agents.',
          },
        ],
      },
      solutionFaqs: {
        title: 'AI Chatbot FAQs',
        subtitle:
          'Common questions about implementing our AI Chatbot for your business.',
        items: [
          {
            title: 'How quickly can the AI Chatbot be deployed?',
            content:
              'Most implementations are completed within 2-4 weeks, including customization, training, and integration with your existing systems.',
          },
          {
            title: 'Can the chatbot handle complex inquiries?',
            content:
              'Our AI Chatbot uses advanced AI to handle complex, multi-turn conversations. For highly specialized queries, it seamlessly escalates to human agents.',
          },
          {
            title: 'How does the multi-language support work?',
            content:
              "The system automatically detects the customer's language and responds accordingly. We support over 50 languages with high accuracy.",
          },
          {
            title: 'What integrations are available?',
            content:
              'Our AI Chatbot integrates with popular CRMs, property management systems, calendar tools, and messaging platforms including WhatsApp, Facebook Messenger, and website chat.',
          },
          {
            title: 'How is the AI trained for my business?',
            content:
              'We work with your team to understand your specific offerings, processes, and FAQs. The AI is then trained on your content to provide accurate, brand-consistent responses.',
          },
          {
            title: 'What happens when the chatbot cannot answer a question?',
            content:
              'The AI gracefully escalates to a human agent when it encounters questions outside its knowledge base. Your team receives full context of the conversation for seamless handoff.',
          },
          {
            title: 'Can I customize the chatbot appearance and personality?',
            content:
              'Yes, the chatbot can be fully branded to match your website design, and its tone and personality can be customized to align with your brand voice.',
          },
          {
            title: 'What analytics and reporting are available?',
            content:
              'Our dashboard provides real-time insights including conversation volume, resolution rates, customer satisfaction scores, popular topics, and conversion metrics.',
          },
        ],
      },
      // Generic service page sections
      features: {
        overline: 'What we do',
        title: 'Let Your Customers Take the Reign',
        subtitle:
          'To deliver products of the highest quality, we follow the best practices that include code review, pair programming, test-driven development, continuous integration, and automated testing.',
        items: [
          {
            fa_icon: 'fa-watch',
            title: 'Scale up development',
            subtitle:
              'Our team works directly with you to boost your development speed and scale.',
          },
          {
            fa_icon: 'fa-hand-holding-seedling',
            title: 'Improve a current system',
            subtitle:
              "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
          },
          {
            fa_icon: 'fa-mug-hot',
            title: 'Accelerate Innovation',
            subtitle:
              'We create human-centred designs focused on driving conversions and achieving business goals.',
          },
          {
            fa_icon: 'fa-puzzle-piece',
            title: 'Launch Your MVP',
            subtitle:
              'Launch your MVP at start-up speed with an expert team of designers and developers.',
          },
          {
            fa_icon: 'fa-guitar',
            title: 'Dedicated Support',
            subtitle:
              'Our team works directly with you to boost your development speed and scale.',
          },
          {
            fa_icon: 'fa-table-tennis',
            title: 'Continuous Delivery',
            subtitle:
              "Identify areas for automation and improve efficiency so you can spend more time on what's important.",
          },
        ],
      },
      stats: {
        title: 'We are a Software Development Company',
        buttons: [
          {
            title: 'Get Free Consultation',
            href: routeConfig.CONTACT,
            overline: 'Start Today',
          },
        ],
        hero_alt: 'contact_world_map_in_dots',
        hero_src: '/images/contact_world_map_in_dots.svg',
        items: [
          {
            title: '100+',
            overline: 'Projects Delivered',
          },
          {
            title: '40%',
            overline: 'Avg. Cost Savings',
          },
          {
            title: '2x',
            overline: 'Faster Time-to-Market',
          },
        ],
        overline: 'Proven Results',
        subtitle:
          'Our clients achieve measurable business outcomes. From GIC to UOB, we have delivered enterprise-grade solutions that drive operational efficiency and competitive advantage.',
      },
      usps: {
        title: 'What Sets One X Group Apart?',
        items: [
          {
            title: '100+ Projects Delivered',
            fa_icon: 'fa-trophy',
            subtitle:
              'Enterprise-grade solutions for GIC, UOB, Maritime Port Authority, and leading Singapore businesses.',
          },
          {
            title: 'Up to 50% Government Grants',
            fa_icon: 'fa-hand-holding-usd',
            subtitle:
              'EDG & PSG eligible projects. We help you navigate the application process to maximize funding support.',
          },
          {
            title: 'Agile Delivery with Bi-weekly Demos',
            fa_icon: 'fa-sync-alt',
            subtitle:
              'Iterative development with regular check-ins ensures your software evolves with your feedback.',
          },
          {
            title: 'Enterprise-Grade Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Industry best practices and compliance standards to safeguard your data and operations.',
          },
        ],
        overline: 'Our Differentiators',
        subtitle:
          'Partner with a trusted custom software development company that delivers results.',
      },
      testimonial: {
        title: "Our Clients' Success Stories",
        subtitle:
          'Hear from businesses that have transformed their operations with our custom software solutions.',
      },
      insights: {
        title: "What's Trending in AI Chatbot",
        subtitle:
          'From AI automation to seamless integrations and scalable solutions, businesses are evolving. Discover innovations to optimize workflows and stay ahead.',
      },
      faqs: {
        title: 'FAQs',
        subtitle:
          'Common questions about working with One X Group and our approach to delivering solutions.',
        items: [
          {
            title: 'What industries does One X Group specialize in?',
            content:
              'We work across multiple sectors including financial services, government, real estate, healthcare, and enterprise technology. Our team has delivered solutions for leading enterprises and government agencies in Singapore.',
          },
          {
            title: 'How does your development process work?',
            content:
              'We follow an agile methodology with bi-weekly demos and continuous feedback loops. This iterative approach ensures your solution evolves with your requirements and you have full visibility into progress at every stage.',
          },
          {
            title: 'What is your typical project timeline?',
            content:
              'Timelines vary based on scope and complexity. An MVP typically takes 8-12 weeks, while enterprise solutions may span 3-6 months. We provide detailed estimates after understanding your specific requirements.',
          },
          {
            title: 'Do you offer ongoing support and maintenance?',
            content:
              'Yes, we provide comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. Our team ensures your solution remains robust and up-to-date.',
          },
          {
            title: 'Are there government grants available for my project?',
            content:
              'Singapore businesses may qualify for up to 50% funding through EDG and PSG grants. We help you navigate the application process and structure your project to maximize grant eligibility.',
          },
          {
            title: 'How do you ensure project quality and security?',
            content:
              'We implement enterprise-grade security practices, code reviews, automated testing, and continuous integration. Our solutions comply with industry standards and regulations including PDPA and GDPR where applicable.',
          },
        ],
      },
    },
  },
]

export const MOCK_DATA_SOLUTIONS: Solution[] = []
export const MOCK_DESIGN_SOLUTIONS: Solution[] = []
export const MOCK_DIGITAL_SOLUTIONS: Solution[] = []
export const MOCK_TECH_SOLUTIONS: Solution[] = []
export const MOCK_FINX_SOLUTIONS: Solution[] = []
export const MOCK_GOVX_SOLUTIONS: Solution[] = []
export const MOCK_AEL_SOLUTIONS: Solution[] = []
export const MOCK_SRI_SOLUTIONS: Solution[] = []
export const MOCK_GVS_SOLUTIONS: Solution[] = []
export const MOCK_COASTAL_SOLUTIONS: Solution[] = []

export const MOCK_SOLUTIONS: Record<string, Solution[]> = {
  GROUP: MOCK_GROUP_SOLUTIONS,
  DATA: MOCK_DATA_SOLUTIONS,
  DESIGN: MOCK_DESIGN_SOLUTIONS,
  DIGITAL: MOCK_DIGITAL_SOLUTIONS,
  TECH: MOCK_TECH_SOLUTIONS,
  FINX: MOCK_FINX_SOLUTIONS,
  GOVX: MOCK_GOVX_SOLUTIONS,
  AEL: MOCK_AEL_SOLUTIONS,
  SRI: MOCK_SRI_SOLUTIONS,
  GVS: MOCK_GVS_SOLUTIONS,
  COASTAL: MOCK_COASTAL_SOLUTIONS,
}
