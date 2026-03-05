// src/constants/index.js

// ==============================
// SKILLS SECTION LOGOS & DATA
// ==============================

// Frontend Technologies
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reactnativeLogo from './assets/tech_logo/reactnative.png';
import expoLogo from './assets/tech_logo/expo.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
// import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

// Backend Technologies
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
// import mongodbLogo from './assets/tech_logo/mongodb.png'; // Replaced by PostgreSQL in skills
import postgresqlLogo from './assets/tech_logo/postgre.png';
import firebaseLogo from './assets/tech_logo/firebase.png';

// Programming Languages
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';

// Tools & Platforms
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import awsLogo from './assets/tech_logo/aws.png';
import androidStudioLogo from './assets/tech_logo/androidstudio.png';
import renderLogo from './assets/tech_logo/vercel.png'; // Using vercel as fallback for render

// ==============================
// EXPERIENCE SECTION LOGOS
// ==============================

// ==============================
// EDUCATION SECTION LOGOS
// ==============================
// import glaLogo from './assets/education_logo/ambalika.png';
import bsaLogo from './assets/education_logo/ambalika.png';
import vpsLogo from './assets/education_logo/pic10.png';

// ==============================
// PROJECT SECTION LOGOS
// ==============================
import CoperateERPLogo from './assets/work_logo/erpimage.png';
import WebBuilderAILogo from './assets/work_logo/webbuilder-image.png';
import ShoplxLogo from './assets/work_logo/shoplx-image.png';
import SensenovaLogo from './assets/work_logo/sensenova-image.png';
import ShortlinkerLogo from './assets/work_logo/shortlinker-image.png';
import ChatAppLogo from './assets/work_logo/ichat-image.png';

// ==============================
// SKILLS INFORMATION
// ==============================

