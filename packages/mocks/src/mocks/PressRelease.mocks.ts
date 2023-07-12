import sampleSize from 'lodash/sampleSize'
import { PressRelease } from '@gravis-os/types'
import { MOCK_GROUP_TAGS, MOCK_TECH_TAGS } from './Tag.mocks'

export const MOCK_COMMON_PRESS_RELEASES: PressRelease[] = [
  {
    is_active: true,
    published_at: '2019-03-25T01:43:55+0800',
    title: 'One X Tech Launches Digitize™ Program',
    slug: 'one-x-tech-launches-digitize™-program',
    hero_src: '/insights/one-x-tech-launches-digitize™-program.png',
    hero_alt: 'Man pointing at a laptop',
    subtitle:
      'One X Tech Press Release: Launch of One X Tech Digitize™ Program',
    html:
      '<p>SINGAPORE: One X Tech, the world&rsquo;s first digital business platform, today announced that it has launched a new initiative aimed at encouraging companies to take their first step towards developing digital capabilities. Known as the One X Tech Digitize&trade; Program, the new initiative helps companies build stronger digital capabilities and deploy IT solutions in their business.</p>' +
      '<p>Under the Digitize&trade; program, companies can receive up to $5,000 worth of credits to exchange for digital services, and be entitled to book exclusive training sessions with One X Tech&rsquo;s digital consultants. The program is available to enterprise clients, small/medium businesses, and early-stage companies, with benefits catered specially to the needs of each group.</p>' +
      '<p>&ldquo;The Digitize&trade; program has helped our customers overcome the inertia faced when adopting new technology and provides them with the right support to grow their business,&rdquo; said Lu ShuHui, Director of Client Communications at One X Tech. &ldquo;In today&rsquo;s increasingly digital economy, companies looking to expand their business can depend on Digitize&trade; to kick-start their digital capabilities with ease and confidence.&rdquo;</p>' +
      '<p>Companies keen to explore digital solutions under the Digitize&trade; program can apply through the One X Tech website today.</p>',
  },
  {
    is_active: true,
    published_at: '2018-11-21T01:43:55+0800',
    title: 'One X Tech Moves to Robinson Road, Singapore',
    slug: 'one-x-tech-moves-to-robinson-road-singapore',
    hero_src: '/insights/one-x-tech-moves-to-robinson-road-singapore.png',
    hero_alt: 'Office at Robinson Road',
    subtitle:
      'One X Tech Press Release: One X Tech Moves to New Office in Singapore to Create Digital Hub',
    html:
      '<p>SINGAPORE: Digital agency One X Tech officially unveiled its new Singapore office located at Robinson Road on Thursday (Nov 10).</p>' +
      '<p>The Singapore office which serves as the firm&rsquo;s regional head-quarters in the Asia Pacific region, houses its growing team of digital consultants, designers and software engineers.</p>' +
      '<p>Commenting on the move to its new location in the heart of the central business district, Director of Technology Management, Joel Koh cited the company&rsquo;s desire to promote an integral digital hub for its customers and partners.</p>' +
      '<p>&ldquo;In line with our momentum of enabling a greater digital ecosystem in Asia, the move has enabled us to create a more collaborative and inspirational space for our clients and team members alike,&rdquo; said Mr Koh.</p>' +
      '<p>&ldquo;Singapore is key to our continued growth in the region, and we are excited to be part of a space that fosters greater creativity and innovation," he added.</p>' +
      "<p>One X Tech's upgrade comes after it announced its plans to release a suite of new digital services and IT solutions to empower smart businesses last month.</p>",
  },
  {
    is_active: true,
    published_at: '2018-10-19T01:43:55+0800',
    title: "Introducing One X Tech's Digital Business Suite",
    slug: 'one-x-tech-digital-business-suite',
    hero_src: '/insights/one-x-tech-digital-business-suite.png',
    hero_alt: 'One X Tech logo',
    subtitle:
      "One X Tech Press Release: Introducing One X Tech's Digital Business Suite",
    html:
      '<p>SINGAPORE: Earlier today, digital agency One X Tech, announced the launch of Digital Business Suite &mdash; a comprehensive offering of digital and IT services aimed at supporting businesses in their digital transformation journey.</p>' +
      "<p>Amidst today's rapidly evolving business landscape, companies want access to the best digital tools and services to stay ahead. With the Digital Business Suite, managers can easily apply established technologies in their work through the proven capabilities and support of the One X Tech digital team. With services spread across key areas such as automation, growth, innovation and more, the Digital Business Suite has been designed specifically to meet the needs of today&rsquo;s modern businesses.</p>" +
      '<p>&ldquo;We are excited to announce the launch of the Digital Business Suite as an integral way of sharing our expertise in the Digital and IT space with our customers,&rdquo; said Joel Koh, One X Tech&rsquo;s Director of Technology Management.</p>' +
      '<p>&ldquo;The Digital Business Suite will make it easier than ever for managers to run their business with greater confidence and intelligence. We are more than happy to do so because it brings us closer towards our vision of creating a unified digital eco-system in Asia,&rdquo; he added.</p>' +
      '<p>The Digital Business Suite is currently available for all customers operating in the Asia Pacific region.</p>',
  },
  {
    is_active: true,
    published_at: '2023-02-13T01:43:55+0800',
    title:
      'Tyme Digital Banking collaborates with One X Tech to redesign its digital capabilities to build up brand presence',
    slug: 'tyme-digital-banking-collaborates-with-one-x-tech-to-redesign-its-digital',
    hero_src:
      '/insights/tyme-digital-banking-collaborates-with-one-x-tech-to-redesign-its-digital.png',
    hero_alt: 'Tyme Digital Banking website',
    subtitle:
      'With the collaboration between Tyme Digital Banking and One X Tech, customers worldwide can now access innovative digital banking solutions and experience exceptional services from a trusted partnership.',
    html:
      '<p>Tyme Digital Banking announces a collaboration with One X Tech to redesign its digital capabilities in order to exhibit their full capabilities and worldwide presence.</p>' +
      "<p>The website launch is an important milestone in Tyme's digital transformation journey and demonstrates the company's commitment to delivering the best online experience for its customers and stakeholders. The new website has a clean and modern appearance, as well as a user-friendly layout that makes it easy for users to access essential information and services.</p>" +
      '<p>"We are thrilled to be working with Tyme on this exciting venture," says Mr Joel Koh, Chief Technology Officer of One X Tech. "Our team of experts partnered closely with Tyme to understand their needs and design a website that demonstrates the company\'s commitment to innovation and excellence in the digital banking market."</p>' +
      "<p>Users are able to access full information about the group's management team and Tyme's capabilities, as well as up-to-date press releases and news stories, via the website. Furthermore, potential employees can explore existing positions available at Tyme and apply immediately through the website, expediting both the application and hiring processes. Tyme Group's high-tech and high touch brand experience website offers a one-stop destination for digital banking solutions, market offerings and career opportunities.</p>" +
      "<p>The website can now effectively portray the extent and breadth of Tyme Group's international reach. Customers can discover the complete range of services that this unique company provides throughout the world, through this website.</p>" +
      "<p>Tyme has grown to become one of the world's fastest-growing financial firms, serving over 6 million consumers across multiple countries since launching its initial digital banking business in South Africa. Tyme's new website is an important aspect of the company's digital strategy, enabling it to reach a larger audience and provide more accessible and reliable information about its services.</p>" +
      "<p>The website brilliantly encapsulates Tyme's mission to revolutionize financial services and create a personalized customer experience, allowing customers everywhere access to their money with trust and confidence.</p>" +
      '<p><strong>About One X Tech:</strong></p>' +
      '<p>One X Tech is a leading technology company that focuses on building technological innovations for leading enterprises. We are on a mission to build a new digital economy by creating innovative digital solutions that put businesses at the digital frontier. One X Tech brings together an elite digital product team to create best-in-class products that scale across the world. One X Tech is based in Singapore and operates regionally in South East Asia.</p>' +
      '<p><strong>About Tyme Group:</strong></p>' +
      "<p>Tyme is creating a revolutionary digital banking experience by expanding economic access across emerging markets in Asia and Africa. Fuelled by their commitment to unleash human potential, the company has partnered with local stakeholders to launch cutting-edge banks. TymeGlobal's disruptive business model integrates retailers for an unparalleled financial services solution that was previously impossible due to accessibility issues.</p>",
  },
  {
    is_active: true,
    published_at: '2022-04-07T01:43:55+0800',
    title:
      'Launch of NextGEN Connect Challenge Platform at the International Maritime Organisation Future of Shipping Conference 2022',
    slug: 'launch-of-nextgen-connect-challenge-platform-at-the-international-maritime',
    hero_src:
      '/insights/launch-of-nextgen-connect-challenge-platform-at-the-international-maritime.png',
    hero_alt: 'People on stage',
    subtitle:
      'The International Maritime Organisation and Maritime Port Authority of Singapore collaborated with One X Tech to launch NextGEN Connect Challenge, driving sustainable shipping and decarbonization efforts in the Asia-Pacific region.',
    html:
      '<p>In conjunction with the International Maritime Organisation Future of Shipping Conference and Singapore Maritime Week 2022, the International Maritime Organisation and Maritime Port Authority of Singapore have jointly launched the NextGEN Connect Challenge Platform powered by One X Tech.</p>' +
      "<p>Mr S Iswaran, Minister for Transport and Minister-in-charge of Trade Relations, kicked off the NextGEN Connect Challenge with these opening words, &ldquo;It is important for public and private stakeholders to work together in a collective and inclusive manner globally to accelerate the maritime sector's transition towards a low-carbon future. NextGEN Connect serves as a collaborative platform that matches the challenges of sustainable shipping to diverse solution providers across borders and industries. The platform also shares innovative and successful projects that address common problems in shipping worldwide. In this way, no one is left behind on the access to creative sustainability solutions in achieving the goals of the Initial IMO GHG Strategy&rdquo;.</p>" +
      "<p>The NextGEN database currently comprises more than 500 stakeholders across the world, including IMO Member States, shipowners, technology developers, classification societies, and non-governmental organisations. It is an interactive website that currently lists more than 150 decarbonisation projects. Viewers of the website can utilise an engaging interactive map to gain insight into environment projects happening around the world. Not only will they be able to select a specific country and explore its project, but also use the thematic map feature which presents users with a comprehensive overview of each area's environmental themes.</p>" +
      '<p>NextGEN Connect Challenge seeks to cut greenhouse gas emissions along maritime routes in the Asia and Pacific regions by gathering original route-based action plans from various stakeholders. The entries were accepted via <a href="http://nextgen.imo.org/challenge">nextgen.imo.org/challenge</a>.</p>' +
      '<p>Participants could learn more about the challenge statement and submitted their proposals after creating an account on the NextGEN website. The platform streamlined the submission and evaluation process, making it more efficient and fair, by asking detailed questions about their solutions, risks and challenges of their solutions and allowing them to upload supporting documents directly onto the platform. Participants could easily check the status of their proposals on their account dashboard to see if they have been shortlisted.</p>' +
      '<p>Mr Joel Koh, Chief Technology Officer added &ldquo;One X Tech is delighted to support the Maritime and Port Authority of Singapore (MPA) and the International Maritime Organisation in launching the NextGEN Connect Challenge and promoting inclusive maritime decarbonisation".</p>' +
      "<p>NextGEN connect enabled participants to join a global network of over 500 partners to showcase their projects and gain entry to events centred on inclusive maritime decarbonisation, thereby unlocking their prospects. This collaborative endeavour marks a significant turning point in the global maritime industry's digital transformation.</p>" +
      '<p><strong>About One X Tech:</strong></p>' +
      '<p>One X Tech is a leading technology company that focuses on building technological innovations for leading enterprises. We are on a mission to build a new digital economy by creating innovative digital solutions that put businesses at the digital frontier. One X Tech brings together an elite digital product team to create best-in-class products that scale across the world. One X Tech is based in Singapore and operates regionally in South East Asia.</p>' +
      '<p><strong>About Maritime Port Authority of Singapore:</strong></p>' +
      "<p>Maritime Port Authority of Singapore (MPA) is a leading maritime agency driving Singapore's global maritime aspirations. MPA was established on 2 February 1996, with the mission to develop Singapore as a premier global hub port and international maritime centre (IMC), and to advance and safeguard Singapore's strategic maritime interests.</p>" +
      '<p><strong>About International Maritime Organisation:</strong></p>' +
      "<p>IMO is the United Nations' specialized agency responsible for safety and security of shipping and the prevention of marine pollution by ships. With 174 Member States and three Associate Members, IMO is based in London with around 300 international staff.</p>",
  },
  {
    is_active: true,
    published_at: '2021-07-26T01:43:55+0800',
    title:
      'Mr Bucket and One X Tech partner to deliver custom chocolate gifts to the online market',
    slug: 'mr-bucket-and-one-x-tech-partner-to-deliver-custom-chocolate-gifts-to-the',
    hero_src:
      '/insights/mr-bucket-and-one-x-tech-partner-to-deliver-custom-chocolate-gifts-to-the.png',
    hero_alt: 'Storefront of chocolate shop',
    subtitle:
      'Mr Bucket and One X Tech join forces to revolutionize the gifting experience with bespoke chocolates and a modern online shopping platform.',
    html:
      '<p>Mr Bucket has partnered with One X Tech to offer a one-of-a kind gifting experience featuring bespoke chocolates. Through this collaboration, B2B sales have been enabled and landing pages are now tailored based on special occasions for dynamic marketing opportunities.</p>' +
      '<p>The new website created by One X Tech for Mr Bucket offers a modern online shopping experience for customers across Asia. It will allow customers to browse through the wide selection of chocolates available from this beloved chocolaterie. Businesses can now access a variety of premium chocolates via the website, thanks to this innovative B2B platform.</p>' +
      '<p>One X Tech provides an innovative and unique website design for Mr Bucket, tailored to their brand and target audience. The website contains rich, informative content about the chocolates available, the factory and career opportunities.</p>' +
      "<p>Mr Bucket's website also features a unique landing page, which adjusts according to the current season. With visuals tailored for each occasion such as Christmas or Valentine's Day, this allows the brand to effectively market their products in response to timely celebrations and holidays.</p>" +
      '<p>Customers can build their own box of chocolates via the website, allowing them to choose their favourite flavours. The website allows for the creation of a one-of-a-kind shopping experience in the bustling&nbsp;F&amp;B industry, and the Build-a-Box platform provides unrivalled customer service through an integrated eCommerce and inventory control system. The platform seamlessly links e-commerce with powerful order, inventory and production management systems for optimum efficiency.</p>' +
      '<p>"This project is an exciting opportunity for us," commented One X Tech\'s Business Development Director, Lu Shu Hui. "We are passionate about assisting family companies in succeeding in the digital age, and we look forward to seeing Mr Bucket\'s success as a result of our collaboration."</p>' +
      '<p>With the help of One X Tech,&nbsp;Mr Bucket can now provide a modern, digital shopping experience that will delight its customers throughout Asia and beyond.</p>' +
      '<h2><strong>About One X Tech:</strong></h2>' +
      '<p>One X Tech is a leading technology company that focuses on building technological innovations for leading enterprises. We are on a mission to build a new digital economy by creating innovative digital solutions that put businesses at the digital frontier. One X Tech brings together an elite digital product team to create best-in-class products that scale across the world. One X Tech is based in Singapore and operates regionally in South East Asia.</p>' +
      '<h2><strong>About Mr Bucket Chocolaterie:</strong></h2>' +
      '<p>Mr Bucket Chocolaterie is a true Asian family-run chocolaterie for about 120 years. With a commitment to quality and a passion for chocolate, Mr Bucket has become a well-known and respected name in the Asian chocolate industry.</p>',
  },
].map((item, i) => ({
  id: i + 1,
  ...item,
}))

