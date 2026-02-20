
import { Course, Review } from './types';
import { COURSE_LINKS } from './links';

// Helper to generate UW Catalog Link from course code
function getCatalogLink(code: string): string | undefined {
  if (!code) return undefined;
  const parts = code.split(' ');
  if (parts.length < 2) return undefined;
  
  // Handle cross-listed courses like "ENTRE/FIN" -> "entre" (or handle both if needed, but primary is usually sufficient)
  const deptPart = parts[0].split('/')[0].toUpperCase(); 
  const num = parts[1];
  
  // Map department codes to UW Catalog HTML page names
  const mapping: Record<string, string> = {
    'ACCTG': 'acctg',
    'BA': 'ba',
    'BCMU': 'buscomm',
    'BECON': 'busecon',
    'ENTRE': 'entre',
    'FIN': 'finance',
    'IBUS': 'intlbus',
    'MGMT': 'mgmt',
    'MKTG': 'mktg',
    'OPMGT': 'opmgmt',
    'QMETH': 'qmeth',
    'IS': 'is' 
  };

  const page = mapping[deptPart] || deptPart.toLowerCase();
  const anchor = deptPart.toLowerCase(); // Anchor usually matches the prefix (e.g., #bcmu509)
  
  return `http://www.washington.edu/students/crscat/${page}.html#${anchor}${num}`;
}

