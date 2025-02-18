// import { Certifications } from '@/components/Certifications';
// import { skillCategories } from '@/data/portfolio-data';
import { Project,  SocialLink , EducationItem} from '@/types';
// import { Progress } from '@/components/ui/progress';

export const personalInfo = {
  fname: "Gayatri",
  lname: "Devarshetty",
  title: "Business Analyst",
  email: "devarasettygayathri99@gmail.com",
  phone: "+1 (832) 525 9824",
  location: "New York, NY",
  bio: "Experienced Business Analyst with 5+ years of experience in data analysis, process improvement, and stakeholder management. Passionate about turning complex business problems into actionable insights."
};

export const aboutData = {
  title: "About Me",
  subtitle: "Passionate about transforming data into intelligence.",
  sections: [
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-database text-200-blue-gradient"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>`, // You can replace this with an actual icon component if needed
      title: "Data Enthusiast",
      description: "Transforming raw data into meaningful insights that drive decision-making.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brain text-200-blue-gradient"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M19.938 10.5a4 4 0 0 1 .585.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M19.967 17.484A4 4 0 0 1 18 18"></path></svg>`,
      title: "Problem Solver",
      description: "Tackling complex challenges with innovative solutions and analytical thinking.",
    },
    {
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cpu text-200-blue-gradient"><rect width="16" height="16" x="4" y="4" rx="2"></rect><rect width="6" height="6" x="9" y="9" rx="1"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>`,
      title: "Tech Explorer",
      description: " Constantly learning and adapting to new technologies to push the limits of innovation and problem-solving",
    },
  ],
  aboutSections1:"I am a problem solver at heart, driven by strategy, logic, and creativity.",
  aboutSections2: `I thrive on tackling complex challenges, optimizing systems, and uncovering meaningful insights.
My passion lies in improving processes, enhancing efficiency, and driving impactful solutions.
Beyond work, I enjoy strategic games, analyzing patterns, and pushing boundaries in innovation.
I believe in continuous learning and applying analytical thinking to solve real-world problems.`
    
};


export const educationData: EducationItem[] = [
  {
    degree: "Master of Science in Applied Data Analytics",
    university: "New York Institute of Technology",
    location: "Manhattan, NY",
    duration: "September 2022 – May 2024",
    gpa: "3.70/4.0",
    coursework: [
      "Data Visualization & Reporting",
      "Business Intelligence & Dashboarding",
      "Predictive & Prescriptive Analytics",
      "Big Data & Cloud Analytics",
      "Database Management & SQL",
      "Decision Science & Optimization, Market & Consumer Analytics",
      "Risk Management & Financial Analytics",
      "Supply Chain & Operations Analytics",
      "Strategic Management & Business Forecasting",
      "Machine Learning for Business Insights",
      "Python & R for Data Analysis",
      "Statistical Modeling & Regression Analysis",
      "Automation in Business",
    ],
    gradient: "text-xl font-semibold  hover:text-primary  bg-gradient-to-r from-blue-500 via-violet-500 to-pink-500 text-primary inline-block text-transparent bg-clip-text",
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    university: "Sreenidhi Institute of Science and Technology",
    location: "Hyderabad, India",
    duration: "September 2017 – March 2021",
    gpa: "9.21/10",
    coursework: [
      "Predictive & Prescriptive Analytics",
      "Big Data & Cloud Analytics",
      "Database Management & SQL",
      "Data Warehousing & ETL",
      "Statistical Modeling & Regression Analysis",
      "AI & Automation in Business",
      "Decision Science & Optimization",
      "Market & Consumer Analytics",
      " Risk Management & Financial Analytics",
      "Strategic Management & Business Forecasting",
      "Pricing & Revenue Optimization",
      "Business Process Management",
      "Software Development Life Cycle (SDLC)",
      "Business Process Management",
      "Agile & Scrum Methodologies",
      "Object-Oriented Programming",
      "Data Structures & Algorithms",
      " API Development & Integration",
      " Cloud Computing & DevOps",
      "Machine Learning for Business Insights",
      "Python & R for Data Analysis"
    ],
    gradient: "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500",
  },
];