export const MOCK_TECH_PRESS_RELEASES: PressRelease[] = [
  ...MOCK_COMMON_PRESS_RELEASES,
  {
    is_active: true,
    published_at: '2023-05-29T01:43:55+0800',
    title:
      'Introducing the Revamped One X Tech Website: Unveiling a New Technological Era',
    slug: 'introducing-revamped-one-x-tech-website-unveiling-new-technological-era',
    subtitle:
      'One X Tech Launches Revamped Digital Platform: Empowering Businesses with Technological Innovation',
    hero_src: '/insights/1xt-banner.png',
    hero_alt: 'One X Tech banner',
    html:
      '<p>29th May 2023</p>' +
      '<p>Singapore: One X Tech, a software development service provider based in Singapore, is excited to announce the launch of its newly-updated website. The new website signifies a milestone in its mission to advance technology and provide cutting-edge frontend development solutions to companies around the world.</p>' +
      '<p>One X Tech&rsquo;s newly-released website (<a href="http://onextech.com/">onextech.com</a>) serves as a thorough platform to highlight both its knowledge and commitment to offering cutting-edge software solutions suited to the particular requirements of companies in a range of industries. The website provides helpful insights into One X Tech\'s broad range of consulting services, including enterprise software development, digital transformation strategies, and technology-driven business solutions, and it has been updated with a user-friendly interface.</p>' +
      '<p>One X Tech\'s Chief Technology Officer, Mr Joel Koh, said, "At One X Tech, we are incredibly excited about the launch of our revamped website, which reflects our unwavering commitment to technological excellence. Our mission is to enable businesses to fully utilize technology, allowing them to drive growth, streamline operations, and maintain a competitive edge in the fast-paced digital environment of today."</p>' +
      '<p>One X Tech\'s track record of assisting businesses in achieving their strategic goals through cutting-edge technological solutions is displayed on <a href="http://onextech.com/">onextech.com</a>. One X Tech aims to help businesses improve operational efficiency, optimize customer experiences, and maintain competitiveness in an ever-evolving market by leveraging their in-depth industry expertise and cutting-edge technical capabilities in frontend development.</p>' +
      "<p>The redesigned website's main attributes are:.</p>" +
      '<h2>Wide-ranging insights</h2>' +
      '<p>Businesses can better understand the value proposition that One X Tech offers by using the website, which offers thorough insights into the consulting services that the company offers. Businesses can investigate a broad range of solutions catered to their unique needs, from custom software development to digital transformation strategies.</p>' +
      '<h2>Customer Success Stories</h2>' +
      "<p>The newly updated website for One X Tech highlights actual success tales, emphasizing the radical transformation of their clients' businesses as a result of their solutions. Businesses can see firsthand through these case studies how One X Tech has aided organisations in overcoming obstacles and achieving outstanding outcomes.</p>" +
      '<h2>Leadership in thought</h2>' +
      '<p>The website has a section devoted to thought leadership that provides useful materials like professional insights. Visitors can keep up with the newest fashions, cutting-edge innovations, and best business practices to help them innovate and advance their companies.</p>' +
      '<p>"One X Tech\'s newly updated website is more than just an online presence. It is evidence of our unwavering dedication to expanding the frontiers of technological innovation, according to Mr Koh. "We invite companies to explore our new platform, interact with our experts, and learn how we can open up fresh possibilities for development, effectiveness, and transformation."</p>' +
      '<p><strong>For more information, contact:</strong></p>' +
      '<p><strong>Lu ShuHui</strong></p>' +
      '<p>Business Development Director</p>' +
      '<p><a href="mailto:shu@onextech.com">shu@onextech.com</a></p>',
  },
].map((item, i) => ({
  id: i + 1,
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: 'Three circles',
  author_avatar_src: '/images/author_joel_koh.png',
  author_avatar_alt: 'Picture of Joel Koh',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  ...item,
}))

