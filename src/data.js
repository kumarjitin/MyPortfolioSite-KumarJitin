export const profile = {
  name: "Kumar Jitin",
  title: "Software Engineer",
  email: "mailkumarjitin@gmail.com",
  linkedin: "https://www.linkedin.com/in/kumar-jitin",
  linkedinLabel: "linkedin.com/in/kumar-jitin",
  github: "https://github.com/KumarJitin",
  githubLabel: "github.com/KumarJitin",
  scholar: "https://scholar.google.com/scholar?q=Kumar+Jitin",
  summary:
    "Software Engineer and Computer Science undergraduate skilled in C++, Java, JavaScript, Python, MERN stack, and AI/ML. Experienced in leading full-stack products, real-time geospatial platforms, technical web audits, hackathons, and published machine learning research.",
  devTagline:
    "Software Engineer building full-stack web applications, real-time geospatial systems, and practical AI/ML products.",
  education: {
    degree: "Bachelor of Engineering (B.E.) in Computer Science",
    institution: "Chitkara University",
    duration: "2024–2028",
    cgpa: "8.19 / 10",
  },
  languages: [
    { name: "English", level: "Professional" },
    { name: "Hindi", level: "Native" },
    { name: "Punjabi", level: "Conversational" },
  ],
};

export const skillGroups = [
  {
    category: "Programming",
    items: ["C++", "Java", "JavaScript", "Python"],
    detail: "Core programming languages for data structures, algorithms, backend logic, and machine learning scripts.",
  },
  {
    category: "Web Dev",
    items: ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "Socket.IO"],
    detail: "End-to-end MERN stack development, relational and document databases, RESTful APIs, and real-time sockets.",
  },
  {
    category: "Tools",
    items: ["Git", "Docker", "Linux", "Kubernetes"],
    detail: "Version control, containerization, Unix/Linux workflows, and container orchestration fundamentals.",
  },
  {
    category: "AI & Geospatial",
    items: ["LLM APIs", "OSRM", "H3", "Turf.js", "Jitsi Meet API"],
    detail: "Integrating intelligent LLM workflows, route-aware spatial matching, and live video communication APIs.",
  },
];