// export const skillCategories = [
//   {
//     title: "Project Management",
//     color: "text-blue-500",
//     skills: [
//       { name: "Agile", icon: "🐍" },
//       { name: "Scrum", icon: "📊" },
//       { name: "Kanban", icon: "🗄️" },
//       { name: "Business requirement Documentation(BRD)", icon: "☕" },
//       { name: "Risk Analysis and Process Mapping", icon: "⚡" },
//       { name: "JavaScript", icon: "🌐" }
//     ]
//   },
//   {
//     title: "IT consulting & data analytics ",
//     color: "text-green-500",
//     skills: [
//       { name: "Excel", icon: "📊" },
//       { name: "IBM SPSS", icon: "📈" },
//       { name: "PowerBI", icon: "📉" },
//       { name: "Tableau", icon: "📊" },
//       { name: "SAS", icon: "📋" }
//     ]
//   },
//   {
//     title: "Machine Learning & Deep Learning",
//     color: "text-purple-500",
//     skills: [
//       { name: "TensorFlow", icon: "🧠" },
//       { name: "PyTorch", icon: "🔥" },
//       { name: "Scikit-learn", icon: "🤖" },
//       { name: "Keras", icon: "⚙️" },
//       { name: "OpenCV", icon: "👁️" }
//     ]
//   },
//   {
//     title: "Big Data & Cloud Computing",
//     color: "text-blue-400",
//     skills: [
//       { name: "Azure", icon: "☁️" },
//       { name: "AWS", icon: "🌩️" },
//       { name: "Hadoop", icon: "🐘" },
//       { name: "Spark", icon: "⚡" },
//       { name: "MongoDB", icon: "🍃" }
//     ]
//   },
//   {
//     title: "Software Development",
//     color: "text-orange-500",
//     skills: [
//       { name: "Git", icon: "📦" },
//       { name: "Docker", icon: "🐳" },
//       { name: "Jenkins", icon: "🔧" },
//       { name: "React", icon: "⚛️" },
//       { name: "Node.js", icon: "🟢" }
//     ]
//   },
//   {
//     title: "Data Visualization",
//     color: "text-cyan-500",
//     skills: [
//       { name: "D3.js", icon: "📊" },
//       { name: "Plotly", icon: "📈" },
//       { name: "Matplotlib", icon: "📉" },
//       { name: "Seaborn", icon: "🎨" }
//     ]
//   }
// ];
export const skillCategories = [
  {
    category: "Project Management",
    color: "text-blue-500",
    icon: "📋", // Project Management Icon
    skills: [
      { name: "Agile", icon: "⚡" }, // Agile process
      { name: "Scrum", icon: "📊" }, // Scrum board
      { name: "Kanban", icon: "🗂️" }, // Kanban board
      { name: "Business Requirement Documentation (BRD)", icon: "📄" }, // Document file
      { name: "Risk Analysis and Process Mapping", icon: "🔍" }, // Risk/Analysis
    ],
    progress: 95, // Percentage
  },
  {
    category: "IT Consulting & Data Analytics",
    color: "text-blue-500",
    icon: "📊", // Analytics Icon
    skills: [
      { name: "SQL", icon: "🛢️" }, // Database
      { name: "Python", icon: "🐍" }, // Python logo
      { name: "R", icon: "📊" }, // R for data analytics
      { name: "Tableau", icon: "📈" }, // Charts
      { name: "Power BI", icon: "⚡" }, // Power BI visualization
      { name: "Advanced Excel", icon: "📊" }, // Excel charts
    ],
    progress: 92,
  },
  {
    category: "Software & Process Automation",
    color: "text-blue-500",
    icon: "⚙️", // Automation Icon
    skills: [
      { name: "Excel Macros", icon: "📜" }, // Macro script
      { name: "VBA", icon: "🔧" }, // Tool for scripting
      { name: "JIRA", icon: "📌" }, // JIRA tracking
      { name: "Confluence", icon: "📘" }, // Confluence documentation
      { name: "ERP & CRM Systems", icon: "🏢" }, // Business system
    ],
    progress: 90,
  },
];

export const certificationdData = {
  title: "Certifications",
  subtitle: "Professional certifications and achievements",
  sections: [
    {
      title: "Data Enthusiast",
      platform: "Coursera",
      time: 'January-2022',
      description: "Transforming raw data into meaningful insights that drive decision-making.",
      link : 'https://example.com/react-cert'
    },
    {
     title: "Problem Solver",
     platform: "DeepLearning.AI",
     time: 'January-2022',
      description: "Tackling complex challenges with innovative solutions and analytical thinking.",
      link : 'https://example.com/react-cert'
    },
    {
      title: "Tech Explorer",
      platform: "IBM",
      time: 'January-2022',
      description: " Constantly learning and adapting to new technologies to push the limits of innovation and problem-solving",
      link : 'https://example.com/react-cert'
      
    },
  ],    
};


