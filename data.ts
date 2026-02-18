
import { Course, Review } from './types';

// Extracted from Spring 2026 Schedule PDF and mapped with Syllabus OCR data
export const courses: Course[] = [
  // Monday/Wednesday
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
    syllabusLink: "/syllabi/ACCTG_579_Sustainability.pdf",
    syllabus: {
      description: "Traditional financial accounting is not designed to measure the societal impact of a company’s operations. Sustainability reporting has evolved to fill this void, allowing for a more comprehensive lens of both performance and risk assessment. This course is designed to provide a critical analysis of current practices in business sustainability reporting.",
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
    syllabusLink: "/syllabi/MKTG_511_B2B.pdf",
    syllabus: {
      description: "Addresses how to understand, create, and deliver value when selling goods and services to other businesses, governments, and institutional customers. Students learn how business markets differ from consumer markets, how to assess opportunities, and how to manage key marketing execution elements.",
      learningObjectives: [
        "Assess opportunities in business markets",
        "Develop marketing strategy for B2B contexts",
        "Manage key marketing execution elements",
        "Make data-driven marketing decisions"
      ],
      grading: [
        { item: "Class Participation", weight: "30%" },
        { item: "Group Assignment", weight: "30%" },
        { item: "Quizzes & Exercises", weight: "40%" }
      ],
      books: ["Coursepack from Harvard Business School Publishing"]
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
    info: "MBA-MS, INTL",
    syllabusLink: "/syllabi/BECON_526_Global_Economy.pdf",
    syllabus: {
      description: "Explores how purely domestic operations differ from global ones. Topics range from the internationalization process to the operation of complex global operations, as well as the business models of emerging conglomerates of the digital economy.",
      learningObjectives: [
        "Understand, identify, assess and project global trends",
        "Determine how trends give rise to business opportunities or threats",
        "Develop strategies to exploit opportunities or mitigate threats",
        "Improve ability to write clear, well-structured communications"
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
    info: "2nd Half",
    syllabusLink: "/syllabi/MGMT_547_Negotiations.pdf",
    syllabus: {
      description: "Acquire a fundamental understanding of negotiations and the skills to plan for and analyze your own negotiations. Concepts will be building blocks from which you can systematically understand and evaluate a negotiation process.",
      learningObjectives: [
        "Develop confidence in the negotiation process",
        "Analyze behavior and motives of negotiators",
        "Evaluate costs and benefits of alternative actions",
        "Manage the negotiating process"
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
    info: "PRAC",
    syllabusLink: "/syllabi/MKTG_535_Analytics_Lab.pdf",
    syllabus: {
      description: "Experiential class with a strong focus on the application of analytics and market measurement in a real-world, client-facing, consulting environment. Students work in teams using analysis to answer current and important business questions for sponsoring companies.",
      learningObjectives: [
        "Apply analytics in a real-world, team-based environment",
        "Manage team dynamics and client relationships",
        "Execute a project from analysis to recommendation",
        "Present findings to client leadership"
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
    info: "1st Half, INTL",
    syllabusLink: "/syllabi/MGMT_509_Global_Strategy.pdf",
    syllabus: {
      description: "Develop a better understanding of the global environment in which businesses compete. Covers globalization trends, government-multinational firm relations, country risk, entry modes, and cross-border collaborative challenges.",
      learningObjectives: [
        "Manage key multinational firm relationships",
        "Evaluate institutional voids of countries",
        "Assess export vs. licensing vs. FDI decisions",
        "Anticipate challenges of cross-border collaboration"
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
    syllabusLink: "/syllabi/MKTG_568_Pricing.pdf",
    syllabus: {
      description: "Blends marketing analytic frameworks, marketing strategy & microeconomic theory, and data to formulate actionable pricing strategies. Students will learn how to coordinate pricing decisions with the rest of the marketing value proposition.",
      learningObjectives: [
        "Formulate pricing strategy using data and methods",
        "Understand microeconomic foundations of pricing",
        "Design and execute pricing strategies across contexts (B2B, B2C)",
        "Work with different forms of data and analytic methods"
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

  // Tuesday/Thursday
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
    info: "1st Half, INTL",
    syllabusLink: "/syllabi/FIN_579_International_Finance.pdf",
    syllabus: {
      description: "Focuses on the financial management of the multinational corporation. We will cover the foreign exchange market, currency risk management, and international investment decisions.",
      learningObjectives: [
        "Understand foreign exchange markets and parity conditions",
        "Manage currency risk using derivatives",
        "Evaluate international capital budgeting projects",
        "Assess political risk in international finance"
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
    syllabusLink: "/syllabi/MKTG_560_Consumer_Insights.pdf",
    syllabus: {
      description: "Covers the art and science of market research. Study qualitative and quantitative research strategies that generate new knowledge about consumers behavior, attitudes, and culture.",
      learningObjectives: [
        "Learn qualitative and quantitative research strategies",
        "Understand theory and practice of gaining insights from experiments and data",
        "Explore implications of AI for accelerating market research",
        "Apply research to high impact marketing problems"
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
    syllabusLink: "/syllabi/ACCTG_510_Financial_Statement_Analysis.pdf",
    syllabus: {
      description: "Gain knowledge and skills to analyze, interpret, and use publicly available financial information. Focus is on analysis of public companies performed by external parties, with a focus on equity valuation.",
      learningObjectives: [
        "Analyze financial information in annual and quarterly reports",
        "Apply fundamental valuation techniques",
        "Work in teams to communicate insights from analysis",
        "Research accounting footnotes and disclosures"
      ],
      grading: [
        { item: "Valuation Report (Team)", weight: "28%" },
        { item: "Midterm Exam", weight: "28%" },
        { item: "Pre-class Case Submissions", weight: "24%" },
        { item: "Professionalism", weight: "20%" }
      ],
      books: ["Equity Valuation & Analysis by Lundholm & Sloan (Recommended)"]
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
    syllabusLink: "/syllabi/ENTRE_FIN_557_Entrepreneurial_Finance.pdf",
    syllabus: {
      description: "Advanced finance course providing understanding of financial issues facing entrepreneurs. Covers 'small business survival skills' like assessing performance, financial planning, and valuation, as well as venture capital financing.",
      learningObjectives: [
        "Assess financial performance and planning for startups",
        "Analyze terms of venture capital agreements",
        "Evaluate risks and opportunities in entrepreneurial finance",
        "Understand structure of VC organizations"
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
    syllabusLink: "/syllabi/FIN_579_Climate_Risk.pdf",
    syllabus: {
      description: "Examines how climate change risks affect financial markets and how financial innovation can address these challenges. Topics include carbon pricing, green bonds, and ESG investing.",
      learningObjectives: [
        "Understand physical and transition risks of climate change",
        "Evaluate financial instruments designed for climate mitigation",
        "Analyze corporate climate disclosures",
        "Assess portfolio exposure to climate risk"
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
    syllabusLink: "/syllabi/MGMT_545_High_Performance.pdf",
    syllabus: {
      description: "Leadership is both an art and a science. Builds on authentic leadership with a focus on self-awareness, relationship-building, and balance. Covers evidence-based leadership styles like transactional, servant, charismatic, and empowering.",
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

  // Alternate/Evening
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
    info: "INTL",
    syllabusLink: "/syllabi/IBUS_500_Global_Business_Forum.pdf",
    syllabus: {
      description: "MBA class and discussion forum where professionals from around the world share insights into doing business globally. Themes include 'Doing Business with Central and South America' and 'The Global Sports Arena'.",
      learningObjectives: [
        "Engage with issues arising from doing business globally",
        "Build knowledge of how organizations work differently in different regions",
        "Define leadership qualities required for global business",
        "Meet and build relationships with global business professionals"
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
    syllabusLink: "/syllabi/MGMT_550_CEO_Board.pdf",
    syllabus: {
      description: "Insiders' view of corporate governance. Explores how boards operate and contribute to a company's competitiveness, profitability, and long-term sustainability. Analyzes impact of boards on success/failure of major companies.",
      learningObjectives: [
        "Understand various board types and models",
        "Distinguish governance best practices for different stage companies",
        "Analyze board roles in strategy, risk, ethics, and succession",
        "Understand role of CEO in engaging with boards"
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
    info: "2nd Half",
    syllabusLink: "/syllabi/FIN_579_Endowment.pdf",
    syllabus: {
      description: "Focuses on endowment management and specific challenges institutional fund managers face, including security selection, portfolio construction, manager choice, and alternative asset class investing.",
      learningObjectives: [
        "Consider drivers of portfolio performance",
        "Understand and evaluate market opportunities of traditional and alternative assets",
        "Evaluate key differences between institutional investment models",
        "Gain exposure to quantitative tools"
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
    syllabusLink: "/syllabi/ENTRE_579_Biomedical.pdf",
    syllabus: {
      description: "Overview of the challenges necessary for any young business in healthcare or life sciences. Covers regulation, development process, and economics of healthcare.",
      learningObjectives: [
        "Understand system of regulation of health technologies",
        "Learn process of development for health technologies",
        "Understand economics of healthcare",
        "Identify domain experts and learn from them"
      ],
      grading: [
        { item: "Weekly Quizzes", weight: "40%" },
        { item: "Final Presentation", weight: "30%" },
        { item: "Interview Reports", weight: "20%" },
        { item: "Peer Reviews", weight: "10%" }
      ]
    }
  },
  
  // Evening (6:00-9:30)
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
    info: "2nd Half",
    syllabusLink: "/syllabi/ENTRE_579_Pitch.pdf",
    syllabus: {
      description: "About entrepreneurship and the role that verbal communication, influence, and persuasion play in shaping success. Emphasizes the power of what you say and how effectively you say it.",
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
    info: "1st Half, INTL",
    syllabusLink: "/syllabi/MGMT_509_Global_Strategy.pdf",
    syllabus: {
      description: "Develop a better understanding of the global environment in which businesses compete. Covers globalization trends, government-multinational firm relations, country risk, entry modes, and cross-border collaborative challenges.",
      learningObjectives: [
        "Manage key multinational firm relationships",
        "Evaluate institutional voids of countries",
        "Assess export vs. licensing vs. FDI decisions",
        "Anticipate challenges of cross-border collaboration"
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
    syllabusLink: "/syllabi/MKTG_556_Advertising.pdf",
    syllabus: {
      description: "Provides students with an understanding of the advertising and promotion process, including the development of an integrated marketing communications plan. Topics include setting objectives, creative strategy, media planning, and measuring effectiveness.",
      learningObjectives: [
        "Develop integrated marketing communications plans",
        "Evaluate creative strategies and executions",
        "Understand media planning and buying",
        "Measure advertising effectiveness"
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
    syllabusLink: "/syllabi/BECON_546_Game_Theory.pdf",
    syllabus: {
      description: "Surveys and develops concepts and techniques of game theory and information economics and their applications to issues of business strategy, including advertising, pricing, negotiation, and entry deterrence.",
      learningObjectives: [
        "Identify strategic environments and model them as games",
        "Analyze economic situations using game theory techniques",
        "Devise strategic moves to exploit situations",
        "Apply game theory to defend or critique business decisions"
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
    syllabusLink: "/syllabi/ENTRE_FIN_557_Entrepreneurial_Finance.pdf",
    syllabus: {
      description: "Advanced finance course providing understanding of financial issues facing entrepreneurs. Covers 'small business survival skills' like assessing performance, financial planning, and valuation, as well as venture capital financing.",
      learningObjectives: [
        "Assess financial performance and planning for startups",
        "Analyze terms of venture capital agreements",
        "Evaluate risks and opportunities in entrepreneurial finance",
        "Understand structure of VC organizations"
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
    syllabusLink: "/syllabi/FIN_566_Alternative_Investments.pdf",
    syllabus: {
      description: "What strategies do investors pursue to make returns in Alternative Investments? Devoted around half to Hedge Fund strategies (Quantitative Factor, Distressed, Merger Arb) and half to Private Equity (LBOs, valuation).",
      learningObjectives: [
        "Understand risks/returns of hedge fund strategies",
        "Understand structure and process of PE funds",
        "Evaluate PE investment opportunities",
        "Distinguish between PE and VC investment environments"
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
    info: "1st Half",
    syllabusLink: "/syllabi/MGMT_575_Women_Leadership.pdf",
    syllabus: {
      description: "Combines dynamic sessions with accomplished women making a difference with exploration of issues related to female leadership. Students assess their own strengths to explore how they may make a difference.",
      learningObjectives: [
        "Draw insights from exceptional female role models",
        "Build frameworks for female leadership",
        "Identify personal sources of power and resilience",
        "Create a personal vision of 'the top'"
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
    info: "April 8 - May 6",
    syllabusLink: "/syllabi/MKTG_579_Culture_Sales.pdf",
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
    syllabusLink: "/syllabi/MKTG_565_LLMs.pdf",
    syllabus: {
      description: "Learn to apply Large Language Models to business problems. Covers prompt engineering, fine-tuning, and building applications using LLMs.",
      learningObjectives: [
        "Understand capabilities and limitations of LLMs",
        "Apply prompt engineering techniques",
        "Develop business applications using LLM APIs",
        "Evaluate ethical considerations of AI"
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
    info: "1st Half",
    syllabusLink: "/syllabi/ENTRE_509_Foundations.pdf",
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
    syllabusLink: "/syllabi/ENTRE_541_Tech_Commercialization.pdf",
    syllabus: {
      description: "Work with UW scientists and engineers to identify potential applications, markets, and business models for breakthrough discoveries. Focuses on building skills in commercial analysis.",
      learningObjectives: [
        "Understand commercialization process of university tech",
        "Conduct primary and secondary research for hypotheses",
        "Create feasible business models",
        "Develop project milestones and presentation skills"
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
    syllabusLink: "/syllabi/FIN_560_Investments.pdf",
    syllabus: {
      description: "Builds on core finance to answer fundamental questions: Where do security prices come from? How do we measure mispricing? How do we measure skill? Covers market efficiency, bond investing, portfolio theory, CAPM, hedge funds.",
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
    info: "2nd Half",
    syllabusLink: "/syllabi/MGMT_579_Innovation.pdf",
    syllabus: {
      description: "Equips students with frameworks for managing technology-intensive businesses. Emphasis on innovation interacting with competition, market evolution, and capabilities. Includes design thinking principles.",
      learningObjectives: [
        "Evaluate how firms choose innovation opportunities",
        "Identify best practices in new product development",
        "Assess trade-offs in IP protection",
        "Formulate collaboration strategies"
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
    syllabusLink: "/syllabi/ENTRE_579_Angel_Investing.pdf",
    syllabus: {
      description: "Experiential learning opportunity for understanding early stage funding. Hands-on learning on angel investing and raising capital. Students participate with an outside angel investment group.",
      learningObjectives: [
        "Sourcing investment opportunities",
        "Intense market and industry research",
        "Financial metrics for start-ups",
        "Negotiation and deal terms"
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
];

// Selected reviews extracted from OCR. 
// Note: Some reviews match Course ID but refer to a specific "Special Topic" (like Angel Investing).
export const reviews: Review[] = [
  // FIN 579 - International Finance (Siegel)
  {
    id: "r_fin579_siegel_1",
    courseId: "FIN 579",
    courseTitleContext: "International Finance",
    professor: "Stephan Siegel",
    year: "2025",
    content: "This 2-credit, half-quarter class was one that I took for the International Perspective requirement instead of out of inherent interest, but it wound up being a very useful crash course on forex. Stephan does a decent job of making the topic accessible and interesting.",
    author: "Joe Garan"
  },
  {
    id: "r_fin579_siegel_2",
    courseId: "FIN 579",
    courseTitleContext: "International Finance",
    professor: "Stephan Siegel",
    year: "2025",
    content: "Explores macroeconomic forces, FX markets, balance of payments, and international capital flows. Includes case studies like China's fixed exchange rate. Important for understanding global finance. This course was a favorite of mine.",
    author: "Reed Hawkins"
  },

  // ENTRE/FIN 557 - Entrepreneurial Finance (Young)
  {
    id: "r_entre557_young_1",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2025",
    content: "Lance is THE man and Entre Finance is the greatest of his course offerings. You're not getting the Foster education without taking at least one Lance class. It's case-based, no final, 4 deliverables. Take this class AFTER Problems in Business Finance if you can.",
    author: "Jennifer Cole"
  },
  {
    id: "r_entre557_young_2",
    courseId: "ENTRE/FIN 557",
    professor: "Lance Young",
    year: "2025",
    content: "Focuses on entrepreneurial financial decision-making from startup to VC funding. Heavy use of real-world cases. Lance is a polarizing but passionate instructor; come prepared and ready for cold calls. I liked the course and would recommend it.",
    author: "Reed Hawkins"
  },
  
  // MGMT 545 - Leading and Managing High Performance (Wee)
  {
    id: "r_mgmt545_wee_1",
    courseId: "MGMT 545",
    professor: "Elijah Wee",
    year: "2023",
    content: "I loved this class. Elijah does a great job of building concepts throughout the course, and taking perspectives from individuals in the class. It's a good place to learn more deeply about leadership and management and a safe place to practice new skills.",
    author: "Bridget Burkett"
  },

  // MGMT 547 - Successful Negotiations (Barnes - Review for Fong/Follmer as proxy for course content)
  {
    id: "r_mgmt547_fong_1",
    courseId: "MGMT 547",
    professor: "Christina Fong",
    year: "2025",
    content: "Really enjoyed this class. It is engaging, fun and you learn by doing. Every class is a negotiation, you learn negotiating concepts and then take up a case with a random partner. Great to try out different personalities during negotiation.",
    author: "Chirag Chinmay"
  },
  {
    id: "r_mgmt547_follmer_1",
    courseId: "MGMT 547",
    professor: "Elizabeth Follmer",
    year: "2023",
    content: "I found the content very engaging and was surprised how valuable the class was. It was more broadly applicable than I expected, for example, it impacted the way I think about decision making with others as a whole.",
    author: "Elizabeth Jones"
  },

  // MGMT 550 - CEO and Board Governance (Collingsworth/Roe)
  {
    id: "r_mgmt550_roe_1",
    courseId: "MGMT 550",
    professor: "Jeff Roe/Connie Collingsworth",
    year: "2025",
    content: "This is the best class I've taken in the program. The caliber of speakers is incredible — CEO of Nordstrom, former CEO of Albertson's, Chairwoman from JP Morgan Chase. You learn a ton and hear a variety of perspectives. It's not much work, either.",
    author: "Megan Anderle"
  },
  {
    id: "r_mgmt550_roe_2",
    courseId: "MGMT 550",
    professor: "Jeff Roe/Connie Collingsworth",
    year: "2024",
    content: "We are blessed to be able to learn directly not only from Jeff and Roe, but also from a lot of different CEO and board members that they bring in-class. Definitely recommend taking this. It's also not a lot of work IMO.",
    author: "Dhru Shah"
  },

  // ENTRE 579 - Angel Investing (Brusse)
  {
    id: "r_entre579_angel_1",
    courseId: "ENTRE 579",
    courseTitleContext: "Angel Investing",
    professor: "Minda Brusse",
    year: "2024",
    content: "Highly recommend. You get $50K of UW money to invest in 1-2 startups. Really great class for networking, just know you need to commit for the year.",
    author: "Macey McGovern"
  },

  // MKTG 560 - Consumer Insights (TBD - reviews for previous profs)
  {
    id: "r_mktg560_1",
    courseId: "MKTG 560",
    professor: "Max Kleinman Weiner",
    year: "2025",
    content: "Too heavy on text, slides, and content. Not much engagement. Overall the material is great, the concepts are interesting but the class is boring and dry. Being an evening class, it becomes difficult to sit through.",
    author: "Chirag Chinmay"
  },

  // FIN 566 - Alternative Investments (Kremens)
  {
    id: "r_fin566_kremens_1",
    courseId: "FIN 566",
    professor: "Lukas Kremens",
    year: "2025",
    content: "Covered private equity, distressed debt, and venture capital. Kremens is organized and keeps things moving efficiently. Not too technical; good elective for finance-minded MBAs, though I’d proceed with caution depending on your interests. Very dry class overall.",
    author: "Reed Hawkins"
  },

  // MGMT 509 - Global Strategy (Steensma)
  {
    id: "r_mgmt509_steensma_1",
    courseId: "MGMT 509",
    professor: "Kevin Steensma",
    year: "2023",
    content: "This course is great for anyone interested in understanding how big multi-national corporations take tough decisions that span borders. Very engaging and high interactive classes with challenging content. Prof Kevin Steensma delivers this with ease.",
    author: "Ayush Garg"
  },

  // MGMT 575 - Women in Leadership (Goethals)
  {
    id: "r_mgmt575_goethals_1",
    courseId: "MGMT 575",
    professor: "Cate Goethals",
    year: "2023",
    content: "This five week journey is so full of joy. About a third of the class is structured around a speaker series of the most awe inspiring women in the area. It's not a small amount of work for 2 credits, but it is incredibly informative, encouraging, and humbling.",
    author: "Anthony Chang"
  },

  // ACCTG 510 - Intro to Financial Statement Analysis (Van Winkle)
  {
    id: "r_acctg510_vw_1",
    courseId: "ACCTG 510",
    professor: "Matthew Van Winkle",
    year: "2025",
    content: "Focuses on dissecting financial statements to assess firm performance, earnings quality, and valuation potential. Heavy use of case studies. Great for future strategists, consultants, and investors. I cautiously recommend this course; it can be a bit dry.",
    author: "Reed Hawkins"
  },

  // FIN 560 - Investments (Hrdlicka)
  {
    id: "r_fin560_hrdlicka_1",
    courseId: "FIN 560",
    professor: "Christopher Hrdlicka",
    year: "2026",
    content: "This class is great if you know you want to go into IB or anything that draws on CFA knowledge. The professor is intelligent but he will make sure you know that he is smarter than you. He won't go easy on grading. You will learn how to allocate portfolios for highest Sharpe ratio.",
    author: "Chris Melendez"
  },
  
  // ENTRE 579 - Entrepreneurial Influence/Pitch (Scallon)
  {
    id: "r_entre579_pitch_1",
    courseId: "ENTRE 579",
    courseTitleContext: "Entrepreneurial Influence and the Pitch",
    professor: "Elizabeth Scallon",
    year: "2025",
    content: "Highly recommend this class. Elizabeth is well known in the start up community in Seattle. Some of the slides were a bit basic but she mixed in the best business advice I've ever gotten.",
    author: "Anonymous"
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
