// ============================================================================
// EDIT THIS FILE to update your portfolio content.
// Everything the site shows lives here — no need to touch the components.
//
// Icons use Tabler icon names (https://tabler.io/icons) — just the name,
// e.g. icon: 'brand-react' renders <i class="ti ti-brand-react">.
// ============================================================================

export const profile = {
  name: 'Carlo Viloria',
  title: 'Software & AI Developer',
  // Optional line under your name in the hero. Leave '' to hide it.
  tagline: '',
  status: 'AVAILABLE FOR HIRE', // shown in the hero boot readout
  location: "United States, Hawai'i",
  email: 'carlovil@hawaii.edu',
  photo: '/carlo.jpg', // shown (dithered) in About; set null to hide
  // Set to a path in /public (e.g. '/resume.pdf') once you drop your resume in.
  resumeUrl: '/resume.pdf',
  socials: {
    github: 'https://github.com/carloviloria808',
    linkedin: 'https://www.linkedin.com/in/carlovil/',
  },
}

// Short paragraphs for the About section. Add/remove as you like.
export const about = [
  "I'm a Computer Science graduate from the University of Hawaiʻi at Mānoa " +
    '(2024) who enjoys building things end to end — from designing clean UIs ' +
    'to wiring up the backend, database, and AI behind them.',
  'I work across the full development lifecycle, from database design to ' +
    "deployment, and I'm a quick learner who likes turning ideas into working " +
    'software. I\'m currently seeking an entry-level software or IT role with ' +
    'a Hawaii-based tech company.',
  'Aside from tech, my hobbies include playing video games, listening to ' +
    'music, exercising, and everything volleyball!',
]

// Grouped skills. `level` (0-100) drives the Pip-Boy proficiency bars.
// `icon` is a Tabler icon name. Add, remove, or rename groups freely.
export const skills = [
  {
    group: 'Frontend',
    items: [
      { name: 'React', level: 90, icon: 'brand-react' },
      { name: 'JavaScript', level: 85, icon: 'brand-javascript' },
      { name: 'HTML / CSS', level: 88, icon: 'brand-html5' },
      { name: 'Vite', level: 75, icon: 'bolt' },
    ],
  },
  {
    group: 'Backend & Data',
    items: [
      { name: 'C# / ASP.NET Core', level: 80, icon: 'braces' },
      { name: 'Node.js', level: 70, icon: 'brand-nodejs' },
      { name: 'Python', level: 70, icon: 'brand-python' },
      { name: 'Java', level: 70, icon: 'coffee' },
      { name: 'PostgreSQL / SQL Server / MySQL', level: 75, icon: 'database' },
      { name: 'REST APIs', level: 75, icon: 'api' },
    ],
  },
  {
    group: 'Systems & IT',
    items: [
      { name: 'Windows Server / Active Directory', level: 70, icon: 'server' },
      { name: 'Group Policy', level: 65, icon: 'shield-lock' },
      { name: 'PowerShell', level: 65, icon: 'terminal-2' },
      { name: 'TCP/IP · DNS · DHCP', level: 65, icon: 'network' },
      { name: 'VirtualBox', level: 70, icon: 'box' },
      { name: 'Ticketing & Documentation', level: 85, icon: 'ticket' },
    ],
  },
  {
    group: 'AI & ML',
    items: [
      { name: 'OpenAI GPT API', level: 78, icon: 'robot' },
      { name: 'Claude API', level: 78, icon: 'message-chatbot' },
      { name: 'scikit-learn', level: 60, icon: 'chart-dots' },
      { name: 'Prompt Engineering', level: 80, icon: 'prompt' },
    ],
  },
  {
    group: 'Tools',
    items: [
      { name: 'Git / GitHub', level: 80, icon: 'brand-github' },
      { name: 'Docker', level: 65, icon: 'brand-docker' },
      { name: 'VS Code', level: 85, icon: 'device-desktop-code' },
      { name: 'Figma', level: 70, icon: 'brand-figma' },
      { name: 'Linux / Unix', level: 65, icon: 'terminal' },
      { name: 'Responsive / PWA', level: 80, icon: 'device-mobile' },
    ],
  },
]