export const projects = [
  {
    slug: "neurofied",
    number: "01",
    name: "Neurofied.ai",
    subtitle: "AI-Powered Cognitive Health Assessment Platform",
    type: "HACKATHON PROJECT · 2026",
    roleBadge: "Team Lead",
    summary:
      "We built Neurofied.ai during a hackathon to explore how AI can make cognitive health screening more structured and accessible. I led the team end-to-end — from API design through the React dashboard.",
    highlights: [
      "Led development of an AI-powered cognitive assessment platform with an interactive dashboard for presenting insights.",
      "Built components and integrated LLM APIs, backend services and REST APIs to support assessment workflows.",
    ],
    image: "/images/projects/neurofied.jpg",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "LLM APIs"],
    role: "Team Lead — built frontend components and integrated LLM APIs, backend services, and REST APIs to support assessment workflows.",
    learnings: "Full-stack architecture, LLM API integration, REST API design, and interactive insight dashboards.",
    problem:
      "Cognitive health assessments are often paper-based or hard to access digitally. We wanted to make the process structured, data-driven, and easy to present.",
    result:
      "Shipped a working platform within the hackathon window — React frontend, Node.js/Express APIs, MongoDB, and LLM integration all wired together and presenting real assessment insights.",
    conclusion:
      "Breaking the problem into clean backend services and a focused LLM workflow made the platform readable, not just functional.",
    projectUrl: "https://github.com/KumarJitin",
    files: {
      report: "/documents/projects/neurofied-report.pdf",
      ppt: "/documents/projects/neurofied-ppt.pptx",
      poster: "/documents/projects/neurofied-poster.pdf",
    },
  },
  {
    slug: "quickpull",
    number: "02",
    name: "QuickPull",
    subtitle: "Real-Time Route-Aware Ride-Sharing Platform",
    type: "LIVE PROJECT",
    roleBadge: "Team Lead",
    summary:
      "QuickPull matches riders based on route overlap and compatibility — not just nearest-driver. I led the backend architecture and real-time geospatial matching system.",
    highlights: [
      "Development of a ride-sharing platform focused on matching users based on compatibility and geographical proximity.",
      "Developed backend workflows and real-time communication using Node.js, Express.js and Socket.IO; integrated OSRM, H3 and Turf.js for geospatial operations.",
    ],
    image: "/images/projects/quickpull.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    stack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Socket.IO", "OSRM", "H3", "Turf.js"],
    role: "Team Lead — developed backend workflows and real-time communication with Socket.IO and integrated OSRM, H3, and Turf.js.",
    learnings: "Real-time systems, route-aware matching, geospatial indexing, and low-latency backend design.",
    problem:
      "Most ride-sharing apps match the nearest driver, ignoring whether two people are actually heading the same way. QuickPull was built to fix that.",
    result:
      "Built a live, route-aware matching backend using OSRM routing, H3 spatial indexing, and Socket.IO for real-time updates — with a patent in progress for the community-driven route optimization approach.",
    conclusion:
      "H3 hexagonal indexing + OSRM routing turned out to be a genuinely efficient combo for real-time spatial matching.",
    projectUrl: "https://github.com/KumarJitin",
    files: {
      report: "/documents/projects/quickpull-report.pdf",
      ppt: "/documents/projects/quickpull-ppt.pptx",
      poster: "/documents/projects/quickpull-poster.pdf",
    },
  },
  {
    slug: "skillxchange",
    number: "03",
    name: "SkillXchange",
    subtitle: "Peer-to-Peer Skill Exchange Platform",
    type: "ACADEMIC / LIVE PROJECT",
    roleBadge: "Team Lead",
    summary:
      "Peer-to-peer platform connecting users for skill exchange through skill-matching features and live video sessions.",
    highlights: [
      "Led development of a peer-to-peer platform connecting users for skill exchange through skill-matching features.",
      "Developed backend using Node.js, Express.js and MongoDB, and Jitsi Meet API for real-time video communication.",
    ],
    image: "/images/projects/skillxchange.jpg",
    stack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Jitsi Meet API"],
    role: "Team Lead — led platform development, built the Node.js/Express/MongoDB backend, and integrated Jitsi Meet API.",
    learnings: "Backend architecture, skill-matching logic, authentication, and real-time video API integration.",
    problem:
      "There was no easy way for students to find peers with complementary skills and actually connect for a real exchange — so we built one.",
    result:
      "Delivered a functional skill-matching platform — MongoDB and Express.js on the backend, Jitsi Meet API for live video — letting users teach and learn from each other directly.",
    conclusion:
      "Embedding video directly into the matching flow removed the biggest barrier: having to coordinate meetings separately.",
    projectUrl: "https://github.com/KumarJitin",
    files: {
      report: "/documents/projects/skillxchange-report.pdf",
      ppt: "/documents/projects/skillxchange-ppt.pptx",
      poster: "/documents/projects/skillxchange-poster.pdf",
    },
  },
  {
    slug: "name-ideas",
    number: "04",
    name: "Name Ideas",
    subtitle: "Curated Project & Product Name Concepts",
    type: "CREATIVE EXPLORATION",
    roleBadge: "Creator",
    summary:
      "A growing collection of thoughtful name ideas I\'ve brainstormed for projects, products, and startups — each with a visual and the thinking behind it.",
    highlights: [
      "Brainstormed and curated name concepts across different domains — tech, health, education, travel, and more.",
      "Each idea paired with a visual and a brief rationale explaining the naming direction.",
    ],
    image: "/images/projects/name-ideas.svg",
    stack: ["Branding", "Ideation", "Visual Design"],
    role: "Creator — brainstormed, curated, and documented naming concepts across product and project domains.",
    learnings: "Naming strategy, creative ideation, brand thinking, and visual communication.",
    problem:
      "Good names are hard. They need to be memorable, meaningful, and available — so I started collecting the ones that stuck.",
    result:
      "Built a personal library of name ideas, each documented with its inspiration and a visual — some already used in real projects.",
    conclusion:
      "Thinking about names early forces you to clarify what a product actually stands for — it\'s a design exercise in disguise.",
    projectUrl: null,
    files: {
      report: "/documents/projects/name-ideas-report.pdf",
      ppt: "/documents/projects/name-ideas-ppt.pptx",
      poster: "/documents/projects/name-ideas-poster.pdf",
    },
  },
];