export const MOCK_GROUP_PRESS_RELEASES: PressRelease[] = [
  ...MOCK_COMMON_PRESS_RELEASES,
  {
    is_active: true,
    published_at: '2023-07-12T01:43:55+0800',
    title: 'One X Group Broadens Horizons with One X Design',
    slug: 'one-x-group-expands-into-ui-ux-with-one-x-design',
    subtitle:
      'One X Group propels into the future of digital innovation with the introduction of One X Design, revolutionizing enterprise engagement through transformative UI/UX solutions.',
    hero_src: 'https://source.unsplash.com/OUi93Rto_bw/1600x900',
    hero_alt: 'colourful bubbles',
    html:
      '<h2>With One X Design, One X Group expands its horizons</h2>\n' +
      '<p>At One X Group, a quiet revolution is taking place as we navigate the constantly changing digital landscape. The technology partner, renowned for its dedication to innovative solutions, plans to expand its horizons by foraying into user interface and user experience design through its new arm, One X Design.</p>\n' +
      '<p>Today, a renewed sense of purpose is permeating the One X Group headquarters. A significant shift in how businesses view design is being brought about by teams of developers, designers, and business strategists working together in synergy. This change has long been due; it is an exciting and important natural evolution.</p>\n' +
      '<h2>Unlocking the Power of Design</h2>\n' +
      '<p>&quot;We think that technology is the superpower that transforms the entire business world. And flawless design is at the core of any successful technological innovation&rdquo;, according to Lu ShuHui, One X Design&rsquo;s Head of Design. &ldquo;With One X Design, we combine our technological know-how with creative design thinking to produce solutions that not only meet operational needs but also improve the user experience as a whole.&quot;</p>\n' +
      '<p>One X Design, a Singapore-based company, is committed to using design to transform business practices. One X Design assists enterprise clients in their journey toward digital transformation through targeted digital designs, in-depth user interface analysis, individualized user experiences, and interactive workshops.</p>\n' +
      '<h2>Redefining Business Through Design</h2>\n' +
      '<p>The One X Group&#39;s entry into the design field comes at a time when companies are increasingly realizing how crucial conversion-driven and goal-oriented human-centered designs are. One X Design&#39;s mission is to completely transform businesses from the inside out by scaling design systems, improving existing user interfaces, and empowering product teams.</p>\n' +
      '<p>A well-planned design not only simplifies workflows but also resolves challenging business issues. One X Design&rsquo;s goal is to produce designs that address issues at the speed and scope of contemporary businesses.</p>\n' +
      '<h2>Nurturing a User-Centric Mindset</h2>\n' +
      '<p>One important area in which One X Design stands out is its dedication to fostering a user-centric mindset within client organizations. The One X Design team fosters a culture of design-led innovation within businesses by providing product teams with the abilities and knowledge to produce outstanding user experiences through their interactive workshops.</p>\n' +
      '<p>One X Design was created with the goal of assisting businesses in their design transformation, much like One X Group does for their digital transformation journey. The synergies are endless and the potential is enormous when the two work together.</p>\n' +
      '<h2>Final Note</h2>\n' +
      '<p>The sense of camaraderie, shared vision, and collective aspiration is palpable as the teams at One X Group and One X Design continue to work tirelessly, each contributing in their own special way to the larger mission. The possibility of influencing the future of the digital economy through design is exciting, and the new direction has generated a lot of excitement.</p>\n' +
      '<p>They are prepared, is the resounding message coming from One X Group and One X Design&#39;s corporate offices. The journey has only just begun, but the outlook is positive.</p>\n' +
      '<p><em>Visit the website of One X Design right away to learn more about their offerings. <a href="https://www.onexdesign.com/*">https://www.onexdesign.com/</a></em></p>\n' +
      '<p>&nbsp;</p>\n',
  },
  {
    is_active: true,
    published_at: '2023-07-10T01:43:55+0800',
    title: 'One X Group Dives into Frontend Development, Launching One X Tech',
    slug: 'one-x-group-launches-one-x-tech-frontend-development',
    subtitle:
      'One X Group launches One X Tech, marking its strategic expansion into the modern frontend development sector.',
    hero_src: 'https://source.unsplash.com/tmTidmpILWw/1600x900',
    hero_alt: 'hardware',
    html:
      '<h2>Embarking on a New Digital Journey</h2>\n' +
      '<p>One X Group is pioneering new territory in the perpetually evolving digital world. One X Group, renowned as a business technology partner that fosters innovation, is now expanding its reach into the world of software development, specifically modern frontend development, with the launch of One X Tech.</p>\n' +
      '<p>The Group&#39;s corporate headquarters reverberate with renewed energy as teams of developers, designers, and strategists collaborate to write a new chapter in the company&#39;s history. They are fostering a transformation in the way businesses view and use frontend technology, starting a thrilling and important trend.</p>\n' +
      '<h2>Unifying Technology and Frontend Expertise</h2>\n' +
      '<p>One X Group is adamant that technology is the superpower that is changing the very foundations of business. The Group believes that a strong frontend design sits at the center of successful technological innovation. Through One X Tech, One X Group combines their frontend development expertise and technological expertise to create solutions that not only meet operational needs but also improve the user experience.</p>\n' +
      '<p>One X Tech, a Singapore-based company, aims to enhance enterprise digital capabilities through exceptional user experiences. One X Tech helps businesses with their digital transformation by providing high-performing frontend teams, aesthetically pleasing user interfaces, and state-of-the-art software architecture.</p>\n' +
      '<h2>Revolutionizing Businesses through Frontend Development</h2>\n' +
      '<p>One X Group&#39;s foray into frontend development comes at a good time, as companies are increasingly realizing how crucial a solid and engaging frontend is to generating user engagement and achieving business goals. One X Tech is prepared to transform industries from the ground up by creating cutting-edge user interfaces, adding talented frontend developers to product teams, and researching novel approaches to software architecture.</p>\n' +
      '<p>Frontend development is a gateway to enhanced user interaction. A well-designed interface not only enables fluid user interactions but also takes on complex business challenges. One X Tech&rsquo;s goal is to develop frontends that deal with these issues at the speed and scope of modern businesses.</p>\n' +
      '<h2>Cultivating Innovation and Digital Competence</h2>\n' +
      '<p>One X Tech is devoted to supplying businesses with the talent they require to meet their digital objectives. One X Tech fosters an innovative and digitally competent culture within client organizations by providing qualified frontend developers to support product teams.</p>\n' +
      '<p>One X Tech is ready to help companies with their frontend development requirements as One X Group continues to support businesses on their journey toward digital transformation. The two branches&#39; harmonious cooperation promises countless synergies and potential.</p>\n' +
      '<p>The atmosphere is brimming with shared visions, camaraderie, and collective aspirations even as teams from One X Group and One X Tech work tirelessly, each contributing to the overall mission in their own unique ways. The excitement surrounding the new direction is palpable, and the opportunities to shape the future of the digital economy through frontend development are thrilling.</p>\n' +
      '<p>One X Group and One X Tech have made a loud and clear declaration: they are ready for revolution, transformation, and digital evolution. The journey has only just begun, but the outlook is optimistic.</p>\n' +
      '<p><em>Visit the website of One X Tech right away to learn more about their offerings. <a href="https://www.onextech.com/*">https://www.onextech.com/</a></em></p>\n',
  },
  {
    is_active: true,
    published_at: '2023-07-07T01:43:55+0800',
    title: 'One X Group Dives into Data; Introduces One X Data',
    slug: 'one-x-group-launches-one-x-data',
    subtitle:
      'Exploring the expansive realm of data, One X Group unveils One X Data to revolutionize enterprise decision-making with advanced analytics and AI solutions.',
    hero_src:
      'https://source.unsplash.com/macbook-pro-on-white-surface-WiONHd_zYI4/1600x900',
    hero_alt: 'singapore',
    html:
      '<p>We&#39;re pleased to announce that One X Group will be entering the fields of data analytics and artificial intelligence through our new company, One X Data.</p>\n' +
      '<p>One X Data, a leader in data science services who believes in the transformative power of data, will provide cutting-edge analytics and artificial intelligence (AI) solutions to businesses. We are prepared to expand our influence and skill in this new endeavour because we are based in the thriving tech hub of Singapore.</p>\n' +
      '<h2>Revolutionizing Business through Data Science</h2>\n' +
      '<p>Our dedicated platform for high-end data analytics and AI-driven solutions is called One X Data. Utilizing enterprise data to its full potential will enable us to generate insightful data that will help us make better decisions and streamline business operations.</p>\n' +
      '<p>The development of intelligent systems, predictive models, and automated procedures will be spearheaded by our cutting-edge facility. These revolutionary solutions will revolutionize how our clients work and usher in a new era of accuracy and efficiency.</p>\n' +
      '<h2>Data Strategy, Consulting, and Machine Learning</h2>\n' +
      '<p>One X Data offers strategic data consulting along with analytics and AI solutions. In order to create custom data strategies that ensure data governance, privacy, and security while maximizing the value of our clients&#39; data assets, our team of experts works closely with each client.</p>\n' +
      '<p>We are also experimenting with machine learning. We&#39;re creating models with strong algorithms to improve anomaly detection, forecasting accuracy, and recommendation systems for crucial business applications.</p>\n' +
      '<h2>A New Era for One X Group</h2>\n' +
      '<p>A fascinating new chapter for One X Group has begun with the establishment of One X Data. We have always believed in the transformative power of technology in business as an experienced technology partner. By incorporating the power of data into our fundamental model, we are now moving beyond that belief.</p>\n' +
      '<p>Our dedication to producing transformational results in the digital world is strengthened by this expansion. Our mission to unleash the potential of a supercharged digital economy remains unchanged as we embark on this new endeavour.</p>\n' +
      '<p>One X Data is evidence of our continuing development and readiness to meet new challenges. We are excited to continue empowering businesses with cutting-edge solutions and making a positive impact on the larger digital ecosystem as we embrace this new environment.</p>\n' +
      '<p><em>Are you ready to tap into the power of your data? Visit One X Data at <a href="https://www.onexdata.co/*">https://www.onexdata.co/</a></em></p>\n',
  },
  {
    is_active: true,
    published_at: '2023-05-30T01:43:55+0800',
    title:
      'Revolutionizing Technology Solutions: Introducing the New One X Group Website',
    slug: 'revolutionizing-technology-solutions-introducing-one-x-group-new-website',
    subtitle:
      "Unleashing the Power of Technological Transformation: Introducing One X Group's New Digital Frontier",
    hero_src: '/insights/1xg-banner.png',
    hero_alt: 'One X Group banner',
    html:
      '<p>30th May 2023</p>' +
      '<p>One X Group, a cutting-edge technology consulting firm, is proud to launch its eagerly awaited new website, <a href="http://www.onexgroup.co/">www.onexgroup.co</a>. This cutting-edge platform serves as a testament to One X Group\'s unrelenting pursuit of innovation as it introduces a variety of tailored software solutions created to satisfy the particular requirements of businesses in various industries.</p>' +
      '<p>Key Features of the new website include:</p>' +
      '<h2>Tailored Solutions for Every Need</h2>' +
      "<p>A thorough overview of One X Group's customized solutions is given on the new website. Enterprise software development and digital transformation strategies are the main areas that businesses should concentrate on, but they can also look into the wide range of services available to them that are tailored to meet their specific needs.</p>" +
      '<h2>Thought Leadership and Insights</h2>' +
      '<p>On its website, One X Group has devoted a sizable section to thought leadership, providing useful materials like market analysis, whitepapers, and best practices. Businesses can gain a competitive edge and make wise decisions by keeping up with the newest trends and emerging technologies.</p>' +
      '<h2>Showcased Success Stories</h2>' +
      "<p>One X Group's ability to produce transformative results for businesses is proudly displayed on the updated website through success stories. The success of One X Group's solutions on growth and operational excellence is demonstrated in these case studies, which act as testimonials.</p>" +
      '<p>Businesses gain useful knowledge about the extensive consulting services provided by One X Group by visiting the newly launched website. One X Group equips businesses to effectively use technology, boosting operational effectiveness, elevating customer experiences, and fostering strategic growth. This includes providing enterprise-level software development and strategic technology consulting.</p>' +
      '<p>For more information and inquiries, please contact:</p>' +
      '<p><strong>Lu ShuHui</strong> Business Development Director Email: <a href="mailto:shu@onexgroup.co">shu@onexgroup.co</a></p>',
  },
  {
    is_active: true,
    published_at: '2023-06-30T01:43:55+0800',
    title: 'Unveiling the Future of Unique Enterprise Software Development',
    slug: 'unveiling-future-unique-enterprise-software-development',
    subtitle:
      "Explore how One X Group's Custom Software Advantage™ reshapes business operations through bespoke digital solutions.",
    hero_src: 'https://source.unsplash.com/3shfnfzdFVc/1600x900',
    hero_alt: 'Circular lights',
    html: '<h2>Introducing One X Group</h2><p>With a fresh identity and a transformative approach, we launch the next phase of our mission: empowering organisations to achieve unprecedented success by leveraging the Custom Software Advantage&trade;.</p><h2>Bespoke. Innovative. Fast. This is the future of work</h2><p>Many businesses underperform due to over-reliance on off-the-shelf software due to a variety of reasons, including probable downtime and security matters. In the modern digital world, this could pave the way for obsolescence.</p><p>In this increasingly digital and disruptive era, a historic opportunity exists to adapt your business and create new and exceptional value. As a direct outcome of the 4th industrial revolution, the demand for personalised digital solutions is growing at an unprecedented rate.</p><p>Regrettably, many established companies find it difficult to adapt to this shift. They need assistance.</p><p>The answer is a new model for operating a modern business. A modern operating model that allows companies to tailor their software solutions according to their unique needs, overcoming the limitations of generic platforms, and fully capitalising on their digital ecosystem.</p><p>We believe this model is not just possible &mdash; it&#39;s essential to the future of business success. And it&#39;s made possible by One X Group.</p><h2>What this means for our customers</h2><p>In essence, One X Group delivers the Custom Software Advantage&trade;. What does this mean? It means breaking free from the constraints of off-the-shelf solutions. Simplifying complex processes. Fostering focus, transparency, and alignment. Decisions are made swiftly and confidently &mdash; and nothing stands in the way of progress.</p><p>One X Group empowers you to unlock new levels of success by creating an organization that excels at strategic execution and consistently delivers the best possible:</p><ul><li>Customised software solutions</li><li>Customer experience</li><li>Products and services</li><li>Productivity and efficiency</li><li>Employee engagement</li></ul><p>One X Group helps you experience the Custom Software Advantage&trade;. Period.</p><h2>A new identity. A new promise.</h2><p>One X Group embodies our commitment to custom software solutions &mdash; a significant shift towards a more personalised approach.</p><p>Just like we&#39;re helping modern businesses redefine how they operate, we&#39;re also defining One X Group. Something more powerful. Something new. Something built for the future.</p><p>When organisations break free from the constraints of generic software, achieve operational excellence, and leverage custom software solutions to inform and improve decision-making every step of the way, that&#39;s the Custom Software Advantage&trade;.</p><h2>Our new manifesto</h2><p>Our manifesto dares to challenge the status quo, speaking directly to an audience of ambitious leaders ready to experience the transformative power of custom software. We aim to highlight the concepts of empowerment, alignment, and innovation while maintaining relevance and clarity in our messaging.</p><h2>Making a mark in the digital world</h2><p>Our identity is also an essential part of our brand. It&rsquo;s how we make our unique contribution to the digital world. Derived from our manifesto, our logo symbolises our mission &ndash; to empower every organization to experience the Custom Software Advantage&trade;. It&#39;s an effective way to convey this message across all brand touchpoints &mdash; even in the smallest spaces.</p><h2>Join us for this exciting next chapter</h2><p>We&#39;re thrilled about this next phase of our journey and the potential value we can unlock for our customers. Stay tuned as our teams continue to work on providing you the technology and resources you need to break away from the limitations of generic software. And if you&rsquo;re ready to experience the Custom Software Advantage&trade;, let&#39;s talk.</p><p>One X Group is your bridge between traditional software and custom solutions. Founded on the principle of delivering personalised software solutions, our platform is where businesses can visualise their unique digital ecosystem, focus and align their teams accordingly, and stay at the forefront of innovation.</p><p>As your company aims to achieve unprecedented success, you need a modern approach to manage your business and transform your operations. Our Custom Software Model brings together strategy, teams, and technology to help make decisions faster, optimise operations, and drive better business outcomes.</p><p>Whether you&#39;re a large enterprise facing digital disruption or a small business leading the innovation charge, One X Group helps get you where you want to go.</p><p>Ready to experience the Custom Software Advantage&trade;? Start your journey with One X Group today.</p>',
  },
].map((item, i) => ({
  id: i + 1,
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: 'Three circles',
  author_avatar_src: '/images/author_joel_koh.png',
  author_avatar_alt: 'Picture of Joel Koh',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
  tags: sampleSize(MOCK_GROUP_TAGS, 3),
  ...item,
}))

