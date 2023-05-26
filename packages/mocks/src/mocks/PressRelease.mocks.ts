import sampleSize from 'lodash/sampleSize'
import { MOCK_GROUP_TAGS, MOCK_TECH_TAGS } from './Tag.mocks'
import { PressRelease } from '@onex/types'

export const MOCK_TECH_PRESS_RELEASES: PressRelease[] = [
  {
    is_active: true,
    published_at: '2019-03-25T01:43:55+0800',
    title: 'One X Tech Launches Digitize™ Program',
    slug: 'one-x-tech-launches-digitize™-program',
    subtitle: "One X Tech Press Release: Launch of One X Tech Digitize™ Program",
    html:
    '<p>SINGAPORE: One X Tech, the world&rsquo;s first digital business platform, today announced that it has launched a new initiative aimed at encouraging companies to take their first step towards developing digital capabilities. Known as the One X Tech Digitize&trade; Program, the new initiative helps companies build stronger digital capabilities and deploy IT solutions in their business.</p>' + 
    '<p>Under the Digitize&trade; program, companies can receive up to $5,000 worth of credits to exchange for digital services, and be entitled to book exclusive training sessions with One X Tech&rsquo;s digital consultants. The program is available to enterprise clients, small/medium businesses, and early-stage companies, with benefits catered specially to the needs of each group.</p>' + 
    '<p>&ldquo;The Digitize&trade; program has helped our customers overcome the inertia faced when adopting new technology and provides them with the right support to grow their business,&rdquo; said Lu ShuHui, Director of Client Communications at One X Tech. &ldquo;In today&rsquo;s increasingly digital economy, companies looking to expand their business can depend on Digitize&trade; to kickstart their digital capabilities with ease and confidence.&rdquo;</p>' + 
    '<p>Companies keen to explore digital solutions under the Digitize&trade; program can apply through the One X Tech website today.</p>'
  },
  {
    is_active: true,
    published_at: '2018-11-21T01:43:55+0800',
    title: 'One X Tech Moves to Robinson Road, Singapore',
    slug: 'one-x-tech-moves-to-robinson-road-singapore',
    subtitle: "One X Tech Press Release: One X Tech Moves to New Office in Singapore to Create Digital Hub",
    html:
    '<p>SINGAPORE: Digital agency One X Tech officially unveiled its new Singapore office located at Robinson Road on Thursday (Nov 10).</p>' + 
    '<p>The Singapore office which serves as the firm&rsquo;s regional head-quarters in the Asia Pacific region, houses its growing team of digital consultants, designers and software engineers.</p>' + 
    '<p>Commenting on the move to its new location in the heart of the central business district, Director of Technology Management, Joel Koh cited the company&rsquo;s desire to promote an integral digital hub for its customers and partners.</p>' + 
    '<p>&ldquo;In line with our momentum of enabling a greater digital ecosystem in Asia, the move has enabled us to create a more collaborative and inspirational space for our clients and team members alike,&rdquo; said Mr Koh.</p>' + 
    '<p>&ldquo;Singapore is key to our continued growth in the region, and we are excited to be part of a space that fosters greater creativity and innovation," he added.</p>' + 
    '<p>One X Tech\'s upgrade comes after it announced its plans to release a suite of new digital services and IT solutions to empower smart businesses last month.</p>'
  },
  {
    is_active: true,
    published_at: '2018-10-19T01:43:55+0800',
    title: 'Introducing One X Tech\'s Digital Business Suite',
    slug: 'one-x-tech-digital-business-suite',
    subtitle: "One X Tech Press Release: Introducing One X Tech\'s Digital Business Suite",
    html:
    '<p>SINGAPORE: Earlier today, digital agency One X Tech, announced the launch of Digital Business Suite &mdash; a comprehensive offering of digital and IT services aimed at supporting businesses in their digital transformation journey.</p>' + 
    '<p>Amidst today\'s rapidly evolving business landscape, companies want access to the best digital tools and services to stay ahead. With the Digital Business Suite, managers can easily apply established technologies in their work through the proven capabilities and support of the One X Tech digital team. With services spread across key areas such as automation, growth, innovation and more, the Digital Business Suite has been designed specifically to meet the needs of today&rsquo;s modern businesses.</p>' + 
    '<p>&ldquo;We are excited to announce the launch of the Digital Business Suite as an integral way of sharing our expertise in the Digital and IT space with our customers,&rdquo; said Joel Koh, One X Tech&rsquo;s Director of Technology Management.</p>' + 
    '<p>&ldquo;The Digital Business Suite will make it easier than ever for managers to run their business with greater confidence and intelligence. We are more than happy to do so because it brings us closer towards our vision of creating a unified digital eco- system in Asia,&rdquo; he added.</p>' + 
    '<p>The Digital Business Suite is currently available for all customers operating in the Asia Pacific region.</p>'
  },
  {
    is_active: true,
    published_at: '2023-02-13T01:43:55+0800',
    title: 'Tyme Digital Banking collaborates with One X Tech to redesign its digital capabilities to build up brand presence',
    slug: 'tyme-digital-banking-collaborates-with-one-x-tech-to-redesign-its-digital',
    subtitle: "With the collaboration between Tyme Digital Banking and One X Tech, customers worldwide can now access innovative digital banking solutions and experience exceptional services from a trusted partnership.",
    html:
    '<p>Tyme Digital Banking announces a collaboration with One X Tech to redesign its digital capabilities in order to exhibit their full capabilities and worldwide presence.</p>' + 
    '<p>The website launch is an important milestone in Tyme\'s digital transformation journey and demonstrates the company\'s commitment to delivering the best online experience for its customers and stakeholders. The new website has a clean and modern appearance, as well as a user-friendly layout that makes it easy for users to access essential information and services.</p>' + 
    '<p>"We are thrilled to be working with Tyme on this exciting venture," says Mr Joel Koh, Chief Technology Officer of One X Tech. "Our team of experts partnered closely with Tyme to understand their needs and design a website that demonstrates the company\'s commitment to innovation and excellence in the digital banking market."</p>' + 
    '<p>Users are able to access full information about the group\'s management team and Tyme\'s capabilities, as well as up-to-date press releases and news stories, via the website. Furthermore, potential employees can explore existing positions available at Tyme and apply immediately through the website, expediting both the application and hiring processes. Tyme Group\'s high tech and high touch brand experience website offers a one-stop destination for digital banking solutions, market offerings and career opportunities.</p>' + 
    '<p>The website can now effectively portray the extent and breadth of Tyme Group\'s international reach. Customers can discover the complete range of services that this unique company provides throughout the world, through this website.</p>' + 
    '<p>Tyme has grown to become one of the world\'s fastest-growing financial firms, serving over 6 million consumers across multiple countries since launching its initial digital banking business in South Africa. Tyme\'s new website is an important aspect of the company\'s digital strategy, enabling it to reach a larger audience and provide more accessible and reliable information about its services.</p>' + 
    '<p>The website brilliantly encapsulates Tyme\'s mission to revolutionize financial services and create a personalized customer experience, allowing customers everywhere access to their money with trust and confidence.</p>' + 
    '<p><strong>About One X Tech:</strong></p>' + 
    '<p>One X Tech is a leading technology company that focuses on building technological innovations for leading enterprises. We are on a mission to build a new digital economy by creating innovative digital solutions that put businesses at the digital frontier. One X Tech brings together an elite digital product team to create best-in-class products that scale across the world. One X Tech is based in Singapore and operates regionally in South East Asia.</p>' + 
    '<p><strong>About Tyme Group:</strong></p>' + 
    '<p>Tyme is creating a revolutionary digital banking experience by expanding economic access across emerging markets in Asia and Africa. Fuelled by their commitment to unleash human potential, the company has partnered with local stakeholders to launch cutting-edge banks. TymeGlobal\'s disruptive business model integrates retailers for an unparalleled financial services solution that was previously impossible due to accessibility issues.</p>'
  },
  {
    is_active: true,
    published_at: '2022-04-07T01:43:55+0800',
    title: 'Launch of NextGEN Connect Challenge Platform at the International Maritime Organization Future of Shipping Conference 2022',
    slug: 'launch-of-nextgen-connect-challenge-platform-at-the-international-maritime',
    subtitle: "The International Maritime Organization and Maritime Port Authority of Singapore collaborated with One X Tech to launch NextGEN Connect Challenge, driving sustainable shipping and decarbonization efforts in the Asia-Pacific region.",
    html:
    '<p>In conjunction with the International Maritime Organization Future of Shipping Conference and Singapore Maritime Week 2022, the International Maritime Organization and Maritime Port Authority of Singapore have jointly launched the NextGEN Connect Challenge Platform powered by One X Tech.</p>' + 
    '<p>Mr S Iswaran, Minister for Transport and Minister-in-charge of Trade Relations, kicked off the NextGEN Connect Challenge with these opening words, &ldquo;It is important for public and private stakeholders to work together in a collective and inclusive manner globally to accelerate the maritime sector\'s transition towards a low-carbon future. NextGEN Connect serves as a collaborative platform that matches the challenges of sustainable shipping to diverse solution providers across borders and industries. The platform also shares innovative and successful projects that address common problems in shipping worldwide. In this way, no one is left behind on the access to creative sustainability solutions in achieving the goals of the Initial IMO GHG Strategy&rdquo;.</p>' + 
    '<p>The NextGEN database currently comprises more than 500 stakeholders across the world, including IMO Member States, shipowners, technology developers, classification societies, and non-governmental organisations. It is an interactive website that currently lists more than 150 decarbonisation projects. Viewers of the website can utilise an engaging interactive map to gain insight into environment projects happening around the world. Not only will they be able to select a specific country and explore its project, but also use the thematic map feature which presents users with a comprehensive overview of each area\'s environmental themes.</p>' + 
    '<p>NextGEN Connect Challenge seeks to cut greenhouse gas emissions along maritime routes in the Asia and Pacific regions by gathering original route-based action plans from various stakeholders. The entries were accepted via <a href="http://nextgen.imo.org/challenge">nextgen.imo.org/challenge</a>.</p>' + 
    '<p>Participants could learn more about the challenge statement and submitted their proposals after creating an account on the NextGEN website. The platform streamlined the submission and evaluation process, making it more efficient and fair, by asking detailed questions about their solutions, risks and challenges of their solutions and allowing them to upload supporting documents directly onto the platform. Participants could easily check the status of their proposals on their account dashboard to see if they have been shortlisted.</p>' + 
    '<p>Mr Joel Koh, Chief Technology Officer added &ldquo;One X Tech is delighted to support the Maritime and Port Authority of Singapore (MPA) and the International Maritime Organization in launching the NextGEN Connect Challenge and promoting inclusive maritime decarbonisation".</p>' + 
    '<p>NextGEN connect enabled participants to join a global network of over 500 partners to showcase their projects and gain entry to events centred on inclusive maritime decarbonisation, thereby unlocking their prospects. This collaborative endeavour marks a significant turning point in the global maritime industry\'s digital transformation.</p>' + 
    '<p><strong>About One X Tech:</strong></p>' + 
    '<p>One X Tech is a leading technology company that focuses on building technological innovations for leading enterprises. We are on a mission to build a new digital economy by creating innovative digital solutions that put businesses at the digital frontier. One X Tech brings together an elite digital product team to create best-in-class products that scale across the world. One X Tech is based in Singapore and operates regionally in South East Asia.</p>' + 
    '<p><strong>About Maritime Port Authority of Singapore:</strong></p>' + 
    '<p>Maritime Port Authority of Singapore (MPA) is a leading maritime agency driving Singapore\'s global maritime aspirations. MPA was established on 2 February 1996, with the mission to develop Singapore as a premier global hub port and international maritime centre (IMC), and to advance and safeguard Singapore\'s strategic maritime interests.</p>' + 
    '<p><strong>About International Maritime Organisation:</strong></p>' + 
    '<p>IMO is the United Nations\' specialized agency responsible for safety and security of shipping and the prevention of marine pollution by ships. With 174 Member States and three Associate Members, IMO is based in London with around 300 international staff.</p>'
  },
].map((item, i) => ({
  id: i + 1,

  // Images
  avatar_src: '/images/about_shape_circle_radial.svg',
  avatar_alt: 'Three circles',
  hero_src: '/images/about_working_in_office.png',
  hero_alt: 'People working in office',
  // Author
  author_avatar_src: '/images/author_joel_koh.png',
  author_avatar_alt: 'Picture of Joel Koh',
  author_title: 'Joel Koh',
  author_job_title: 'Digital Lead',
  // Tags
  tags: sampleSize(MOCK_TECH_TAGS, 3),
  ...item,
}))

export const MOCK_GROUP_PRESS_RELEASES: PressRelease[] = MOCK_TECH_PRESS_RELEASES.map(
  (item, i) => ({
    ...item,
    // Tags
    tags: sampleSize(MOCK_GROUP_TAGS, 3),
  })
)

export const MOCK_DATA_PRESS_RELEASES: PressRelease[] = []

export const MOCK_DESIGN_PRESS_RELEASES: PressRelease[] = []

export const MOCK_PRESS_RELEASES = {
  GROUP: MOCK_GROUP_PRESS_RELEASES,
  TECH: MOCK_TECH_PRESS_RELEASES,
  DATA: MOCK_DATA_PRESS_RELEASES,
  DESIGN: MOCK_DESIGN_PRESS_RELEASES
}