export const internships = [
  {
    slug: "mandafia",
    role: "Web & Digital Strategy Intern",
    organization: "Mandafia Services",
    duration: "2 Months",
    logo: "/images/experience/mandafia-logo.svg",
    companyUrl: "https://www.linkedin.com/in/kumar-jitin",
    aboutCompany:
      "Mandafia Services is a business and digital services organization focused on strengthening its online web presence, brand visibility, and client-facing digital channels.",
    highlights: [
      "Audited the company's website using Google Lighthouse, identifying performance, accessibility, SEO and UI/UX issues; documented findings and prioritised recommendations for the external development agency.",
      "Evaluated website performance (79 Lighthouse score; 830 ms Total Blocking Time) and prepared a detailed technical audit with a remediation roadmap covering JavaScript optimisation, accessibility and website quality.",
      "Consolidated social media channels under a centralised email account and contributed to digital presence and strategies.",
    ],
    metrics: ["79 Lighthouse Score", "830 ms Total Blocking Time", "SEO · A11y · JS Audit"],
  },
];

export const clubs = [
  {
    id: "flareon",
    role: "Vice President & Co-Founder",
    organization: "FlareOn – Student-led Film Making Club",
    duration: "May 2026 – Present",
    detail:
      "Co-founded the club, managed college-level events, and led teams across design, media, marketing and operations.",
    image: "/images/clubs/flareon-logo.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    events: [
      {
        slug: "flareon-orientation",
        title: "FlareOn Club Orientation",
        tag: "CREATIVE INDUCTION",
        cover: "/images/clubs/flareon-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Introduced incoming students to FlareOn's vision across filmmaking, photography, design, and campus storytelling, onboarding new members into creative production teams.",
      },
      {
        slug: "flareon-guess-create-win",
        title: "Guess, Create & Win",
        tag: "INTERACTIVE SHOWCASE",
        cover: "/images/clubs/flareon-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Organized an interactive campus engagement stall and creative challenge combining visual trivia, rapid ideation, and collaborative media activities.",
      },
      {
        slug: "flareon-film-workshop",
        title: "Filmmaking & Editing Workshop",
        tag: "PRODUCTION WORKSHOP",
        cover: "/images/clubs/flareon-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Coordinated a hands-on workshop covering framing, camera movement, visual pacing, and post-production editing workflows for student creators.",
      },
      {
        slug: "flareon-campus-fest-coverage",
        title: "Campus Fest Media Coverage",
        tag: "MEDIA & OPERATIONS",
        cover: "/images/clubs/flareon-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Led multi-team photography, videography, and real-time social media editing crews across flagship campus events and auditorium sessions.",
      },
      {
        slug: "flareon-short-film-screening",
        title: "Short Film & Reel Showcase",
        tag: "CAMPUS SCREENING",
        cover: "/images/clubs/flareon-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Managed end-to-end event logistics, curation, and stage showcase for student-directed short films and digital storytelling reels.",
      },
    ],
  },
  {
    id: "drr",
    role: "Core Team Member",
    organization: "Disaster Risk Reduction Club",
    duration: "August 2026 – Present",
    detail:
      "Coordinated college-level initiatives and events, collaborating with senior faculty, college officials and student teams.",
    image: "/images/clubs/drr-logo.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    events: [
      {
        slug: "drr-awareness-drive",
        title: "Campus Disaster Awareness Drive",
        tag: "PREPARE · PROTECT · RESPOND",
        cover: "/images/clubs/drr-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Coordinated an awareness campaign focused on everyday preparedness, safety protocols, and SDG 11 resilient campus communities.",
      },
      {
        slug: "drr-safety-workshop",
        title: "Emergency Response Workshop",
        tag: "SAFETY TRAINING",
        cover: "/images/clubs/drr-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Collaborated with faculty and safety leads to organize practical response briefings and first-aid coordination sessions for students.",
      },
      {
        slug: "drr-mock-drill",
        title: "Campus Mock Drill & Evacuation",
        tag: "FIELD COORDINATION",
        cover: "/images/clubs/drr-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Assisted senior officials and volunteer teams in planning and coordinating structured campus evacuation and safety readiness drills.",
      },
      {
        slug: "drr-sustainable-cities",
        title: "Sustainable Communities Seminar",
        tag: "SDG 11 INITIATIVE",
        cover: "/images/clubs/drr-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Helped organize faculty-student seminar discussions around urban resilience, climate preparedness, and sustainable community design.",
      },
      {
        slug: "drr-community-outreach",
        title: "DRR Community Outreach",
        tag: "SOCIAL IMPACT",
        cover: "/images/clubs/drr-logo.jpg",
        imageFit: "contain",
        imageBg: "#ffffff",
        about:
          "Coordinated outreach activities connecting student volunteers with community resilience and risk-reduction awareness programs.",
      },
    ],
  },
];