// export const skills: Skill[] = [
//   {
//     category: "Analysis",
//     items: ["Requirements Gathering", "Process Mapping", "Data Analysis", "User Stories", "Gap Analysis"]
//   },
//   {
//     category: "Tools",
//     items: ["JIRA", "Confluence", "PowerBI", "SQL", "Excel", "Tableau"]
//   },
//   {
//     category: "Soft Skills",
//     items: ["Stakeholder Management", "Communication", "Problem Solving", "Team Leadership", "Project Management"]
//   }
// ];




export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise CRM Implementation",
    description: "Led the business analysis phase of a company-wide CRM implementation, resulting in 30% improvement in customer response time.",
    technologies: ["Salesforce", "SQL", "PowerBI"],
    image: "/projects/crm.jpg",
    link: "https://example.com/crm-case-study"
  },
  {
    id: 2,
    title: "Process Automation Initiative",
    description: "Identified and automated 5 key business processes, reducing manual work by 45% and saving 120 hours monthly.",
    technologies: ["UiPath", "Process Mapping", "Azure"],
    image: "/projects/automation.jpg",
    github: "https://github.com/janedoe/process-automation"
  }
];

export const experience = [
  {
    role: "Business Analyst ",
    company: "Kastech Software Solutions",
    location: "Houston, Texas",
    duration: "Sep 2023 – Present",
    responsibilities: [
      "Developed and optimized SQL queries to extract insights from business data, improving reporting efficiency by 35%.",
      "Created interactive dashboards in Power BI and Tableau, enabling leadership to track project KPIs and reduce reporting errors by 20%.",
      "Implemented process automation using Excel Macros and VBA, reducing manual effort in financial reporting by 30%.",
      "Led requirement gathering sessions with stakeholders, translating business needs into functional BRD documents that improved clarity in 80% of projects.",
      "Used JIRA and Confluence to streamline project tracking and documentation, reducing project turnaround time by 15%.",

    ],
  },
  {
    role: "Business System Analyst",
    company: "Infosys Technologies Limited",
    location: "Hyderabad, India",
    duration: "Jun 2020 – Jun 2022",
    responsibilities: [
      "Automated data workflows in SQL and Excel, improving efficiency in financial and operational reporting by 40%.",
      "Designed Power BI dashboards that tracked IT project performance, leading to a 25% improvement in SLA compliance.",
      "Conducted root cause analysis on system inefficiencies, proposing solutions that cut downtime by 18%.",
      "Worked on ERP and CRM system enhancements, ensuring seamless data integration across business functions.",
      "Collaborated with cross-functional teams, improving communication between technical teams and business users for smoother project execution.",

    ],
  },
  {
    role: "Business System Analyst Intern",
    company: "Myron Pvt Ltd",
    location: "Hyderabad, India",
    duration: "Aug 2019 – May 2020",
    responsibilities: [
      "Analyzed 500,000+ construction transactions using SQL, uncovering pricing trends that helped optimize property investments.",
      "Developed Excel-based financial models, enabling the real estate team to forecast market fluctuations with 85% accuracy.",
      "Created interactive dashboards in Power BI, improving visibility into rental occupancy trends and leading to a 10% increase in rental revenue.",
      "Led data-driven decision-making sessions, using Power BI visualizations to support strategic investment planning.",
      "Assisted in process automation using VBA Macros, reducing manual data entry errors by 90%.",
      
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: "LinkedIn",
    url: "http://linkedin.com/in/devarasettygayathri",
    icon: "linkedin"
  },
  {
    platform: "GitHub",
    url: "https://github.com/janedoe",
    icon: "github"
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/janedoe",
    icon: "twitter"
  }
];

export const contactData = {
  email: "devarasettygayathri99@gmail.com",
  linkedin: "http://linkedin.com/in/devarasettygayathri",
  phone: "+1 (832) 525 9824",
  resumePath: "/path-to-your-resume.pdf"
};