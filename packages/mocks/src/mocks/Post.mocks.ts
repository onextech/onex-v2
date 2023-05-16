import sampleSize from 'lodash/sampleSize'
import {
  MOCK_GROUP_POST_CATEGORYS,
  MOCK_TECH_POST_CATEGORYS,
} from './PostCategory.mocks'
import { MOCK_GROUP_TAGS, MOCK_TECH_TAGS } from './Tag.mocks'
import getCategoryFromCrudItem from '../utils/getCategoryFromCrudItem'

export const MOCK_TECH_POSTS = [
  {
    published_at: "2023-05-15T08:00:00+0000",
    is_active: true,
    category_id: 7,
    title: 'What Does It Take To Make a Successful Product and Stand Out From The Crowd?',
    slug: 'successful-products-stand-out-from-crowd',
    subtitle: "Key factors and strategies for creating distinctive and successful technical products",
    hero_src: 'https://source.unsplash.com/SPpsFbCaN2A/1600x900',
    hero_alt: 'crowd',
    html:
    '<blockquote>\n' +
    '<p><em><strong>Summary:</strong></em></p>\n' +
    '<p><em>The Association for Project Management has listed five crucial factors for producing effective technical technical products in their "Conditions for Project Success" report. The factors include project planning and review, goals and objectives, effective governance, competent project teams, and dedication to success. The report emphasises that successful product creation calls for more than just simply technological expertise. Instead, effective management, a talented team, and a dedication to success are equally essential. To make sure everyone is working toward the same goals, it is vital, for instance, to conduct routine evaluations and set clear targets. Furthermore, in ensuring successful execution, there must be clear distinctions of authority and accountability within the project team and the commitment of everyone involved. By focusing on these factors, product owners can make a successful product that stands out from the competition while bringing additional value to their customers.</em></p>\n' +
    '</blockquote>\n' +
    '<p>More than just technological knowledge is needed to create an effective technical product. Key factors that can make or break a project were identified in a research by the Association for Project Management. The <em><strong>2015 Conditions for Project Success</strong></em> report is a collection of independent studies that aims to pinpoint the key elements that contribute to the effective completion of projects, programs, and portfolios. Any project, initiative, or portfolio can use these success criteria to help maximise project success.</p>\n' +
    '<h2>Factors Defining Project Success</h2>\n' +
    '<p>Let\'s examine these factors and see how you might utilise them to produce a product that is distinctive from the other products on the market.</p>\n' +
    '<p>According to the Association for Project Management\'s (APM) report "Conditions for Project Success," there are five important factors that define project success: <strong>project planning and review</strong>, <strong>goals and objectives</strong>, <strong>effective governance</strong>, <strong>competent project teams</strong>, and <strong>dedication to success</strong>.</p>\n' +
    '<h3>P<strong>roject Planning and Review</strong></h3>\n' +
    '<p>A thorough project plan outlining the project\'s scope, milestones, and timelines must be created as part of the first important factor, project planning and review. Because technical products frequently involve detailed designs and complicated systems, this is essential. You can make sure that everyone engaged in the project is aware of the specifications, deadlines, and outputs by creating an extensive plan. In order to keep the project on schedule and make sure that any issues are quickly resolved, regular project meetings are also essential.</p>\n' +
    '<p>For instance, it\'s important to conduct frequent reviews when creating software applications to make sure the codebase is clear, manageable, and satisfies the required performance standards.</p>\n' +
    '<h3>Goals and Objectives</h3>\n' +
    '<p>Goals and objectives, the second crucial factor, assist in retaining the project\'s concentration and ensure everyone is working toward the same objectives. Setting specific aims and objectives for the product and frequently assessing how well they are being achieved are necessary for this. For instance, you must make sure that the product satisfies the intended functionality standards and efficiency benchmarks when creating a new technical capacity.</p>\n' +
    '<h3>Effective Governance</h3>\n' +
    '<p>The third vital component is effective governance, which means making sure that there are clear divisions of accountability and responsibility within the project team. This makes it more likely that decisions will be made swiftly and problems will be resolved right away. To make sure the final output satisfies the required quality standards, you must have clearly specified procedures for testing, bug reporting, and problem solving when creating complex systems.</p>\n' +
    '<h3>Competent Project Teams</h3>\n' +
    '<p>The success of technical products depends on the fourth essential component, competent project teams. Making sure the project team has the knowledge and expertise required to produce the product effectively is part of this. In this respect, technical knowledge is especially crucial. For instance, you need a staff with expertise in CRM development, data management, and user interface/user experience (UI/UX) design when creating a CRM (Customer Relationship management) system.</p>\n' +
    '<h3>Commitment to Success</h3>\n' +
    '<p>The fifth and final fundamental factor, commitment to success, requires making sure that everyone engaged in the project is dedicated to producing a successful result. This involves not only the project team but also crucial stakeholders like clients and suppliers. For instance, you must make sure that everyone involved in the development of a cloud-based software application is in alignment with the product\'s goal and the benefits it offers.</p>\n' +
    '<h2>Conclusion</h2>\n' +
    '<p>In conclusion, developing a successful technological product calls for thorough planning, tailored goals, efficient management, a skilled project team, and a dedication to success. These components are essential for creating goods that stand out from the competition and offer your clients genuine value. You must make sure that these things are in place and that the project is handled well as a product owner in order to produce the best results. You can produce technical products that satisfy customer standards and do well on the market by concentrating on these factors.</p>\n' +
    '</blockquote>\n' +
    '</blockquote>\n' +
    '</blockquote>'
  },
  {
    published_at: "2023-05-15T10:00:00+0000",
    is_active: true,
    category_id: 7,
    title: 'The Most Costly Risks in Product Development and How To Mitigate Them',
    slug: 'costly-risks-product-development-mitigation',
    subtitle: "Navigating the pitfalls of product development: Mitigating risks for successful launches.",
    hero_src: 'https://source.unsplash.com/UU69D-_nwPI/1600x900',
    hero_alt: 'compass',
    html:
    '<blockquote>\n' +
    '<blockquote>\n' +
    '<p><em><strong>Summary:</strong> Product development is a costly and complex process that involves many risks, including a small or nonexistent market, insufficient budgeting, technical difficulties, intellectual property infringement, and supplier and manufacturing issues. To mitigate these risks, it is essential to conduct sufficient market research, establish a reasonable budget, have a team with the necessary expertise, conduct a thorough patent search, and open lines of communication with suppliers and manufacturers. In addition, broader risk management strategies can also be applied, for instance developing a clear development process, carrying out comprehensive testing and validation, incorporating flexibility, tracking progress, and building a culture of continuous improvement. By recognising the most significant risks and employing effective risk management practices, it is feasible to maximise the likelihood of success and launch the product effectively.</em></p>\n' +
    '</blockquote>\n' +
    '<p>The process of Product Development can be costly and complex with many risks that can result in resource waste, missed deadlines, and failed projects. In order to successfully bring a product to market, it is crucial to recognise and mitigate the most costly risks before. In this article, we will discuss some of the most significant risks in product development and strategies for mitigating them.</p>\n' +
    '<h3>Lack of Market Demand</h3>\n' +
    '<p>Launching a product with little to no market demand is one of the most costly risks in product development could lead to significant losses in terms of materials, time, and money. To mitigate this risk, it is pivotal to conduct sufficient market research to determine if there is a demand for the product. For instance, focusing on conducting surveys, focus groups, surveys, and market trends analysis.</p>\n' +
    '<h3>Inadequate Budgeting</h3>\n' +
    '<p>Inadequate budgeting is another common risk in product development is. It is vital to set aside sufficient funds for research and development, prototyping, testing, and marketing. If this isn&rsquo;t done, there may be delays, lowered product quality and ultimately, failure to bring the product to market. Establishing a reasonable budget and keeping tabs on spending during the development process are essential to reduce such risk.</p>\n' +
    '<h3>Technical Challenges</h3>\n' +
    '<p>Product development often involves technical challenges, such as creating a new technology or combining many technologies into a single product. Overcoming such challenges can be costly and time-consuming. Having a team with the required know-how and to be able to successfully carry out exhaustive testing and validation throughout the development process is important.</p>\n' +
    '<h3>Intellectual Property Infringement</h3>\n' +
    '<p>Product development can potentially be risky due to intellectual property infringement. A product may face legal action and hefty fines if it violates the patents or trademarks of another business. Before launching the product, it is imperative to conduct an exhaustive patent search and secure all required licenses and permissions.</p>\n' +
    '<h3>Supplier and Manufacturing Issues</h3>\n' +
    '<p>Supplier and manufacturing issues can also be a costly risk in product development. Such issues can lead to delays, reduced product quality, and increased costs. To create clear lines of communication and quality control procedures with suppliers and manufacturers will aid in eradicating supplier and manufacturing problems.</p>\n' +
    '<p>Besides the aforementioned, there are broader risk management strategies that can mitigate risks in product development. They consists of:</p>\n' +
    '<ul>\n' +
    '<li>Creating a clear development process with milestones and deadlines</li>\n' +
    '<li>Carrying out extensive testing and validation throughout the development process</li>\n' +
    '<li>Integrating flexibility to accommodate changes and adjustments as needed</li>\n' +
    '<li>Establishing clear communication channels and collaboration between team members and stakeholders</li>\n' +
    '<li>Tracking progress and identifying potential risks early on</li>\n' +
    '<li>Building a culture of continuous improvement and risk management</li>\n' +
    '</ul>\n' +
    '<h2>Final Word</h2>\n' +
    '<p>In conclusion, creating a new product can be expensive, challenging and risky undertaking. Nonetheless, it is feasible to raise the likelihood of success and effectively launch the product by recognising the most important risks and taking efforts to mitigate while putting into practice effective risk management practices.</p>\n' +
    '</blockquote>\n' +
    '</blockquote>'
  },
  {
    published_at: "2023-05-15T11:00:00+0000",
    is_active: true,
    category_id: 7,
    title: 'Are you building the right product for your customers? Tips on evaluating customers’ wants and needs',
    slug: 'evaluating-customers-wants-needs-building-right-product',
    subtitle: "Key strategies to ensure customer-centric product development and success in the market.",
    hero_src: 'https://source.unsplash.com/7tXA8xwe4W4/1600x900',
    hero_alt: 'sticky notes',
    html: '<blockquote>\n' +
    '<blockquote>\n' +
    '<p><em><strong>Summary:</strong> Developing the right product for customers is essential for a business to succeed. To achieve this, business owners and product developers should conduct market research, customer feedback analysis, user persona creation, test assumptions, flexibility, customer experience focused and success measurement. Market research involves compiling data about target audiences&rsquo; demographics, tastes, behaviours, and pain points. Prioritising product features and creating user personas can help provide a more specialised experience. Keeping an open mind and testing hypotheses through user testing and prototyping, and to be adaptable. The product will continue to match the target market\'s changing needs and wants if success is measured using criteria like customer happiness, retention rates, and revenue growth.</em></p>\n' +
    '</blockquote>\n' +
    '<p>As a business owner or product developer, it\'s essential to ensure that you\'re building the ideal product for your clients. Failure to meet the needs of your target audience can lead to wasted resources and business may not be profitable. If it does not even solve a real problem or fulfill a genuine desire for your target audience, its unlikely to succeed in the long run. To avoid these pitfalls, it\'s crucial to take the time to evaluate your customers\' wants and needs before starting to build the product. Additionally, gathering of feedbacks from them throughout will smoothen the whole development process. Here are some tips to help you do just that.</p>\n' +
    '<h3>Conduct market research</h3>\n' +
    '<p>The first step in evaluating and determining the needs and wants of your customers is to conduct sufficient market research. This involves compiling of data about your target audience, including their demographics, preferences, behaviours, and pain points. Surveys, focus groups, interviews and other techniques can be used. The objective of getting to know our audience is to comprehend what motivates your customers, the existing problems that they are attempting to mitigate, and the solutions that they are currently utilising.</p>\n' +
    '<h3>Analyse customer feedback</h3>\n' +
    '<p>Your customers are the primary source of information about their requirements. Take attention to their responses in surveys, reviews, forums, social media channels, and other forms of communication. Such details can aid you in uncovering insights that could potentially give you an edge above the rest when developing your product or service. Once you have gathered information about your customers, it\'s time to analyse their feedback. Do keep a look out for common themes and patterns in what they\'re saying. What are the recurring problems that they are quick to mention? What features or benefits do they seem to value the most? Use this information to prioritise your product features and determine which to prioritise.</p>\n' +
    '<h3>Creating user personas</h3>\n' +
    '<p>To create effective user personas, you should include informations about age, occupation, location, interests, and lifestyle. Consider the people utilising your product and what they will need it to do. Assess their motivations - why are they interested in your product? What do they hope to gain or achieve by employing it? Thinking from their perspective can help you determine which features to emphasise in your product design and marketing. Additionally, by understanding the context in which they will use your product, a more tailored experience can be provided to meet their needs.</p>\n' +
    '<h3>Test your assumptions</h3>\n' +
    '<p>It\'s easy to make assumptions about what your customers want and need. But, it is critical to test those assumptions before investing time and resources into building a product. Through user testing and prototyping is one approach to accomplish this. Get prospective clients to try it out and provide insightful feedback based on a basic version of the product. This can aid you in identifying any potential gaps in your product design and make careful adjustments before launching.</p>\n' +
    '<h3>Stay flexible</h3>\n' +
    '<p>Flexibility and openness to feedback is crucial throughout the developmental process even if you have done your research and tested your assumptions. You must be able to adjust as the demands and wants of your clients change over time. To make sure that your product remains attractive, relevant and valuable to your target audience, continuously seek feedback and make improvements as necessary.</p>\n' +
    '<h3>Focus on customer experience</h3>\n' +
    '<p>Ultimately, building the right product for your customers is all about creating a satisfying consumer experience when developing the ideal product for your target market. This entails not just attending to their requirements and resolving their problems, but also ensuring a seamless and enjoyable experience throughout the entire customer journey. Give close attention to each and every element that affects the user experience, from the initial marketing and sales procedure to the product design and support. Aim to go above and beyond your consumers&rsquo; expectations by being fully aware of what they value.</p>\n' +
    '<h3>Measure success</h3>\n' +
    '<p>To gauge how well your product satisfies the demands and wants of your target market is also a key step. Establishing clear goals and metrics for success such as customer satisfaction levels, retention rates and revenue expansion. Keep an eye over these indicators over time and change product accordingly to make sure its providing the value your customers are looking for.</p>\n' +
    '<h2>Final Words</h2>\n' +
    '<p>In summary, developing the ideal product for your customers demands a thorough comprehension of their needs and goals. Keep in mind that creating a successful product that is a continuous process that necessitates constant input and it requires continuous feedback and iteration to stay relevant and competitive in today\'s rapidly evolving marketplace.</p>\n' +
    '</blockquote>\n' +
    '</blockquote>'
  },
  {
    published_at: "2023-05-15T12:00:00+0000",
    is_active: true,
    category_id: 3,
    title: 'Beyond the Cloud: The Latest Innovations and Trends for Cloud Computing in 2023',
    slug: 'beyond-the-cloud-latest-innovations-trends-cloud-computing-2023',
    subtitle: "Exploring the evolving landscape of cloud computing and its cutting-edge advancements in 2023.",
    hero_src: 'https://source.unsplash.com/FfPmBpiuPf0/1600x900',
    hero_alt: 'city sky',
    html: '<blockquote>\n' +
    '<p><em><strong>Summary: </strong>Cloud computing&rsquo;s adaptability, scalability and affordability has enabled its emergence as a crucial component of the IT industry. Due to its flexibility and cost-effectiveness, the multi-cloud strategy has become increasingly popular, which enable organisations to use several cloud providers to fulfil their needs. The hybrid cloud model combines both public and private clouds, offers businesses a more curated and versatile cloud solution. Cloud computing is becoming more important in artificial intelligence and machine learning. Cloud providers are integrating these capabilities into their products to assist businesses in automating processes and making better decisions. Not to mention, serverless computing and cloud-native technologies, such as containers, microservices, and APIs, are becoming prominent due to their scalability, affordability, and speed of development and deployment. Cloud computing will continue to evolve and offer new alternatives and opportunities for innovation as technology progresses</em></p>\n' +
    '</blockquote>\n' +
    '<p>Since the beginning,&nbsp;cloud computing has made significant advances and is now an integral element of the IT sector. It is favoured by businesses of all sizes due to its adaptability, scalability, and affordability. As technology develops, cloud computing changes, and new technologies and trends are emerging that are interesting to investigate.</p>\n' +
    '<h3>Multi-Cloud Environments</h3>\n' +
    '<p>The utilisation of several cloud providers by organisations to satisfy their demands has become increasingly&nbsp;popular using the multi-cloud strategy. This method provides more&nbsp;flexibility, redundancy, and cost-efficiency. Organisations can take full advantage of the benefits offered by each cloud provider and prevent vendor lock-in by employing the&nbsp;multi-cloud strategy. Additionally, it enables businesses to use the best cloud solutions to satisfy their unique needs.</p>\n' +
    '<h3>Hybrid Cloud</h3>\n' +
    '<p>The hybrid cloud model incorporates both&nbsp;public and private clouds to give businesses a more individualised and adaptable cloud solution. Organisations have the option to decide which workloads should be run in-house and which should be on the cloud. With a hybrid cloud strategy, businesses may benefit from the scalability, efficiency, and flexibility of the public cloud as well as the privacy, control, and compliance of the private cloud.</p>\n' +
    '<h3>Artificial Intelligence and Machine Learning</h3>\n' +
    '<p>Cloud computing is increasingly reliant on artificial intelligence and machine learning. Cloud providers are integrating AI and ML capabilities into their products to assist businesses in automating processes, getting more information from their data, and making better decisions. Organisations can build more&nbsp;intelligent software that can learn, adapt, and make decisions based on data using AI and ML.</p>\n' +
    '<h3>Serverless Computing</h3>\n' +
    '<p>In a cloud computing architecture known as "serverless," the infrastructure is managed by the cloud provider, and an organization just pays for the computing time used by their&nbsp;applications. Organisations can concentrate on creating their applications without worrying about managing the underlying infrastructure thanks to serverless computing. It is a scalable and affordable option for businesses with different workloads.</p>\n' +
    '<h3>Cloud-Native Applications</h3>\n' +
    '<p>Using cloud-native technologies like containers, microservices, and APIs, cloud-native applications are created expressly to run on the cloud. Agile development approaches were used to create these applications, facilitating speedy development and deployment. Cloud-native applications are the best option for enterprises with a big user base since they are highly scalable, resilient, and secure.</p>\n' +
    '<h2>Conclusion</h2>\n' +
    '<p>Cloud computing is still developing and adapting to the shifting demands of the IT sector. More flexibility, scalability, and cost-effectiveness are priorities for the newest innovations and trends in business. Cloud computing will keep developing as technology progresses, giving businesses additional alternatives and chances to be innovative.</p>\n' +
    '</blockquote>'
  },
  {
    published_at: "2023-05-15T13:00:00+0000",
    is_active: true,
    category_id: 3,
    title: 'Navigating the Cloud Landscape: Key Considerations for Enterprise Product Managers in 2023',
    slug: 'navigating-cloud-landscape-key-considerations-enterprise-product-managers-2023',
    subtitle: "Maximizing efficiency and innovation in the cloud era for successful enterprise product management.",
    hero_src: 'https://source.unsplash.com/_K-QKkbn7Ds/1600x900',
    hero_alt: 'building',
    html: '<blockquote>\n' +
    '<blockquote>\n' +
    '<p><em><strong>Summary:</strong> Enterprise product management has grown increasingly essential as a result of the way firms presently function after&nbsp;being altered by cloud-based solutions. Enterprise product managers should take important considerations into account, such as choosing an appropriate cloud provider based on standards like cost, dependability, security, scalability, and support. In order to be sure that their infrastructure and cloud provider can accommodate their expanding business needs, they must also plan for expansion. Another crucial element is cost optimisation, and product managers must assess cloud usage and cut costs where they can without sacrificing performance or reliability. Finally, investing in cutting-edge technology and researching concepts like serverless computing and microservices are crucial.</em></p>\n' +
    '</blockquote>\n' +
    '<p>Enterprise product management has gotten increasingly popular in recent years due to the cloud. Cloud-based solutions have completely altered the way businesses run with&nbsp;their adaptable architecture and affordable scalability. Enterprise product managers should be aware of the most recent developments in cloud computing as we move further into 2023&nbsp;and ensure that&nbsp;they are getting the most from their investments. Here are some important things to keep in mind as enterprise product managers navigate the cloud environment in 2023.</p>\n' +
    '<h3>Choosing the Right Cloud Provider</h3>\n' +
    '<p>Picking a suitable cloud provider is one of the most crucial factors for enterprise product managers. The ideal provider for your company may be tricky to choose given the wide range of possibilities accessible. Product managers must assess every provider according to the different&nbsp;criterias&nbsp;like price, dependability, security, scalability, and support.</p>\n' +
    '<p>Keep in mind that not all cloud service providers are created equally. While some companies might offer more specialized services, like big data analytics, others might offer more diverse services. Additionally, some service providers might be more appropriate for specific sectors, such the healthcare or financial industries. To choose which supplier best satisfies their unique needs, product managers need to&nbsp;carefully analyze each one.</p>\n' +
    '<h3>Planning for Growth</h3>\n' +
    '<p>Planning for expansion is a crucial factor for enterprise product managers.&nbsp; Cloud-based solutions provide&nbsp; Astounding scalability&nbsp;but it is&nbsp;essential that your business is equipped for expansion. This entails creating a strategy for scalability of your infrastructure and confirming that your cloud provider can fulfill your requirements as your business grows.</p>\n' +
    '<p>Product managers should also anticipate how growth will affect their services and applications. Make that your cloud-based solutions are built to withstand growing traffic and consumption, and that your apps are geared for the cloud.</p>\n' +
    '<h2>Optimising Costs</h2>\n' +
    '<p>Enterprise product managers must take cost efficiency into account when navigating the cloud environment. Although cloud-based solutions allow for cost-effective scalability, it\'s crucial to make sure your company is not&nbsp;paying excessively on cloud services. This entails assessing how you use the cloud and determining where you may reduce expenses, for as by cutting back on unnecessary resources or switching to a pay-per-use business model.</p>\n' +
    '<p>Product managers should also think about how cost optimization will affect their services and apps. It is crucial to ensure&nbsp;that cost optimization doesn\'t compromise your apps\' dependability or performance is crucial.</p>\n' +
    '<h3>Embracing Innovation</h3>\n' +
    '<p>Finally, when managing the cloud ecosystem, enterprise product managers should embrace innovation. Product managers have to keep up with the most recent trends and technology in the continuously evolving sector of cloud computing. This entails making investments in cutting-edge technology like artificial intelligence and machine learning as well as exploring fresh ideas like serverless computing and microservices.</p>\n' +
    '<p>Product managers can acquire a competitive edge and ensure their company is prepared to make the most of opportunities in the cloud computing market by embracing innovation.</p>\n' +
    '<h2>Conclusion</h2>\n' +
    '<p>In conclusion, enterprise product managers may find it difficult to navigate the cloud ecosystem. Product managers may, however, harness the advantages of cloud-based solutions and maintain&nbsp;the lead by carefully considering factors like selecting the most suitable cloud provider, planning for expansion, optimising costs, ensuring security and compliance, and embracing innovation.</p>\n' +
    '</blockquote>'
  },
  {
    published_at: "2023-05-15T14:00:00+0000",
    is_active: true,
    category_id: 3,
    title: 'The Future of Cloud Infrastructure Management: Automation, AI, and DevOps.',
    slug: 'future-cloud-infrastructure-management-automation-ai-devops',
    subtitle: "Unlocking the Potential: Embracing automation, AI, and DevOps for efficient and scalable cloud infrastructure management.",
    hero_src: 'https://source.unsplash.com/-8ttvM3Ca94/1600x900',
    hero_alt: 'road',
    html: '<blockquote>\n' +
    '<blockquote>\n' +
    '<p><em><strong>Summary:</strong> The usage of cloud infrastructure in present organisational operations is growing, and cloud infrastructure management practices like automation, artificial intelligence (AI), and DevOps are becoming increasingly common. The demand for better efficiency, scalability, and dependability in managing complex cloud infrastructures is what\'s causing this shift toward automation and AI. By 2025, it\'s anticipated that 70% of businesses will use multi-cloud or hybrid cloud strategies, with many of them managing their cloud infrastructure with automation and AI. Investing in the appropriate tools and technologies, alongside providing IT team training and development, can help businesses utilise cloud infrastructure effectively and encourage innovation and growth in this digital age&nbsp;despite the challenges associated with adopting these trends.</em></p>\n' +
    '</blockquote>\n' +
    '<p>Modern organisational operations depend heavily on managing cloud infrastructure, which enables companies to store and analyse enormous volumes of data and scale their applications to meet rising demand. With automation, artificial intelligence (AI), and DevOps at the forefront of such breakthroughs, new tools and approaches are developing to better the management of cloud infrastructure.</p>\n' +
    '<h3>Automation</h3>\n' +
    '<p>We can anticipate a significant shift toward more automated and AI-driven cloud infrastructure management in the coming future. By 2025, Gartner reports&nbsp;70% of enterprises will have chosen a multi-cloud or hybrid cloud approach, with many using automation and AI to manage their cloud infrastructure. The demand for better effectiveness, scalability, and dependability in effectively managing cloud infrastructures is the primary factor causing the shift toward automation and AI.</p>\n' +
    '<p>The ability to scale operations rapidly and effectively is one of the key benefits of automation in cloud infrastructure management. The deployment, monitoring, and backup of resources are all able to be automated, freeing up IT professionals to concentrate on more strategic projects that promote company expansion. Moreover, automation lowers the possibility of human error, enhancing the security and dependability of cloud infrastructure administration.</p>\n' +
    '<h3>Artificial Intelligence (AI)</h3>\n' +
    '<p>Another essential element that will revolutionise cloud infrastructure management in the near future is artificial intelligence (AI). AI can examine huge datasets and offer insights that help IT professionals make better decisions by utilising machine learning techniques. AI, for instance, can assist in identifying performance issues or possible security concerns, enabling IT staff to take corrective action before any issues develop. In order to ensure that cloud infrastructure is utilised effectively and economically, AI may also improve resource allocation.</p>\n' +
    '<h3>DevOps</h3>\n' +
    '<p>DevOps is another trend that is altering cloud infrastructure management. Software development using the DevOps methodology focuses on&nbsp;automation, continuous integration and delivery, and a shared responsibility culture. DevOps enables IT teams to work more productively in the context of managing cloud infrastructure, providing updates and new features more quickly and reliably. DevOps fosters more collaboration and transparency by assisting in the breaking down of&nbsp;silos between the development and operations teams.</p>\n' +
    '<h3>Challenges</h3>\n' +
    '<p>The adoption of automation, AI, and DevOps is not without its challenges, however. The requirement for qualified IT specialists who can develop, implement, and maintain these systems is one of the key barriers to implementing these solutions. Concerns exist over the potential effects on security of growing automation and AI in cloud infrastructure management. Security is a significant concern for businesses as more crucial business activities are automated, increasing the danger of cyberattacks and data breaches.</p>\n' +
    '<p>To successfully manage their cloud infrastructure, businesses ought to invest in the appropriate tools, technologies, and talent. To accomplish their business goals, they must have a well-defined strategy in place that explains how they will use automation, AI, and DevOps. Additionally, they must emphasise IT team training and development to give them the knowledge and abilities they need to operate the increasingly complex cloud systems.</p>\n' +
    '<h2>Final Word</h2>\n' +
    '<p>In conclusion, the future of cloud infrastructure management is one that is increasingly automated, AI-driven, and DevOps-oriented. These trends are driven by the need for greater efficiency, scalability, and reliability in managing complex cloud environments. Businesses may fully utilise cloud infrastructure, spurring innovation and growth in the digital era, by embracing automation, AI, and DevOps.</p>\n' +
    '</blockquote>\n' +
    '</blockquote>'
  },

].map((item, i) => ({
  id: i + 1,
  // Category
  category: getCategoryFromCrudItem(item, MOCK_TECH_POST_CATEGORYS),
  // Images
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: 'about_shape_circle_radial',
  // Author
  author_avatar_src: '/images/about_shape_circle_radial.svg',
  author_avatar_alt: 'about_shape_circle_radial',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
  // Tags
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  ...item,
}))

export const MOCK_GROUP_POSTS = [
  {
    published_at: "2023-05-15T08:00:00+0000",
    title:
      'All You Need to Know About Chirashi Don Making and How to Make the Best Chirashi Don',
    slug: 'all-you-need-to-know-about-chirashi-don-making-and-how-to-make-the-best-chirashi-don',
    subtitle:
      'Make your product the first choice for users with designers who built dozens of them.',
    category_id: 1,
    exclusive_locales: ['jp'],
  },
].map((item, i) => ({
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