export const MOCK_DATA_PRESS_RELEASES: PressRelease[] = [
  ...MOCK_COMMON_PRESS_RELEASES,
  {
    is_active: true,
    published_at: '2023-05-30T01:43:55+0800',
    title:
      'Introducing One X Data: Revolutionizing Enterprise Data and AI Solutions',
    slug: 'introducing-one-x-data-revolutionizing-enterprise-data-ai-solutions',
    subtitle:
      "Unlocking the Power of Data: Introducing One X Data's Innovative Website for Advanced AI Solutions",
    hero_src: '/insights/1xdt-banner.png',
    hero_alt: 'One X Data banner',
    html:
      '<p>30th May 2023</p>' +
      '<p>SINGAPORE: Today marks a significant milestone for One X Data as we proudly announce the official launch of our website, <a href="http://onexdata.co/">onexdata. co</a>. One X Data, a top supplier of business data and AI solutions, is proud to announce the launch of its website, <a href="http://onexdata.co/">onexdata.co</a>. One X Data is revolutionizing the way businesses harness and realize the potential of their data by focusing on leveraging cutting-edge technologies like Chat GPT and AI.</p>' +
      '<p>Businesses can explore One X Data\'s cutting-edge data and AI solutions on the recently launched <a href="http://onexdata.co/">onexdata.co</a> website, which offers a user-friendly platform. Businesses can confidently navigate the complex data landscape and extract useful insights using analytics, visualization, machine learning, and predictive modeling.</p>' +
      "<h2>The New Website's Key Features:</h2>" +
      "<p>Important Data Insights: Discover trends and patterns that help you make well-informed decisions by using thorough data analytics to gain important insights into your company. Explore a showcase of previous projects that highlights the transformative effects of One X Data's solutions on companies across a range of industries. Expert Advice: Take advantage of the knowledge of the One X Data team, who will give you advice and support to help you get the most out of your data and AI initiatives.</p>" +
      '<p><strong>For more information, contact:</strong></p>' +
      '<p><strong>Lu ShuHui</strong></p>' +
      '<p>Business Development Director</p>' +
      '<p><a href="mailto:shu@onextech.com">shu@onextech.com</a></p>' +
      '<p>Through <a href="http://onexdata.co/">onexdata.co</a>, One X Data uses data and AI to create transformative change. With One X Data, explore the potential of data-driven innovation and realize the full potential of your company.</p>',
  },
].map((item, i) => ({
  id: i + 1,
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: 'Three circles',
  author_avatar_src: '/images/author_joel_koh.png',
  author_avatar_alt: 'Picture of Joel Koh',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  ...item,
}))

