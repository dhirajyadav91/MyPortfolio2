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
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

// Backend Technologies
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
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

// ==============================
// EXPERIENCE SECTION LOGOS
// ==============================
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// ==============================
// EDUCATION SECTION LOGOS
// ==============================
import glaLogo from './assets/education_logo/ambalika.png';
import bsaLogo from './assets/education_logo/ambalika.png';
import vpsLogo from './assets/education_logo/pic10.png';

// ==============================
// PROJECT SECTION LOGOS
// ==============================
import githubdetLogo from './assets/work_logo/p1tube.png';
import csprepLogo from './assets/work_logo/p4chat.png';
import movierecLogo from './assets/work_logo/p5webBuilder.png';
import npmLogo from './assets/work_logo/p3shop.png';

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
        category: 'Framework',
        years: 2,
        description: 'Hooks, Context API, Component Lifecycle, Performance'
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
        name: 'MongoDB', 
        logo: mongodbLogo, 
        proficiency: 80,
        category: 'Database',
        years: 2,
        description: 'CRUD Operations, Aggregation, Indexing, Mongoose ODM'
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
        name: 'MongoDB Compass', 
        logo: mcLogo, 
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
    img: webverseLogo,
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
    title: "LucyAI (Agent)",
    subtitle: "Intelligent AI Assistant",
    description: "A sophisticated AI-powered assistant built with React.js and Node.js, integrated with Gemini AI for intelligent responses. Features natural language processing, context awareness, and multi-modal interactions.",
    fullDescription: "LucyAI is an advanced conversational agent that leverages cutting-edge AI technology to provide intelligent assistance. The application features real-time chat, context preservation, and the ability to handle complex queries across various domains including coding, research, and general knowledge.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "Express.js", "NPM", "Validation", "Gemini AI", "WebSocket"],
    technologies: ["React", "Node.js", "Express", "Gemini API", "Socket.io", "JWT"],
    features: [
      "Real-time AI conversations",
      "Context-aware responses", 
      "Multi-modal interactions",
      "User authentication",
      "Chat history",
      "Responsive design"
    ],
    github: "https://github.com/dhirajyadav91/Ichat-f",
    webapp: "https://ichat-f.vercel.app",
    demo: "https://ichat-f.vercel.app/demo",
    status: "Completed",
    category: "AI/ML",
    year: 2024
  },
  {
    id: 2,
    title: "WebBuilderAI",
    subtitle: "AI-Powered Website Builder",
    description: "An innovative platform that uses artificial intelligence to generate and customize websites automatically. Users can describe their requirements and the AI builds responsive, modern websites in minutes.",
    fullDescription: "WebBuilderAI revolutionizes website creation by leveraging AI to understand user requirements and generate complete, responsive websites. The platform supports various templates, custom styling, and automatic optimization for different devices and platforms.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "Express.js", "AI Integration", "Responsive Design", "Automation"],
    technologies: ["React", "Node.js", "OpenAI API", "CSS3", "MongoDB", "Cloudinary"],
    features: [
      "AI-generated websites",
      "Template customization",
      "Responsive design",
      "SEO optimization",
      "Real-time preview",
      "Export functionality"
    ],
    github: "https://github.com/dhirajyadav91/Ichat-f",
    webapp: "https://ichat-f.vercel.app",
    status: "In Progress",
    category: "AI/ML",
    year: 2024
  },
  {
    id: 3,
    title: "Amazon Clone",
    subtitle: "E-commerce Platform",
    description: "A full-featured Amazon clone with product listings, shopping cart, user authentication, and payment integration. Built with modern React patterns and state management.",
    fullDescription: "This Amazon clone replicates core e-commerce functionality including user registration, product browsing, detailed product pages, shopping cart management, wishlist, and simulated checkout process. The application demonstrates advanced React patterns and clean architecture.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API Integration", "State Management"],
    technologies: ["React", "Context API", "CSS3", "Fake Store API", "Local Storage"],
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Wishlist functionality",
      "Search and filter",
      "Responsive design"
    ],
    github: "https://github.com/dhirajyadav91/AmazKart-f",
    webapp: "https://amaz-kart-f.vercel.app/",
    status: "Completed",
    category: "E-commerce",
    year: 2024
  },
  {
    id: 4,
    title: "YouTube Clone",
    subtitle: "Video Streaming Platform",
    description: "A YouTube clone featuring video playback, channel subscriptions, comments, and personalized recommendations. Integrated with YouTube API for real content.",
    fullDescription: "This YouTube clone provides a seamless video streaming experience with features like video playback, channel management, comment system, and personalized recommendations. The UI closely mimics YouTube's design while adding unique features.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "YouTube API", "Responsive Design"],
    technologies: ["React", "Node.js", "MongoDB", "Express", "YouTube Data API", "JWT"],
    features: [
      "Video playback",
      "Channel subscriptions",
      "Comment system",
      "Search functionality",
      "Responsive player",
      "User profiles"
    ],
    github: "https://github.com/dhirajyadav91/Youtube-Clone-With-API",
    webapp: "https://wetube-plum.vercel.app/",
    status: "Completed",
    category: "Media & Entertainment",
    year: 2024
  },
  {
    id: 5,
    title: "Short Linker",
    subtitle: "URL Shortening Service",
    description: "A custom URL shortener service with analytics, custom slugs, and QR code generation. Tracks click analytics and provides detailed insights.",
    fullDescription: "Short Linker is a comprehensive URL shortening platform that allows users to create custom short links, track click analytics, generate QR codes, and manage their links through an intuitive dashboard.",
    image: movierecLogo,
    tags: ["React JS", "API", "URL Shortening", "Analytics", "QR Codes", "Dashboard"],
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "QR Code Generator"],
    features: [
      "URL shortening",
      "Custom slugs",
      "Click analytics",
      "QR code generation",
      "Link management",
      "Dashboard"
    ],
    github: "https://github.com/dhirajyadav91/LinkShorter-Frontend",
    webapp: "https://link-shorter-frontend.vercel.app/",
    status: "Completed",
    category: "Tools & Utilities",
    year: 2024
  },
  {
    id: 6,
    title: "WhatsApp Clone",
    subtitle: "Real-time Messaging App",
    description: "A real-time messaging application with chat rooms, media sharing, and online status. Built with modern web technologies for seamless communication.",
    fullDescription: "This WhatsApp clone provides real-time messaging functionality with features like individual and group chats, media sharing, online status, message reactions, and push notifications.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "Real-time", "WebSocket", "Media Sharing", "Authentication"],
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Cloudinary", "JWT"],
    features: [
      "Real-time messaging",
      "Group chats",
      "Media sharing",
      "Online status",
      "Message reactions",
      "Push notifications"
    ],
    github: "https://github.com/dhirajyadav91/Ichat-f",
    webapp: "https://ichat-f.vercel.app",
    status: "Completed",
    category: "Communication",
    year: 2024
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