// Your projects. The first one (featured: true) gets highlighted.
// Images are auto-treated with the monochrome / dither phosphor filter.
export const projects = [
  {
    name: 'TFTools',
    featured: true,
    description:
      'A full-stack reference site for Teamfight Tactics Set 17 — champion, ' +
      'item, and comp data with a fast, responsive UI. Deployed live: React ' +
      'frontend on Vercel, containerized ASP.NET Core backend (Docker) on ' +
      'Render, with a production PostgreSQL database migrated from SQL Server ' +
      '(EF Core). Installable as a PWA.',
    tech: ['React', 'C# / ASP.NET Core', 'PostgreSQL', 'EF Core', 'Docker', 'PWA'],
    // Live demo paused — backend (free tier) lapsed. Re-add the URL to restore OPEN_LIVE.
    live: null,
    repo: 'https://github.com/carloviloria808/TFTools',
    image: '/projects/tftools-white.png',
    logo: true,
  },
  {
    name: 'Active Directory Home Lab',
    description:
      'A Windows Server 2022 domain built from scratch in VirtualBox — domain ' +
      'controller with AD DS + DNS, organizational units, security groups, and ' +
      'Group Policy (password baseline + desktop lockdown), verified on a ' +
      'domain-joined Windows 11 client. Includes PowerShell onboarding ' +
      'automation (20 users from CSV) and four documented real troubleshooting ' +
      'incidents, each logged symptom → root cause → resolution.',
    tech: ['Windows Server 2022', 'Active Directory', 'Group Policy', 'PowerShell', 'VirtualBox'],
    live: null,
    repo: 'https://github.com/carloviloria808/ad-home-lab',
  },
  {
    name: 'MyAIRealtor',
    description:
      'An AI-powered real estate platform with a conversational interface — ' +
      'uses the OpenAI GPT API to deliver personalized property ' +
      'recommendations, backed by a pipeline that ingests listings and ' +
      'surfaces ranked results from natural-language queries.',
    tech: ['React', 'Node.js', 'OpenAI GPT API'],
    live: null,
    repo: 'https://github.com/my-ai-realtor/my-ai-realtor-app',
    image: '/projects/myairealtor.png',
    logo: true, // a logo (not a screenshot) — gets a lighter, logo-friendly treatment
  },
  {
    name: 'Academia Arena',
    description:
      'A gamified web app where UH Mānoa students connect with CS professors ' +
      'through a trading-card-game interface — earn professor cards by solving ' +
      'coding challenges, then trade them in a marketplace to complete your ' +
      'collection. Includes user auth, wishlists, and an admin dashboard.',
    tech: ['Meteor', 'JavaScript', 'MongoDB'],
    live: 'https://academia-arena.github.io',
    repo: 'https://github.com/academia-arena/academia-arena.github.io',
    image: '/projects/academia-arena.png',
    logo: true,
  },
]

// Work / project experience, newest first.
export const experience = [
  {
    role: 'Windows System Administration',
    org: 'Active Directory Home Lab — Personal Lab',
    period: 'Jun – Jul 2026',
    points: [
      'Built and administer a Windows Server 2022 domain (lab.local) in VirtualBox: AD DS + DNS domain controller, OUs, security groups, and Group Policy enforced end-to-end on a domain-joined Windows 11 client.',
      'Automated user onboarding with PowerShell (20 accounts from CSV via New-ADUser) and documented four real troubleshooting incidents — write-up, scripts, and docs published on GitHub.',
    ],
  },
  {
    role: 'Full-Stack Developer',
    org: 'TFTools — Personal Project',
    period: 'Jan 2025 – Present',
    points: [
      'A full-stack reference site for Teamfight Tactics (Set 17) — browse champions, items, traits, and meta team comps through a fast, responsive UI that installs as a PWA.',
      'Built with React on a C# / ASP.NET Core backend and deployed live — frontend on Vercel, Dockerized backend on Render — including a production SQL Server → PostgreSQL migration with EF Core.',
    ],
  },
  {
    role: 'Full-Stack AI Developer',
    org: 'MyAIRealtor — Group Project (ICS 496)',
    period: 'Jun 2024 – Dec 2024',
    points: [
      'Built an AI real-estate platform with React, Node.js, and the OpenAI GPT API for conversational property recommendations.',
      'Implemented a pipeline ingesting listings and surfacing ranked results from natural-language queries.',
    ],
  },
  {
    role: 'Web & Backend Developer',
    org: 'Academia Arena (ICS 314)',
    period: 'Jan 2024 – May 2024',
    points: [
      'Built a gamified web app on Meteor where UH Mānoa students collect and trade professor "cards" earned by solving coding challenges — with user auth, a marketplace, wishlists, and an admin dashboard.',
      'Led UX from Figma wireframes to a working prototype, following Agile/Scrum.',
    ],
  },
  {
    role: 'IT Support Assistant',
    org: 'Information Technology Services, UH Mānoa',
    period: 'Aug 2022 – Dec 2023',
    points: [
      'Handled 30+ weekly phone and email support tickets, resolving hardware, software, and network issues for students and faculty across campus.',
      'Authored and maintained a troubleshooting knowledge base that improved first-contact resolution; enforced security best practices across student lab and administrative systems.',
    ],
  },
  {
    role: 'Teaching Assistant — Java / OOP',
    org: 'Dept. of Information & Computer Sciences, UH Mānoa',
    period: 'Jan 2021 – May 2022',
    points: [
      'Supported 3 lab sections weekly, guiding 60+ students through debugging, compiling, and testing Java in Linux VM environments.',
      'Explained OOP concepts with plain-language analogies and tailored one-on-one office-hour support.',
    ],
  },
]

// Education, newest first.
export const education = [
  {
    degree: 'BS, Computer Science',
    school: 'University of Hawaiʻi at Mānoa',
    period: 'Aug 2018 – Dec 2024',
  },
  {
    degree: 'AA, Liberal Arts',
    school: 'Honolulu Community College',
    period: 'Aug 2016 – May 2018',
  },
]