export const MOCK_DESIGN_PRESS_RELEASES: PressRelease[] = [
  ...MOCK_COMMON_PRESS_RELEASES,
  {
    is_active: true,
    published_at: '2023-06-01T01:43:55+0800',
    title:
      'Introducing One X Design: Redefining User Experience and Interface Design',
    slug: 'introducing-one-x-design-redefining-user-experience-interface-design',
    subtitle:
      "Elevating User Experiences: Introducing One X Design's Cutting-Edge Website for Seamless UI/UX Solutions",
    hero_src: '/insights/1xd-banner.png',
    hero_alt: 'One X Design banner',
    html:
      '<p>1st June 2023</p>' +
      '<p>SINGAPORE: One X Design, a UI/UX service provider, is thrilled to announce the official launch of their new website, <strong><a href="http://www.onexdesign.com/">www.onexdesign.com</a></strong>. This exciting milestone marks a significant step forward in the company\'s mission to revolutionize the world of user experience and interface design.</p>' +
      '<p>With the relentless pursuit of excellence and innovation, One X Design has established itself as a prominent player in the UI/UX industry. Their team of highly skilled designers and developers is dedicated to creating immersive digital experiences that captivate users and drive business results.</p>' +
      "<p>The newly launched website showcases One X Design's expertise and commitment to delivering exceptional UI/UX solutions. Visitors will be greeted with a sleek and intuitive interface that reflects the company's design principles and showcases its portfolio of successful projects.</p>" +
      '<h2>Key features include:</h2>' +
      '<ol>' +
      "<li><strong>Immersive Portfolio:</strong> One X Design's portfolio is showcased on the website in an engaging manner, showcasing their noteworthy work in a range of industries. Visitors can learn about the company's design capabilities and creative solutions.</li>" +
      '<li><strong>Design Principles:</strong> One X Design places a strong emphasis on their design principles on their website, showcasing their dedication to developing aesthetically pleasing, understandable, and user-centric interfaces. Their proficiency in providing seamless experiences is demonstrated by their website itself.</li>' +
      "<li><strong>Client-Centric Approach:</strong> One X Design's dedication to client satisfaction and teamwork is highlighted on the website. They place a high priority on comprehending the particular needs and objectives of their clients, ensuring that every project is customized to suit those needs.</li>" +
      "<li><strong>Expert Team:</strong> The website introduces One X Design's highly qualified team of designers and developers, who are passionate about producing exceptional UI/UX experiences. Customers can rely on their experience and industry knowledge to provide them with creative and effective solutions.</li>" +
      '</ol>' +
      "<p>With the help of these crucial components, One X Design's website functions as an engaging space for companies to explore their offerings, find inspiration, and interact with a group of people committed to elevating user experiences through creative UI/UX design solutions.</p>" +
      '<p><strong>For more information, contact:</strong></p>' +
      '<p><strong>Lu ShuHui</strong></p>' +
      '<p>Business Development Director</p>' +
      '<p><a href="mailto:shu@onextech.com">shu@onextech.com</a></p>',
  },
].map((item, i) => ({
  id: i + 1,
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: 'Three circles',
  author_avatar_src: '/images/author_joel_koh.png',
  author_avatar_alt: 'Picture of Joel Koh',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  ...item,
}))