const rawCourses: Course[] = [
  // --- Spring 2026 Scheduled Courses ---
  { 
    sln: "10151", 
    code: "ACCTG 579", 
    section: "A/B", 
    title: "Business Sustainability Reporting & Analysis", 
    credits: 4, 
    instructor: "McVay", 
    room: "PCAR 293", 
    days: "Mon/Wed", 
    time: "10:30-12:20",
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["10151"],
    syllabus: {
      description: "Traditional financial accounting is not designed to measure the societal impact of a company’s operations. Sustainability reporting has evolved to fill this void, allowing for a more comprehensive lens of both performance and risk assessment.",
      learningObjectives: [
        "Gain an appreciation for the frictions related to both measurement and disclosure regulation",
        "Map environmental and social impacts to commonly disclosed metrics within ESG reports",
        "Understand the role of the ISSB and current trends in sustainability"
      ],
      grading: [
        { item: "Class Participation", weight: "20%" },
        { item: "Case Write-ups", weight: "30%" },
        { item: "Final Project", weight: "50%" }
      ]
    }
  },
  { 
    sln: "17122", 
    code: "MKTG 511", 
    section: "A/B", 
    title: "Business-to-Business Marketing", 
    credits: 4, 
    instructor: "Long", 
    room: "PCAR 393", 
    days: "Mon/Wed", 
    time: "10:30-12:20",
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["17122"],
    syllabus: {
      description: "Addresses how to understand, create, and deliver value when selling goods and services to other businesses, governments, and institutional customers.",
      learningObjectives: [
        "Assess opportunities in business markets",
        "Develop marketing strategy for B2B contexts",
        "Manage key marketing execution elements"
      ],
      grading: [
        { item: "Class Participation", weight: "30%" },
        { item: "Group Assignment", weight: "30%" },
        { item: "Quizzes & Exercises", weight: "40%" }
      ]
    }
  },
  { 
    sln: "10847", 
    code: "BECON 526", 
    section: "A/B", 
    title: "Competing in the Global Economy", 
    credits: 4, 
    instructor: "Gutierrez", 
    room: "PCAR 295", 
    days: "Mon/Wed", 
    time: "1:30-3:20", 
    quarter: "Spring 2026",
    info: "MBA-MS, INTL",
    syllabusLink: COURSE_LINKS["10847"],
    syllabus: {
      description: "Explores how purely domestic operations differ from global ones. Topics range from the internationalization process to the operation of complex global operations.",
      learningObjectives: [
        "Understand, identify, assess and project global trends",
        "Determine how trends give rise to business opportunities or threats",
        "Develop strategies to exploit opportunities or mitigate threats"
      ],
      grading: [
        { item: "Individual Case Write-ups", weight: "20%" },
        { item: "Group Case Write-up", weight: "40%" },
        { item: "Professionalism/Participation", weight: "20%" },
        { item: "Final Exam", weight: "20%" }
      ]
    }
  },
  { 
    sln: "17050", 
    code: "MGMT 547", 
    section: "A/B", 
    title: "Successful Negotiations", 
    credits: 2, 
    instructor: "Barnes", 
    room: "PCAR 293", 
    days: "Mon/Wed", 
    time: "1:30-3:20", 
    quarter: "Spring 2026",
    info: "2nd Half",
    syllabusLink: COURSE_LINKS["17050"],
    syllabus: {
      description: "Acquire a fundamental understanding of negotiations and the skills to plan for and analyze your own negotiations.",
      learningObjectives: [
        "Develop confidence in the negotiation process",
        "Analyze behavior and motives of negotiators",
        "Evaluate costs and benefits of alternative actions"
      ],
      grading: [
        { item: "Engagement/Participation", weight: "15%" },
        { item: "Planning Documents", weight: "25%" },
        { item: "Analyses", weight: "30%" },
        { item: "IRL Negotiation Paper", weight: "25%" },
        { item: "Surveys", weight: "5%" }
      ]
    }
  },
  { 
    sln: "17124", 
    code: "MKTG 535", 
    section: "A/B", 
    title: "Analytics Consulting Lab", 
    credits: 4, 
    instructor: "Walker", 
    room: "PCAR 297", 
    days: "Mon/Wed", 
    time: "1:30-3:20", 
    quarter: "Spring 2026",
    info: "PRAC",
    syllabusLink: COURSE_LINKS["17124"],
    syllabus: {
      description: "Experiential class with a strong focus on the application of analytics and market measurement in a real-world, client-facing, consulting environment.",
      learningObjectives: [
        "Apply analytics in a real-world, team-based environment",
        "Manage team dynamics and client relationships",
        "Execute a project from analysis to recommendation"
      ],
      grading: [
        { item: "Professor Eval of Final Project", weight: "40%" },
        { item: "Professor Eval of Work Plan", weight: "20%" },
        { item: "Client Evaluation", weight: "15%" },
        { item: "Professor Eval of Prep", weight: "15%" },
        { item: "Peer Evaluations", weight: "10%" }
      ]
    }
  },
  { 
    sln: "17044", 
    code: "MGMT 509", 
    section: "A/B", 
    title: "Global Strategy", 
    credits: 2, 
    instructor: "Steensma", 
    room: "PCAR 391", 
    days: "Mon/Wed", 
    time: "3:30-5:20", 
    quarter: "Spring 2026",
    info: "1st Half, INTL",
    syllabusLink: COURSE_LINKS["17044"],
    syllabus: {
      description: "Develop a better understanding of the global environment in which businesses compete. Covers globalization trends, government-multinational firm relations, country risk, entry modes.",
      learningObjectives: [
        "Manage key multinational firm relationships",
        "Evaluate institutional voids of countries",
        "Assess export vs. licensing vs. FDI decisions"
      ],
      grading: [
        { item: "Class Participation", weight: "30%" },
        { item: "Individual Case Analysis", weight: "35%" },
        { item: "Group Case Analysis", weight: "35%" }
      ]
    }
  },
  { 
    sln: "17132", 
    code: "MKTG 568", 
    section: "A/B", 
    title: "Pricing Strategy and Analytics", 
    credits: 4, 
    instructor: "Biswas", 
    room: "PCAR 392", 
    days: "Mon/Wed", 
    time: "3:30-5:20", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["17132"],
    syllabus: {
      description: "Blends marketing analytic frameworks, marketing strategy & microeconomic theory, and data to formulate actionable pricing strategies.",
      learningObjectives: [
        "Formulate pricing strategy using data and methods",
        "Understand microeconomic foundations of pricing",
        "Design and execute pricing strategies across contexts"
      ],
      grading: [
        { item: "Final Project", weight: "35%" },
        { item: "Graded Group Homework", weight: "30%" },
        { item: "Group Case Write-ups", weight: "15%" },
        { item: "Individual Case Write-up", weight: "10%" },
        { item: "Class Participation", weight: "10%" }
      ]
    }
  },
  { 
    sln: "14536", 
    code: "FIN 579", 
    section: "E/F", 
    title: "International Finance", 
    credits: 2, 
    instructor: "Siegel", 
    room: "PCAR 393", 
    days: "Tue/Thu", 
    time: "10:30-12:20", 
    quarter: "Spring 2026",
    info: "1st Half, INTL",
    syllabusLink: COURSE_LINKS["14536"],
    syllabus: {
      description: "Focuses on the financial management of the multinational corporation. We will cover the foreign exchange market, currency risk management, and international investment decisions.",
      learningObjectives: [
        "Understand foreign exchange markets and parity conditions",
        "Manage currency risk using derivatives",
        "Evaluate international capital budgeting projects"
      ],
      grading: [
        { item: "Case Studies", weight: "40%" },
        { item: "Final Exam", weight: "40%" },
        { item: "Participation", weight: "20%" }
      ]
    }
  },
  { 
    sln: "17128", 
    code: "MKTG 560", 
    section: "A/B", 
    title: "Consumer Insights", 
    credits: 4, 
    instructor: "TBD", 
    room: "PCAR 395", 
    days: "Tue/Thu", 
    time: "10:30-12:20", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["17128"],
    syllabus: {
      description: "Covers the art and science of market research. Study qualitative and quantitative research strategies that generate new knowledge about consumers behavior.",
      learningObjectives: [
        "Learn qualitative and quantitative research strategies",
        "Understand theory and practice of gaining insights",
        "Explore implications of AI for accelerating market research"
      ],
      grading: [
        { item: "Class Participation", weight: "25%" },
        { item: "Assignments/Cases", weight: "35%" },
        { item: "Group Project", weight: "40%" }
      ]
    }
  },
  { 
    sln: "10140", 
    code: "ACCTG 510", 
    section: "A/B", 
    title: "Introduction to Financial Statement Analysis", 
    credits: 4, 
    instructor: "Van Winkle", 
    room: "PCAR 392", 
    days: "Tue/Thu", 
    time: "1:30-3:20", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["10140"],
    syllabus: {
      description: "Gain knowledge and skills to analyze, interpret, and use publicly available financial information. Focus is on analysis of public companies performed by external parties.",
      learningObjectives: [
        "Analyze financial information in annual and quarterly reports",
        "Apply fundamental valuation techniques",
        "Work in teams to communicate insights from analysis"
      ],
      grading: [
        { item: "Valuation Report (Team)", weight: "28%" },
        { item: "Midterm Exam", weight: "28%" },
        { item: "Pre-class Case Submissions", weight: "24%" },
        { item: "Professionalism", weight: "20%" }
      ]
    }
  },
  { 
    sln: "14065", 
    code: "ENTRE/FIN 557", 
    section: "A/B", 
    title: "Entrepreneurial Finance", 
    credits: 4, 
    instructor: "Young", 
    room: "PCAR 393", 
    days: "Tue/Thu", 
    time: "1:30-3:20", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["14065"],
    syllabus: {
      description: "Advanced finance course providing understanding of financial issues facing entrepreneurs. Covers 'small business survival skills' like assessing performance, financial planning, and valuation.",
      learningObjectives: [
        "Assess financial performance and planning for startups",
        "Analyze terms of venture capital agreements",
        "Evaluate risks and opportunities in entrepreneurial finance"
      ],
      grading: [
        { item: "Deliverables (Case write-ups)", weight: "75%" },
        { item: "Daily Class Work (Participation)", weight: "25%" }
      ]
    }
  },
  { 
    sln: "21090", 
    code: "FIN 579", 
    section: "G/H", 
    title: "Climate Risk and the Innovation", 
    credits: 4, 
    instructor: "Bruner", 
    room: "PCAR 393", 
    days: "Tue/Thu", 
    time: "1:30-3:20", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["21090"],
    syllabus: {
      description: "Examines how climate change risks affect financial markets and how financial innovation can address these challenges. Topics include carbon pricing, green bonds, and ESG investing.",
      learningObjectives: [
        "Understand physical and transition risks of climate change",
        "Evaluate financial instruments designed for climate mitigation",
        "Analyze corporate climate disclosures"
      ],
      grading: [
        { item: "Group Project", weight: "40%" },
        { item: "Assignments", weight: "30%" },
        { item: "Participation", weight: "30%" }
      ]
    }
  },
  { 
    sln: "17048", 
    code: "MGMT 545", 
    section: "A/B", 
    title: "Leading and Managing High-Performance Org", 
    credits: 4, 
    instructor: "Wee", 
    room: "PCAR 290", 
    days: "Tue/Thu", 
    time: "3:30-5:20", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["17048"],
    syllabus: {
      description: "Leadership is both an art and a science. Builds on authentic leadership with a focus on self-awareness, relationship-building, and balance.",
      learningObjectives: [
        "Deepen focus on self-awareness and relationship-building",
        "Acquire skills in transactional, charismatic, servant, and empowering leadership",
        "Ignite a lifelong desire for continued leadership development"
      ],
      grading: [
        { item: "Leadership Development Plan", weight: "30%" },
        { item: "Leadership Dev Activity", weight: "25%" },
        { item: "Reflection Assignments", weight: "25%" },
        { item: "Course Engagement", weight: "20%" }
      ]
    }
  },
  { 
    sln: "15172", 
    code: "IBUS 500", 
    section: "A/B", 
    title: "Global Business Forum", 
    credits: 2, 
    instructor: "Fong", 
    room: "PCAR 394", 
    days: "Mon", 
    time: "5:00-5:50", 
    quarter: "Spring 2026",
    info: "INTL",
    syllabusLink: COURSE_LINKS["15172"],
    syllabus: {
      description: "MBA class and discussion forum where professionals from around the world share insights into doing business globally.",
      learningObjectives: [
        "Engage with issues arising from doing business globally",
        "Build knowledge of how organizations work differently in different regions",
        "Define leadership qualities required for global business"
      ],
      grading: [
        { item: "Session Contributions", weight: "18 pts" },
        { item: "Post-Session Reflections", weight: "14 pts" },
        { item: "Speaker Discussion Board", weight: "7 pts" },
        { item: "Learning Circles Discussion Board", weight: "7 pts" },
        { item: "Pre Forum Survey", weight: "4 pts" }
      ]
    }
  },
  { 
    sln: "17053", 
    code: "MGMT 550", 
    section: "A/B", 
    title: "CEO and Board Governance", 
    credits: 4, 
    instructor: "Collingsworth/Roe", 
    room: "PCAR 392", 
    days: "Tue", 
    time: "3:30-6:50", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["17053"],
    syllabus: {
      description: "Insiders' view of corporate governance. Explores how boards operate and contribute to a company's competitiveness, profitability, and long-term sustainability.",
      learningObjectives: [
        "Understand various board types and models",
        "Distinguish governance best practices for different stage companies",
        "Analyze board roles in strategy, risk, ethics, and succession"
      ],
      grading: [
        { item: "Quizzes", weight: "30%" },
        { item: "Team Presentation", weight: "25%" },
        { item: "Class Participation", weight: "25%" },
        { item: "Paper", weight: "20%" }
      ]
    }
  },
  { 
    sln: "14534", 
    code: "FIN 579", 
    section: "C/D", 
    title: "Endowment and Institutional Investment", 
    credits: 2, 
    instructor: "Ferguson", 
    room: "PCAR 393", 
    days: "Wed", 
    time: "4:00-5:50", 
    quarter: "Spring 2026",
    info: "2nd Half",
    syllabusLink: COURSE_LINKS["FIN_579_Institutional"],
    syllabus: {
      description: "Focuses on endowment management and specific challenges institutional fund managers face, including security selection, portfolio construction, manager choice.",
      learningObjectives: [
        "Consider drivers of portfolio performance",
        "Understand and evaluate market opportunities of traditional and alternative assets",
        "Evaluate key differences between institutional investment models"
      ],
      grading: [
        { item: "Case Study", weight: "60%" },
        { item: "Participation & Homework", weight: "40%" }
      ]
    }
  },
  { 
    sln: "14074", 
    code: "ENTRE 579", 
    section: "E/F", 
    title: "Biomedical Entrepreneurship", 
    credits: 4, 
    instructor: "Ratner", 
    room: "EXED 110", 
    days: "Wed/Fri", 
    time: "4:00-5:50", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["14074"],
    syllabus: {
      description: "Overview of the challenges necessary for any young business in healthcare or life sciences. Covers regulation, development process, and economics of healthcare.",
      learningObjectives: [
        "Understand system of regulation of health technologies",
        "Learn process of development for health technologies",
        "Understand economics of healthcare"
      ],
      grading: [
        { item: "Weekly Quizzes", weight: "40%" },
        { item: "Final Presentation", weight: "30%" },
        { item: "Interview Reports", weight: "20%" },
        { item: "Peer Reviews", weight: "10%" }
      ]
    }
  },
  { 
    sln: "14072", 
    code: "ENTRE 579", 
    section: "C/D", 
    title: "Entrepreneurial Influence and the Pitch", 
    credits: 2, 
    instructor: "Scallon", 
    room: "PCAR 391", 
    days: "Mon", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    info: "2nd Half",
    syllabusLink: COURSE_LINKS["14072"],
    syllabus: {
      description: "About entrepreneurship and the role that verbal communication, influence, and persuasion play in shaping success.",
      learningObjectives: [
        "Create persuasive pitch for yourself and venture",
        "Differentiate yourself and business from competition",
        "Craft and deliver persuasive startup materials"
      ],
      grading: [
        { item: "Class Participation", weight: "50%" },
        { item: "Homework Assignments", weight: "50%" }
      ]
    }
  },
  { 
    sln: "17046", 
    code: "MGMT 509", 
    section: "C/D", 
    title: "Global Strategy", 
    credits: 2, 
    instructor: "Steensma", 
    room: "PCAR 391", 
    days: "Mon", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    info: "1st Half, INTL",
    syllabusLink: COURSE_LINKS["17046"],
    syllabus: {
      description: "Develop a better understanding of the global environment in which businesses compete. Covers globalization trends, government-multinational firm relations.",
      learningObjectives: [
        "Manage key multinational firm relationships",
        "Evaluate institutional voids of countries",
        "Assess export vs. licensing vs. FDI decisions"
      ],
      grading: [
        { item: "Class Participation", weight: "30%" },
        { item: "Individual Case Analysis", weight: "35%" },
        { item: "Group Case Analysis", weight: "35%" }
      ]
    }
  },
  { 
    sln: "17126", 
    code: "MKTG 556", 
    section: "A/B", 
    title: "Advertising and Promotion Management", 
    credits: 4, 
    instructor: "Schlosser", 
    room: "PCAR 393", 
    days: "Mon", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["17126"],
    syllabus: {
      description: "Provides students with an understanding of the advertising and promotion process, including the development of an integrated marketing communications plan.",
      learningObjectives: [
        "Develop integrated marketing communications plans",
        "Evaluate creative strategies and executions",
        "Understand media planning and buying"
      ],
      grading: [
        { item: "Group Project", weight: "40%" },
        { item: "Class Participation", weight: "20%" },
        { item: "Individual Assignments", weight: "20%" },
        { item: "Final Exam", weight: "20%" }
      ]
    }
  },
  { 
    sln: "10849", 
    code: "BECON 546", 
    section: "A", 
    title: "Game Theory", 
    credits: 4, 
    instructor: "Leon", 
    room: "PCAR 290", 
    days: "Tue", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["10849"],
    syllabus: {
      description: "Surveys and develops concepts and techniques of game theory and information economics and their applications to issues of business strategy.",
      learningObjectives: [
        "Identify strategic environments and model them as games",
        "Analyze economic situations using game theory techniques",
        "Devise strategic moves to exploit situations"
      ],
      grading: [
        { item: "Team Project", weight: "350 pts" },
        { item: "Exam", weight: "300 pts" },
        { item: "Homework Assignments", weight: "200 pts" },
        { item: "Discussions", weight: "150 pts" }
      ]
    }
  },
  { 
    sln: "14067", 
    code: "ENTRE/FIN 557", 
    section: "C/D", 
    title: "Entrepreneurial Finance", 
    credits: 4, 
    instructor: "Young", 
    room: "PCAR 391", 
    days: "Tue", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["14067"],
    syllabus: {
      description: "Advanced finance course providing understanding of financial issues facing entrepreneurs. Covers 'small business survival skills' like assessing performance, financial planning, and valuation.",
      learningObjectives: [
        "Assess financial performance and planning for startups",
        "Analyze terms of venture capital agreements",
        "Evaluate risks and opportunities in entrepreneurial finance"
      ],
      grading: [
        { item: "Deliverables (Case write-ups)", weight: "75%" },
        { item: "Daily Class Work (Participation)", weight: "25%" }
      ]
    }
  },
  { 
    sln: "14531", 
    code: "FIN 566", 
    section: "A/B", 
    title: "Alternative Investments: Hedge Funds & PE", 
    credits: 4, 
    instructor: "Kremens", 
    room: "PCAR 291", 
    days: "Wed", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["14531"],
    syllabus: {
      description: "What strategies do investors pursue to make returns in Alternative Investments? Devoted around half to Hedge Fund strategies (Quantitative Factor, Distressed, Merger Arb) and half to Private Equity.",
      learningObjectives: [
        "Understand risks/returns of hedge fund strategies",
        "Understand structure and process of PE funds",
        "Evaluate PE investment opportunities"
      ],
      grading: [
        { item: "Midterm Exam", weight: "25%" },
        { item: "Final Exam", weight: "25%" },
        { item: "Class Presentation", weight: "25%" },
        { item: "Participation", weight: "25%" }
      ]
    }
  },
  { 
    sln: "17055", 
    code: "MGMT 575", 
    section: "A/B", 
    title: "Women In Leadership", 
    credits: 2, 
    instructor: "Goethals", 
    room: "PCAR 293", 
    days: "Wed", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    info: "1st Half",
    syllabusLink: COURSE_LINKS["17055"],
    syllabus: {
      description: "Combines dynamic sessions with accomplished women making a difference with exploration of issues related to female leadership. Students assess their own strengths.",
      learningObjectives: [
        "Draw insights from exceptional female role models",
        "Build frameworks for female leadership",
        "Identify personal sources of power and resilience"
      ],
      grading: [
        { item: "Difference Plan + Mentor Circle Summary", weight: "450 pts" },
        { item: "Group Work (Book/Speaker)", weight: "200 pts" },
        { item: "Personal Baseline", weight: "150 pts" },
        { item: "Participation", weight: "100 pts" },
        { item: "Mentor Circle Plan", weight: "50 pts" }
      ],
      books: ["Likable Badass", "The Broken Rung", "Good Power", "Good Guys"]
    }
  },
  { 
    sln: "17135", 
    code: "MKTG 579", 
    section: "A/B", 
    title: "Culture driven sales and go to market strategy", 
    credits: 2, 
    instructor: "Wright", 
    room: "PCAR 391", 
    days: "Wed", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    info: "April 8 - May 6",
    syllabusLink: COURSE_LINKS["MKTG_579_GoToMarket"],
    syllabus: {
      description: "Focuses on key elements required in building a best-in-class go-to-market strategy and sales organization. Covers how company and sales culture are tightly tied to effective strategy.",
      learningObjectives: [
        "Articulate Go-To-Market Strategy and why it matters",
        "Evaluate vision/mission alignment with product/service",
        "Understand importance of core values and culture",
        "Create differentiated value propositions"
      ],
      grading: [
        { item: "Final Team Project", weight: "50%" },
        { item: "Homework Assignments", weight: "30%" },
        { item: "Class Participation", weight: "20%" }
      ],
      books: ["The Challenger Sale"]
    }
  },
  { 
    sln: "21305", 
    code: "MKTG 565", 
    section: "A/B", 
    title: "Building Business Applications of LLMs", 
    credits: 4, 
    instructor: "Ye", 
    room: "PCAR 295", 
    days: "Wed", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["21305"],
    syllabus: {
      description: "Learn to apply Large Language Models to business problems. Covers prompt engineering, fine-tuning, and building applications using LLMs.",
      learningObjectives: [
        "Understand capabilities and limitations of LLMs",
        "Apply prompt engineering techniques",
        "Develop business applications using LLM APIs"
      ],
      grading: [
        { item: "Final Project", weight: "40%" },
        { item: "Assignments", weight: "30%" },
        { item: "Participation", weight: "30%" }
      ]
    }
  },
  { 
    sln: "14057", 
    code: "ENTRE 509", 
    section: "C/D", 
    title: "Foundations of Entrepreneurship", 
    credits: 2, 
    instructor: "Pahnke", 
    room: "PCAR 391", 
    days: "Thu", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    info: "1st Half",
    syllabusLink: COURSE_LINKS["14057"],
    syllabus: {
      description: "Develops awareness of range, scope, and complexity of issues involved in startups. Gain insight into how entrepreneurs conceive, adapt, and execute strategies.",
      learningObjectives: [
        "Identify and research entrepreneurial opportunities",
        "Interview entrepreneurs and customers",
        "Develop an opportunity development project"
      ],
      grading: [
        { item: "Opportunity Development Project", weight: "40%" },
        { item: "Customer/Industry Interviews", weight: "30%" },
        { item: "Entrepreneur Interview", weight: "10%" },
        { item: "Memo on Motivation", weight: "10%" },
        { item: "Participation", weight: "10%" }
      ]
    }
  },
  { 
    sln: "14061", 
    code: "ENTRE 541", 
    section: "A/B", 
    title: "Technology Commercialization Practicum", 
    credits: 4, 
    instructor: "TBD", 
    room: "PCAR 290", 
    days: "Thu", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["14061"],
    syllabus: {
      description: "Work with UW scientists and engineers to identify potential applications, markets, and business models for breakthrough discoveries.",
      learningObjectives: [
        "Understand commercialization process of university tech",
        "Conduct primary and secondary research for hypotheses",
        "Create feasible business models"
      ],
      grading: [
        { item: "Team Updates & Deliverables", weight: "500 pts" },
        { item: "Final Team Report & Presentation", weight: "300 pts" },
        { item: "Professionalism & Participation", weight: "100 pts" },
        { item: "Individual Mini-Assignments", weight: "100 pts" }
      ]
    }
  },
  { 
    sln: "14529", 
    code: "FIN 560", 
    section: "A/B", 
    title: "Investments", 
    credits: 4, 
    instructor: "Hrdlicka", 
    room: "PCAR 294", 
    days: "Thu", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["14529"],
    syllabus: {
      description: "Builds on core finance to answer fundamental questions: Where do security prices come from? How do we measure mispricing? How do we measure skill?",
      learningObjectives: [
        "Manage own investments and those of a company",
        "Active money management skills",
        "Quantitative and critical thinking skills for finance"
      ],
      grading: [
        { item: "Final Exam", weight: "35-60%" },
        { item: "Problem Sets & Cases", weight: "30%" },
        { item: "Midterm (Optional)", weight: "0-25%" },
        { item: "Participation", weight: "10%" }
      ]
    }
  },
  { 
    sln: "17057", 
    code: "MGMT 579", 
    section: "A/B", 
    title: "Innovation, Strategy, and Design Thinking", 
    credits: 2, 
    instructor: "Boeker", 
    room: "PCAR 391", 
    days: "Thu", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    info: "2nd Half",
    syllabusLink: COURSE_LINKS["17057"],
    syllabus: {
      description: "Equips students with frameworks for managing technology-intensive businesses. Emphasis on innovation interacting with competition, market evolution, and capabilities.",
      learningObjectives: [
        "Evaluate how firms choose innovation opportunities",
        "Identify best practices in new product development",
        "Assess trade-offs in IP protection"
      ],
      grading: [
        { item: "Individual Case Analysis", weight: "40%" },
        { item: "Case Exam", weight: "40%" },
        { item: "Participation", weight: "20%" }
      ]
    }
  },
  { 
    sln: "00000", 
    code: "ENTRE 579", 
    section: "G/H", 
    title: "Angel Investing", 
    credits: 2, 
    instructor: "Brusse", 
    room: "PCAR 291", 
    days: "Mon", 
    time: "6:00-9:30", 
    quarter: "Spring 2026",
    syllabusLink: COURSE_LINKS["00000"],
    syllabus: {
      description: "Experiential learning opportunity for understanding early stage funding. Hands-on learning on angel investing and raising capital.",
      learningObjectives: [
        "Sourcing investment opportunities",
        "Intense market and industry research",
        "Financial metrics for start-ups"
      ],
      grading: [
        { item: "Team Investment Report", weight: "30%" },
        { item: "1 Case", weight: "30%" },
        { item: "Class Participation", weight: "25%" },
        { item: "Angel Group Participation", weight: "15%" }
      ],
      books: ["Venture Deals by Feld and Mendelson"]
    }
  },

  // --- Catalog Courses (No specific Quarter/Time) ---
  { sln: "N/A", code: "ACCTG 510", section: "N/A", title: "Introduction to Financial Statement Analysis", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ACCTG_510 },
  { sln: "N/A", code: "ACCTG 579", section: "N/A", title: "Alphanomics: Active Investing in Equity Markets", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ACCTG_579_Alphanomics },
  { sln: "N/A", code: "ACCTG 579", section: "N/A", title: "Business Sustainability Reporting & Analysis", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ACCTG_579_Sustainability },
  { sln: "N/A", code: "ACCTG 579", section: "N/A", title: "Race, Culture, and Business Immersion", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ACCTG_579_Race },
  { sln: "N/A", code: "ACCTG 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ACCTG_600 },
  
  { sln: "N/A", code: "BA 560", section: "N/A", title: "Cooperative Education in Business", credits: 1, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BA_560 },
  { sln: "N/A", code: "BA 578", section: "N/A", title: "Impact Investing Strategic Management Practicum", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BA_578 },
  
  { sln: "N/A", code: "BCMU 509", section: "N/A", title: "Finding Your Voice", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BCMU_509 },
  { sln: "N/A", code: "BCMU 579", section: "N/A", title: "TED Talks", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BCMU_579_TED },
  { sln: "N/A", code: "BCMU 579", section: "N/A", title: "Interrupting Privilege", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BCMU_579_Interrupting },
  { sln: "N/A", code: "BCMU 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BCMU_600 },
  
  { sln: "N/A", code: "BECON 526", section: "N/A", title: "Competing in the Global Economy", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BECON_526 },
  { sln: "N/A", code: "BECON 546", section: "N/A", title: "Game Theory", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BECON_546 },
  { sln: "N/A", code: "BECON 560", section: "N/A", title: "Foster Research Partners", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BECON_560 },
  { sln: "N/A", code: "BECON 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.BECON_600 },
  
  { sln: "N/A", code: "ENTRE 509", section: "N/A", title: "Foundations of Entrepreneurship", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_509 },
  { sln: "N/A", code: "ENTRE 510", section: "N/A", title: "Entrepreneurial Strategy", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_510 },
  { sln: "N/A", code: "ENTRE 522", section: "N/A", title: "Innovation Strategy", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_522 },
  { sln: "N/A", code: "ENTRE 532", section: "N/A", title: "Software Entrepreneurship", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_532 },
  { sln: "N/A", code: "ENTRE 540", section: "N/A", title: "Business Plan Practicum", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_540 },
  { sln: "N/A", code: "ENTRE 541", section: "N/A", title: "Technology Commercialization", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_541 },
  { sln: "N/A", code: "ENTRE 542", section: "N/A", title: "Venture Capital Investment Competition", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_542 },
  { sln: "N/A", code: "ENTRE 543", section: "N/A", title: "Environmental Innovation Practicum", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_543 },
  { sln: "N/A", code: "ENTRE 545", section: "N/A", title: "Health Innovation Practicum", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_545 },
  { sln: "N/A", code: "ENTRE 555", section: "N/A", title: "Entrepreneurial Marketing", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_555 },
  { sln: "N/A", code: "ENTRE 557", section: "N/A", title: "Entrepreneurial Finance", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_557 },
  { sln: "N/A", code: "ENTRE 579", section: "N/A", title: "Angel Investing", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_579_Angel },
  { sln: "N/A", code: "ENTRE 579", section: "N/A", title: "Biomedical Entrepreneurship", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_579_Biomedical },
  { sln: "N/A", code: "ENTRE 579", section: "N/A", title: "Creative Destruction Lab", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_579_CDL }, 
  { sln: "N/A", code: "ENTRE 579", section: "N/A", title: "Entrepreneurial Influence and the Pitch", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_579_Pitch },
  { sln: "N/A", code: "ENTRE 579", section: "N/A", title: "Grand Challenges for Entrepreneurs", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_579_Grand }, 
  { sln: "N/A", code: "ENTRE 579", section: "N/A", title: "Influencer Marketing: Profiting from Social Media", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_579_Influencer },
  { sln: "N/A", code: "ENTRE 579", section: "N/A", title: "Intrapreneurship: Developing New Products", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_579_Intrapreneurship },
  { sln: "N/A", code: "ENTRE 579", section: "N/A", title: "Women in Entrepreneurial Leadership", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_579_Women },
  { sln: "N/A", code: "ENTRE 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.ENTRE_600 },
  
  { sln: "N/A", code: "FIN 530", section: "N/A", title: "Financial Management of Banks", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_530 }, 
  { sln: "N/A", code: "FIN 551", section: "N/A", title: "Problems in Business Finance", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_551 },
  { sln: "N/A", code: "FIN 553", section: "N/A", title: "Problems in Capital Investment Planning", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_553 },
  { sln: "N/A", code: "FIN 558", section: "N/A", title: "Mergers and Acquisitions", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_558 },
  { sln: "N/A", code: "FIN 560", section: "N/A", title: "Investments", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_560 },
  { sln: "N/A", code: "FIN 561", section: "N/A", title: "Financial Futures & Options Markets", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_561 },
  { sln: "N/A", code: "FIN 566", section: "N/A", title: "Alternative Investments", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_566 },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "AI in Business", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_AI }, 
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "Asian Capital Markets", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_Asian },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "Behavioral Finance", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_Behavioral },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "Climate Risk & Innovation", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_Climate },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "Institutional Investment", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_Institutional },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "International Business Compliance", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_Compliance },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "International Finance", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_IntlFinance },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "Introduction to Real Estate Finance & Investment", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_RealEstate },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "Machine Learning in Business", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_ML },
  { sln: "N/A", code: "FIN 579", section: "N/A", title: "The Power of Access: Impact Lending", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_579_Access },
  { sln: "N/A", code: "FIN 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.FIN_600 },
  
  { sln: "N/A", code: "IS 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.IS_600 },
  
  { sln: "N/A", code: "IBUS 500", section: "N/A", title: "Global Business Forum", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.IBUS_500 },
  { sln: "N/A", code: "IBUS 570", section: "N/A", title: "International Study Program", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.IBUS_570 },
  { sln: "N/A", code: "IBUS 579", section: "N/A", title: "Applied Global Consulting Projects", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.IBUS_579 },
  { sln: "N/A", code: "IBUS 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.IBUS_600 },
  
  { sln: "N/A", code: "MGMT 509", section: "N/A", title: "Managing in a Global Environment", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_509 },
  { sln: "N/A", code: "MGMT 545", section: "N/A", title: "Leading & Managing High Performance", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_545 },
  { sln: "N/A", code: "MGMT 547", section: "N/A", title: "Successful Negotiations", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_547 },
  { sln: "N/A", code: "MGMT 548", section: "N/A", title: "Deal-Making in High Velocity Ventures", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_548 },
  { sln: "N/A", code: "MGMT 550", section: "N/A", title: "CEO & Board Governance", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_550 },
  { sln: "N/A", code: "MGMT 555", section: "N/A", title: "Nonprofit Board Fellows Leadership Seminar", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_555 },
  { sln: "N/A", code: "MGMT 575", section: "N/A", title: "Women in Leadership", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_575 },
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Corporate Equity", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_Equity }, 
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Corporate Growth Strategies", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_Growth },
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Developing Strategies for Social Impact", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_Social },
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Human Sustainability", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_Human },
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Innovation, Strategy, and Design Thinking", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_Innovation },
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Leading Across Cultures", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_Cultures },
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Mindful Decision Making", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_Mindful },
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Perspectives on ESG in Business", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_ESG },
  { sln: "N/A", code: "MGMT 579", section: "N/A", title: "Power and Status Dynamics in the Workplace", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_579_Power },
  { sln: "N/A", code: "MGMT 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MGMT_600 },
  
  { sln: "N/A", code: "MKTG 511", section: "N/A", title: "Business-to-Business Marketing", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_511 },
  { sln: "N/A", code: "MKTG 535", section: "N/A", title: "Analytics Consulting Lab", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_535 },
  { sln: "N/A", code: "MKTG 552", section: "N/A", title: "Consumer Marketing & Brand Management", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_552 },
  { sln: "N/A", code: "MKTG 554", section: "N/A", title: "Strategic Product Management", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_554 },
  { sln: "N/A", code: "MKTG 556", section: "N/A", title: "Advertising & Promotion Management", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_556 },
  { sln: "N/A", code: "MKTG 560", section: "N/A", title: "Consumer Insights", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_560 },
  { sln: "N/A", code: "MKTG 562", section: "N/A", title: "Customer Analytics", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_562 },
  { sln: "N/A", code: "MKTG 564", section: "N/A", title: "Analytics for Marketing Decisions", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_564 },
  { sln: "N/A", code: "MKTG 565", section: "N/A", title: "Building Business Applications of LLMs", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_565 },
  { sln: "N/A", code: "MKTG 566", section: "N/A", title: "Digital Marketing Analytics", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_566 },
  { sln: "N/A", code: "MKTG 568", section: "N/A", title: "Pricing Strategy and Analytics", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_568 },
  { sln: "N/A", code: "MKTG 579", section: "N/A", title: "Case Study Development Lab: Strategic Storytelling", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_579_Storytelling }, 
  { sln: "N/A", code: "MKTG 579", section: "N/A", title: "Consultative Selling", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_579_Consultative },
  { sln: "N/A", code: "MKTG 579", section: "N/A", title: "Go-to-Market Strategy", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_579_GoToMarket },
  { sln: "N/A", code: "MKTG 579", section: "N/A", title: "Pricing Principles and Strategies", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_579_Pricing },
  { sln: "N/A", code: "MKTG 579", section: "N/A", title: "The Sustainable Company", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_579_Sustainable },
  { sln: "N/A", code: "MKTG 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.MKTG_600 },
  
  { sln: "N/A", code: "OPMGT 530", section: "N/A", title: "Risk: Measurement, Management, and Leadership", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.OPMGT_530 },
  { sln: "N/A", code: "OPMGT 540", section: "N/A", title: "Sustainable Design of Global Supply Chains", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.OPMGT_540 },
  { sln: "N/A", code: "OPMGT 550", section: "N/A", title: "Project Management", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.OPMGT_550 },
  { sln: "N/A", code: "OPMGT 560", section: "N/A", title: "Supply Chain Management", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.OPMGT_560 },
  { sln: "N/A", code: "OPMGT 565", section: "N/A", title: "Business Analytics: Tools for Big Data", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.OPMGT_565 },
  { sln: "N/A", code: "OPMGT 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.OPMGT_600 },
  
  { sln: "N/A", code: "QMETH 551", section: "N/A", title: "Modeling with Spreadsheets", credits: 4, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.QMETH_551 },
  { sln: "N/A", code: "QMETH 600", section: "N/A", title: "Independent Study", credits: 2, instructor: "TBD", room: "TBD", days: "TBD", time: "TBD", quarter: "Catalog", syllabusLink: COURSE_LINKS.QMETH_600 },
];

// Inject the generated course catalog link into each course object
export const courses: Course[] = rawCourses.map(c => ({
  ...c,
  courseCatalogLink: getCatalogLink(c.code)
}));

// Selected reviews extracted from OCR. 
// Note: Some reviews match Course ID but refer to a specific "Special Topic" (like Angel Investing).
export const reviews: Review[] = [
  {
    id: "r_acctg579_alphanomics_1",
    courseId: "ACCTG 579",
    courseTitleContext: "Alphanomics: Active Investing in Equity Markets",
    professor: "Thomas Gilbert",
    year: "2025",
    content: "This is a fantastic class for anyone interested in quantitative finance. It is very difficult and the concepts build on each other, so you can't afford to fall behind. There are weekly group assignments that are not graded but are essential for understanding the material. The midterm and final are tough but fair. If you put in the work, you will learn a ton.",
    author: "Joe Garan"
  },
  {
    id: "r_acctg579_sustainability_1",
    courseId: "ACCTG 579",
    courseTitleContext: "Business Sustainability Reporting & Analysis",
    professor: "Sarah McVay",
    year: "2025",
    content: "This class was a pleasant surprise. I wasn't sure what to expect, but Sarah is a great professor and the material is very interesting. The class is a mix of lectures, case studies, and guest speakers. The final project is a group project where you have to analyze a company's sustainability report. I would recommend this class to anyone interested in sustainability.",
    author: "Jennifer Cole"
  },
  {
    id: "r_ba578_impactinvesting_1",
    courseId: "BA 578",
    courseTitleContext: "Impact Investing Strategic Management Practicum",
    professor: "Jessica Jones",
    year: "2025",
    content: "This is a great class for anyone interested in impact investing. It's a practicum, so you get to work with a real company on a real project. The class is a lot of work, but it's very rewarding. Jessica is a great professor and she brings in a lot of great guest speakers. I would highly recommend this class.",
    author: "Megan Anderle"
  },
  {
    id: "r_bcmu509_findingvoice_1",
    courseId: "BCMU 509",
    courseTitleContext: "Finding Your Voice",
    professor: "Lee Hochberg",
    year: "2025",
    content: "TL:DR: Take this. Lee is incredibly welcoming, and his UNWAVERING belief in your ability to speak effectively is infectious. You deliver 3 speeches over the class. Very light workload.",
    author: "Charles Lee"
  },
  {
    id: "r_becon546_gametheory_1",
    courseId: "BECON 546",
    courseTitleContext: "Game Theory",
    professor: "Alexis Leon",
    year: "2025",
    content: "Itself is fascinating-learning about the different applications far beyond economics. Essentially another case-based class. The topic is overall interesting, but it can be dry at times.",
    author: "Sakshi Jain"
  },
  {
    id: "r_entre509_foundations_1",
    courseId: "ENTRE 509",
    courseTitleContext: "Foundations of Entrepreneurship",
    professor: "Christian Primack Metcalfe",
    year: "2023",
    content: "Contrary to other reviews, I didn't love this class. I felt like it was a bit of a shill for the ENTRE cert. Other than that, the problem is that the class is either too much or not enough. I don't think you'll learn much about customer discovery, pitching, or building a plan for a startup idea.",
    author: "Anonymous"
  },
  {
    id: "r_fin560_investments_1",
    courseId: "FIN 560",
    professor: "Christopher Hrdlicka",
    year: "2021",
    content: "Took this course in Spring of 25. This class is great if you know you want to go into IB or anything that draws on CFA knowledge, of it you are a foreign student absolutely take this. Almost no work outside of class, minimal effort for most lectures.",
    author: "Anonymous"
  },
  {
    id: "r_fin560_investments_2",
    courseId: "FIN 560",
    professor: "Christopher Hrdlicka",
    year: "2022",
    content: "The professor is intelligent, and he will make sure you know that he is smarter than you. There is an in person pen and paper, closed note, closed book midterm and final but I wouldnt let that deter you from taking this course. Ultimately, you will learn how to allocate portfolios of assets for the highest possible sharpe ratio, how to evaluate managers, and many other other CFA type knowldge.",
    author: "Chris Melendez"
  },
  {
    id: "r_fin579_gametheory_1",
    courseId: "FIN 579",
    courseTitleContext: "Game Theory",
    professor: "Alexis Leon",
    year: "2025",
    content: "Really easy elective. Very interesting way of evaluating how competitors will react to your moves.",
    author: "Phalynn"
  },
  {
    id: "r_ibus500_gbf_1",
    courseId: "IBUS 500",
    professor: "Christina Fong",
    year: "2025",
    content: "Light assignments. The topic for our quarter was public private partnerships. Christina brought in a lot of great speakers who were experts in their fields.",
    author: "Rachel"
  },
  {
    id: "r_ibus500_gbf_2",
    courseId: "IBUS 500",
    professor: "Christina Fong",
    year: "2019",
    content: "The professor knows it's a pass/fail class and doesn't expect too much. You do have to do some light reading and submit a question for the speaker before each class.",
    author: "Paige Harley"
  },
  {
    id: "r_mktg579_gtm_1",
    courseId: "MKTG 579",
    courseTitleContext: "Go-To-Market Strategy",
    professor: "Kelly Wright",
    year: "2019",
    content: "Really really did not like this class. Kelly is super preachy and you will be cold called. If you sit in the front row, you will be called on. The content is not very deep.",
    author: "Anonymous"
  },
  {
    id: "r_entre579_grandchallenges_1",
    courseId: "ENTRE 579",
    courseTitleContext: "Grand Challenges for Entrepreneurs",
    professor: "Christian Primack Metcalfe",
    year: "2025",
    content: "Low Lift Class. You get to hear from a lot of great speakers. 2 Credits. Very interesting.",
    author: "Scott Shapiro"
  },
  {
    id: "r_mgmt579_innovationstrategy_1",
    courseId: "MGMT 579",
    courseTitleContext: "Innovation Strategy",
    professor: "Warren Boeker",
    year: "2023",
    content: "Thought Provoking. No finals or midterms. Just 3 case write ups and a final presentation on the last class. Brings in a few guest speakers from local companies.",
    author: "Anonymous"
  },
  {
    id: "r_fin579_institutional_1",
    courseId: "FIN 579/CFRM 532",
    courseTitleContext: "Institutional Investment",
    professor: "Keith Ferguson",
    year: "2024",
    content: "Keith runs the UW endowment and brings in a lot of interesting speakers. The class is very light on work, with only 1-2 group assignments. I would recommend this class.",
    author: "Alec Elgood"
  },
  {
    id: "r_fin579_internationalfinance_1",
    courseId: "FIN 579",
    courseTitleContext: "International Finance",
    professor: "Stephan Siegel",
    year: "2025",
    content: "This 2-credit, half-quarter class was one that I took for the International Perspective requirement instead of out of inherent interest, but it wound up being a very useful crash course on forex. Stephan does a decent job of making the topic accessible and interesting.",
    author: "Joe Garan"
  },
  {
    id: "r_entre579_intrapreneurship_1",
    courseId: "ENTRE 579",
    courseTitleContext: "Intrapreneurship",
    professor: "Vivienne Long",
    year: "2025",
    content: "If you know nothing about human centered design, this is a good class. But she's not very engaging for a class that is the full 3.5 hours.",
    author: "Anonymous"
  },
  {
    id: "r_fin579_realestate_1",
    courseId: "FIN 579",
    courseTitleContext: "Intro to Real Estate Finance",
    professor: "Tracey Seslen",
    year: "2023",
    content: "Highly recommend this class. Tracey is a great professor and the material is very interesting. The class is a mix of lectures, case studies, and guest speakers. The final project is a group project where you have to analyze a real estate deal.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt540_leadership_1",
    courseId: "MGMT 540",
    professor: "Elijah Wee",
    year: "2023",
    content: "This class requires more than the usual amount of creative intuition. The professor is intelligent, and he will make sure you know that he is smarter than you. The class was more busy work than I want out of a graduate level class, and, in my opinion, this class was not unique enough from other leadership class to bother spending time on.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt545_perf_org_1",
    courseId: "MGMT 545",
    courseTitleContext: "Leading and Managing High-Performance Organizations",
    professor: "Charles Lee",
    year: "2025",
    content: "Upbeat professor that tries to keep the class engaging with breakout discussions. After a while, the student created group chats ended up being more interesting than the class discussions.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt579_cultures_1",
    courseId: "MGMT 579",
    courseTitleContext: "Leading Across Cultures",
    professor: "Michael Johnson",
    year: "2025",
    content: "2 credit class that involved really interesting readings. I enjoyed this one. Explores global leadership through a cultural lens. Readings, frameworks, and in-class discussions help students understand how to manage diverse teams.",
    author: "Neha Pande"
  },
  {
    id: "r_mgmt579_cultures_2",
    courseId: "MGMT 579",
    courseTitleContext: "Leading Across Cultures",
    professor: "Xiao-Ping Chen",
    year: "2025",
    content: "Explores global leadership through a cultural lens. Readings, frameworks, and in-class discussions help students understand how to manage diverse teams.",
    author: "Reed Hawkins"
  },
  {
    id: "r_bcm_579_ml_1",
    courseId: "BCMU 579",
    courseTitleContext: "Machine Learning in Business",
    professor: "Anonymous",
    year: "2024",
    content: "I really enjoyed this class as somebody new to tech. It does a good job of initiating you into the basics of machine learning and giving you good frameworks for understanding it.",
    author: "Surabhi R"
  },
  {
    id: "r_mgmt579_consulting_1",
    courseId: "MGMT 579",
    courseTitleContext: "Management Consulting Problem Solving and Critical Thinking",
    professor: "Tommy G",
    year: "2025",
    content: "Super helpful class. Enjoyed the frameworks and the guest speakers.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt579_diverse_workforce_1",
    courseId: "MGMT 579",
    courseTitleContext: "Managing a Diverse and Global Workforce",
    professor: "Crystal M. Farh",
    year: "2025",
    content: "Took this remotely during COVID. 3.5 hrs. Homework is just reading cases. The lectures are quite dry. Almost no work outside of class, minimal effort for most lectures.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt509_global_env_1",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2020",
    content: "The class is case-based and discussion-heavy. I agree with Emily, the class is great! Kevin is a great professor.",
    author: "Farid Gardashov"
  },
  {
    id: "r_mgmt509_global_env_2",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2022",
    content: "This course is great for anyone interested in understanding how big multi-national corporations take tough decisions that span borders. Very engaging and high interactive classes with challenging content. Prof Kevin Steensma delivers this with ease.",
    author: "Ayush Garg"
  },
    {
    id: "r_fin558_mergers_1",
    courseId: "FIN 558",
    courseTitleContext: "Mergers and Acquisitions",
    professor: "Doron Levit",
    year: "2025",
    content: "If you haven't taken a class with Doron, you're missing out. In the M&A class, you dive straight into financial modeling and valuation. You will learn a lot and you will work hard.",
    author: "Alec Elgood"
  },
  {
    id: "r_mgmt579_mindful_1",
    courseId: "MGMT 579",
    courseTitleContext: "Mindful Decision Making",
    professor: "Andrew C. Hafenbrack",
    year: "2023",
    content: "Andy's classes are what you make of them. I found a lot of value in the class. If you're not into mindfulness, you won't be helped by the class.",
    author: "Bridget Burkatt"
  },
  {
    id: "r_qmeth551_spreadsheets_1",
    courseId: "QMETH 551",
    courseTitleContext: "Modeling with Spreadsheets",
    professor: "Anonymous",
    year: "2020",
    content: "The content can be dry, but the skills are very applicable. You can work ahead. The final is a group project.",
    author: "Jackson Taylor"
  },
  {
    id: "r_mgmt579_power_1",
    courseId: "MGMT 579",
    courseTitleContext: "Power & Status Dynamics",
    professor: "Elijah Wee",
    year: "2023",
    content: "I personally really enjoyed this class and Elijah is a very engaging professor. The workload is relatively light but there's a lot to read and digest. One paper at most, but lots of reading.",
    author: "Anonymous"
  },
  {
    id: "r_mktg568_pricing_1",
    courseId: "MKTG 568",
    courseTitleContext: "Pricing Strategy and Analytics",
    professor: "Shirsho Biswas",
    year: "2025",
    content: "While the content of this class is interesting, be prepared to be thrown in the deep end on assignments. In class, the professor generally tends to go through concepts very quickly. Additionally, the class is very R software heavy at the beginning. I would highly recommend taking OPMGT 585 (Business Analytics: Tools for Big Data) before taking this class.",
    author: "Goeppele-Paris"
  },
  {
    id: "r_opmgt550_pm_1",
    courseId: "OPMGT 550",
    courseTitleContext: "Project Management",
    professor: "Jennifer Koski",
    year: "2025",
    content: "This class is a great introduction to project management. Jennifer is a great professor and she brings in a lot of great guest speakers. The class is a lot of work, but it's very rewarding. I would highly recommend this class.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt547_negotiations_1",
    courseId: "MGMT 547",
    courseTitleContext: "Successful Negotiations",
    professor: "Christina Fong",
    year: "2025",
    content: "Gosh this class gave me anxiety but I'm really glad that I took it. Ended up using a lot of the tactics on my summer internship team on negotiations afterwards and got tons of good responses so the content really translates.",
    author: "Charles Lee"
  },
  {
    id: "r_mgmt547_negotiations_2",
    courseId: "MGMT 547",
    courseTitleContext: "Successful Negotiations",
    professor: "Elizabeth Follmer",
    year: "2023",
    content: "I found the content very engaging and was surprised how valuable the class was. It was more broadly applicable than I expected, for example, it impacted the way I think about decision making with others as a whole.",
    author: "Elizabeth Jones"
  },
  {
    id: "r_bcmu579_ted_1",
    courseId: "BCMU 579",
    courseTitleContext: "TED Talks",
    professor: "Lee Hochberg",
    year: "2025",
    content: "2 credits. You give 3 speeches. Lee is a great coach and the class is very supportive. I would recommend this class to anyone who wants to improve their public speaking skills.",
    author: "Bridget Burkatt"
  },
  {
    id: "r_entre542_vcic_1",
    courseId: "ENTRE 542",
    courseTitleContext: "VCIC aka Venture Capital Investments Practicum",
    professor: "Anonymous",
    year: "2019",
    content: "If you are interested in VC, this is a great class to get your feet wet. You get to simulate the full investment process, from sourcing to due diligence to term sheet negotiation. The class is a lot of work, but it's very rewarding.",
    author: "Alana McGee"
  },
  {
    id: "r_ibus579_wicked_1",
    courseId: "IBUS 579",
    courseTitleContext: "Wicked Problems: Doing Business in a World of 9 Billion People",
    professor: "Anonymous",
    year: "2020",
    content: "Just don't. This course is not worth your time. The professor is not engaging and the material is dry. I would not recommend this class.",
    author: "Emily Engel"
  },
  {
    id: "r_bcmu579_women_1",
    courseId: "BCMU 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2025",
    content: "TAKE THIS CLASS. Cate is an amazing professor and the speakers she brings in are incredible. The class is a lot of work, but it's very rewarding. I would highly recommend this class.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt575_women_1",
    courseId: "MGMT 575",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2023",
    content: "This class is now called 'Women in Leadership'. This five week journey is so full of joy. About a third of the class is structured around a speaker series of the most awe inspiring women in the area. It's not a small amount of work for 2 credits, but it is incredibly informative, encouraging, and humbling.",
    author: "Anthony Chang"
  },
  {
    id: "r_entre579_women_in_entrep_1",
    courseId: "ENTRE 579",
    courseTitleContext: "Women in Entrepreneurship",
    professor: "Chris",
    year: "2025",
    content: "This class isn't recorded, so I don't recommend taking it if you have to miss many of the classes. This class is a lot of work-10+ hours of homework each week. However, the class gave the professor feedback about it being too much and she said that she'd pair it down in the future. A lot of the class is about figuring out what your passions are and how to turn that into a entrepreneurial endeavor.",
    author: "Anonymous"
  },
  {
    id: "r_entre579_angelinvesting_1",
    courseId: "ENTRE 579",
    courseTitleContext: "Angel Investing",
    professor: "Minda Brusse",
    year: "2024",
    content: "Highly recommend. You get $50K of UW money to invest in 1-2 startups. Really great class for networking, just know you need to commit for the year.",
    author: "Macey McGovern"
  },
  {
    id: "r_bcmu509_findingy_1",
    courseId: "BCMU 509",
    courseTitleContext: "Finding Y",
    professor: "Hochberg",
    year: "2022",
    content: "TL:DR: Take this. Lee is incredibly welcoming, and his UNWAVERING belief in your ability to speak effectively is infectious. You deliver 3 speeches over the class. very light workload.",
    author: "Charles Lee"
  },
  {
    id: "r_entre509_foundations_2",
    courseId: "ENTRE 509",
    courseTitleContext: "Foundations of Entrepreneurship",
    professor: "Christian Primack Metcalfe",
    year: "2023",
    content: "was a bit of a shill for the ENRTE cert. Contrary to other reviews, I didn't love this class. Other than that, the problem is that the class is either too much or not enough. I don't think you'll learn much about customer discovery, pitching, or building a plan for a startup idea.",
    author: "Anonymous"
  },
  {
    id: "r_becon546_gametheory_2",
    courseId: "BECON 546",
    courseTitleContext: "Game Theory",
    professor: "Chris Metcalfe",
    year: "2025",
    content: "Itself is fascinating-learning about the different applications far beyond economics. Essentially another case-based class. The topic is overall interesting, but it can be dry at times.",
    author: "Sakshi Jain"
  },
  {
    id: "r_ibus579_gbf_1",
    courseId: "IBUS 579",
    courseTitleContext: "Global Business Forum",
    professor: "Christina Fong",
    year: "2019",
    content: "The professor knows it's a pass/fail class and doesn't expect too much. You do have to do some light reading and submit a question for the speaker before each class.",
    author: "Paige Harley"
  },
  {
    id: "r_mktg579_gtm_2",
    courseId: "MKTG 579",
    courseTitleContext: "Go-To-Market Strategy",
    professor: "Kelly Wright",
    year: "2024",
    content: "Workload is light, and I was hoping to learn more about GTM strategy. Kelly is exceptionally knowledgeable and brings in great speakers.",
    author: "Anonymous"
  },
  {
    id: "r_entre522_innovation_1",
    courseId: "ENTRE 522",
    courseTitleContext: "Innovation & Strategy",
    professor: "Warren Boeker",
    year: "2023",
    content: "Thought Provoking. No finals or midterms. Just 3 case write ups and a final presentation on the last class. Brings in a few guest speakers from local companies.",
    author: "Anonymous"
  },
  {
    id: "r_fin579_institutional_2",
    courseId: "FIN 579/CFRM 532",
    courseTitleContext: "Institutional Investment",
    professor: "Keith Ferguson",
    year: "2024",
    content: "Keith runs the UW endowment and brings in a lot of interesting speakers. The class is very light on work, with only 1-2 group assignments. I would recommend this class.",
    author: "Alec Elgood"
  },
  {
    id: "r_opmgt579_supplychain_1",
    courseId: "OPMGT 579",
    courseTitleContext: "International Supply Chain Management",
    professor: "Shunko",
    year: "2025",
    content: "-slightly annoying. so not very in depth Pretty light. includes a final exam.",
    author: "Anonymous"
  },
  {
    id: "r_entre579_intrapreneurship_2",
    courseId: "ENTRE 579",
    courseTitleContext: "Intrapreneurship",
    professor: "Vivienne Long",
    year: "2025",
    content: "If you know nothing about human centered design, this is a good class. But she's not very engaging for a class that is the full 3.5 hours.",
    author: "Anonymous"
  },
  {
    id: "r_fin579_realestate_2",
    courseId: "FIN 579",
    courseTitleContext: "Intro to Real Estate Finance",
    professor: "Tracey Seslen",
    year: "2023",
    content: "Highly recommend this class. Tracey is a great professor and the material is very interesting. The class is a mix of lectures, case studies, and guest speakers. The final project is a group project where you have to analyze a real estate deal.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt540_leadership_2",
    courseId: "MGMT 540",
    professor: "Elijah Wee",
    year: "2023",
    content: "This class requires more than the usual amount of creative intuition. The professor is intelligent, and he will make sure you know that he is smarter than you. The class was more busy work than I want out of a graduate level class, and, in my opinion, this class was not unique enough from other leadership class to bother spending time on.",
    author: "Anonymous"
  },
  {
    id: "r_mgmt509_global_env_3",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2023",
    content: "I really enjoyed this one! You learn how to bring products into global markets, and the trade, legal, and moral issues around it. It was a moderate amount of work. While I dont think I learned anything that would help me in my current job (program mangement, healthcare), I do feel much more competent talking about these issues and reading the WSJ. I'd take this again!",
    author: "Marshall Yin"
  },
  {
    id: "r_mgmt509_global_env_4",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2024",
    content: "I really liked this class. One of the few opportunities you get at Foster to questions the 1st principle assumptions we make ahout business, capitalism, and globalization. Agree with sibyl that it helps you understand the news and politics.",
    author: "Sibyl Knopp"
  },
  {
    id: "r_mgmt509_global_env_5",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2024",
    content: "Professor is super chill. I like his personality but I wouldn't say he's an exceptional professor. Pretty straightforward lecturing. A lot of reading, but you don't have to do it all",
    author: "Tong Yuan Douville"
  },
  {
    id: "r_mgmt509_global_env_6",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2025",
    content: "This course with Professor Kevin Steensma is a fascinating dive into how big companies make tough decisions across different countries. It's all about real-life cases, covering everything from cultural differences to how businesses enter new markets. The classes are interactive and engaging, with lots of discussion. While you won't come out with a ton of new frameworks, you'll definitely learn to see the world of global business in a new light. The workload is manageable, with readings and a few assignments, making it a good choice if you need an international credit. Overall, it's a solid course for understanding how global companies operate.",
    author: "Chinmayee Shenvi"
  },
  {
    id: "r_mgmt509_global_env_7",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2025",
    content: "I was hoping to get more out of this class. It felt like the professor was lecturing off the top of his head. You dive straight into cases in the second class and I wish we would have gotten more of a foundational understanding first. Overall I would say its an average lift with readings for each class, a handful of discussion posts, one case brief, and a take home final. Fine to get an international requirement out of the way, but that's about it.",
    author: "Jennifer Goertz"
  },
  {
    id: "r_mgmt509_global_env_8",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2025",
    content: "I had high hopes, but I wouldn't reccomend this class. It is all about reading and discussing cases. It is a lot of reading, but not so much work you feel overwhelmed by any means. If you need an international requirement it is a fine 2 unit, but the course isn't very well organized and you leave questioning what exactly you were supposed to learn from the class.",
    author: "Madison Meredith"
  },
  {
    id: "r_mgmt509_global_env_9",
    courseId: "MGMT 509",
    courseTitleContext: "Managing in a Global Environment (Global Strategy)",
    professor: "Kevin Steensma",
    year: "2025",
    content: "I wouldn't recommend this class. Professor just lectures at you mostly. No discussion between students. There was one simulation that was interesting and engaging...but then nothing else. If you aren't on the professors agenda, you won't get much.",
    author: "Nick Stuart"
  },
  {
    id: "r_entre557_young_jg",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2023",
    content: "Really enjoyed this class. Lance is a great professor and although you learn a lot in the course, it is very low stress. Had it over zoom so didn't get the full experience, but builds on what you learned in the Core Finance class. Good class if you interested in valuation, IPOs, and term sheets as you go into depth with these subjects.",
    author: "Jonathan Goodin"
  },
  {
    id: "r_entre557_young_lsg",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2024",
    content: "Love this class, Lance is engaging and his goal is really just for you to learn, it's laid back but he'll push you to really understand the concepts. highly highly recommend even if finance isn't your jam.",
    author: "Liza Sankar-gorton"
  },
  {
    id: "r_entre557_young_ns",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2025",
    content: "Great class, Lance is fantastic in the classroom. I felt like there was a disconnect with the assignments, which are challenging. But the classroom experience is one of the best and Lance makes it fun and engaging. I learned a lot.",
    author: "Nick Stuart"
  },
  {
    id: "r_entre557_young_am",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2019",
    content: "Not strictly an ENTRE class. I would recommend to anyone interested in Finance classes at all. Lance has engaging lectures and a great system for tackling cases. Favorite class I have taken at Foster. Even though I took it during the summer I was excited about going to class every night",
    author: "Alex Moore"
  },
  {
    id: "r_entre557_young_bj",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2019",
    content: "I STRUGGLED through core finance with Mark. Lance's class helped me connect the dots. A lot of it is a continuation of core, paired with core strategy learnings as well. Lance is engaging and provides lots of examples throughout the class. From a workload perspective, its a case per week, and you better do them because he will cold call on anyone.",
    author: "Breanne Jesionowski"
  },
  {
    id: "r_entre557_young_es",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2019",
    content: "Like others have said, I STRUGGLED through core finance with Mark. For me, Lance's class was really refreshing. A bit of crossover with core, but through a different lens. For me, core finance was very left brained and Entre finance was more right brain focused. As Joe mentioned, this class really should be a required course for all students at the end of year 2. It perfectly combines finance and strategy with bits of accounting.",
    author: "Eric Simpson"
  },
  {
    id: "r_entre557_young_jn",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2019",
    content: "This is the best class at Foster even if you don't like finance. It should be a capstone course for our MBA. I'd probably vote for Lance if he ran for President.",
    author: "Joe Nekrasz"
  },
  {
    id: "r_entre557_young_al",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2020",
    content: "Highly recommend this class. It pulls all the info together from all the other classes so it all makes sense together. Really it should be Core class.",
    author: "Alyssa Lachner"
  },
  {
    id: "r_entre557_young_hh",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2020",
    content: "Best class I've taken. Very challenging and requires significant work and preparation but the material is highly useful and Lance Young is one of the most engaging professors at Foster.",
    author: "Heidi Hunt"
  },
  {
    id: "r_entre557_young_jt",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2020",
    content: "Others have already said it as well as I could say it. This should be a required elective. Lance is fantastic. Take it!",
    author: "Jackson Taylor"
  },
  {
    id: "r_entre557_young_ps",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2020",
    content: "I really loved this class. Easily a top 5 class for me. Echoing what a lot of people have said - it was a difficult but rewarding class. I thought Lance provided really great frameworks to think about how finance is connected to operations, and a tangible way to think about business from a numbers perspective. He also goes over start up financing really well.",
    author: "Phalynn Spence"
  },
  {
    id: "r_entre557_young_am2",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2024",
    content: "Highly recommend - first half will be a great reinforcement of important core finance principles that are especially relevant to an entreprenuer, the second half is all about deciphering term sheets. As in other Lance classes, it's 4 cases that will take as much time as you want to put into them. I took this as an evening class (despite being FT) and really liked having 3.5hrs at once of Lance per week (caveat is that I love Lance's style so take my enthusiasm with that in mind!)",
    author: "Alex Macintosh"
  },
  {
    id: "r_entre557_young_sh",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2025",
    content: "Fall 2024. Lance is a great professor and makes the 3 hours fly by. Great course, you will learn a lot and you will make a lot of mistakes on cases but have a growth mindset. The beginning will start out like the M&A class (I took this class right after taking M&A so the first half of the class felt useless to me). The second half was fun and interesting, going over the term sheets and seeing how startups choose between IPOs or business sales - pretty eye opening how hard it is to get a big payoff when working at a startup.",
    author: "Sam Hodge"
  },
  {
    id: "r_entre557_young_unk",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2025",
    content: "Good class overall and I did learn a lot. No midterm, no final. However, each class was quite intense as he cold-called everyone throughout the class, none stop. There were 4 assignments, each worth 25% and they are very challenging to someone without a finance background. Even though he claimed these assignments would be graded \"based on effort\", he will evaluate how you apply the material/concept he taught in class. Expect to spend 5-8 hours on each assignment. Highly recommend to have a group of people you like to take this class together as you can discuss the assignments as a group.",
    author: "Unknown"
  },
  {
    id: "r_entre557_young_ps2",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2026",
    content: "Really enjoyed this one. Lance's classroom style was fairly polarizing amongst our class in 502, but he shines with this course and material. Discussions are lively, and Lance brings a lot of nuance to venture capital topics that are often misunderstood. A must for aspiring founders.",
    author: "Peter Schock"
  },
  {
    id: "r_entre557_young_bb",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2023",
    content: "I won't belabor what others have said. it's a good class. I do want to share that there are two sections of class. The first half is very similar to Core Finance with Lance but diving deeper into those diagrams. The second half is completely different and focuses on how to read and understand Term Sheets for securing financing for startups. It's helpful to understand how that works but I was definitely surprised by the sharp left turn half way through.",
    author: "Bridget Burkett"
  },
  {
    id: "r_entre557_young_nc",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2023",
    content: "As others have said, this class is it. Lance's baby. He created this class, is in the process of writing a textbook on entre finance (which doesn't really exist), and really knows everything about the subject. If you're even slightly interested in finance, or working at a startup, this class is essential. I was pleasantly surprised at how much you go over things like assessing the competitive environment, doing a market analysis of sorts, and coming up with a strategy. Realizing there is a reason behind every price, and that tells you something. The material in this class is useful for other things beyond just startups, although that is the main focus. Quite an amazing course and I think it should be core in all honesty.",
    author: "Niall Curley"
  },
  {
    id: "r_mktg568_biswas_mgp",
    courseId: "MKTG 568",
    professor: "Shirsho Biswas",
    year: "2020",
    content: "While the content of this class is interesting, be prepared to be thrown in the deep end on assignments. In class, the professor generally tends to go through concepts very quickly. In fact, during one class, he managed to go through 100 slides in 2.5 hours. Additionally, the class is very R software heavy at the beginning. I would highly recommend taking OPMGT 565 (Business Analytics: Tools for Big Data) before taking this class, especially if you do not have experience with R. The second half of the course is better because the focus of the class changes more towards in-depth discussions about different pricing strategies and he slows down a bit.",
    author: "Matt Goeppele-Parrish"
  },
  {
    id: "r_mktg568_biswas_ae",
    courseId: "MKTG 568",
    professor: "Shirsho Biswas",
    year: "2024",
    content: "Shiro seems to have toned down amount of R significantly from prior years. The remaining concepts felt detailed, but not overly technical. The class sessions though are quite dry, and I wouldn't recommend the class unless you are very interested in pricing.",
    author: "Alec Elgood"
  },
  {
    id: "r_mktg568_biswas_kp",
    courseId: "MKTG 568",
    professor: "Shirsho Biswas",
    year: "2024",
    content: "Great class in terms of content and assignemnts. Professor tries to make it as interesting as possible. Very little R taught but the final exam is R heavy",
    author: "Kanika Prakash"
  },
  {
    id: "r_mktg568_biswas_mm",
    courseId: "MKTG 568",
    professor: "Shirsho Biswas",
    year: "2025",
    content: "This is more of a class for Masters of Data Science than MBA students, so you will be the content structured in a way that is very unuseful in the real world (even the professor says so!) The class is generally an easy lift other than 5 homework assignments that are all group and a take home final. All in all, I wouldn't reccomend.",
    author: "Madison Meredith"
  },
  {
    id: "r_fin560_hrdlicka_aw",
    courseId: "FIN 560",
    professor: "Christopher Hrdlicka",
    year: "2021",
    content: "Took this remotely during COVID. Professor is definitely smart and knows his topic, however the lectures are quite boring and dry. Almost no student interactions, no guest speakers; professor pretty much talks and goes over slides for 3.5 hrs. Homework is challenging and takes a lot of time. Would recommend only if you plan to take FA exam or if you are a foreign student absolutely new to investments.",
    author: "Alison Aw"
  },
  {
    id: "r_fin560_hrdlicka_jr",
    courseId: "FIN 560",
    professor: "Christopher Hrdlicka",
    year: "2021",
    content: "Took this remotely during COVID. Professor is definitely smart and knows his topic, however the lectures are quite boring and dry. Almost no student interactions, no guest speakers; professor pretty much talks and goes over slides for 3.5 hrs. Homework is challenging and takes a lot of time. Would recommend only if you plan to take FA exam or if you are a foreign student absolutely new to investments.",
    author: "Julia Robinson"
  },
  {
    id: "r_fin560_hrdlicka_cm",
    courseId: "FIN 560",
    professor: "Chris Hrdlicka",
    year: "2026",
    content: "Took this course in Spring of '25 and I wanted to like it. It is forsure a difficult course and requires more than the average level of effort for most students. This class is great if you know you want to go into something IB or anything that draws on CFA knowledge, of it you are considering going into this industry as you will be exposed to the knowledge and intuition. The professor is intelligent, and he will make sure you know that he is smarter than you, he is also a bit quirky and could be viewed as difficult to work with - in terms of he will not go easy on you in grading, he likely will not alter his teaching strategy much, and he may or may not answer the questions you have in class if they don't relate to his class (but he will share adnausim anytime after class). There is an in person pen and paper, closed note, closed book mid-term and final but I wouldnt let that deter you from taking this course. Ultimately, you will learn how to allocate portfolios of assets for the highest possible sharpe ratio, identify mis-pricing of assets, understand how to take advantage of mis-pricing, how to evaluate managers, and many other CFA type knowldge. You will at minimum become a more informed investor for your personal portfolios.",
    author: "Chris Melendez"
  },
  {
    id: "r_mgmt550_dempsey_ph",
    courseId: "MGMT 550",
    professor: "Neal Dempsey & Eileen Odum",
    year: "2019",
    content: "If you get a chance, this is a very worthy elective. The guest speakers that Neal Dempsey (yes...that Dempsey) is able to pull in are incredible. Assignments aren't too arduous. Biggest complaint was that Neal can go on and on and kind of overspeak people a lot. And he treats the group like we're all daytime students and a bunch of young kids that need to be hassled about getting a job. But all in all, the guest speakers hugely impacted the value of this class for me.",
    author: "Paige Hanley"
  },
  {
    id: "r_mgmt550_dempsey_kw",
    courseId: "MGMT 550",
    professor: "Neal Dempsey & Eileen Odum",
    year: "2020",
    content: "Scroll up & read everything that Paige wrote. It's very true. I will add that it's actually really nice to meet a lot of the daytime students. Plus, Neil & Eileen offer coffee chats and have basically an open door to help you with whatever challenges you bring up to them. It makes up for the lack of structure around the lecture. I'm sure they'll work out the kinks by this year. You can't argue with the all-star lineup, though. The CEO of Alaska Airlines & One of his Board Members was definitely a highlight. I actually met up with Neil in SF afterwards, he's super approachable.",
    author: "Kaitlyn Witman"
  },
  {
    id: "r_mgmt550_dempsey_cb",
    courseId: "MGMT 550",
    professor: "Neal Dempsey & Eileen Odum",
    year: "2021",
    content: "workload was pretty easy. you have reading for each class. then spend the first half of the class talking about the reading. the second half of each class they bring in a CEO or board member to talk about their company/ organization and how leadership functions there (ie how the CEO and board function together to provide direction). Neal is getting a bit old but i got a kick out of Eileen. you have a group presentation (you choose an example of great or poor governance and discuss) and a final paper",
    author: "Connor Bench"
  },
  {
    id: "r_mgmt550_dempsey_my",
    courseId: "MGMT 550",
    professor: "Neal Dempsey & Eileen Odum",
    year: "2023",
    content: "If you work closely with the executive leadership team at your company, this is the class for you. Neal has an incredible network of influencial business leaders and draws his experience from the good and the bad. He's seen it all and can introduce you to people within your field. I had the great fortune and opportunity to network with the former treasurer of Apple to talk about his experience running the treasury department there (and managing a $200b portfolio). In terms of course work, it is important to attend all lectures and be present. Neal will challenge your answers/responses, but he is an easy going guy. Workload is average. Not quantitatively challenging. Instead, it's about the quality of your context. What do I mean by context? If the problem you're investigating is through the lens of, \"what would a board member do? how should the board react to these new findings? etc. etc, you are golden.",
    author: "Marshall Yin"
  },
  {
    id: "r_mgmt550_roe_ma",
    courseId: "MGMT 550",
    professor: "Jeff Roe/Connie Collingsworth",
    year: "2025",
    content: "This is the best class I've taken in the program. The caliber of speakers is incredible — CEO of Nordstrom, former CEO of Albertson's, a Chairwoman from JP Morgan Chase, to name a few — and you're able to ask them questions. The class format is very engaging and not much lecturing. You learn a ton and hear a variety of perspectives. It's not much work, either. Only a few easy quizzes, a group presentation and a paper.",
    author: "Megan Anderle"
  },
  {
    id: "r_mgmt550_roe_rh",
    courseId: "MGMT 550",
    professor: "Connie Collingsworth / Jeffrey Roe",
    year: "2025",
    content: "Focuses on how CEOs and boards interact, make decisions, and govern complex organizations. Topics include succession planning, compensation, board structure, and stakeholder management. Draws heavily from real-world examples and board cases. Great class for those interested in corporate leadership and governance. Make sure to participate and pay attention; they are harsh graders.",
    author: "Reed Hawkins"
  },
  {
    id: "r_mktg560_schlosser_cw",
    courseId: "MKTG 560",
    professor: "Schlosser",
    year: "2021",
    content: "Oliver is crazy smart and he did a good job of simplifying details and the basics for understanding the data analysis process. You learn the (very) basics of R+ but it does give you a start on understanding how to use R+ as a language. If you have a background in Data or work in this area already, this class may be too elementary for you.",
    author: "Christine White"
  },
  {
    id: "r_mktg560_schlosser_ac",
    courseId: "MKTG 560",
    professor: "Ann Schlosser",
    year: "2022",
    content: "I took this class in undergrad and remember it being... not the strongest offering. Unfortunately I think the same here, except 3 times the price. The class is extremely work intensive, involving a consulting project with a real client (very cool, very interesting, your mileage may vary of course), but also an incredible amount of reading and preparation. Lectures use about half of our alloted time, while we are expected to watch an hour or two of prerecorded videos. On top of the massive client project which has an optimistic timeline at BEST, the class also has a TIMED, closed book, closed note final with ONE sheet of paper for your life raft. Canvas is pretty poorly organized, with files and videos and information all over. I had to write to ask for some adjustments just so we didn't have to reference multiple Canvas pages to do the reading. In most ways it feels like an undergrad class. Not worth it unless you need it for the marketing management cert. Maybe not even then.",
    author: "Anthony Chang"
  },
  {
    id: "r_mktg560_weiner_cs",
    courseId: "MKTG 560",
    professor: "Max Kleinman Weiner",
    year: "2025",
    content: "This class is what you make of it. While it’s one of the easiest 4-credit STEM courses in Foster's offerings, I wouldn't recommend it, unless you want to take an easy course to meet your credits/STEM requirement. Despite Max's interesting professional and research background, it doesn't translate into his teaching. This was his first quarter teaching at the MBA level, and his lack of experience is evident. Additionally, being an evening class lasting 3.5 hours, it can be tough to sit through as Max tends to lecture continuously without much engagement. I did not learn anything new or unique in this course.",
    author: "Chinmayee Shenvi"
  },
  {
    id: "r_mktg560_weiner_cc",
    courseId: "MKTG 560",
    professor: "Max Kleiman-Weiner",
    year: "2025",
    content: "Too heavy on text, slides, and content. Not much engagement. Overall the material is great, the concepts are interesting but the class is boring and dry. Being an evening class, it becomes difficult to sit through. Not recommended.",
    author: "Chirag Chinmay"
  },
  {
    id: "r_mktg560_weiner_ks",
    courseId: "MKTG 560",
    professor: "Max Kleinman Weiner",
    year: "2025",
    content: "I do not recommend this class. This was Max's first quarter teaching MBA level and he does not have a developed teaching skillset. The class was disorganized and the lectures were unengaging with little opportunity for student discussion. All the elements of Consumer Insights and primary + secondary research are present, but the lectures are dry. Max does have an interesting professional and resesarch background which were well integrated into his final lecture on the use of Generative AI in Consumer Insights.",
    author: "Kelsey Scott"
  },
  {
    id: "r_mgmt547_fong_bj",
    courseId: "MGMT 547",
    professor: "Christina Fong",
    year: "2019",
    content: "I took this class primarily because Christina was teaching it, and I really enjoy her teaching style. This class provides half lectures, and then half role playing on scenarios to help you learn the concepts. I had to one class, so I would suggest thinking hard about taking it if you can't make all the classes.",
    author: "Breanne Jesionowski"
  },
  {
    id: "r_mgmt547_fong_ph",
    courseId: "MGMT 547",
    professor: "Christina Fong",
    year: "2019",
    content: "Gosh this class gave me anxiety but I'm really glad that I took it. Ended up actually giving a presentation at work to our sales team on negotiations afterwards and got tons of good responses so the content really translates.",
    author: "Paige Hanley"
  },
  {
    id: "r_mgmt547_fong_al",
    courseId: "MGMT 547",
    professor: "Christina Fong",
    year: "2020",
    content: "You're missing out if you don't take this. A lot key insight is provided, prep work = very minimal, class consists of half negotiations work with a partner, other half is lecture.",
    author: "Alyssa Lachner"
  },
  {
    id: "r_mgmt547_fong_aj",
    courseId: "MGMT 547",
    professor: "Christina Fong",
    year: "2020",
    content: "I've loved this course and my biggest complaint is that I wish it was 4 credits and all quarter vs 2! I've learned a lot and really valued the opportunity to practice negotiating. You get the rare chance to see how your negotiated outcomes compare to others and learn various tactics. Highly engaging, super relevant, and fun!",
    author: "Ami Juel"
  },
  {
    id: "r_mgmt547_fong_ee",
    courseId: "MGMT 547",
    professor: "Christina Fong",
    year: "2020",
    content: "Best class. So much to learn. The case each session and debrief is incredibly helpful. I am already practicing in my real life and am not nervous to negotiate with employers (or family, anyone really). Christina is obviously an amazing professor and deserves so much credit! Take this. You won't regret it.",
    author: "Emily Engel"
  },
  {
    id: "r_mgmt547_follmer_ej",
    courseId: "MGMT 547",
    professor: "Elizabeth Follmer",
    year: "2023",
    content: "Elizabeth Follmer was a new professor for Foster (she came from Bothell). I found the content very engaging and was surprised how valuable the class was. It was more broadly applicable than I expected, for example, it impacted the way I think about decision making with others as a whole – not just in traditional negotiation settings. Follmer struggled with managing the class at times resulting in a few chaotic conversations, but overall I would recommend the class.",
    author: "Elizabeth Jones"
  },
  {
    id: "r_mgmt547_hafenbrack_js",
    courseId: "MGMT 547",
    professor: "Andy Hafenbrack",
    year: "2023",
    content: "Easy class but learned a lot and it's already saved me thousands of dollars! Do live negotiations with partners pretty much every class and it sometimes gets intense! Not much prep work required. There are readings that he'll cold call you to give your thoughts on but very chill and up to you how closely you want to read those readings.",
    author: "Jillian Santos"
  },
  {
    id: "r_mgmt547_follmer_mg",
    courseId: "MGMT 547",
    professor: "Elizabeth Follmer",
    year: "2023",
    content: "Easy class and provides a high-level intro to negotiation process. Every class is structured in two parts - theory and negotiation practise, being prepared is a must. The course has a final project - a paper on conducting a real-life negotiation of choice during the quarter (avg word count 2500). Imho, the final project is an overkil requirement for a 2 credit class and doesn't add value. I took a Deal-Making in High Velocity Ventures taught by professor Chisitina Fong prior to this class. The content, structure and some homeworks overlap. However, I personally found the Deal-Making class more engaging and practical with a great balance of learning outcome and homework.",
    author: "Marat Galeyev"
  },
  {
    id: "r_mgmt547_umphress_sw",
    courseId: "MGMT 547",
    professor: "Elizabeth Umphress",
    year: "2023",
    content: "Take this class. I was nervous about negotiations before this, and it's so practical. Every assignment is extremely practical, including prep, negotiations, and lessons learned. Also teaches how to negotiate salaries.",
    author: "Shari Wang"
  },
  {
    id: "r_mgmt547_hafenbrack_ta",
    courseId: "MGMT 547",
    professor: "Andy Hafenbrack",
    year: "2023",
    content: "This was one of my favorite classes. This is essentially a negotiations workshop with a debrief and strategy tips. Each week, you'll pair up with a new classmate, receive a case packet, and negotiate with that classmate after 10-30 mins of prep. Prof. Andy is fun and lively but that brand of humor may not be for everyone. Very reasonable workload. A couple reflection papers and peer feedback forms.",
    author: "Tania Asim"
  },
  {
    id: "r_mgmt547_follmer_bb",
    courseId: "MGMT 547",
    professor: "Elizabeth Follmer",
    year: "2025",
    content: "I absolutely loved this class. I heard a lot of people love Christina Fong, but I also enjoyed Elizabeth Follmer. She gave really practical advice that I will carry with me. What I most appreciated was the perspective that negotations are not just about \"winning\" or taking everything and leaving your partner with nothing. It was a very practical and balanced perspective and I really enjoyed having a safe space to build this muscle because I started off very uncomfortable with negotiations.",
    author: "Bridget Burkett"
  },
  {
    id: "r_mktg579_wright_ph",
    courseId: "MKTG 579",
    courseTitleContext: "Go-To-Market Strategy",
    professor: "Kelly Wright",
    year: "2019",
    content: "Super cool class! Kelly is unbelievable passionate and excited about the topic and clearly put a ton of work into building the course. Lots of great real-life examples and medium level of course work. Highly recommend especially if you work in tech or want to.",
    author: "Paige Hanley"
  },
  {
    id: "r_mktg579_wright_unk",
    courseId: "MKTG 579",
    courseTitleContext: "Go-To-Market Strategy",
    professor: "Kelly Wright",
    year: "2025",
    content: "Kelly is a very engaging and charismatic instructor. She brought in some very amazing guest speakers. Workload is relatively low for this class as I was in a team of 8 people. I bid 98% of my points to get into this class and I was hoping to get more from it as Kelly is super knowledge and experienced in her field. But I feel like I didn't learn much because the content was a bit on the surface level for the sales and GTM topic. I would only recommend if you just want an easy 2-credit class or you want to get to know Kelly and her guest speakers.",
    author: "Unknown"
  },
  {
    id: "r_mktg579_wright_kp",
    courseId: "MKTG 579",
    courseTitleContext: "Go-To-Market Strategy",
    professor: "Kelly Wright",
    year: "2025",
    content: "Kelly is a senior professional with alot of experience and is very salesy. The workload is not light with weekly assignments and a final sales audit project. Great class for someone interested in marketing, sales or even entreprenurship.",
    author: "Kanika Prakash"
  },
  {
    id: "r_mktg579_wright_sj",
    courseId: "MKTG 579",
    courseTitleContext: "Go-To-Market Strategy",
    professor: "Kelly Wright",
    year: "2025",
    content: "Kelly is an exceptionally energetic instructor and I thoroughly enjoyed the class, particularly for anyone interested in tech marketing/sales careers - this course is highly relevant. Her extensive experience in this field is evident and valuable. Occasionally, her sales background comes through a bit strongly. I gained significant insights about how an organization's mission serves as the ultimate driver of all its activities, which was particularly enlightening for me. The course is well-structured and builds effectively toward the final sales audit report. The workload is appropriate for a 2-credit course.",
    author: "Sakshi Jain"
  },
  {
    id: "r_bcmu579_goethals_am",
    courseId: "BCMU 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2019",
    content: "TAKE THIS CLASS. The name is misleading, but this is one of the very best courses I have taken at Foster in regards to leadership, understanding your strengths, and managment in a diverse and complex workplace. I honestly think should be considered for a Core class. This class pushes you to have uncomfortable conversations in a safe space to explore, and grow as leader. Workload is normal to light dependsing on how much you want to put into it.",
    author: "Alana McGee"
  },
  {
    id: "r_bcmu579_goethals_ph",
    courseId: "BCMU 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2019",
    content: "SO GOOD! They said there'd be that one class during the program that would change your life. This was it for me. Cate's a little nutty but an easy professor overall. Very thought provoking assignments and killer speakers.",
    author: "Paige Hanley"
  },
  {
    id: "r_bcmu579_goethals_jl",
    courseId: "BCMU 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2021",
    content: "Perhaps it's the remote learning format due to COVID, but I found this class to be quite a bit of work for 2 credits. Highlight: We had one guest speaker for each session (so five in total), all of which are outstanding female leaders from the Seattle area. We got to hear their life journies and interact with them via Q&A. On the other hand, the workload is definitely not light. For a 5-week class, there are 1 book, 4 papers, 2 interviews, 1 speaker note, and 1 group presentation (Cate is pretty lenient with her grading though.)",
    author: "Jackie Liu"
  },
  {
    id: "r_bcmu579_goethals_sm",
    courseId: "BCMU 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2021",
    content: "Highly recommended. One of my favorite classes so far. Leadership development is more practical, in depth, and personalized than eLead. Workload is reasonable and grading is generous. The assignments push you just the right amount to grow without being overly introspective/time consuming.",
    author: "Samantha Martinez"
  },
  {
    id: "r_mgmt575_goethals_bb",
    courseId: "MGMT 575",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2023",
    content: "This class is now called \"Women in Leadership\". 2 credits and every single class has an amazing guest speaker. I really enjoyed every single guest speaker that came. There are also assignments that you only work on outside of class, she rarely spent time in class talking about the assignments. They're all personal to you, encouraging you to discover your strengths and values, think about sponsorship, reach out to mentors, and think forward 10 years. There is also a book reading - there are many options, you form groups to read a book and then create a video overview of the book for others to watch. Cate herself is very go-with-the-flow type of professor, not giving many details into how she expected the assignments to be completed. Not super detail oriented. And a bit judgey of the speakers, which I didn't much appreciate.",
    author: "Bridget Burkett"
  },
  {
    id: "r_mgmt579_goethals_ac",
    courseId: "MGMT 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2022",
    content: "This five week journey is so full of joy. About a third of the class is structured around a speaker series of the most awe inspiring women in the area, while the other two thirds are introspective work and a video book report. Be forewarned that it's not a small amount of work for 2 credits, but it is incredibly informative, encouraging, and humbling. Please find time in your schedule to join this class, and when you do, PLEASE take advantage of the 30 minute Clifton Strengths review Cate offers. I found my meeting with her to be immensely life affirming and eye opening. Perhaps my only comment about this class is that the Canvas is not terribly organized, and most of our understanding of deliverables was through in-class announcements. Allies, please take this class if you can; as with allyship everywhere, it starts with showing up and listening. :)",
    author: "Anthony Chang"
  },
  {
    id: "r_mgmt579_goethals_dt",
    courseId: "MGMT 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2023",
    content: "What a great course! I would especially recommend it for the final quarter of the program. Really ends things on a highn note with a lot of reflection and inspiration.",
    author: "Devon Thorsell"
  },
  {
    id: "r_mgmt579_goethals_jc",
    courseId: "MGMT 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2023",
    content: "2 credit class that can be generally divided into two buckets: classroom speakers and outside homeworks. On class days, Cate brings in executive women from the greater Seattle area to speak for the first hour and during the second half of the class, students lead guided discussions on what the speakers brought up previously. The true highlight of this class are the incredible female leaders that speak candidly on their life journeys and challenges. This class is very female centered, but thoughtful participation from male students is highly encouraged. Outside homework assignments can be time intensive and are largely for personal growth & development—you’ll get out of it what you put in and she’s a very generous grader. If you’re highly ambitious and see yourself ‘at the top,’ this is a must take class. Deliverables for this class are: regular attendance, 1 book, 4 papers, 2 interviews, and potentially, 1 speaker introduction or class facilitation. In time commitment, I spent perhaps 2-3 hours per week during the 5 week course.",
    author: "Jennifer Cole"
  },
  {
    id: "r_mgmt579_goethals_sr",
    courseId: "MGMT 579",
    courseTitleContext: "Women at the Top",
    professor: "Cate Goethals",
    year: "2024",
    content: "I've been wowed by the quality of speakers in this class. This is one of the few classes at Foster where you really can go deep into your leadership journey and how you want to show up as an individual and leader. Great for people who want to introspect and move forward. Not so much for folks who do not. A majority of the assignments are strength finding, clarity, reflection etc. And men can take the class too (would even encourage you to do so!)",
    author: "Surabhi Rao"
  },
  {
    id: "r_fin579_ferguson_sh",
    courseId: "FIN 579",
    courseTitleContext: "Institutional Investments",
    professor: "Keith Ferguson",
    year: "2025",
    content: "Took this Spring 2024, this class is offered every two years. I thought this class was easy and fun. Every session has a guest speaker from the institutional investment industry - hedge funds, venture capital, pensions, traditional asset managers. Would recommend if you want to learn how large investment managers work and the different areas of the investment landscape. This class is a joint class with CFRM students which Keith caters to - slightly annoying.",
    author: "Sam Hodge"
  },
  {
    id: "r_fin579_ferguson_am",
    courseId: "FIN 579",
    courseTitleContext: "Institutional Investments",
    professor: "Keith Ferguson",
    year: "2024",
    content: "+ 1 to everything Alec Elgood said",
    author: "Alex Macintosh"
  },
  {
    id: "r_becon546_leon_jvs",
    courseId: "BECON 546",
    courseTitleContext: "Game Theory",
    professor: "Alexis Leon",
    year: "2025",
    content: "Contrary to other reviews, taking game theory alongside other classes during the same quarter is a challenge. There is a final exam, 10-12pg group paper, group presentation, and final critique, so when mixed with other finals can be stressful. Other than that, the problem sets aren't too bad and are bi-weekly, the other weeks discussions are due. Alexis does highly value Canvas analytics and checks who watches the videos and read articles before class. The topic is overall interesting if you've never done game theory before, beware, there is some algebra (and calculus if you want to know about it). Game theory can be applyed in many business situations and I found it engaging to hear about the case studies we looked at.",
    author: "Jayna Van Stone"
  },
  {
    id: "r_fin579_leon_ps",
    courseId: "FIN 579",
    courseTitleContext: "Game Theory",
    professor: "Alexis Leon",
    year: "2020",
    content: "Really easy elective. Very little work but a lot of fun and I thought an interesting subject matter. Essentially another way of evaluating how competitors will react to your decisions.",
    author: "Phalynn Spence"
  },
  {
    id: "r_fin579_leon_ak",
    courseId: "FIN 579",
    courseTitleContext: "Special Topics in Finance: Game Theory",
    professor: "Alexis Leon",
    year: "2021",
    content: "Great professor (very engaging, passionate, has the best canvas page I've ever seen) and interesting subject matter. As others have already said, a fairly light workload (~5 group hw assignments that usually took me an hour to complete), a paper, and an exam. Took this class fully remote in Spring of 2020 and thought it was still valuable and well delivered",
    author: "Abby Kozyra"
  },
  {
    id: "r_fin579_leon_ta",
    courseId: "FIN 579",
    courseTitleContext: "Special Topics in Finance: Game Theory",
    professor: "Alexis Leon",
    year: "2023",
    content: "Great class. Alexis is a very passionate and interesting instructor. Also highly inclusive. This has been my favorite class in the program so far. As others have said, highly recommend if you have no exposure to game theory. Assignments include either a group problem set or discussion board each week plus an exam, 10 page group paper, and a 5 min presentation. Not too challenging but I learned a lot!",
    author: "Tania Asim"
  },
  {
    id: "r_mktg554_schulman_al",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jeff Schulman",
    year: "2020",
    content: "Nice guy, but not sure this guy is a graduate professor. Save your $4500 and read some Product Management articles. You'll learn more.",
    author: "Alyssa Lachner"
  },
  {
    id: "r_mktg554_schulman_es",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jeff Schulman",
    year: "2019",
    content: "This wasn't my favorite class. I have a background in PM/Product so it was very basic. I also took it during the snow closures, so we only had 50% of the class sessions which made it tough. Overall, not a bad intro course, but if you have any experience with PM/Product I don't think it is worth it.",
    author: "Eric Simpson"
  },
  {
    id: "r_mktg554_schulman_ho",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jeff Schulman",
    year: "2020",
    content: "I don't usually comment on the elective sheet, but this elective was so bad, I feel compelled to do so. Hands down, the WORST class I have taken at Foster. This professor is awful and, frankly, should not be teaching. Don't waste your credits or your bid points.",
    author: "Holly Ostrom"
  },
  {
    id: "r_mktg554_schulman_ps",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jeff Schulman",
    year: "2020",
    content: "The prof is a little intense but I really liked this class. He does a great job in demonstrating and showcasing product management tasks. The class is a balance between discussion and guest speakers and there's a LOT of work. Prof can be a bit of a stickler on attendance, but I skipped the first two classes and still did fine so I wouldn't worry about it :)",
    author: "Phalynn Spence"
  },
  {
    id: "r_mktg554_pierce_ac",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jenne Pierce",
    year: "2022",
    content: "Jenne Pierce is a guest lecturer and we're still in this quarter, but enough people have asked me that I want to put some notes down. This class is very strong. Jenne is massively experienced, and a magnetic lecturer. Her teaching plan covers everything a product manager should know, from the overview and philosophy of product management to GTM strategy. Highly recommend, especially if taught by her!",
    author: "Anthony Chang"
  },
  {
    id: "r_mktg554_pierce_sn",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jenne Pierce",
    year: "2022",
    content: "Too early to say, but I could see the curriculum and I love it. I worked with quite a number of PM's and I can see this class teaches you good basics of being a PM",
    author: "Sateesh Nagulapally"
  },
  {
    id: "r_mktg554_pierce_bb",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jenne Pierce",
    year: "2023",
    content: "I really enjoyed Jenne! She is a very engaging speaker and very practical about the messages she's getting across. Some topics were less relevant to me as a Program Manager at Microsoft, but I have used at least half of what I learned DIRECTLY in my role already. The tools and frameworks she provides are very helpful, and the speakers offer great insight into the current world of PMs.",
    author: "Bridget Burkett"
  },
  {
    id: "r_mktg554_pierce_jc",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jenne Pierce",
    year: "2023",
    content: "Highly recommend this course if you are interested in pivoting into Product Management. It covers the foundation, concepts, and tips on how to think like a PM. I personally liked her humor, quirks, and appreciated how she was able to articulate her personal expertise based on her extensive experience in Expedia. Hala will be teaching as a new instructor for the next quarter (positive impression of her as well) and I believe Jenne will be returning again to teach at UW around 2023. Either way, I had alot of fun in this course!",
    author: "Joanna Chu"
  },
  {
    id: "r_mktg554_pierce_sw",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jenne Pierce",
    year: "2023",
    content: "If you're interested in being a PM or are currently a PM, I learned a lot of basics + frameworks from this class. Great professor, engaging, very relevant topics.",
    author: "Shari Wang"
  },
  {
    id: "r_mktg554_pierce_st",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jenne Pierce",
    year: "2023",
    content: "I haven't been as impressed with the marketing offerings I've taken in the core, but this elective exceeded expectations as one of the most practical and useful classes I've had at Foster alongside Entrepreneurial Finance. Jenne has excellent real-world experience and still folds into an digestible deck for each class. As someone interested in Product Management, I had no idea how much of it I was already doing in my current work and this encouraged me to persue product roles more aggressively. This class helps put the pieces together of a hot career that's often talked about in the MBA, but rarely described well. Jenne breaks down the key pieces of what a product manager is and is not responsible for and the projects you do with teams mirror the product discussions I've had in real companies. If you take this class, take advantage of writing the projects early so she can return it with DETAILED feedback. You can then submit with revisions for a better outcome and you will have gained coaching that you'd typically only recieve on the job under a manager that has time and cares.",
    author: "Sharyn Tom"
  },
  {
    id: "r_mktg554_pierce_sk",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jenne Pierce",
    year: "2024",
    content: "I liked this course, and it's one of the only job-specific ones in the curriculum. If you want to be a PM, this course will teach you the scope, responsibilities, and challenges of this role. Not too much work for this class (maybe 1.5hrs/week?). I think the first half of the course was much stronger than the second, and the lectures were much better than the interactive learning she had us doing at the end of the quarter. I was glad i took this and now feel confident if I head into interviews for a PM role. I think software engineers had a leg-up in this course, and she seemed to appreciate their perspectives much more than the rest of us, but dont let that deter you!",
    author: "Sibyl Knopp"
  },
  {
    id: "r_mktg554_pierce_cm",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jenne Pierce",
    year: "2026",
    content: "Fairly good course, very job oriented course - will help you understand what a product manager does and doesnt do and how to complete the job (generally). A few good guest lecturers, she is very well connected in the Seattle area (particualry in with Zillow and travel companies). The canvas leaves lots to be desired, but its mostly organized. Assignments are low threat, 2 group projects and a few individual assignments. I feel like she does care about your learning and will do her best to ensure learning objective clarity. Good course to understand if you'd be interested in a role in Product Management or not.",
    author: "Chris Melendez"
  },
  {
    id: "r_mktg554_saleh_ta",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Hala Saleh",
    year: "2023",
    content: "4/10 - This class is so not worth the hype and I wish I didn't take this. If you're in tech working on an agile team, you're not really going learn anything you don't already know. The instructor is brand new to teaching so the class is really chaotic. I would describe Hala as having a dopey sense of humor which may be fun for some. She takes attendance in this course and participation is 30% of your grade, yet this class is pretty lecture heavy. If you take this class, you will save lots of time by never doing the assigned readings. She will go over them for a total of 5 minutes max. I would only take it this if there's literally no other option.",
    author: "Tania Asim"
  },
  {
    id: "r_mktg554_schulman_am",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jeff Schulman",
    year: "2019",
    content: "If you don't have experience or a background in PM or Product, and you want to, I'd highly recommend this class. For me it was helpful and provided some tools I can use an carry forward. Happy to chat if you're considering it in more detail.",
    author: "Alana McGee"
  },
  {
    id: "r_mktg554_schulman_ae",
    courseId: "MKTG 554",
    courseTitleContext: "Strategic Product Management",
    professor: "Jeff Schulman",
    year: "2020",
    content: "Mixed feelings about this class; the quarter long group project is a rare opportunity to work with a real company and try to help them improve a physical product, but if I could do it again, I wouldn't take this class. I feel like much of the course material is high level \"Project\" Management and not the best use of credits and $ (ex: much of the material could be learned on the job). Attendence is key, he notes who contributes to the discussion every class. Lastely, the pace of his lectures can be painfully slow.",
    author: "Alan Everitt"
  },
  {
    id: "r_entre532_gottesman_mm",
    courseId: "ENTRE 532",
    courseTitleContext: "Software Entrepreneurship",
    professor: "Greg Gottesman / Ed Lazowska",
    year: "2024",
    content: "Software Entrepreneurship. Highly recommend. Only offered Winter Quarter every year and highly competitive so apply when it goes live because your chances are better the sooner you apply. They max out the room of 80 students with a combination of MBA, design, and both grad/undergrad computer science students. Top-notch guest speakers like the CEO of Convoy, Rober, Textio, AI2 incubator, Amazon, etc. and the CFO of Microsoft. Be on time and take advantage of office hours every week to build relationships with Greg and Ed. The group project goes all quarter-long and can be a bit difficult sheerly due to team sizes of 8-10 people you're navigating how to work with, but there is no \"busy work\" and only a couple real assignments. Mostly everyone gets an awesome grade I think. Awesome if you have a software-oriented startup idea too! Fantastic class. Link at the beginning goes to the course page and check out the syllabus here.",
    author: "Macey McGovern"
  },
  {
    id: "r_entre532_gottesman_sk",
    courseId: "ENTRE 532",
    courseTitleContext: "Software Entrepreneurship",
    professor: "Ed Lazowska and Greg Gottesman",
    year: "2024",
    content: "Fantastic Class! HIGHLY RECOMMEND! This is a class you will have to bid for amongst design students and computer science grad/undergrads, but it's basically first-come-first-serve. Greg is a venture capitalist who managed Madison Venture Labs before starting Pioneer Square Labs. He teaches this class with Ed Lazowska and bring the BEST guest speakers you could imagine from the Seattle area. Among others we had the CFO of Microsoft, CEO of Rover, and.... Andy Jassey!! . You bring a company from idea to reality and pitch every week amongst teams of 10-12 students between Business, Comp Science, and Design. This class is time consuming, but because the teams are large you will likely only have to pitch once.",
    author: "Sibyl Knopp"
  },
  {
    id: "r_entre532_gottesman_rh",
    courseId: "ENTRE 532",
    courseTitleContext: "Software Entrepreneurship",
    professor: "Greg Gottesman / Ed Lazowska",
    year: "2025",
    content: "An awesome course! My team took our idea and used it in the Dempsey Startup Competition afterwards, which was an awesome experience. Great guest lecturers, great way to connect with the local startup scene in Seattle (a lot of founders connected to the professors), and forces you to iterate nimbly and quickly like in real life. Just make sure to keep an eye out for the application for this one; this class fills up very quickly.",
    author: "Reed Hawkins"
  },
  {
    id: "r_entre541_hjorten_nk",
    courseId: "ENTRE 541",
    courseTitleContext: "Technology Commercialization",
    professor: "Hjorten",
    year: "2023",
    content: "2 credit class second half. Covers the same public speaking tools covered in Finding Your Voice. You will deliver 3 speeches over 5 weeks ranging from 4-8 min. Speech topics are more broad in nature and focuses more on the visual nature of presenting.",
    author: "Nate King"
  }
];

// Syllabus descriptions mapping (Manual extraction from typical syllabus info or review content)
export const courseDetails: Record<string, string> = {
  "ACCTG 579": "Covers topics including sustainability reporting frameworks, ESG metrics, and the role of accounting in sustainable business practices.",
  "MKTG 511": "Focuses on marketing strategies in B2B contexts, including relationship management, supply chain dynamics, and organizational buying behavior.",
  "BECON 526": "Analyzes global economic trends, trade policies, and their impact on competitive strategy for multinational firms.",
  "MGMT 547": "Practical negotiation skills through simulations and role-playing. Topics include distributive and integrative bargaining, psychology of influence, and deal-making.",
  "FIN 579": "Special topics in Finance. Varies by section. International Finance covers FX, global capital markets, and hedging strategies.",
  "ENTRE/FIN 557": "Explores financial challenges faced by entrepreneurs, including venture capital, valuation, term sheets, and exit strategies.",
  "MGMT 550": "Examines the relationship between CEOs and Boards. Topics include governance structures, executive compensation, and succession planning. Features high-profile guest speakers.",
  "IBUS 500": "A forum featuring varied speakers on global business topics, public-private partnerships, and international leadership.",
  "MKTG 560": "Understanding consumer behavior through psychological and sociological perspectives. Focuses on data-driven insights to inform marketing strategy.",
  "ENTRE 579": "Special Topics in Entrepreneurship. Varies by section.",
  "FIN 566": "Alternative Investments: Covers hedge funds, private equity, real estate, and commodities. Focuses on risk/return profiles distinct from traditional assets.",
  "MGMT 575": "Explores challenges and opportunities for women in leadership roles. Features guest speakers and personal leadership development planning.",
  "ACCTG 510": "Advanced financial statement analysis. Techniques for assessing firm performance, earnings quality, and credit risk.",
};