export const SkillsInfo = [
  {
    id: 1,
    title: 'Frontend Development',
    icon: '💻',
    description: 'Modern frontend technologies and frameworks for building responsive user interfaces',
    skills: [
      {
        name: 'HTML',
        logo: htmlLogo,
        proficiency: 95,
        category: 'Markup',
        years: 3,
        description: 'Semantic HTML5, Accessibility, SEO Optimization'
      },
      {
        name: 'CSS',
        logo: cssLogo,
        proficiency: 90,
        category: 'Styling',
        years: 3,
        description: 'Flexbox, Grid, Animations, Responsive Design'
      },
      {
        name: 'SASS',
        logo: sassLogo,
        proficiency: 85,
        category: 'Preprocessor',
        years: 2,
        description: 'Variables, Mixins, Functions, Modular Architecture'
      },
      {
        name: 'JavaScript',
        logo: javascriptLogo,
        proficiency: 88,
        category: 'Programming',
        years: 3,
        description: 'ES6+, Async/Await, DOM Manipulation, APIs'
      },
      {
        name: 'React JS',
        logo: reactjsLogo,
        proficiency: 92,
        category: 'Library',
        years: 2,
        description: 'Hooks, Context API, Component Lifecycle, Performance'
      },
      {
        name: 'React Native',
        logo: reactnativeLogo,
        proficiency: 75,
        category: 'Framework',
        years: 1,
        description: 'Mobile Development, Components, Navigation, State Management'
      },
      {
        name: 'Expo Framework',
        logo: expoLogo,
        proficiency: 75,
        category: 'Framework',
        years: 1,
        description: 'Mobile Development, Components, Navigation, State Management'
      },
      {
        name: 'Redux',
        logo: reduxLogo,
        proficiency: 80,
        category: 'State Management',
        years: 2,
        description: 'Store, Actions, Reducers, Middleware, Toolkit'
      },
      {
        name: 'Tailwind CSS',
        logo: tailwindcssLogo,
        proficiency: 85,
        category: 'CSS Framework',
        years: 2,
        description: 'Utility-first, Responsive, Customization, Plugins'
      },
      {
        name: 'Material UI',
        logo: materialuiLogo,
        proficiency: 78,
        category: 'UI Framework',
        years: 1,
        description: 'Material Design, Components, Theming, Customization'
      },
      {
        name: 'Bootstrap',
        logo: bootstrapLogo,
        proficiency: 82,
        category: 'CSS Framework',
        years: 2,
        description: 'Grid System, Components, Responsive, Customization'
      },
    ],
  },
  {
    id: 2,
    title: 'Backend Development',
    icon: '⚙️',
    description: 'Server-side technologies and databases for building robust applications',
    skills: [
      {
        name: 'Node JS',
        logo: nodejsLogo,
        proficiency: 85,
        category: 'Runtime',
        years: 2,
        description: 'Event Loop, Modules, NPM, File System, Streams'
      },
      {
        name: 'Express JS',
        logo: expressjsLogo,
        proficiency: 83,
        category: 'Framework',
        years: 2,
        description: 'Middleware, Routing, REST APIs, Error Handling'
      },
      {
        name: 'PostgreSQL',
        logo: postgresqlLogo,
        proficiency: 80,
        category: 'Database',
        years: 2,
        description: 'CRUD Operations, Aggregation, Indexing'
      },
      {
        name: 'Firebase',
        logo: firebaseLogo,
        proficiency: 75,
        category: 'Platform',
        years: 1,
        description: 'Authentication, Firestore, Storage, Hosting'
      },
    ],
  },
  {
    id: 3,
    title: 'Programming Languages',
    icon: '🔤',
    description: 'Core programming languages and their ecosystems',
    skills: [
      {
        name: 'Java',
        logo: javaLogo,
        proficiency: 82,
        category: 'OOP',
        years: 3,
        description: 'OOP Concepts, Collections, Multithreading, Spring Basics'
      },
      {
        name: 'Python',
        logo: pythonLogo,
        proficiency: 78,
        category: 'Scripting',
        years: 2,
        description: 'Data Structures, Libraries, Scripting, Automation'
      },
      {
        name: 'JavaScript',
        logo: javascriptLogo,
        proficiency: 88,
        category: 'Web',
        years: 3,
        description: 'ES6+, Async Programming, Web APIs, Node.js'
      },
      {
        name: 'TypeScript',
        logo: typescriptLogo,
        proficiency: 70,
        category: 'Typed',
        years: 1,
        description: 'Type System, Interfaces, Generics, Compilation'
      },
    ],
  },
  {
    id: 4,
    title: 'Tools & Technologies',
    icon: '🛠️',
    description: 'Development tools, version control, and deployment platforms',
    skills: [
      {
        name: 'Git',
        logo: gitLogo,
        proficiency: 90,
        category: 'Version Control',
        years: 3,
        description: 'Branching, Merging, Rebasing, Workflows'
      },
      {
        name: 'GitHub',
        logo: githubLogo,
        proficiency: 88,
        category: 'Platform',
        years: 3,
        description: 'Repositories, Pull Requests, Actions, Projects'
      },
      {
        name: 'VS Code',
        logo: vscodeLogo,
        proficiency: 92,
        category: 'IDE',
        years: 3,
        description: 'Extensions, Debugging, Integrated Terminal, Snippets'
      },
      {
        name: 'Postman',
        logo: postmanLogo,
        proficiency: 85,
        category: 'API Testing',
        years: 2,
        description: 'API Testing, Collections, Environments, Automation'
      },

      {
        name: 'Aws',
        logo: awsLogo,
        proficiency: 82,
        category: 'Deployment',
        years: 2,
        description: 'Backend Deployment, Server Functions'
      },
      {
        name: 'MongoDB Compass',
        logo: mcLogo,
        proficiency: 80,
        category: 'Database Tool',
        years: 2,
        description: 'Query Building, Data Visualization, Index Management'
      },
      {
        name: 'Android Studio',
        logo: androidStudioLogo,
        proficiency: 80,
        category: 'IDE',
        years: 2,
        description: 'Android Development, Emulator, Debugging, Build Tools'
      },
      {
        name: 'PgAdmin',
        logo: postgresqlLogo,
        proficiency: 80,
        category: 'Database Tool',
        years: 2,
        description: 'Query Building, Data Visualization, Index Management'
      },
      {
        name: 'Vercel',
        logo: vercelLogo,
        proficiency: 82,
        category: 'Deployment',
        years: 2,
        description: 'Frontend Deployment, Serverless Functions, CI/CD'
      },
      {
        name: 'Render',
        logo: renderLogo,
        proficiency: 82,
        category: 'Deployment',
        years: 2,
        description: 'Backend Deployment, Server Functions'
      },
      {
        name: 'Netlify',
        logo: netlifyLogo,
        proficiency: 78,
        category: 'Deployment',
        years: 1,
        description: 'Static Hosting, Forms, Functions, Continuous Deployment'
      },
    ],
  },
];