export const allClubEvents = clubs.flatMap((club) =>
  club.events.map((ev) => ({
    ...ev,
    clubName: club.organization,
    clubRole: club.role,
    clubDuration: club.duration,
  }))
);

export const publications = {
  papers: [
    {
      title: "Artificial Intelligence in Neurodegenerative Disorders",
      venue: "IATMSI 2025",
      status: "Published",
      kind: "RESEARCH PAPER",
      description:
        "Published at IATMSI 2025 — this paper looks at how AI techniques are being applied to understand and work with neurodegenerative disorders. It was my first academic publication and pushed me to read a lot of medical ML literature.",
      image: "/images/research/brain-neuro.svg",
      url: "https://scholar.google.com/scholar?q=Artificial+Intelligence+in+Neurodegenerative+Disorders+Kumar+Jitin",
    },
    {
      title: "Flood Prediction Using Lightweight Machine Learning Models",
      venue: "ICCPCT 2026",
      status: "Published",
      kind: "RESEARCH PAPER",
      description:
        "Published at ICCPCT 2026 — we evaluated how well lightweight ML models perform for flood prediction, with a focus on making these systems practical in resource-constrained environments.",
      image: "/images/research/flood-ml.svg",
      url: "https://scholar.google.com/scholar?q=Flood+Prediction+Using+Lightweight+Machine+Learning+Models+Kumar+Jitin",
    },
    {
      title: "Explainable XGBoost Framework for Alzheimer’s Disease Classification",
      venue: "Journal Publication",
      status: "In Process",
      kind: "RESEARCH PAPER",
      description:
        "Explainable machine learning framework applying XGBoost for interpretable Alzheimer’s disease classification.",
      image: "/images/research/alzheimers-xai.svg",
      url: "https://scholar.google.com/scholar?q=Explainable+XGBoost+Framework+for+Alzheimers+Disease+Classification+Kumar+Jitin",
    },
  ],
  patent: {
    title: "QuickPull – Community-Driven Route Optimization System",
    kind: "PATENT",
    status: "In Progress",
    description:
      "Patent application in progress for the route-aware community matching system I built in QuickPull — covering the core approach to spatial compatibility scoring and dynamic ride aggregation.",
    image: "/images/projects/quickpull.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    url: "/projects/quickpull",
  },
  bookChapters: [
    {
      title: "Frustration Detection on Code-Related Platforms Using Machine Learning",
      venue: "Com-IT-Con 2025",
      status: "Published",
      kind: "BOOK CHAPTER",
      url: "https://scholar.google.com/scholar?q=Frustration+Detection+on+Code+Related+Platforms+Kumar+Jitin",
    },
    {
      title: "Explainable Artificial Intelligence for Trustworthy Intrusion Detection Systems",
      venue: "Intelligent Computing in Cybersecurity",
      status: "Under Review",
      kind: "BOOK CHAPTER",
      url: "https://scholar.google.com/scholar?q=Explainable+Artificial+Intelligence+for+Trustworthy+Intrusion+Detection+Systems+Kumar+Jitin",
    },
  ],
};

