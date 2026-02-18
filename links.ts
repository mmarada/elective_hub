
// Centralized storage for all course document links (Syllabi, Flyers, Applications)
// Keys are either SLN (for specific scheduled sections) or descriptive IDs (for catalog entries)

export const COURSE_LINKS: Record<string, string> = {
  // --- Spring 2026 Scheduled Courses (Key = SLN) ---
  // ACCTG 579 - Sustainability Reporting
  "10151": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/Acctg20579%20Flyer%20Spring%202026.pdf?csf=1&web=1&e=ZftjJu",
  // MKTG 511 - B2B
  "17122": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Mktg-511A-Sp22-Syllabus.pdf",
  // BECON 526 - Global Economy
  "10847": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON-526-Syllabus-Spring2023.pdf?csf=1&web=1&e=Ou34JD",
  // MGMT 547 - Negotiations
  "17050": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-547-Wi-23-SYLLABUSEVE.pdf?csf=1&web=1&e=Oeskcc",
  // MKTG 535 - Analytics Lab
  "17124": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20535%20ACL%20Walker%20Spring%202026.pdf?csf=1&web=1&e=AGf3de",
  // MGMT 509 - Global Strategy
  "17044": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-509-SPR22.pdf?csf=1&web=1&e=iWQ1kf",
  // MKTG 568 - Pricing
  "17132": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-568-Section-AB-SYLLABUSSPR2022.pdf",
  // FIN 579 - International Finance
  "14536": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-IBC-WIN21.pdf?csf=1&web=1&e=8FnDvG",
  // MKTG 560 - Consumer Insights
  "17128": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-560-Syllabus.pdf",
  // ACCTG 510 - Financial Statement Analysis
  "10140": "https://uwnetid.sharepoint.com/:b:/r/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/ACCTG510_SPR2025.pdf?csf=1&web=1&e=u1NLpa",
  // ENTRE/FIN 557 - Entrepreneurial Finance
  "14065": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE.FIN-557-syllabusSPR2023.pdf?csf=1&web=1&e=YQXvfM",
  // FIN 579 - Climate Risk
  "21090": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/FIN%20579%20-%20Climate%20Risk%20%26%20InnovationSpring26.png?csf=1&web=1&e=rGZJ5U",
  // MGMT 545 - High Performance Org
  "17048": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT545Fall-2021SyllabusElijah-Wee.pdf?csf=1&web=1&e=nuIW0T",
  // IBUS 500 - Global Business Forum
  "15172": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/IBUS%20500%202025-26.pdf?csf=1&web=1&e=ifaMWE",
  // MGMT 550 - CEO & Board
  "17053": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MGMT%20550%20-%20Course%20Flyer.pdf",
  // FIN 579 - Endowment
  "14534": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Institutional-Investment-SPR22.pdf?csf=1&web=1&e=S2znnM",
  // ENTRE 579 - Biomedical
  "14074": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Biomedical-Entreprenuership-AUT15.pdf",
  // ENTRE 579 - Pitch
  "14072": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Entrepreneurial-Influece-and-the-Pitch.pdf?csf=1&web=1&e=Uyl3f0",
  // MGMT 509 - Global Strategy (Duplicate)
  "17046": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-509-SPR22.pdf?csf=1&web=1&e=iWQ1kf",
  // MKTG 556 - Advertising
  "17126": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-556-SPR21.pdf",
  // BECON 546 - Game Theory
  "10849": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON%20546.pdf",
  // ENTRE/FIN 557 (Duplicate)
  "14067": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE.FIN-557-syllabusSPR2023.pdf?csf=1&web=1&e=YQXvfM",
  // FIN 566 - Alternative Investments
  "14531": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-566CD-Syllabus-EVEWIN2023.pdf?csf=1&web=1&e=9dfksA",
  // MGMT 575 - Women in Leadership
  "17055": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MGMT%20575%20syllabus%202025.pdf?csf=1&web=1&e=aF3TrM",
  // MKTG 579 - Go To Market
  "17135": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG%20579%20Culture%20Driven%20Sales%20and%20Go-To-Market%20Strategy%20Course%20Curriculum%20-%20Spring%202025%20DRAFT.pdf",
  // MKTG 565 - LLMs
  "21305": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20565%20Flyer.pdf",
  // ENTRE 509 - Foundations
  "14057": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-509-AUT21.pdf?csf=1&web=1&e=xfchJ7",
  // ENTRE 541 - Tech Commercialization
  "14061": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-541-Syllabus-Winter-2023.pdf?csf=1&web=1&e=Qb3ibk",
  // FIN 560 - Investments
  "14529": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/SyllabusFIN5602022Spring.pdf?csf=1&web=1&e=UaQAaD",
  // MGMT 579 - Innovation Strategy
  "17057": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/2026%20Spring%20579%20SyllabusBoeker.pdf?csf=1&web=1&e=v1C48X",
  // ENTRE 579 - Angel Investing
  "00000": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Angel-Investing.pdf?csf=1&web=1&e=PeqVFk",

  // --- Winter 2026 Scheduled Courses (Key = SLN) ---
  "11002": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Syllabus-553.pdf?csf=1&web=1&e=NZg0kq",
  "11003": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20552AUT2024.pdf?csf=1&web=1&e=sGpO1n",
  "11004": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Syllabus-550.pdf",
  "11007": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-510-SyllabusWIN2023.pdf?csf=1&web=1&e=fcE4yl",

  // --- Autumn 2025 Scheduled Courses (Key = SLN) ---
  "12005": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-509-AUT21.pdf?csf=1&web=1&e=xfchJ7",

  // --- Catalog / Unscheduled Courses (Key = Descriptive ID) ---
  "ACCTG_510": "https://uwnetid.sharepoint.com/:b:/r/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/ACCTG510_SPR2025.pdf?csf=1&web=1&e=u1NLpa",
  "ACCTG_579_Alphanomics": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/ACCT579AlphanomicsSPR2025.pdf?csf=1&web=1&e=No2Mft",
  "ACCTG_579_Sustainability": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/Acctg20579%20Flyer%20Spring%202026.pdf?csf=1&web=1&e=ZftjJu",
  "ACCTG_579_Race": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ACCTG-579Race-Cultura-Business-WIN2023-Class-Syllabus.pdf?csf=1&web=1&e=o5SfYt",
  "ACCTG_600": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MBA-Independent-Study-Guide%20ACCTG%20600-%20Independent%20Study.pdf?csf=1&web=1&e=Kzy6KG",
  "BA_560": "", 
  "BA_578": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BA-578-Impact-Investing-AUT21-Flyer.pdf?csf=1&web=1&e=XacBKq",
  "BCMU_509": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BCMU-509SPR2023EVE.pdf?csf=1&web=1&e=klH9DR",
  "BCMU_579_TED": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BCMU-579-Spring-2023-EVE.pdf?csf=1&web=1&e=9n2jKN",
  "BCMU_579_Interrupting": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BCMU-579-Flyer-Spring-2024.pdf?csf=1&web=1&e=OhOiPF",
  "BCMU_600": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MBA-Independent-Study-Guide.pdf?csf=1&web=1&e=S9OrOB",
  "BECON_526": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON-526-Syllabus-Spring2023.pdf?csf=1&web=1&e=Ou34JD",
  "BECON_546": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON%20546.pdf",
  "BECON_560": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/BECON-560-AUT20.pdf",
  "BECON_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  "ENTRE_509": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-509-AUT21.pdf?csf=1&web=1&e=xfchJ7",
  "ENTRE_510": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-510-SyllabusWIN2023.pdf?csf=1&web=1&e=fcE4yl",
  "ENTRE_522": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-MGMT-522-SPR22-Flyer.pdf?csf=1&web=1&e=zUGdTM",
  "ENTRE_532": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-532-WIN21.pdf?csf=1&web=1&e=hBwcYZ",
  "ENTRE_540": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/ENTRE%20540WIN2025.pdf?csf=1&web=1&e=p9jID4",
  "ENTRE_541": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-541-Syllabus-Winter-2023.pdf?csf=1&web=1&e=Qb3ibk",
  "ENTRE_542": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-542-syllabusAUT-2022.pdf?csf=1&web=1&e=tgDkf9",
  "ENTRE_543": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/",
  "ENTRE_545": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-545-AUT21.pdf?csf=1&web=1&e=TZccj0",
  "ENTRE_555": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTREMKTG-555-Fall-2022.pdf?csf=1&web=1&e=MOkQaz",
  "ENTRE_557": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE.FIN-557-syllabusSPR2023.pdf?csf=1&web=1&e=YQXvfM",
  "ENTRE_579_Angel": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Angel-Investing.pdf?csf=1&web=1&e=PeqVFk",
  "ENTRE_579_Biomedical": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Biomedical-Entreprenuership-AUT15.pdf",
  "ENTRE_579_CDL": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/CDL%20Course%20Info%2026%20Application%2025-26.docx.pdf?csf=1&web=1&e=eAe83D",
  "ENTRE_579_Pitch": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Entrepreneurial-Influece-and-the-Pitch.pdf?csf=1&web=1&e=Uyl3f0",
  "ENTRE_579_Grand": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/Grand%20Challenges%20Flyer%20rev.pdf?csf=1&web=1&e=f1uQRe",
  "ENTRE_579_Influencer": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-MKTG-579-Influencer-Marketing-WIN21.pdf?csf=1&web=1&e=J1bsRy",
  "ENTRE_579_Intrapreneurship": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/ENTRE%20579IntrapreneurshipSPR2025.pdf?csf=1&web=1&e=wRpi2I",
  "ENTRE_579_Women": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/ENTRE-579-Women-in-Entrepreneurial-LeadershipAUT-2022.pdf?csf=1&web=1&e=1Bd2k1",
  "ENTRE_600": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MBA-Independent-Study-Guide.pdf?csf=1&web=1&e=HSIuag",
  "FIN_530": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/FIN530Flyer.pdf?csf=1&web=1&e=Ox1F04",
  "FIN_551": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/FIN%20551AUT2024.pdf?csf=1&web=1&e=syn2lE",
  "FIN_553": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Syllabus-553.pdf?csf=1&web=1&e=NZg0kq",
  "FIN_558": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-558Winter-2023.pdf?csf=1&web=1&e=GVYAPi",
  "FIN_560": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/SyllabusFIN5602022Spring.pdf?csf=1&web=1&e=UaQAaD",
  "FIN_561": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-561-WIN21.pdf?csf=1&web=1&e=laAjET",
  "FIN_566": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-566CD-Syllabus-EVEWIN2023.pdf?csf=1&web=1&e=9dfksA",
  "FIN_579_AI": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/AI%20in%20Business%20Flyer%20Winter%202026.pdf?csf=1&web=1&e=yqTqGg",
  "FIN_579_Asian": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/FIN%20579ACMWIN2024.pdf?csf=1&web=1&e=WfrG4H",
  "FIN_579_Behavioral": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Course%20Flyer%20for%20Behavioral%20Finance.pdf?csf=1&web=1&e=diwOhe",
  "FIN_579_Climate": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/FIN%20579%20-%20Climate%20Risk%20%26%20InnovationSpring26.png?csf=1&web=1&e=rGZJ5U",
  "FIN_579_Institutional": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Institutional-Investment-SPR22.pdf?csf=1&web=1&e=S2znnM",
  "FIN_579_Compliance": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-IBC-WIN21.pdf?csf=1&web=1&e=8FnDvG",
  "FIN_579_IntlFinance": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-IBC-WIN21.pdf?csf=1&web=1&e=8FnDvG",
  "FIN_579_RealEstate": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Syllabus-WI-24Real-EstateSeslen.pdf",
  "FIN_579_ML": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Data-analytics-and-machine-learning-in-BusinessSPR2022.pdf?csf=1&web=1&e=c7jMQi",
  "FIN_579_Access": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/FIN-579-Power-of-AccessWIN2022.pdf?csf=1&web=1&e=orlwRM",
  "FIN_600": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MBA-Independent-Study-Guide.pdf?csf=1&web=1&e=saLZQl",
  "IBUS_500": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/IBUS%20500%202025-26.pdf?csf=1&web=1&e=ifaMWE",
  "IBUS_570": "https://foster.uw.edu/centers/gbc/mba-programs/short-term-programs-abroad/Study",
  "IBUS_579": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/IBUS-579-GCP-SPR21.pdf?csf=1&web=1&e=lIFVGQ",
  "IBUS_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  "MGMT_509": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-509-SPR22.pdf?csf=1&web=1&e=iWQ1kf",
  "MGMT_545": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT545Fall-2021SyllabusElijah-Wee.pdf?csf=1&web=1&e=nuIW0T",
  "MGMT_547": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-547-Wi-23-SYLLABUSEVE.pdf?csf=1&web=1&e=Oeskcc",
  "MGMT_548": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MGMT548WIN25.pdf?csf=1&web=1&e=A0AjMI",
  "MGMT_550": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MGMT%20550%20-%20Course%20Flyer.pdf",
  "MGMT_555": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-555-2021-22.pdf?csf=1&web=1&e=HwP2FD",
  "MGMT_575": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MGMT%20575%20syllabus%202025.pdf?csf=1&web=1&e=aF3TrM",
  "MGMT_579_Equity": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT%20579%20Flyer.pdf?csf=1&web=1&e=dnx4Ug",
  "MGMT_579_Growth": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Corporate-Strategies-SUM21-Flyer.pdf",
  "MGMT_579_Social": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579WagleSPR-2024.pdf",
  "MGMT_579_Human": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/Barnes%20Human%20Sustainability%20Winter%202026%20syllabus.pdf",
  "MGMT_579_Innovation": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/2026%20Spring%20579%20SyllabusBoeker.pdf?csf=1&web=1&e=v1C48X",
  "MGMT_579_Cultures": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Leading-Across-Cultures-SPR21.pdf",
  "MGMT_579_Mindful": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-Mindful-Decision-MakingWIN2023.pdf",
  "MGMT_579_ESG": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT-579-ESG-in-Business-WIN24-Flyer.pdf",
  "MGMT_579_Power": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MGMT579Summer2024SyllabusElijah-Wee.pdf",
  "MGMT_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  "MKTG_511": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Mktg-511A-Sp22-Syllabus.pdf",
  "MKTG_535": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20535%20ACL%20Walker%20Spring%202026.pdf?csf=1&web=1&e=AGf3de",
  "MKTG_552": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20552AUT2024.pdf?csf=1&web=1&e=sGpO1n",
  "MKTG_554": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20554AUT2025.pdf?csf=1&web=1&e=9lcYd6",
  "MKTG_556": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-556-SPR21.pdf",
  "MKTG_560": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-560-Syllabus.pdf",
  "MKTG_562": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-562-Flyerupdated.pdf",
  "MKTG_564": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-564-Analytics-Marketing-Decisions.pdf",
  "MKTG_565": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20565%20Flyer.pdf",
  "MKTG_566": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20566SPR2025.pdf?csf=1&web=1&e=ezg9oK",
  "MKTG_568": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG-568-Section-AB-SYLLABUSSPR2022.pdf",
  "MKTG_579_GoToMarket": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/MKTG%20579%20Culture%20Driven%20Sales%20and%20Go-To-Market%20Strategy%20Course%20Curriculum%20-%20Spring%202025%20DRAFT.pdf",
  "MKTG_579_Pricing": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MKTG%20579%20Pricing%20Principles%20and%20Strategies.pdf?csf=1&web=1&e=4XRmJO",
  "MKTG_579_Sustainable": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/IBUS.MKTG-579The-Sustainable-Company.pdf",
  "MKTG_600": "https://foster.uw.edu/academics/degree-programs/evening-mba/current-evening-mba-students/independent-study",
  "OPMGT_530": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/2024-Enterprise-Risk-Management-041224.pdf",
  "OPMGT_540": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/OPMGT-540-AUT21.pdf",
  "OPMGT_550": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/Syllabus-550.pdf",
  "OPMGT_560": "https://uwnetid.sharepoint.com/sites/foster_mba_students/Shared%20Documents/Syllabi-%20Electives/MNKTG-560-Course-FlyerSPR-2024.pdf",
  "OPMGT_565": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/OPMGT-565-dayAUT-2022.pdf",
  "OPMGT_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  "QMETH_551": "https://uwnetid.sharepoint.com/sites/foster_mba_students/MBA%20Core%20Course%20Syllabi/MBA%20Elective%20Course%20Syllabi/QMETH-551.pdf",
  "QMETH_600": "https://foster.uw.edu/academics/degree-programs/full-time-mba/current-students/academics/independent-study",
  
  // Extra mapping placeholders
  "MKTG_579_Storytelling": "/flyers/MKTG_579_Strategic_Storytelling.pdf", 
  "MKTG_579_Consultative": "/syllabi/MKTG_579_Consultative_Selling.pdf",
};
