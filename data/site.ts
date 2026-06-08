/**
 * ============================================
 * PAGE CONTENT DATA
 * ============================================
 * All structured content for pages lives here.
 * Edit these arrays/objects to customize the template content.
 *
 * Replace placeholder images in src/assets/ with your own.
 */

export const site = {
  url: 'https://jeremymcoad.com',
  meta: {
    title: 'Jeremy M Coad | Product Owner',
    description:
      'Product Owner with 10+ years of experience delivering healthcare technology digital products and patient engagement solutions.',
  },
  hero: {
    name: 'Jeremy M Coad',
    credential: 'Certified Scrum Product Owner',
    role: 'Product Owner - Healthcare Technology',
    tagline: 'Leading product discovery, prioritization, and delivery for healthcare organizations focused on improving patient experiences.',
    contact: 'Known for aligning stakeholders, simplifying complexity, and turning strategy into successful product outcomes.',
    avatarSrc: '/jeremy-m-coad-healthcare-technology-product-owner.png',
    avatarAlt: 'Jeremy M Coad',
  },
  about: {
    paragraphs: [
      'Product Owner with 10+ years of experience delivering digital products and patient engagement solutions, with a strong focus in healthcare technology and patient experience platforms.',
      'Proven ability to lead product strategy, translate complex clinical and operational needs into scalable solutions, and deliver measurable improvements in access, engagement, and revenue cycle performance.',
      'Experienced working in HIPAA-compliant environments, aligning cross-functional stakeholders, and driving outcomes across patient engagement, CRM, and digital health ecosystems.',
      {
        heading: 'Core Competencies',
        bullets: [
          'Designing and delivering unified healthcare engagement platforms across fragmented EMR, CRM, and contact center systems',
          'Translating product intent into scalable workflows on CDP-driven architectures (e.g., Twilio Segment) for patient data unification and activation',
          'Improving agent and clinician efficiency through role-based dashboards, streamlined patient context, and reduced system switching',
          'Driving cross-functional delivery as a Product Owner using Agile/Scrum, balancing stakeholder priorities with incremental release planning',
          'Defining end-to-end patient journey experiences across messaging, scheduling, and support channels with a focus on usability and accessibility',
          'Partnering with engineering to shape maintainable product structures, clear acceptance criteria, and production-ready delivery pipelines',
        ],
      },
      {
        heading: ' ',
        techItems: [
        { label: 'cv', href: '/Jeremy-Coad-Healthcare-Technology-Product-Owner_web.pdf' },
        { label: 'linked in', href: 'https://linkedin.com/in/jeremymcoad' },
        { label: 'email', href: 'mailto:jeremymatthewcoad@gmail.com' }
],
      },
    ],
  },
  hobbies: {
  paragraphs: [
    '👋 Hello, my name is Jeremy Coad.',
    `I’m naturally curious about how things work—whether building solutions professionally or taking things apart just to understand them.

    Outside of work, I value family, music, and time with my guitar, which gives me space to think and reset. I enjoy working with my hands, tinkering, board games, canoeing, and solving problems.

    Travel and nature keep me grounded and curious, and I try to carry that same curiosity and hands-on mindset into everything I do.`,
  ],
},
  experiences: [
    {
      period: '10/2023 - PRESENT',
      title: 'Product Owner · Patient Engagement Platforms',
      brandLogo: 'eyecare-partners.jpg',
      company: 'EyeCare Partners',
      summary:
        'Spearheaded product strategy and delivery for HIPAA-compliant patient engagement systems, including a contact center UI with messaging automation and a patient portal integrated with healthcare EMR systems.',
      highlights: [
        'Defined and prioritized product requirements across stakeholders in Contact Center, Operations, Marketing, Legal/Compliance, and Revenue Cycle Management, aligning cross-functional teams around shared delivery goals',
        'Partnered with DevOps, Enterprise Architecture, Cloud Security, and Infrastructure teams to ensure scalable, secure, and compliant system design',
        'Led agile delivery practices, managed product backlogs, and drove roadmap execution to improve patient experience and operational efficiency across healthcare workflows',
      ],
      tech: ['Product Strategy', 'Product Roadmapping', 'Product Management', 'Agile Methodologies', 'Backlog Management'],
    },
    {
      period: '10/2022 - 9/2023',
      title: 'Customer Relationship Manager - Healthcare Marketing Technology',
      brandLogo: 'eyecare-partners.jpg',
      company: 'EyeCare Partners',
      summary:
        'Managed enterprise CRM strategy and marketing automation across a multi-brand healthcare organization.',
      highlights: [
        'Designed and implemented CRM platform (Cordial) supporting patient communication at scale',
        'Built automated patient engagement workflows (appointment reminders, confirmations, follow-ups)',
        'Developed targeted campaigns to improve patient retention, reactivation, and service utilization',
        'Enabled data-driven segmentation and personalization across 350+ locations',
      ],
      tech: ['Customer Relationship Management (CRM)', 'Email Marketing', 'Stakeholder Management', 'Patient Journey Mapping'],
    },
    {
      period: '1/2022 - 7/2022',
      title: 'Marketing Project Manager - Digital Health Initiatives',
      brandLogo: 'eyecare-partners.jpg',
      company: 'EyeCare Partners',
      summary:
        'Supported enterprise digital transformation initiatives focused on patient experience and digital presence.',
      highlights: [
        'Led implementation of customer experience platform (Sprinklr) across 55+ healthcare brands',
        'Deployed digital presence management (Yext) to improve patient access and local SEO',
        'Contributed to patient journey mapping and experience optimization initiatives',
        'Supported clinical growth programs, contributing to 1.5% increase in procedure conversion rates',
      ],
      tech: ['Strategic Initiatives', 'Digital Transformation', 'Customer Experience Strategy', 'Product Implementation'],
    },
    {
      period: '1/2022 - 7/2022',
      title: 'Marketing Manager - Eyecare Services',
      brandLogo: 'eiwf.jpg',
      company: 'The Eye Institute of West Florida',
      summary:
        'Led digital strategy and patient engagement initiatives for a multi-location specialty practice.',
      highlights: [
        'Increased online appointment bookings by 56% through digital transformation initiatives',
        'Improved patient portal adoption by 30% via UX improvements and communication strategies',
        'Reduced no-show rates by 1.3% using automated patient reminder systems',
        'Implemented CRM and lead management workflows to improve conversion rates',
        'Increased patient satisfaction and online reputation (10x growth in positive reviews)',
        'Optimized paid search campaigns, increasing ROI by 28%',
      ],
      tech: ['Patient Acquisition', 'Patient Experience Optimization', 'Digital Strategy', 'Patient Engagement Strategy'],
    },
  ],
  featuredProjects: [
    {
      title: 'Streamlined Patient Scheduling Modal',
      period: '2026',
      summary: 'Healthcare organizations often relied on fragmented scheduling workflows that forced patients to navigate multiple pages or external systems to book appointments. This created friction in the patient journey, leading to drop-offs, reduced conversion from digital traffic, and inconsistent scheduling experiences across locations. Internally, scheduling complexity also made it difficult to optimize for availability, reduce friction, and ensure real-time accuracy across practice management and EMR systems.',
      solution: 'Redesigned the online appointment scheduling experience into a streamlined, user-facing modal embedded directly within the marketing website. The new flow prioritized the next available appointment and simplified booking into a guided, step-by-step experience: enter ZIP code, select location, choose available time slot, and submit patient information. Integrated real-time scheduling capabilities with practice management and EMR systems to ensure accurate availability and immediate booking confirmation. The modal-based experience reduced context switching, improved usability, and aligned the scheduling journey with modern consumer expectations for fast, mobile-friendly interactions.',
      impact: 'Increased appointment conversion by reducing friction in the booking journey and improving visibility of next available appointments. Improved patient experience through a faster, more intuitive scheduling flow that required fewer steps and less cognitive load. Enhanced operational efficiency by enabling real-time scheduling sync with downstream clinical systems, reducing manual coordination and scheduling errors while increasing utilization of available appointment slots.',
      image: 'online-scheduling.jpg',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Next.js Microservice', 'CSRF', 'Smarty', 'Google Maps', 'Google Captcha'],
        },
        {
          category: 'Backend',
          items: ['Spring Boot', 'Amazon EKS', 'Amazon RDS'],
        },
      ],
    },
    {
      title: 'Enterprise Patient CRM & Contact Center Platform',
      period: '2025',
      summary: 'Healthcare organizations often manage patient communications, care coordination, and contact center operations across disconnected systems, creating fragmented experiences for both patients and support teams. Agents lacked a unified view of patient information and engagement history, making it difficult to deliver efficient, personalized support.',
      solution: 'Designed and delivered a patient engagement and contact center platform built on the Twilio Segment CDP that unified patient profiles, appointment management, communication history, and omnichannel engagement tools into a single interface. The solution enabled care teams to seamlessly manage patient interactions across phone, SMS, email, and web channels while leveraging centralized patient data to support coordinated care and personalized outreach.',
      impact: 'Improved operational efficiency by streamlining agent workflows and providing a comprehensive view of patient interactions within a single platform. Reduced average handling times, increased first-contact resolution rates, and enhanced the patient experience through more timely, personalized, and consistent engagement across all communication channels.',
      image: 'contact-center-ui.jpg',
      imageAlt: 'Lumen Studio website showcase',
      techCategories: [
        {
          category: 'Applications',
          items: ['Twilio Segment CDP', 'Twilo Programmable Messaging', 'Twilio Flex', 'Cordial', 'PostGrid'],
        },
        {
          category: 'Framework',
          items: ['CDP Microservice', 'Kafka', 'React Components', 'Node.js' ],
        },
      ],
    },
    {
      title: 'PM/EMR Integrated Patient Portal',
      period: '2024',
      summary: 'Patients needed a seamless digital experience that connected appointment scheduling, medical records, prescriptions, and purchasing workflows across multiple disconnected systems, while providers required secure integration with practice management (PM) and electronic medical record (EMR) platforms.',
      solution: 'Designed and delivered an integrated patient portal that unified PM and EMR data into a single self-service experience. The platform enabled patients to schedule appointments online, access prescriptions, review medical records and after-visit summaries, view saved quotes and orders, and seamlessly connect to a third-party eCommerce storefront for contact lenses and over-the-counter products. The solution leveraged real-time integrations to ensure accurate patient, clinical, and transactional data across systems.',
      impact: 'Enhanced patient engagement by providing convenient 24/7 access to healthcare and purchasing services through a single portal experience. Increased online appointment bookings and digital self-service adoption, reduced administrative workload for practice staff, and improved patient satisfaction through greater transparency, accessibility, and continuity of care.',
      image: 'patient-portal.jpg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Next.js Microservice', 'JWT', 'CSRF', 'Smarty', 'Google Maps', 'Google Captcha'],
        },
        {
          category: 'Backend',
          items: ['Spring Boot', 'Amazon EKS', 'Amazon RDS', 'KeyCloak'],
        },
      ],
    },
  ],
  projectArchivePage: {
    title: 'All projects',
    description: 'Project archive: dates, roles, and technologies across representative engagements.',
    intro: 'A concise archive of engagements and representative work.',
  },
  projectArchive: [
    { date: '2025', project: 'Design system rollout', role: 'Frontend', techStack: 'Astro, CSS, Storybook' },
    { date: '2024', project: 'Checkout reliability', role: 'Full-stack', techStack: 'TypeScript, Postgres, Redis' },
    { date: '2024', project: 'Auth hardening', role: 'Backend', techStack: 'OAuth2, JWT, rate limits' },
    { date: '2023', project: 'Analytics pipeline', role: 'Data', techStack: 'SQL, dbt, warehouse' },
    { date: '2023', project: 'Mobile web refresh', role: 'Frontend', techStack: 'HTML, CSS, a11y audits' },
  ],
  contact: {
    email: 'jeremymatthewcoad@gmail.com',
    github: 'https://github.com/jeremymcoad',
    linkedin: 'https://www.linkedin.com/in/jeremymcoad/',
  },
} as const;

export type ProjectArchiveRow = (typeof site.projectArchive)[number];
export type FeaturedProject = (typeof site.featuredProjects)[number];