export const achievements = [
  {
    title: "Round 2 Qualifier | Adobe University Hackathon 2026",
    detail: "Cleared Round 1 (MCQs + Coding) and advanced.",
  },
  {
    title: "Top 15 Finalist | HackIndia Spark 7, 2026",
    detail: "Developed Roam.ai, among 200+ participating teams.",
  },
  {
    title: "National Science Olympiad – Silver Medalist",
    detail: "Secured a Silver Medal for three consecutive years at school level.",
  },
];

export const certifications = [
  {
    title: "The Rudiments of Artificial Intelligence, ChatGPT, DeepSeek, and Metaverse",
    date: "2025",
  },
  {
    title: "Software Engineering Fundamentals – Software Development and Testing",
    date: "20 March 2026",
  },
  {
    title: "Node.js Content Completion",
    date: "03 April 2026",
  },
  {
    title: "Database Management System – Part 1",
    date: "07 November 2025",
  },
];

export const appreciations = [
  {
    id: "01",
    title: "AI, ChatGPT, DeepSeek & Metaverse Masterclass — 100/100 Distinction",
    subtitle: "Chitkara University · Chancellor's Masterclass",
    about:
      "Recognized for securing a 100/100 score in the formal examination of the three-day masterclass conducted under the guidance of Dr. Ashok K. Chitkara, Chancellor.",
  },
  {
    id: "02",
    title: "HackIndia Spark 7 — Top 15 Finalist Recognition",
    subtitle: "National Hackathon · 200+ Participating Teams",
    about:
      "Appreciated for building and pitching Roam.ai, an AI-powered travel itinerary platform that placed among the Top 15 Finalists out of more than 200 teams.",
  },
  {
    id: "03",
    title: "IEEE & Conference Authorship Acknowledgements",
    subtitle: "IATMSI 2025 · ICCPCT 2026 · Com-IT-Con 2025",
    about:
      "Certificates of authorship and participation for peer-reviewed research papers and book chapters covering neurodegenerative AI, flood prediction, and ML emotion detection.",
  },
  {
    id: "04",
    title: "Mandafia Services — Technical Audit & Digital Strategy",
    subtitle: "Internship Appreciation · 2 Months",
    about:
      "Delivered a prioritized Google Lighthouse technical remediation roadmap (79 score, 830 ms TBT) and centralized digital presence channels for agency execution.",
  },
  {
    id: "05",
    title: "Campus Leadership & Event Coordination",
    subtitle: "FlareOn Club · Disaster Risk Reduction Club · NSS",
    about:
      "Acknowledged by faculty coordinators and student teams for co-founding FlareOn, organizing campus-wide media initiatives, and coordinating DRR safety drives.",
  },
];

export const gpsMilestones = [
  {
    stop: "WAYPOINT 01",
    title: "Defence Background & Early Discipline",
    meta: "FOUNDATION · SCHOOLING & NSO SILVER MEDALIST",
    detail:
      "Shaped by a defence background and three consecutive National Science Olympiad Silver Medals, building curiosity, structure, and resilience early on.",
  },
  {
    stop: "WAYPOINT 02",
    title: "Chitkara University — B.E. Computer Science",
    meta: "2024 – 2028 · CGPA 8.19 / 10",
    detail:
      "Strengthening core foundations in C++, Java, JavaScript, Python, data structures, databases, operating systems, and software engineering.",
  },
  {
    stop: "WAYPOINT 03",
    title: "Full-Stack & Real-Time Systems",
    meta: "NEUROFIED.AI · QUICKPULL · SKILLXCHANGE",
    detail:
      "Led teams building MERN applications, LLM assessment workflows, Socket.IO real-time communication, and geospatial matching with OSRM, H3, and Turf.js.",
  },
  {
    stop: "WAYPOINT 04",
    title: "Research, Book Chapters & Patent",
    meta: "IATMSI 2025 · ICCPCT 2026 · COM-IT-CON 2025",
    detail:
      "Published peer-reviewed machine learning papers and book chapters alongside a patent filing for the QuickPull route optimization system.",
  },
  {
    stop: "WAYPOINT 05",
    title: "Mandafia Services & Hackathons",
    meta: "INTERNSHIP · ADOBE ROUND 2 · HACKINDIA TOP 15",
    detail:
      "Completed a 2-month Web & Digital Strategy internship focused on Lighthouse performance audits while competing in 7+ national hackathons.",
  },
  {
    stop: "DESTINATION",
    title: "Campus Leadership & Software Engineering Ahead",
    meta: "FLAREON · DRR CLUB · IEEE · RED HAT",
    detail:
      "Co-founded FlareOn, coordinated Disaster Risk Reduction initiatives, and continue growing as a Software Engineer building impactful systems.",
  },
];

