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
    tagline: 'From product intent to production — pragmatic systems, accessible UI, and maintainable code.',
    contact: 'Open to collaborations and senior IC roles on product-minded teams.',
    avatarSrc: '/portfolio/jeremy-m-coad-healthcare-technology-product-owner.png',
    avatarAlt: 'Jeremy M Coad',
  },
  about: {
    paragraphs: [
      'Product Owner with 10+ years of experience delivering digital products and patient engagement solutions, with a strong focus in healthcare technology and patient experience platforms.',
      'Proven ability to lead product strategy, translate complex clinical and operational needs into scalable solutions, and deliver measurable improvements in access, engagement, and revenue cycle performance.',
      'Experienced working in HIPAA-compliant environments, aligning cross-functional stakeholders, and driving outcomes across patient engagement, CRM, and digital health ecosystems.',
      {
        heading: 'Example focus areas',
        bullets: [
          'Designing APIs and client boundaries with typed contracts',
          'Performance budgets, caching, and pragmatic observability',
          'Shipping incrementally with feature flags and rollback-friendly deploys',
        ],
      },
      {
        heading: ' ',
        techItems: ['Product Ownership', 'Stakeholder Management', 'Agile Methologies', 'Product Roadmapping', 'Customer Relationship Management'],
      },
    ],
  },
  hobbies: {
    paragraphs: [
      'Product Owner with 10+ years of experience delivering digital products and patient engagement solutions, with a strong focus in healthcare technology and patient experience platforms.',
      'Proven ability to lead product strategy, translate complex clinical and operational needs into scalable solutions, and deliver measurable improvements in access, engagement, and revenue cycle performance.',
      'Experienced working in HIPAA-compliant environments, aligning cross-functional stakeholders, and driving outcomes across patient engagement, CRM, and digital health ecosystems.',
      {
        heading: 'Example focus areas',
        bullets: [
          'Designing APIs and client boundaries with typed contracts',
          'Performance budgets, caching, and pragmatic observability',
          'Shipping incrementally with feature flags and rollback-friendly deploys',
        ],
      },
      {
        heading: 'Sample stack',
        techItems: ['Product Ownership', 'Stakeholder Management', 'Agile Methologies', 'Product Roadmapping', 'Customer Relationship Management'],
      },
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
      tech: ['TypeScript', 'Astro', 'Tailwind CSS', 'Node', 'Vite'],
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
      tech: ['Astro', 'TypeScript', 'Tailwind CSS', 'Node', 'Vite'],
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
      tech: ['Astro', 'Tailwind CSS', 'JavaScript', 'Node', 'Vitest'],
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
      tech: ['Astro', 'Tailwind CSS', 'JavaScript', 'Node', 'Vitest'],
    },
  ],
  featuredProjects: [
    {
      title: 'Enterprise Patient CRM & Contact Center Platform',
      period: '2025',
      summary: 'Built a patient engagement and contact center platform that unified patient communications, care coordination workflows, and agent interactions into a single experience.',
      solution: 'Designed a scalable CRM and contact center interface built on the Twilio Segment CDP that consolidated patient profiles, appointment management, communication history, and omnichannel engagement tools, enabling care teams to efficiently manage patient interactions across phone, SMS, email, and web channels.',
      impact: 'Improved agent efficiency through streamlined workflows and centralized patient data, reducing average handling times, increasing first-contact resolution rates, and enhancing the overall patient experience through more personalized and timely engagement.',
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
      title: 'Nova Launch Marketing Platform',
      period: '2024',
      summary: 'Delivered a modular marketing site and interactive product showcase for a launch-ready SaaS brand.',
      solution: 'Implemented a content-driven architecture with reusable card components and dynamic project pages, enabling non-technical content updates.',
      impact: 'Reduced content update time by 80% through intuitive component-based structure; enabled marketing team independence.',
      image: 'astro-02.jpeg',
      imageAlt: 'Nova Launch platform interface',
      techCategories: [
        {
          category: 'Frontend',
          items: ['Astro', 'TypeScript', 'Tailwind CSS'],
        },
        {
          category: 'Developer Experience',
          items: ['Vite', 'ESLint', 'Automated Testing'],
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