// ==============================
// EXPERIENCE DATA
// ==============================

export const experiences = [
  {
    id: 1,
    img: githubLogo, // Placeholder for apexlogo
    role: "Fullstack Developer",
    company: "Apexplanet",
    date: "June 2025 - Present",
    duration: "Present",
    location: "Remote",
    type: "Full-time",
    description: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    achievements: [
      "Built 5+ full-stack applications using React.js and Node.js",
      "Improved application performance by 40% through code optimization",
      "Implemented responsive designs that work seamlessly across all devices",
      "Collaborated with design teams to create intuitive user experiences"
    ],
    skills: [
      "HTML", "CSS", "JavaScript", "React JS", "Node JS",
      "Tailwind CSS", "MongoDB", "Redux", "Express.js", "REST APIs"
    ],
  },


  {
    id: 2,
    img: githubLogo, // Placeholder for itriklogo
    role: "Backend Developer",
    company: "ItrikSofttech",
    date: "January 2026 - Present",
    duration: "Present",
    location: "office",
    type: "Full-time",
    description: "Developed dynamic and scalable web applications using the Nodejs, handling backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    achievements: [
      "Built 9+ full-stack applications using React.js and Node.js",
      "Improved application performance by 60% through code optimization",
      "Implemented responsive designs that work seamlessly across all devices",
      "Collaborated with design teams to create intuitive user experiences"
    ],
    skills: [
      "JavaScript", "Node JS", "PostgreSQL", "Prisma"
      , "Express.js", "REST APIs", "Aws", "Postman", "Git", "GitHub"
    ],
  },
];




// ==============================
// EDUCATION DATA
// ==============================

export const education = [
  {
    id: 1,
    img: bsaLogo,
    school: "Ambalika Institute of Management and Technology",
    location: "Lucknow, Uttar Pradesh",
    date: "Sept 2022 - Aug 2026",
    duration: "4 years",
    grade: "70.9%",
    status: "Pursuing",
    description: "Currently pursuing Bachelor of Technology in Computer Science Engineering. Gaining comprehensive knowledge in software development, algorithms, data structures, and web technologies. Actively participating in coding competitions and technical workshops.",
    courses: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Object-Oriented Programming",
      "Web Technologies",
      "Computer Networks",
      "Software Engineering"
    ],
    degree: "Bachelor of Technology - B.Tech (Computer Science Engineering)",
    degreeType: "Undergraduate"
  },
  {
    id: 2,
    img: vpsLogo,
    school: "L.P. Sahi College",
    location: "Patahi Muz, Bihar",
    date: "Apr 2019 - March 2021",
    duration: "2 years",
    grade: "60%",
    status: "Completed",
    description: "Completed higher secondary education with focus on Physics, Chemistry, and Mathematics. Developed strong analytical and problem-solving skills through rigorous curriculum.",
    courses: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science"
    ],
    degree: "BSEB (XII) - PCM with Computer Science",
    degreeType: "Higher Secondary"
  },
  {
    id: 3,
    img: vpsLogo,
    school: "R.K.N.S. High School Shrisiyya",
    location: "Gopinathpur Motipur, Muz, Bihar",
    date: "Apr 2018 - April 2019",
    duration: "1 year",
    grade: "67.2%",
    status: "Completed",
    description: "Completed secondary education with focus on Science and Mathematics. Developed foundational knowledge in computer science and programming concepts.",
    courses: [
      "Mathematics",
      "Science",
      "Computer Fundamentals",
      "English"
    ],
    degree: "BSEB (X) - Science with Computer",
    degreeType: "Secondary"
  },
];