export const extracurriculars = [
  {
    title: "IEEE Student Member",
    detail: "Engaged with technical resources and research activities in AI and software engineering.",
  },
  {
    title: "Red Hat Community Member",
    detail: "Engaged with open-source technologies and developer community activities.",
  },
  {
    title: "NSS Volunteer",
    detail: "Participated in community service and social activities.",
  },
  {
    title: "Design & Creative Work",
    detail: "Worked in Canva, photography, videography, video editing, and digital content creation.",
  },
];

export const personalStoryParagraphs = [
  {
    title: "Early Life",
    image: null,
    imageAlt: "",
    pullQuote: "Discipline isn\'t about rules — it\'s about being someone others can count on.",
    text: "Growing up in a defence household meant moving cities every few years, adapting fast, and learning that reliability matters more than comfort. That upbringing gave me a certain groundedness — the kind that makes it easier to stay calm under a deadline, take ownership of a problem, or lead a team through something unfamiliar. I carry that sensibility into my work every day.",
  },
  {
    title: "Swimming & Cricket",
    image: null,
    imageAlt: "",
    pullQuote: "Some of my clearest thinking happens in the water.",
    text: "Outside of coding, swimming and cricket are where I actually decompress. Swimming gives me solitude and rhythm — a full reset after a heavy debugging session. Cricket, on the other hand, is entirely about reading the game together, covering for each other, and staying composed when things don\'t go your way. Both have shaped how I think about teamwork and pressure.",
  },
  {
    title: "Design & Visual Storytelling",
    image: null,
    imageAlt: "",
    pullQuote: "Good design isn\'t decoration — it\'s the difference between being understood and being ignored.",
    text: "Long before I could write production-ready code, I was experimenting with Canva, photography, and video editing. I\'ve designed event posters for FlareOn, crafted research presentation visuals, and built UI mockups for projects before writing a single line of frontend code. That design instinct — caring about how something feels, not just how it works — has become one of the more useful things I bring to a team.",
  },
];

export const nameIdeas = [
  {
    name: "Neurofied",
    tagline: "Where cognition meets code.",
    domain: "Health × AI",
    image: "/images/projects/neurofied.jpg",
    note: "Coined for our cognitive health platform — 'Neuro' for the brain, 'fied' as in amplified or codified. Short, punchy, and immediately signals AI + neuroscience.",
  },
  {
    name: "QuickPull",
    tagline: "Rides that think ahead.",
    domain: "Mobility × Geospatial",
    image: "/images/projects/quickpull.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    note: "Named for the idea of quickly pulling riders into a matched route — fast, action-oriented, and easy to remember. The 'pull' suggests magnetic matching.",
  },
  {
    name: "SkillXchange",
    tagline: "Learn what you need. Teach what you know.",
    domain: "Education × P2P",
    image: "/images/projects/skillxchange.jpg",
    note: "The 'X' replaces 'exchange' visually while keeping the meaning clear — peer-to-peer skill sharing where everyone is both a learner and a teacher.",
  },
  {
    name: "FlareOn",
    tagline: "Ignite your creative spark.",
    domain: "Media × Community",
    image: "/images/clubs/flareon-logo.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    note: "A flare that stays on — continuous creative energy. Perfect for a filmmaking and media club that keeps producing content around campus.",
  },
  {
    name: "Roam.ai",
    tagline: "Let AI plan the journey.",
    domain: "Travel × AI",
    image: "/images/projects/roam-ai.svg",
    note: "Roaming + AI — the name instantly communicates travel and intelligence. The '.ai' domain suffix doubles as a feature description.",
  },
  {
    name: "CodePulse",
    tagline: "Feel the rhythm of your code.",
    domain: "DevTools",
    image: "/images/projects/name-ideas.svg",
    note: "A concept for a developer productivity tool — 'pulse' suggests real-time feedback and a living, breathing development environment.",
  },
];