export const MOCK_DIGITAL_PRESS_RELEASES: PressRelease[] = []

export const MOCK_FINX_PRESS_RELEASES: PressRelease[] = []

export const MOCK_GOVX_PRESS_RELEASES: PressRelease[] = []

export const MOCK_AEL_PRESS_RELEASES: PressRelease[] = []
export const MOCK_SRI_PRESS_RELEASES: PressRelease[] = []
export const MOCK_GVS_PRESS_RELEASES: PressRelease[] = []
export const MOCK_COASTAL_PRESS_RELEASES: PressRelease[] = []

export const MOCK_PRESS_RELEASES = {
  GROUP: MOCK_GROUP_PRESS_RELEASES,
  TECH: MOCK_TECH_PRESS_RELEASES,
  DATA: MOCK_DATA_PRESS_RELEASES,
  DESIGN: MOCK_DESIGN_PRESS_RELEASES,
  DIGITAL: MOCK_DIGITAL_PRESS_RELEASES,
  FINX: MOCK_FINX_PRESS_RELEASES,
  GOVX: MOCK_GOVX_PRESS_RELEASES,
  AEL: MOCK_AEL_PRESS_RELEASES,
  SRI: MOCK_SRI_PRESS_RELEASES,
  GVS: MOCK_GVS_PRESS_RELEASES,
  COASTAL: MOCK_COASTAL_PRESS_RELEASES,
}
