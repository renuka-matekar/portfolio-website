"use client";
import { Project,  EducationItem} from '@/types';


export const personalInfo = {
  fname: "Gayathri",
  lname: "Devarasetty",
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
    degree: "Master of Business Administration- Business Analytics ",
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
    degree: "Bachelor of Engineering in Electronics and Communication Engineering",
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
      title: "IBM Business & Data Analysis Professional Certificate",
      name: 'Introduction to Business Analysis.pdf',
      platform: "IBM",
      time: 'February-2025',
      description: `Introduction to Business Analysis is a foundational course designed to equip learners with essential skills in analyzing business needs, identifying solutions, and improving processes. It covers key concepts such as requirements gathering, stakeholder management, data analysis, and business process modeling. The course helps professionals develop problem-solving abilities and decision-making skills, making them valuable assets in project management and strategic planning. Ideal for aspiring business analysts, project managers, and IT professionals, this course provides a solid understanding of how businesses operate and how to drive efficiency through analysis.`,
      // link : 'https://coursera.org/share/42c029b19d51843da5f216ed6a8fa56e'
      link: '/Introduction to Business Analysis.pdf'
    },
    // {
    //  title: "Microsoft Data Analysis Professional Certificate",
    //  name: 'Excel Basics for Data Analysis.pdf',
    //  platform: "Coursera",
    //  time: 'February-2025',
    //   description: "Excel Basics for Data Analysis is a beginner-friendly course that introduces fundamental Excel skills for organizing, analyzing, and visualizing data. It covers essential functions, formulas, data formatting, sorting, filtering, pivot tables, and basic charts. Learners will gain hands-on experience in using Excel to clean, process, and interpret data efficiently. This course is ideal for professionals, students, and aspiring data analysts looking to build a strong foundation in Excel for data-driven decision-making.",
    //   // link : ''
    //   link: '/Excel Basics for Data Analysis.pdf'
    // },
    {
      title: "Google IT Automation with Python Professional Certificate",
      name: 'Crash Course on Python.pdf',
      platform: "Google",
      time: 'February-2025',
       description: "Crash Course on Python is an introductory course designed to teach the fundamentals of Python programming. It covers key concepts such as variables, data types, loops, functions, and error handling. Learners will gain hands-on experience in writing Python scripts, automating tasks, and solving real-world problems. This course is ideal for beginners, professionals, and aspiring programmers looking to build a strong foundation in Python for data analysis, automation, web development, or machine learning.",
       link : '/Crash Course on Python.pdf'
      //  'https://coursera.org/share/cdf8fb7b4ae480a569ab2b21ec27cf75'
     },
     {
      title: "Power BI Essential Training Certificate",
      name: 'Power BI Essential Training.pdf',
      platform: "NASBA Linkedin",
      time: 'February-2025',
       description: `Power BI Essential Training is a comprehensive course designed to help learners master Power BI for data visualization and business intelligence. It covers key concepts such as data importing, cleaning, transformation, DAX formulas, creating interactive dashboards, and sharing reports. Participants will gain hands-on experience in turning raw data into actionable insights using Power BI's powerful tools. This course is ideal for business analysts, data professionals, and anyone looking to enhance their data-driven decision-making skills.`,
       link : '/Power BI Essential Training.pdf'
      //  'https://github.com/Gayuu-9x/GayathriPriyaDevarasetty-Portfolio/blob/main/CertificateOfCompletion_Power%20BI%20Essential%20Training%20(1).pdf'
     },
     {
      title: "Microsoft Data Analysis Professional Certificate",
      name : 'Career Essentials in Data Analysis by Microsoft and LinkedIn.pdf',
      platform: "Microsoft and LinkedIn",
      time: 'February-2025',
       description: `Career Essentials in Data Analysis by Microsoft and LinkedIn is a beginner-friendly course designed to equip learners with fundamental data analysis skills. It covers key concepts such as data collection, cleaning, visualization, and interpretation using tools like Excel and Power BI. The course also provides insights into industry trends, career opportunities, and essential analytical skills needed for data-driven decision-making. Ideal for aspiring data analysts, professionals, and students, this course helps build a strong foundation for a career in data analysis.`,
       link : '/Career Essentials in Data Analysis by Microsoft and LinkedIn.pdf'
        // 'https://github.com/Gayuu-9x/GayathriPriyaDevarasetty-Portfolio/blob/main/CertificateOfCompletion_Career%20Essentials%20in%20Data%20Analysis%20by%20Microsoft%20and%20LinkedIn%20(1).pdf'
     },
  ],    
};

