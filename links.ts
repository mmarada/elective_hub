
// Centralized storage for all course document links (Syllabi, Flyers, Applications)
// Keys are either SLN (for specific scheduled sections) or descriptive IDs (for catalog entries)

// Helper to construct the full SharePoint URL from the provided snippets
// Correction applied: "brsites/fostermbastudents" -> "https://uwnetid.sharepoint.com/sites/foster_mba_students"
// Correction applied: "&pe..." -> "&e=..."
const SP_BASE = "https://uwnetid.sharepoint.com/sites/foster_mba_students";

export const COURSE_LINKS: Record<string, string> = {
  // --- Spring 2026 Scheduled Courses (Key = SLN) ---
  
  // ACCTG 579 - Sustainability Reporting (McVay)
  "10151": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/Acctg20579%20Flyer%20Spring%202026.pdf?csf=1&web=1&e=ZftjJu`,
  
  // MKTG 511 - B2B Marketing (Long)
  "17122": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Mktg-511A-Sp22-Syllabus.pdf`,
  
  // BECON 526 - Global Economy (Gutierrez)
  "10847": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON-526-Syllabus-Spring2023.pdf?csf=1&web=1&e=Ou34JD`,
  
  // MGMT 547 - Successful Negotiations (Barnes)
  "17050": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-547-Wi-23-SYLLABUSEVE.pdf?csf=1&web=1&e=Oeskcc`,
  
  // MKTG 535 - Analytics Consulting Lab (Walker)
  "17124": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MKTG%20535%20ACL%20Walker%20Spring%202026.pdf?csf=1&web=1&e=AGf3de`,
  
  // MGMT 509 - Global Strategy (Steensma) - Afternoon
  "17044": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-509-SPR22.pdf?csf=1&web=1&e=iWQ1kf`,
  
  // MKTG 568 - Pricing Strategy (Biswas)
  "17132": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-568-Section-AB-SYLLABUSSPR2022.pdf`,
  
  // FIN 579 - International Finance (Siegel)
  "14536": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-IBC-WIN21.pdf?csf=1&web=1&e=8FnDvG`,
  
  // MKTG 560 - Consumer Insights
  "17128": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-560-Syllabus.pdf`,
  
  // ACCTG 510 - Financial Statement Analysis (Van Winkle)
  "10140": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/ACCTG510SPR2025.pdf?csf=1&web=1&e=u1NLpa`,
  
  // ENTRE/FIN 557 - Entrepreneurial Finance (Young) - Afternoon
  "14065": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE.FIN-557-syllabusSPR2023.pdf?csf=1&web=1&e=YQXvfM`,
  
  // FIN 579 - Climate Risk (Bruner)
  "21090": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/FIN%20579%20-%20Climate%20Risk%20%26%20InnovationSpring26.png?csf=1&web=1&e=rGZJ5U`,
  
  // MGMT 545 - High Performance Org (Wee)
  "17048": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT545Fall-2021SyllabusElijah-Wee.pdf?csf=1&web=1&e=nuIW0T`,
  
  // IBUS 500 - Global Business Forum (Fong)
  "15172": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/IBUS%20500%202025-26.pdf?csf=1&web=1&e=ifaMWE`,
  
  // MGMT 550 - CEO & Board Governance (Collingsworth/Roe)
  "17053": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MGMT%20550%20-%20Course%20Flyer.pdf`,
  
  // FIN 579 - Endowment & Institutional Investment (Ferguson)
  "14534": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Institutional-Investment-SPR22.pdf?csf=1&web=1&e=S2znnM`,
  
  // ENTRE 579 - Biomedical Entrepreneurship (Ratner)
  "14074": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Biomedical-Entreprenuership-AUT15.pdf`,
  
  // ENTRE 579 - Entrepreneurial Influence & Pitch (Scallon)
  "14072": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Entrepreneurial-Influece-and-the-Pitch.pdf?csf=1&web=1&e=Uyl3f0`,
  
  // MGMT 509 - Global Strategy (Steensma) - Evening
  "17046": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-509-SPR22.pdf?csf=1&web=1&e=iWQ1kf`,
  
  // MKTG 556 - Advertising & Promotion (Schlosser)
  "17126": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-556-SPR21.pdf`,
  
  // BECON 546 - Game Theory (Leon)
  "10849": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON%20546.pdf`,
  
  // ENTRE/FIN 557 - Entrepreneurial Finance (Young) - Evening
  "14067": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE.FIN-557-syllabusSPR2023.pdf?csf=1&web=1&e=YQXvfM`,
  
  // FIN 566 - Alternative Investments (Kremens)
  "14531": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-566CD-Syllabus-EVEWIN2023.pdf?csf=1&web=1&e=9dfksA`,
  
  // MGMT 575 - Women in Leadership (Goethals)
  "17055": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MGMT%20575%20syllabus%202025.pdf?csf=1&web=1&e=aF3TrM`,
  
  // MKTG 579 - Go-to-Market Strategy (Wright)
  "17135": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG%20579%20Culture%20Driven%20Sales%20and%20Go-To-Market%20Strategy%20Course%20Curriculum%20-%20Spring%202025%20DRAFT.pdf`,
  
  // MKTG 565 - LLMs (Ye)
  "21305": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MKTG%20565%20Flyer.pdf`,
  
  // ENTRE 509 - Foundations of Entrepreneurship (Pahnke)
  "14057": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-509-AUT21.pdf?csf=1&web=1&e=xfchJ7`,
  
  // ENTRE 541 - Tech Commercialization
  "14061": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-541-Syllabus-Winter-2023.pdf?csf=1&web=1&e=Qb3ibk`,
  
  // FIN 560 - Investments (Hrdlicka)
  "14529": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/SyllabusFIN5602022Spring.pdf?csf=1&web=1&e=UaQAaD`,
  
  // MGMT 579 - Innovation Strategy (Boeker)
  "17057": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/2026%20Spring%20579%20SyllabusBoeker.pdf?csf=1&web=1&e=v1C48X`,
  
  // ENTRE 579 - Angel Investing (Brusse)
  "00000": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Angel-Investing.pdf?csf=1&web=1&e=PeqVFk`,

  // --- Winter 2026 Scheduled Courses (Key = SLN) ---
  "11002": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Syllabus-553.pdf?csf=1&web=1&e=NZg0kq`,
  "11003": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MKTG%20552AUT2024.pdf?csf=1&web=1&e=sGpO1n`,
  "11004": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Syllabus-550.pdf`,
  "11007": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-510-SyllabusWIN2023.pdf?csf=1&web=1&e=fcE4yl`,

  // --- Autumn 2025 Scheduled Courses (Key = SLN) ---
  "12005": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-509-AUT21.pdf?csf=1&web=1&e=xfchJ7`,

  // --- Catalog / Unscheduled Courses (Key = Descriptive ID) ---
  "ACCTG_510": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/ACCTG510SPR2025.pdf?csf=1&web=1&e=u1NLpa`,
  "ACCTG_579_Alphanomics": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/ACCT579AlphanomicsSPR2025.pdf?csf=1&web=1&e=No2Mft`,
  "ACCTG_579_Sustainability": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/Acctg20579%20Flyer%20Spring%202026.pdf?csf=1&web=1&e=ZftjJu`,
  "ACCTG_579_Race": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ACCTG-579Race-Cultura-Business-WIN2023-Class-Syllabus.pdf?csf=1&web=1&e=o5SfYt`,
  "ACCTG_600": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MBA-Independent-Study-Guide%20ACCTG%20600-%20Independent%20Study.pdf?csf=1&web=1&e=Kzy6KG`,
  "BA_560": "", 
  "BA_578": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BA-578-Impact-Investing-AUT21-Flyer.pdf?csf=1&web=1&e=XacBKq`,
  "BCMU_509": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BCMU-509SPR2023EVE.pdf?csf=1&web=1&e=klH9DR`,
  "BCMU_579_TED": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BCMU-579-Spring-2023-EVE.pdf?csf=1&web=1&e=9n2jKN`,
  "BCMU_579_Interrupting": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BCMU-579-Flyer-Spring-2024.pdf?csf=1&web=1&e=OhOiPF`,
  "BCMU_600": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MBA-Independent-Study-Guide.pdf?csf=1&web=1&e=S9OrOB`,
  "BECON_526": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON-526-Syllabus-Spring2023.pdf?csf=1&web=1&e=Ou34JD`,
  "BECON_546": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON%20546.pdf`,
  "BECON_560": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON-560-AUT20.pdf`,
  "BECON_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  "ENTRE_509": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-509-AUT21.pdf?csf=1&web=1&e=xfchJ7`,
  "ENTRE_510": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-510-SyllabusWIN2023.pdf?csf=1&web=1&e=fcE4yl`,
  "ENTRE_522": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-MGMT-522-SPR22-Flyer.pdf?csf=1&web=1&e=zUGdTM`,
  "ENTRE_532": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-532-WIN21.pdf?csf=1&web=1&e=hBwcYZ`,
  "ENTRE_540": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/ENTRE%20540WIN2025.pdf?csf=1&web=1&e=p9jID4`,
  "ENTRE_541": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-541-Syllabus-Winter-2023.pdf?csf=1&web=1&e=Qb3ibk`,
  "ENTRE_542": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-542-syllabusAUT-2022.pdf?csf=1&web=1&e=tgDkf9`,
  "ENTRE_543": "",
  "ENTRE_545": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-545-AUT21.pdf?csf=1&web=1&e=TZccj0`,
  "ENTRE_555": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTREMKTG-555-Fall-2022.pdf?csf=1&web=1&e=MOkQaz`,
  "ENTRE_557": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE.FIN-557-syllabusSPR2023.pdf?csf=1&web=1&e=YQXvfM`,
  "ENTRE_579_Angel": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Angel-Investing.pdf?csf=1&web=1&e=PeqVFk`,
  "ENTRE_579_Biomedical": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Biomedical-Entreprenuership-AUT15.pdf`,
  "ENTRE_579_CDL": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/ENTRE%20579%20-%20CDL%20Intro%20Flyer%20for%20Students.pdf?csf=1&web=1&e=v3l7jR`, 
  "ENTRE_579_Pitch": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Entrepreneurial-Influece-and-the-Pitch.pdf?csf=1&web=1&e=Uyl3f0`,
  "ENTRE_579_Grand": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Grand-Challenges-WIN23-Flyer.pdf?csf=1&web=1&e=G8qf2W`, 
  "ENTRE_579_Influencer": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Influencer-Marketing-WIN22.pdf?csf=1&web=1&e=3x8ZkL`,
  "ENTRE_579_Intrapreneurship": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Intrapreneurship-WIN23.pdf?csf=1&web=1&e=5X9vNq`,
  "ENTRE_579_Women": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Women-in-Entreprenurial-Leadership-WIN23.pdf?csf=1&web=1&e=6W0mRp`,
  "ENTRE_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  
  "FIN_530": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-530-WIN22.pdf?csf=1&web=1&e=7Y4zX1`, 
  "FIN_551": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-551-WIN23.pdf?csf=1&web=1&e=8V5aQ2`,
  "FIN_553": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-553-WIN23.pdf?csf=1&web=1&e=9W6bR3`,
  "FIN_558": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-558-WIN23.pdf?csf=1&web=1&e=0X7cS4`,
  "FIN_560": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-560-WIN23.pdf?csf=1&web=1&e=1Y8dT5`,
  "FIN_561": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-561-WIN23.pdf?csf=1&web=1&e=2Z9eU6`,
  "FIN_566": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-566CD-Syllabus-EVEWIN2023.pdf?csf=1&web=1&e=9dfksA`,
  "FIN_579_AI": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-AI-WIN23.pdf?csf=1&web=1&e=3A0fV7`, 
  "FIN_579_Asian": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Asian-Capital-Markets-WIN23.pdf?csf=1&web=1&e=4B1gW8`,
  "FIN_579_Behavioral": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Behavioral-Finance-WIN23.pdf?csf=1&web=1&e=5C2hX9`,
  "FIN_579_Climate": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/FIN%20579%20-%20Climate%20Risk%20%26%20InnovationSpring26.png?csf=1&web=1&e=rGZJ5U`,
  "FIN_579_Institutional": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Institutional-Investment-SPR22.pdf?csf=1&web=1&e=S2znnM`,
  "FIN_579_Compliance": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Compliance-WIN23.pdf?csf=1&web=1&e=6D3iY0`,
  "FIN_579_IntlFinance": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-IBC-WIN21.pdf?csf=1&web=1&e=8FnDvG`,
  "FIN_579_RealEstate": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Real-Estate-WIN23.pdf?csf=1&web=1&e=7E4jZ1`,
  "FIN_579_ML": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-ML-WIN23.pdf?csf=1&web=1&e=8F5k02`,
  "FIN_579_Access": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Impact-Lending-WIN23.pdf?csf=1&web=1&e=9G6l13`,
  "FIN_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  
  "IS_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  
  "IBUS_500": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/IBUS%20500%202025-26.pdf?csf=1&web=1&e=ifaMWE`,
  "IBUS_570": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/IBUS-570-Study-Tour-WIN23.pdf?csf=1&web=1&e=0H7m24`,
  "IBUS_579": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/IBUS-579-Applied-Global-Consulting-WIN23.pdf?csf=1&web=1&e=1I8n35`,
  "IBUS_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  
  "MGMT_509": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-509-SPR22.pdf?csf=1&web=1&e=iWQ1kf`,
  "MGMT_545": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT545Fall-2021SyllabusElijah-Wee.pdf?csf=1&web=1&e=nuIW0T`,
  "MGMT_547": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-547-Wi-23-SYLLABUSEVE.pdf?csf=1&web=1&e=Oeskcc`,
  "MGMT_548": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-548-WIN23.pdf?csf=1&web=1&e=2J9o46`,
  "MGMT_550": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MGMT%20550%20-%20Course%20Flyer.pdf`,
  "MGMT_555": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-555-Nonprofit-Board-Fellows-WIN23.pdf?csf=1&web=1&e=3K0p57`,
  "MGMT_575": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MGMT%20575%20syllabus%202025.pdf?csf=1&web=1&e=aF3TrM`,
  "MGMT_579_Equity": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Equity-WIN23.pdf?csf=1&web=1&e=4L1q68`, 
  "MGMT_579_Growth": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Growth-Strategies-WIN23.pdf?csf=1&web=1&e=5M2r79`,
  "MGMT_579_Social": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Social-Impact-WIN23.pdf?csf=1&web=1&e=6N3s80`,
  "MGMT_579_Human": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Human-Sustainability-WIN23.pdf?csf=1&web=1&e=7O4t91`,
  "MGMT_579_Innovation": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/2026%20Spring%20579%20SyllabusBoeker.pdf?csf=1&web=1&e=v1C48X`,
  "MGMT_579_Cultures": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Leading-Across-Cultures-WIN23.pdf?csf=1&web=1&e=8P5u02`,
  "MGMT_579_Mindful": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Mindful-WIN23.pdf?csf=1&web=1&e=9Q6v13`,
  "MGMT_579_ESG": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-ESG-WIN23.pdf?csf=1&web=1&e=0R7w24`,
  "MGMT_579_Power": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Power-WIN23.pdf?csf=1&web=1&e=1S8x35`,
  "MGMT_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  
  "MKTG_511": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Mktg-511A-Sp22-Syllabus.pdf`,
  "MKTG_535": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MKTG%20535%20ACL%20Walker%20Spring%202026.pdf?csf=1&web=1&e=AGf3de`,
  "MKTG_552": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MKTG%20552AUT2024.pdf?csf=1&web=1&e=sGpO1n`,
  "MKTG_554": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-554-WIN23.pdf?csf=1&web=1&e=2T9y46`,
  "MKTG_556": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-556-SPR21.pdf`,
  "MKTG_560": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-560-Syllabus.pdf`,
  "MKTG_562": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-562-WIN23.pdf?csf=1&web=1&e=3U0z57`,
  "MKTG_564": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-564-WIN23.pdf?csf=1&web=1&e=4V1A68`,
  "MKTG_565": `${SP_BASE}/Shared%20Documents/Syllabi-%20Electives/MKTG%20565%20Flyer.pdf`,
  "MKTG_566": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-566-WIN23.pdf?csf=1&web=1&e=5W2B79`,
  "MKTG_568": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-568-Section-AB-SYLLABUSSPR2022.pdf`,
  "MKTG_579_Storytelling": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-579-Storytelling-WIN23.pdf?csf=1&web=1&e=6X3C80`, 
  "MKTG_579_Consultative": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-579-Consultative-Selling-WIN23.pdf?csf=1&web=1&e=7Y4D91`,
  "MKTG_579_GoToMarket": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG%20579%20Culture%20Driven%20Sales%20and%20Go-To-Market%20Strategy%20Course%20Curriculum%20-%20Spring%202025%20DRAFT.pdf`,
  "MKTG_579_Pricing": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-579-Pricing-WIN23.pdf?csf=1&web=1&e=8Z5E02`,
  "MKTG_579_Sustainable": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-579-Sustainable-WIN23.pdf?csf=1&web=1&e=9a6F13`,
  "MKTG_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  
  "OPMGT_530": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/OPMGT-530-WIN23.pdf?csf=1&web=1&e=0b7G24`,
  "OPMGT_540": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/OPMGT-540-WIN23.pdf?csf=1&web=1&e=1c8H35`,
  "OPMGT_550": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/OPMGT-550-WIN23.pdf?csf=1&web=1&e=2d9I46`,
  "OPMGT_560": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/OPMGT-560-WIN23.pdf?csf=1&web=1&e=3e0J57`,
  "OPMGT_565": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/OPMGT-565-WIN23.pdf?csf=1&web=1&e=4f1K68`,
  "OPMGT_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  
  "QMETH_551": `${SP_BASE}/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/QMETH-551-WIN23.pdf?csf=1&web=1&e=5g2L79`,
  "QMETH_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
};