// ==============================
// PROJECTS DATA
// ==============================
export const projects = [
  {
    id: 1,
    title: "Coperate ERP",
    subtitle: "Enterprise Resource Planning System",
    description:
      "A comprehensive ERP system designed to manage core business operations including HR, finance, inventory, and sales in a centralized dashboard.",
    fullDescription:
      "Coperate ERP is a full-stack enterprise management solution that streamlines business processes across multiple departments. The platform includes modules for employee management, payroll processing, inventory tracking, sales monitoring, and role-based access control. Built with scalable architecture, it ensures data security, real-time analytics, and seamless performance for growing organizations.",
    image: CoperateERPLogo,
    tags: [
      "React JS",
      "Node.js",
      "MongoDB",
      "Dashboard",
      "Role-Based Access",
      "Analytics",
    ],
    technologies: [
      "React",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Chart.js",
    ],
    features: [
      "Employee & HR management",
      "Inventory tracking system",
      "Sales & revenue monitoring",
      "Role-based access control",
      "Analytics dashboard",
      "Secure authentication system",
    ],
    github: "https://github.com/dhirajyadav91/coperate-erp",
    webapp: "https://elixiontech.in",
    status: "Completed",
    category: "Enterprise Software",
    year: 2024,
  },

  {
    id: 2,
    title: "WebBuilderAI",
    subtitle: "AI-Powered Website Builder",
    description:
      "An AI-driven platform that generates fully responsive and modern websites based on user prompts within minutes.",
    fullDescription:
      "WebBuilderAI leverages artificial intelligence to generate complete, production-ready websites based on user input. Users describe their business requirements, and the system dynamically builds layouts, components, and styling. It includes real-time preview, SEO optimization, and export functionality for deployment-ready code.",
    image: WebBuilderAILogo,
    tags: [
      "React JS",
      "Node.js",
      "OpenAI API",
      "Automation",
      "Dynamic UI",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "OpenAI API",
      "MongoDB",
      "Tailwind CSS",
    ],
    features: [
      "AI-generated layouts",
      "Dynamic component creation",
      "Real-time preview",
      "Responsive design automation",
      "SEO-friendly structure",
      "Exportable code",
    ],
    github: "https://github.com/dhirajyadav91/WebBuilderAI",
    webapp: "https://webbuilder.elixiontech.in",
    status: "Completed",
    category: "AI/ML",
    year: 2024,
  },

  {
    id: 3,
    title: "Shoplx",
    subtitle: "Modern E-commerce Platform",
    description:
      "A scalable e-commerce platform with product management, authentication, cart system, and checkout workflow.",
    fullDescription:
      "Shoplx is a modern full-stack e-commerce application inspired by enterprise-level marketplaces. It includes product browsing, advanced filtering, cart persistence, wishlist management, and secure checkout integration. Built with clean architecture and optimized state management for seamless performance.",
    image: ShoplxLogo,
    tags: [
      "React JS",
      "Context API",
      "E-commerce",
      "Authentication",
      "API Integration",
    ],
    technologies: [
      "React",
      "Context API",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe API",
    ],
    features: [
      "Product catalog management",
      "Advanced search & filtering",
      "Cart & wishlist system",
      "Secure login & registration",
      "Order placement workflow",
      "Responsive UI design",
    ],
    github: "https://github.com/dhirajyadav91/AmazKart-f",
    webapp: "https://shoplx.elixiontech.in",
    status: "Completed",
    category: "E-commerce",
    year: 2024,
  },

  {
    id: 4,
    title: "SensenovaAI",
    subtitle: "AI-Powered Social Media Automation Tool",
    description:
      "An intelligent automation platform that helps businesses automate messaging, lead generation, and campaign workflows across social platforms.",
    fullDescription:
      "SensenovaAI is a social media automation tool similar to ManyChat. It enables businesses to create chatbot workflows, automate responses, capture leads, and manage marketing campaigns. The system integrates with messaging APIs and provides analytics dashboards for tracking engagement and conversions.",
    image: SensenovaLogo,
    tags: [
      "React JS",
      "Node.js",
      "Automation",
      "AI Chatbot",
      "Marketing Tool",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Meta API",
    ],
    features: [
      "Automated chatbot workflows",
      "Lead capture system",
      "Campaign automation",
      "Multi-platform integration",
      "Analytics dashboard",
      "Workflow builder UI",
    ],
    github: "https://github.com/yourusername/sensenova-ai",
    webapp: "https://sensenova.in",
    status: "Completed",
    category: "Marketing Automation",
    year: 2024,
  },

  {
    id: 5,
    title: "ShortLinker",
    subtitle: "Advanced URL Shortening Service",
    description:
      "A scalable URL shortener with analytics tracking, QR code generation, and custom slug support.",
    fullDescription:
      "ShortLinker allows users to create custom short URLs, track click analytics, and generate QR codes. It features a dashboard for link management and performance monitoring. Built with scalable backend architecture and secure redirection handling.",
    image: ShortlinkerLogo,
    tags: [
      "React JS",
      "Node.js",
      "Analytics",
      "QR Code",
      "Dashboard",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "NanoID",
    ],
    features: [
      "Custom URL shortening",
      "Click analytics tracking",
      "QR code generation",
      "Dashboard management",
      "Secure redirection",
      "Traffic insights visualization",
    ],
    github: "https://github.com/dhirajyadav91/LinkShorter-Frontend",
    webapp: "https://shortlinker.elixiontech.in",
    status: "Completed",
    category: "Tools & Utilities",
    year: 2024,
  },

  {
    id: 6,
    title: "IChat",
    subtitle: "Real-time Messaging Platform",
    description:
      "A scalable real-time chat application with private messaging, group chats, and media sharing.",
    fullDescription:
      "This real-time messaging platform enables seamless communication through private and group chats, media sharing, and online presence tracking. Built using WebSocket technology for low-latency messaging and secure authentication mechanisms.",
    image: ChatAppLogo,
    tags: [
      "React JS",
      "Node.js",
      "WebSocket",
      "Authentication",
      "Media Sharing",
    ],
    technologies: [
      "React",
      "Node.js",
      "Express",
      "Socket.io",
      "MongoDB",
      "Cloudinary",
      "JWT",
    ],
    features: [
      "Instant real-time messaging",
      "Group chat support",
      "Media file sharing",
      "Online/offline status tracking",
      "Push notifications",
      "Secure authentication",
    ],
    github: "https://github.com/dhirajyadav91/Ichat-f",
    webapp: "https://ichat.elixiontech.in",
    status: "Completed",
    category: "Communication",
    year: 2024,
  },
];

// ==============================
// ADDITIONAL DATA EXPORTS
// ==============================

// Skills summary for quick stats
export const skillsSummary = {
  totalSkills: SkillsInfo.reduce((sum, category) => sum + category.skills.length, 0),
  categories: SkillsInfo.length,
  yearsExperience: 3,
  projectsCompleted: projects.length,
  technologies: [...new Set(SkillsInfo.flatMap(category => category.skills.map(skill => skill.name)))].length
};

// Project categories for filtering
export const projectCategories = [
  "All",
  "AI/ML",
  "E-commerce",
  "Media & Entertainment",
  "Tools & Utilities",
  "Communication"
];

// Technology stack summary
export const techStack = {
  frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  backend: ["Node.js", "Express.js", "MongoDB", "Firebase"],
  tools: ["Git", "VS Code", "Postman", "Vercel", "Netlify"],
  languages: ["JavaScript", "Java", "Python", "TypeScript"]
};

export default {
  SkillsInfo,
  experiences,
  education,
  projects,
  skillsSummary,
  projectCategories,
  techStack
};