export const projectsData = [  
  {
    title: "Car Sales Data Analysis",
    description: `The Car Sales Data Analysis Using Tableau project focuses on analyzing historical car sales data to uncover trends, customer preferences, and market dynamics. By leveraging Tableau's powerful visualization capabilities, the project provides interactive dashboards that display key metrics such as total sales by year, region, and brand. Users can apply filters to analyze data based on specific car models, customer demographics, and time periods, enabling a detailed exploration of sales performance.
    The analysis delves into monthly and yearly sales trends, identifying best-selling car models and brands while assessing regional demand patterns. Additionally, customer insights are extracted by evaluating preferences based on car type, price range, and fuel type, helping businesses understand evolving buying behaviors. Various data visualizations, including bar charts, line graphs, pie charts, and heatmaps, provide an intuitive way to interpret trends. If applicable, geospatial maps are used to visualize regional sales distributions effectively.
    The project integrates data from multiple sources, including Excel, CSV files, and databases, ensuring data accuracy through preprocessing and transformation. The insights derived from this analysis support businesses in optimizing inventory management, refining marketing strategies, and making data-driven decisions. By understanding sales performance and consumer trends, stakeholders can enhance forecasting capabilities and drive profitability.
    The project utilizes Tableau for interactive data visualization, enabling real-time data exploration and dynamic reporting. SQL is used for data extraction and querying, while Python (if applicable) assists in data preprocessing, transformation, and statistical analysis. Excel and CSV files serve as primary data sources, facilitating structured data storage and retrieval. The combination of these technologies ensures efficient data handling, visualization, and business intelligence, making the project a valuable resource for data-driven decision-making in the automotive sales industry.`,
    image: '/car Sales.png',
    // 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    githubLink: "https://github.com/Gayuu-9x/open-source-tableau"
    // https://github.com/Gayuu-9x/book-trends-analysis
  },
  {
    title: "Loan Default Prediction Using Machine Learning",
    description: `This project is a data-driven analysis of book trends aimed at helping a Book Publishing Company make better investment decisions. The primary goal is to identify profitable book categories, authors, and trends based on historical data, ratings, and reader preferences`,
    image: '/loan_default.png',
    // 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    githubLink: 'https://github.com/Gayuu-9x/loan-prediction'
    // "https://github.com/Gayuu-9x/book-trends-analysis"
  },

  {
    title: "Exploratory Data Analysis (EDA) ",
    description: `This project focuses on analyzing loan applications to assess credit risk, borrower eligibility, and financial stability. The dataset consists of bank loan records, including credit amount, applicant income, employment details, repayment terms, and approval decisions. Using Exploratory Data Analysis (EDA) and statistical modeling, the study uncovers key factors affecting loan approvals and rejections, helping financial institutions optimize loan disbursement strategies and risk management. The analysis involves examining borrower demographics such as age, income, education, and employment details to identify patterns in loan approvals and rejections based on financial history.
     It also evaluates risk factors, including credit term, payment capacity, and job experience, to develop data-driven strategies for better credit risk assessment. The dataset includes key features such as statement ID (unique loan identifier), credit amount and term (loan amount requested and repayment duration), income details (normalized, total, and confirmed income), employment and education information (work position, job experience, and education level), demographic factors (age, marital status, and number of dependents), and loan decision (approved or rejected). 
     The project utilizes Python for data processing and analysis, with tools like Pandas and NumPy for data manipulation, Matplotlib and Seaborn for visualization, and SciPy and StatsModels for statistical evaluation.
      If applicable, Scikit-learn can be used for machine learning-based credit risk predictions. The approach includes data cleaning and preprocessing to handle missing values and formatting inconsistencies, followed by Exploratory Data Analysis (EDA) to identify correlations and trends. Feature engineering is applied to create new variables for better predictions, and risk assessment techniques evaluate the financial stability of applicants.
      If machine learning is integrated, predictive modeling can be used to forecast credit risk. This project provides actionable insights into loan approval trends, helping financial institutions make informed lending decisions while minimizing risk exposure`,
    image:`/EDA.png`,
    // `https://media-hosting.imagekit.io//adf4b16b208e493d/6d841cf3-04a2-4a5d-ad1d-0738317db8b1%20(3).webp?Expires=1834493532&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=idwxMPOdOCU7dmLtlxVSKwHAr5ZvajrgHtldDjwESqUDQoabehNz3xie~U0uJ38x9HwiSi2xGxjc3dKOqqFN73TC5kit5hY42VIYjXmDJ~OnSctseEwL1450ZhEGOJObDhqScPrYjVFLD-0ZpuDTYrH4Wj6~klkQl1jFaKS7zBioZWXtn2fpVtChs7qmr5LiqIh1LKVd2o26BACETYWtpTC-dhGqvCS-D9gi~8DaKRfETxTS2Xw-0xg5Y7mmobnd4ncEs7xBgfJ7k9Wts1gSWKFb2yPazOOADqFPeiSBiDdzqJ0SEE~nkwGv0CYtKY~JS00hXwUW8UdVLiIudZeWKg__`,
    githubLink: "https://github.com/Gayuu-9x/eda-analysis"
    // https://github.com/Gayuu-9x/coffee-revenue-insights"
  },
  {
    title: "Luxury Home Price Prediction",
    description: `The main goal for this project is to recommend for investment the purchase of twenty (20) most luxurious (i.e. priciest) homes out of 100 candidate properties for which the sales prices are not known. The data you will use for this project are described below. A good purchase recommendation is for a shortlist of the 20 homes as close as possible to a final list based on the target prices of the homes; meanwhile, the rank order of homes in your recommended list will not matter, only thing that matters as far as your project’s quality of predictive analytics goes is the number of homes in your recommendation list that overlap with a list based on the actual target prices. 
  Using the CRISP-DM (Cross-Industry Standard Process for Data Mining) for data analysis, mining, and extraction. It is an effective methodology for the data mining tasks. There are six different phases for CRISP-DM. They are Business Understanding phase, Data understanding phase, Data Preparation phase, Modeling, Evaluation and Deployment. Implementing all these phases, will be our goal for this project. 
  The first phase aims at the clear perception of the business requirements, any good project would start with the clear understanding of the requirements. The main goal lies in understanding the objectives and requirements of the project. Then in the next phase, focus is mainly on identifying, analyzing, and collecting the data sets. The third phase, which is often referred to as “data munging”. This phase cleans the data and makes final preparation for the data set to enter to evaluation.  Next step would be selecting modelling techniques, evaluation, and deployment, see predictive analystics`,
    
  image: `https://media-hosting.imagekit.io//2ed1626fc956449c/property-market-analysis-investment-tiny-people-study-real-estate-price-growth-chart_1135642-97.avif?Expires=1834496215&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=ZTvS2S6fXESWbxqD2HSEBV9UoAi8v5qBIwgwmmENIiYjle1WSOvrouqF83ziN0NdkV4FVgjmMm5DWmHnh52xcUBWKajVShKt4fC30zFlU1H0P8WIhWxkOEJJwKL7GzPYwYRgHzp44tmzanQfbvDXZQpxCiT3pqwOHJMqssxVIWGgFwv710FDVyjAf4SiAOhcGElYUZKXOfcNoNPENGm-8N5vPkL8o-WcYJfwyXEpF0l70mLPpHlcNshpZC0H9TzgQ4q1joJwuIH4qH2nhob-DEYBetq9ueSxlF4N-E7PNe4hL0d7GllWShwJYC30sVEeqH9tWk1HWVd70g-2lZ5PHQ__`,

  githubLink: "https://github.com/Gayuu-9x/luxury-home-price-prediction"
  },
];

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


export const contactData = {
  email: "devarasettygayathri99@gmail.com",
  linkedin: "http://linkedin.com/in/devarasettygayathri",
  phone: "+1 (832) 525 9824",
  resumePath: "/path-to-your-resume.pdf"
};