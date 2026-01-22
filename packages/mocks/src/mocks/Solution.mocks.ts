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
  {
    id: 'marketplace',
    // Hero
    title: 'Marketplace',
    slug: 'marketplace',
    is_featured: true,
    is_active: true,
    subtitle:
      'Build powerful B2B marketplaces that connect buyers and suppliers with seamless transactions and intelligent matching',
    hero_src: '/unsplash/e0a36587cd3c.jpg',
    hero_alt: 'Abstract gradient background',
    // Seo
    seo: {
      title: 'B2B Marketplace - Custom Marketplace Platform Development',
      description:
        'Launch your B2B marketplace platform. Connect buyers and suppliers, manage multi-vendor operations, and scale your business with our custom marketplace solutions.',
    },
    // Sections
    sections: {
      // Solution-specific sections (displayed below hero)
      solutionBenefits: {
        overline: 'Benefits',
        title: 'Your Business Network, Amplified',
        subtitle: 'Every transaction. Seamlessly connected.',
        items: [
          {
            fa_icon: 'fa-network-wired',
            title: 'Connect. Instantly.',
            subtitle:
              'Buyers find suppliers in seconds. No cold calls. No gatekeepers. Just business.',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Revenue While You Sleep',
            subtitle:
              'Transactions happen 24/7. Commission flows automatically. Your platform never stops earning.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Thousands of Vendors. One Platform.',
            subtitle:
              'Scale from 10 to 10,000 sellers. The architecture grows with your ambition.',
          },
          {
            fa_icon: 'fa-search-dollar',
            title: 'Smart Matching',
            subtitle:
              'AI connects the right buyers with the right suppliers. Better matches. Faster deals.',
          },
          {
            fa_icon: 'fa-shield-alt',
            title: 'Trust Built In',
            subtitle:
              'Verified vendors. Secure payments. Dispute resolution. Confidence at every step.',
          },
          {
            fa_icon: 'fa-bolt',
            title: 'Launch in Weeks. Not Years.',
            subtitle:
              'Pre-built modules. Proven architecture. Your marketplace, live faster than you thought possible.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Your Rules. Your Platform.',
            subtitle:
              'Custom workflows. Flexible pricing models. White-label ready. Make it yours.',
          },
          {
            fa_icon: 'fa-globe',
            title: 'Go Global. Stay Local.',
            subtitle:
              'Multi-currency. Multi-language. Local payment methods. One platform for every market.',
          },
        ],
      },
      solutionFeatures: {
        overline: 'Features',
        title: 'Marketplace Platform Capabilities',
        subtitle:
          'Comprehensive features to power your B2B marketplace from launch to scale.',
        items: [
          {
            fa_icon: 'fa-store',
            title: 'Multi-Vendor Management',
            subtitle:
              'Onboard, verify, and manage thousands of vendors with automated approval workflows and performance tracking.',
          },
          {
            fa_icon: 'fa-search',
            title: 'Advanced Search & Discovery',
            subtitle:
              'Powerful search with filters, facets, and AI-powered recommendations to help buyers find exactly what they need.',
          },
          {
            fa_icon: 'fa-shopping-cart',
            title: 'Smart Cart & Checkout',
            subtitle:
              'Multi-vendor cart management with split payments, bulk ordering, and streamlined B2B checkout flows.',
          },
          {
            fa_icon: 'fa-file-invoice-dollar',
            title: 'Flexible Pricing Models',
            subtitle:
              'Support for RFQ, auctions, tiered pricing, volume discounts, and contract-based pricing.',
          },
          {
            fa_icon: 'fa-credit-card',
            title: 'Secure Payment Processing',
            subtitle:
              'Integrated payment gateways with escrow, milestone payments, and automated commission splits.',
          },
          {
            fa_icon: 'fa-clipboard-check',
            title: 'Order Management',
            subtitle:
              'End-to-end order tracking, fulfillment management, and automated status updates for all parties.',
          },
          {
            fa_icon: 'fa-comments',
            title: 'Buyer-Seller Messaging',
            subtitle:
              'Built-in communication tools with quote requests, negotiations, and document sharing.',
          },
          {
            fa_icon: 'fa-star',
            title: 'Reviews & Ratings',
            subtitle:
              'Build trust with verified reviews, seller ratings, and transaction-based feedback systems.',
          },
          {
            fa_icon: 'fa-chart-bar',
            title: 'Analytics Dashboard',
            subtitle:
              'Real-time insights on GMV, transactions, vendor performance, and buyer behavior.',
          },
          {
            fa_icon: 'fa-plug',
            title: 'API & Integrations',
            subtitle:
              'Connect with ERPs, CRMs, shipping providers, and accounting software via robust APIs.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Mobile-First Experience',
            subtitle:
              'Responsive design and native apps for buyers and sellers to transact on any device.',
          },
          {
            fa_icon: 'fa-user-shield',
            title: 'Admin Control Center',
            subtitle:
              'Comprehensive back-office tools for platform operators to manage users, content, and disputes.',
          },
        ],
      },
      solutionFaqs: {
        title: 'Marketplace Platform FAQs',
        subtitle:
          'Common questions about building and launching your B2B marketplace.',
        items: [
          {
            title: 'How long does it take to launch a marketplace?',
            content:
              'A basic marketplace MVP can be launched in 8-12 weeks. Full-featured platforms with custom integrations typically take 4-6 months depending on complexity.',
          },
          {
            title: 'What commission models can the platform support?',
            content:
              'Our platform supports percentage-based commissions, flat fees, subscription models, listing fees, and hybrid approaches. You can configure different rates by category or vendor tier.',
          },
          {
            title: 'How do you handle payments between buyers and sellers?',
            content:
              'We integrate with payment providers that support marketplace models including escrow, split payments, and automated payouts. Funds can be held until delivery confirmation.',
          },
          {
            title: 'Can the marketplace support international transactions?',
            content:
              'Yes, our platform supports multi-currency transactions, localized payment methods, and automatic tax calculations for cross-border commerce.',
          },
          {
            title: 'How do you ensure vendor quality on the platform?',
            content:
              'We implement verification workflows, document checks, and onboarding requirements. Ongoing quality is maintained through ratings, reviews, and performance metrics.',
          },
          {
            title: 'Can buyers request custom quotes from sellers?',
            content:
              'Yes, the RFQ (Request for Quote) module allows buyers to submit requirements and receive competitive quotes from multiple vendors.',
          },
          {
            title: 'What happens if there is a dispute between buyer and seller?',
            content:
              'The platform includes a dispute resolution center where both parties can submit evidence. Platform administrators can review and make binding decisions.',
          },
          {
            title: 'Can we white-label the marketplace with our branding?',
            content:
              'Absolutely. The platform is fully white-label ready with customizable themes, your domain, and complete brand control across all touchpoints.',
          },
        ],
      },
      // Generic service page sections
      features: {
        overline: 'What we do',
        title: 'Build Your Digital Commerce Ecosystem',
        subtitle:
          'We deliver marketplace platforms that connect businesses, streamline transactions, and create new revenue streams through proven development practices.',
        items: [
          {
            fa_icon: 'fa-rocket',
            title: 'Rapid MVP Launch',
            subtitle:
              'Get to market fast with our proven marketplace architecture and pre-built components.',
          },
          {
            fa_icon: 'fa-expand-arrows-alt',
            title: 'Scale Without Limits',
            subtitle:
              'Cloud-native infrastructure that grows with your transaction volume and vendor base.',
          },
          {
            fa_icon: 'fa-lock',
            title: 'Enterprise Security',
            subtitle:
              'Bank-grade security, PCI compliance, and data protection built into every layer.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'Seamless Integrations',
            subtitle:
              'Connect with your existing systems—ERP, CRM, logistics, and payment providers.',
          },
          {
            fa_icon: 'fa-headset',
            title: 'Dedicated Support',
            subtitle:
              'Our team provides ongoing technical support and strategic guidance for platform growth.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Custom Development',
            subtitle:
              'Unique features and workflows tailored to your specific marketplace model and industry.',
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
          'Our clients achieve measurable business outcomes through custom marketplace solutions that drive growth and operational efficiency.',
      },
      usps: {
        title: 'What Sets One X Group Apart?',
        items: [
          {
            title: '100+ Projects Delivered',
            fa_icon: 'fa-trophy',
            subtitle:
              'Enterprise-grade marketplace solutions for leading businesses across industries.',
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
              'Iterative development with regular check-ins ensures your marketplace evolves with your feedback.',
          },
          {
            title: 'Enterprise-Grade Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Industry best practices and compliance standards to safeguard your platform and transactions.',
          },
        ],
        overline: 'Our Differentiators',
        subtitle:
          'Partner with a trusted custom software development company that delivers results.',
      },
      testimonial: {
        title: "Our Clients' Success Stories",
        subtitle:
          'Hear from businesses that have transformed their operations with our marketplace solutions.',
      },
      insights: {
        title: "What's Trending in B2B Marketplaces",
        subtitle:
          'From AI-powered matching to blockchain transactions, discover innovations shaping the future of B2B commerce.',
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
  {
    id: 'crm',
    // Hero
    title: 'CRM',
    slug: 'crm',
    is_featured: true,
    is_active: true,
    subtitle:
      'Transform customer relationships into revenue with intelligent CRM that adapts to your sales process',
    hero_src: '/unsplash/e0a36587cd3c.jpg',
    hero_alt: 'Abstract gradient background',
    // Seo
    seo: {
      title: 'CRM - Custom CRM Development',
      description:
        'Build a CRM that fits your business. Manage leads, automate sales workflows, and gain insights into customer relationships with our custom CRM solutions.',
    },
    // Sections
    sections: {
      // Solution-specific sections (displayed below hero)
      solutionBenefits: {
        overline: 'Benefits',
        title: 'Your Sales Pipeline, Supercharged',
        subtitle: 'Every deal. Every relationship. Under control.',
        items: [
          {
            fa_icon: 'fa-eye',
            title: 'See Everything. Miss Nothing.',
            subtitle:
              'Every interaction, every touchpoint, every opportunity—all in one place. No more scattered spreadsheets.',
          },
          {
            fa_icon: 'fa-robot',
            title: 'Automation That Actually Works',
            subtitle:
              'Follow-ups happen automatically. Data entry disappears. Your team sells instead of types.',
          },
          {
            fa_icon: 'fa-bullseye',
            title: 'Close Deals Faster',
            subtitle:
              'Know exactly where every deal stands. AI tells you which leads to call first.',
          },
          {
            fa_icon: 'fa-users',
            title: 'Your Team. Aligned.',
            subtitle:
              'Sales, marketing, support—everyone sees the same customer story. No more "who talked to them last?"',
          },
          {
            fa_icon: 'fa-chart-line',
            title: 'Forecasts You Can Trust',
            subtitle:
              'AI-powered predictions based on real data. Know your quarter before it ends.',
          },
          {
            fa_icon: 'fa-mobile-alt',
            title: 'Sell From Anywhere',
            subtitle:
              'Full CRM power on your phone. Update deals from the parking lot. Close from the coffee shop.',
          },
          {
            fa_icon: 'fa-puzzle-piece',
            title: 'Fits Your Process',
            subtitle:
              'Not the other way around. Custom fields, custom stages, custom workflows. Your rules.',
          },
          {
            fa_icon: 'fa-lock',
            title: 'Your Data. Protected.',
            subtitle:
              'Enterprise security. Role-based access. Audit trails. Sleep well at night.',
          },
        ],
      },
      solutionFeatures: {
        overline: 'Features',
        title: 'CRM Platform Capabilities',
        subtitle:
          'Comprehensive features to manage your entire customer lifecycle from lead to loyal customer.',
        items: [
          {
            fa_icon: 'fa-funnel-dollar',
            title: 'Visual Sales Pipeline',
            subtitle:
              'Drag-and-drop deals through custom stages. See your entire pipeline at a glance with real-time updates.',
          },
          {
            fa_icon: 'fa-user-plus',
            title: 'Lead Management',
            subtitle:
              'Capture leads from any source, score them automatically, and route to the right rep instantly.',
          },
          {
            fa_icon: 'fa-address-book',
            title: 'Contact Management',
            subtitle:
              'Complete customer profiles with interaction history, documents, and relationship mapping.',
          },
          {
            fa_icon: 'fa-tasks',
            title: 'Activity Tracking',
            subtitle:
              'Log calls, emails, and meetings automatically. Never forget a follow-up with smart reminders.',
          },
          {
            fa_icon: 'fa-envelope',
            title: 'Email Integration',
            subtitle:
              'Sync with Gmail and Outlook. Track opens and clicks. Send sequences that feel personal.',
          },
          {
            fa_icon: 'fa-cogs',
            title: 'Workflow Automation',
            subtitle:
              'Automate repetitive tasks, trigger actions based on deal changes, and keep your process consistent.',
          },
          {
            fa_icon: 'fa-file-contract',
            title: 'Quote & Proposal Builder',
            subtitle:
              'Generate professional quotes in seconds. Track when prospects view them. Close faster.',
          },
          {
            fa_icon: 'fa-chart-pie',
            title: 'Sales Analytics',
            subtitle:
              'Real-time dashboards showing win rates, pipeline value, rep performance, and revenue forecasts.',
          },
          {
            fa_icon: 'fa-bullhorn',
            title: 'Marketing Integration',
            subtitle:
              'Connect campaigns to deals. See which marketing drives revenue. Align sales and marketing.',
          },
          {
            fa_icon: 'fa-headset',
            title: 'Customer Support Sync',
            subtitle:
              'View support tickets in customer profiles. Sales knows when customers need help.',
          },
          {
            fa_icon: 'fa-plug',
            title: 'API & Integrations',
            subtitle:
              'Connect to your tech stack—accounting, marketing, support, and communication tools.',
          },
          {
            fa_icon: 'fa-brain',
            title: 'AI-Powered Insights',
            subtitle:
              'Get deal recommendations, risk alerts, and next-best-action suggestions powered by AI.',
          },
        ],
      },
      solutionFaqs: {
        title: 'CRM Platform FAQs',
        subtitle:
          'Common questions about implementing a custom CRM for your business.',
        items: [
          {
            title: 'How is a custom CRM different from Salesforce or HubSpot?',
            content:
              'Custom CRM is built around your exact sales process—no forcing your team into rigid workflows. You get only the features you need, full data ownership, and no per-user licensing fees that scale with your team.',
          },
          {
            title: 'Can we migrate data from our existing CRM?',
            content:
              'Yes, we handle full data migration from any existing CRM including Salesforce, HubSpot, Pipedrive, and spreadsheets. Your historical data, contacts, and deal history are preserved.',
          },
          {
            title: 'How long does CRM implementation take?',
            content:
              'A core CRM with pipeline, contacts, and basic automation launches in 8-10 weeks. Full-featured implementations with custom integrations and advanced automation typically take 3-4 months.',
          },
          {
            title: 'Will my team actually use it?',
            content:
              'We design for adoption. The interface matches how your team already works, with minimal clicks and mobile-first design. We include training and measure adoption metrics post-launch.',
          },
          {
            title: 'Can the CRM integrate with our email and calendar?',
            content:
              'Yes, we integrate with Gmail, Outlook, Google Calendar, and Microsoft 365. Emails sync automatically, meetings appear on contact timelines, and you can send emails directly from the CRM.',
          },
          {
            title: 'How do you handle different sales processes for different products?',
            content:
              'The CRM supports multiple pipelines with different stages, fields, and automation rules. Each product line or team can have their own customized workflow.',
          },
          {
            title: 'What reporting and analytics are included?',
            content:
              'You get real-time dashboards for pipeline value, conversion rates, sales velocity, rep performance, and revenue forecasting. Custom reports can be built for any data in the system.',
          },
          {
            title: 'Is there a mobile app?',
            content:
              'Yes, we build responsive web apps and native mobile apps for iOS and Android. Your team can manage deals, log activities, and access customer data from anywhere.',
          },
        ],
      },
      // Generic service page sections
      features: {
        overline: 'What we do',
        title: 'Build Relationships That Drive Revenue',
        subtitle:
          'We deliver CRM solutions that help your team sell smarter, not harder, through proven development practices and deep sales process expertise.',
        items: [
          {
            fa_icon: 'fa-rocket',
            title: 'Rapid Implementation',
            subtitle:
              'Get your CRM live in weeks with our proven architecture and pre-built sales modules.',
          },
          {
            fa_icon: 'fa-expand-arrows-alt',
            title: 'Scale With Your Team',
            subtitle:
              'Add users, data, and features without performance degradation or licensing surprises.',
          },
          {
            fa_icon: 'fa-lock',
            title: 'Enterprise Security',
            subtitle:
              'Role-based access, encryption at rest and in transit, and full audit logging.',
          },
          {
            fa_icon: 'fa-sync',
            title: 'Seamless Integrations',
            subtitle:
              'Connect with your email, calendar, accounting, and marketing tools out of the box.',
          },
          {
            fa_icon: 'fa-headset',
            title: 'Dedicated Support',
            subtitle:
              'Ongoing technical support and CRM optimization guidance as your business evolves.',
          },
          {
            fa_icon: 'fa-code',
            title: 'Custom Development',
            subtitle:
              'Unique features and workflows tailored to your specific sales methodology and industry.',
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
          'Our clients achieve measurable business outcomes through custom CRM solutions that drive sales efficiency and customer retention.',
      },
      usps: {
        title: 'What Sets One X Group Apart?',
        items: [
          {
            title: '100+ Projects Delivered',
            fa_icon: 'fa-trophy',
            subtitle:
              'Enterprise-grade CRM solutions for businesses across industries.',
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
              'Iterative development with regular check-ins ensures your CRM evolves with your feedback.',
          },
          {
            title: 'Enterprise-Grade Security',
            fa_icon: 'fa-shield-alt',
            subtitle:
              'Industry best practices and compliance standards to safeguard your customer data.',
          },
        ],
        overline: 'Our Differentiators',
        subtitle:
          'Partner with a trusted custom software development company that delivers results.',
      },
      testimonial: {
        title: "Our Clients' Success Stories",
        subtitle:
          'Hear from businesses that have transformed their sales operations with our CRM solutions.',
      },
      insights: {
        title: "What's Trending in CRM",
        subtitle:
          'From AI-powered selling to revenue intelligence, discover innovations shaping the future of customer relationship management.',
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