export const journeyStories = [
  ["01", "Projects", "Neurofied.ai, QuickPull, SkillXchange & Roam.ai built across hackathons and live deployments.", "PROJECTS", "/images/projects/neurofied.jpg", "/projects"],
  ["02", "Research", "Published machine learning papers, book chapters, and ongoing Alzheimer's research.", "PUBLICATIONS", "/images/research/brain-neuro.svg", "/research"],
  ["03", "Competitions", "Adobe University Hackathon Round 2 Qualifier, CodeWars 6.0 & Olympiad medals.", "DSA & COMPETITIONS", "/images/journey/codewars.webp", "/experience#achievements"],
  ["04", "Hackathons", "7+ national hackathons including Top 15 Finalist at HackIndia Spark 7 among 200+ teams.", "BUILDING", "/images/journey/hackindia.webp", "/experience#achievements"],
  ["05", "Societies", "Vice President & Co-Founder of FlareOn and Core Team Member at Disaster Risk Reduction Club.", "CLUBS & COMMUNITY", "/images/clubs/flareon-logo.jpg", "/experience#clubs"],
  ["06", "Patent", "QuickPull — Community-Driven Route Optimization System intellectual property filing.", "INNOVATION", "/images/projects/quickpull.jpg", "/research#patent"],
  ["07", "AI Summit", "Attended India AI Impact Summit 2026 at Bharat Mandapam, New Delhi.", "CONFERENCES", "/images/journey/ai-summit.webp", "/about#story"],
  ["08", "Seminars", "Campus panels, technical masterclasses, IEEE & Red Hat developer communities.", "LEARNING", "/images/journey/campus-events.webp", "/about#extracurriculars"],
  ["09", "Appreciations", "Academic recognitions, 100/100 AI masterclass distinction, and verified certifications.", "MILESTONES", "/images/journey/achievements.webp", "/about#certifications"],
];

export const homeHighlights = [
  { n: "01", title: "Projects", metric: "4+", metricLabel: "MERN stack projects", detail: "Neurofied.ai, QuickPull, SkillXchange & Name Ideas.", href: "/projects", tag: "NOTABLE WORK" },
  { n: "02", title: "Experience", metric: "02", metricLabel: "Campus clubs", detail: "Mandafia Services, FlareOn & DRR Club events.", href: "/experience", tag: "WORK & LEADERSHIP" },
  { n: "03", title: "Research & IP", metric: "4", metricLabel: "Published research works", detail: "Published papers, book chapters & QuickPull patent.", href: "/research", tag: "PUBLICATIONS" },
  { n: "04", title: "Certificates", metric: "4", metricLabel: "Certifications", detail: "Verified certifications, credentials & about story.", href: "/about#certifications", tag: "CERTIFICATIONS & ABOUT" },
  { n: "05", title: "LeetCode", metric: "100+", metricLabel: "DSA questions", detail: "DSA problem-solving practice in C++ and Java.", href: "https://leetcode.com/u/KumarJitin/", tag: "COMPETITIVE CODING", external: true },
];

export const homeSocials = [
  ["LinkedIn", "Professional updates, internship & research milestones.", profile.linkedin, profile.linkedinLabel],
  ["GitHub", "Source code, full-stack builds & open-source work.", profile.github, profile.githubLabel],
  ["Google Scholar", "Published papers, book chapters & research profile.", profile.scholar, "scholar.google.com"],
];
