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
      "Full-stack cognitive wellness app combining interactive activities, personal progress tracking and AI-powered assistance. Built during a hackathon.",
    storyIntro:
      "Neurofied was an opportunity to explore full-stack development through a product that combines interactive experiences, personal progress tracking and AI-powered assistance. The challenge was to bring multiple functionalities into one cohesive application while maintaining a smooth, accessible and responsive user experience. Rather than building a collection of disconnected features, the focus was on creating an application where users could interact with cognitive activities, review their progress and explore relevant wellness resources.",
    highlights: [
      "Worked with React to structure the frontend into reusable components and application pages.",
      "Developed interactive user experiences for cognitive activities involving memory, attention and reaction time.",
      "Worked with backend APIs to connect frontend functionality with server-side operations.",
      "Explored MongoDB and Mongoose for managing user information and assessment-related records.",
      "Implemented authentication workflows using JWT and backend-supported account management.",
      "Integrated dashboard visualizations to make assessment results and progress easier to understand.",
      "Explored AI integration through Gemini-powered assistance and reflective chat experiences.",
      "Focused on responsive layouts, application navigation and consistency across different screen sizes.",
    ],
    outcomes: [
      "Developed a full-stack application with separate React frontend and Express backend.",
      "Integrated multiple cognitive activities covering 3 areas: memory, attention and reaction time.",
      "Built a personal dashboard for reviewing assessment history and progress.",
      "Combined authentication, data persistence, learning resources and AI-assisted interactions in one application.",
      "Prepared the application for deployment using a separate frontend and backend architecture.",
    ],
    image: "/images/projects/neurofied.jpg",
    stack: ["React 18", "Vite", "JavaScript", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Recharts", "Gemini API"],
    role: "Team Lead — led frontend architecture, integrated LLM APIs, connected React with Node.js/Express REST APIs, and built assessment dashboards.",
    learnings: "Moving from understanding individual technologies to thinking about how an entire application works as a connected system — React, Node.js, Express, MongoDB, auth, API integration and application architecture.",
    problem:
      "Cognitive health assessments are often paper-based or hard to access digitally. We wanted to make the process structured, data-driven, and easy to present.",
    result:
      "Shipped a working platform within the hackathon window — React frontend, Node.js/Express APIs, MongoDB, and LLM integration all wired together and presenting real assessment insights.",
    conclusion:
      "Neurofied helped me understand the importance of building features that work together rather than focusing only on their individual implementation.",
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
      "Route-aware ride-sharing platform that matches riders based on route overlap and geospatial compatibility — not just nearest-driver proximity.",
    storyIntro:
      "QuickPull was one of the most challenging projects I've worked on because it pushed me beyond conventional web development into real-time systems, geospatial engineering and machine learning. The journey started with a simple observation: many vehicles travel with empty seats while people around them are heading in similar directions. We explored how technology could make those journeys more connected. Working alongside my teammates, I contributed to building a route-aware ride-sharing platform, exploring how location data, backend services and intelligent matching could work together.",
    highlights: [
      "Collaborated on researching the problem space, exploring existing mobility solutions and evaluating technical approaches.",
      "Contributed to application development and the integration of different system components.",
      "Explored geospatial technologies and their role in solving route compatibility challenges.",
      "Worked through complex integration and debugging phases involving real-time communication, backend logic and machine learning components.",
      "Participated in technical discussions evaluating trade-offs between implementation complexity, accuracy and user experience.",
      "Helped shape the project beyond its initial software scope by exploring a future wearable-based interaction concept.",
    ],
    outcomes: [
      "Developed a route-matching engine with geographical filtering and route validation.",
      "Implemented the foundation for live driver tracking and dynamic ride discovery.",
      "Verified 3 core route-matching scenarios — compatible routes, reverse-direction journeys and incompatible routes.",
      "Achieved 10/10 passing reference tests for the existing ETA prediction implementation.",
      "Presented the project at ExploriHibit 2026, Chitkara University's emerging technology exhibition.",
    ],
    image: "/images/projects/quickpull.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    stack: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Python", "FastAPI", "LightGBM", "H3", "Turf.js", "OSRM", "Leaflet"],
    role: "Team Lead — developed backend workflows, real-time communication with Socket.IO, and integrated OSRM, H3, and Turf.js for geospatial operations.",
    learnings: "Backend architecture, API integration, real-time communication, geospatial problem-solving and collaborative software development. Building a complex product isn't just about writing code — it involves researching unfamiliar technologies and making decisions when implementation doesn't behave as expected.",
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
      "Peer-to-peer learning platform where people exchange knowledge, discover learning partners and grow through collaborative sessions — built as team lead.",
    storyIntro:
      "SkillXchange was an important milestone in my development journey, not just because of the application we built, but because it gave me an opportunity to experience software development from a team leadership perspective. The idea was to create a peer-to-peer learning environment where people could exchange knowledge, discover learning partners and grow through collaborative sessions. As the Team Lead, I was responsible for coordinating the team's progress, distributing responsibilities and ensuring that different parts of the project came together towards a common goal.",
    highlights: [
      "Led a team of 4 members, coordinating responsibilities and dividing project tasks according to individual contributions.",
      "Researched existing learning platforms and explored how mutual skill exchange could provide a more engaging learning experience.",
      "Participated in planning the application structure, feature priorities and development workflow.",
      "Contributed to frontend development, application functionality and integration of key features.",
      "Coordinated discussions around implementation challenges, tracked progress and helped resolve blockers.",
      "Worked on connecting skill discovery, session creation and video interaction into a unified user experience.",
      "Helped manage changing requirements and make practical implementation decisions within project timelines.",
    ],
    outcomes: [
      "Successfully led a 4-member development team.",
      "Recorded 8 users during project testing, including 6 real users and 2 test accounts.",
      "Facilitated testing involving 4 created sessions and 8 session joins.",
      "Supported the exchange of 6 different skills during the testing phase.",
      "Conducted manual functional, UI, compatibility and edge-case testing.",
    ],
    image: "/images/projects/skillxchange.jpg",
    stack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB Atlas", "Jitsi Meet API"],
    role: "Team Lead — led platform development, built the Node.js/Express/MongoDB backend, and integrated Jitsi Meet API for live video.",
    learnings: "Being a team lead involves understanding everyone's strengths, communicating expectations, monitoring progress, contributing technically and taking responsibility. Task prioritization, debugging, integration and making realistic technical decisions under time constraints.",
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
    name: "More Ideas",
    subtitle: "Proposed Concepts & Future Explorations",
    type: "CONCEPTS · COMING SOON",
    roleBadge: "Creator",
    summary:
      "Proposed technical concepts and project ideas I am exploring — featuring KrishiWave, with more ideas coming soon.",
    highlights: [
      "KrishiWave — AI-Driven Smart Agriculture Concept combining RF signal sensing and federated learning.",
      "More concepts and technical proposals coming soon.",
    ],
    image: "/images/projects/krishiwave.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    stack: ["AI/ML", "RF Signal Sensing", "Federated Learning"],
    role: "Creator — researching, architecting, and documenting proposed technical concepts.",
    learnings: "Exploring intersections of full-stack systems, machine learning, wireless communication, and privacy-focused architecture.",
    problem:
      "Turning early observations and research questions into structured, technically grounded project proposals.",
    result:
      "Documented KrishiWave with a full technical proposal and modular architecture; additional ideas coming soon.",
    conclusion:
      "Every full-scale system begins as a carefully questioned concept.",
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
        slug: "osl-launch-e0",
        title: "FlareOn at the Office of Student Life Main Event",
        tag: "E0 · OSL MAIN EVENT",
        status: "Completed",
        upcoming: false,
        cover: "/images/clubs/FlareOn/OSL Launch Event E0 BTS/Thumbnail.png",
        galleryFolder: "images/clubs/FlareOn/OSL Launch Event E0 BTS",
        about:
          "Led behind-the-scenes media coverage, canopy decoration until 4 AM, and front-stage documentation for FlareOn at the university-level OSL main event.",
        details: {
          subtitle: "FlareOn | Under the Office of Student Life",
          meta: [
            { label: "Category", value: "University-level event support, media production & student engagement" },
            { label: "Format", value: "Event coverage, backstage coordination, canopy activities & content creation" },
          ],
          overview: [
            "The Office of Student Life main event was a major opportunity for FlareOn to represent its work, engage with the student community, and contribute to the wider university experience.",
            "For me, the experience was especially meaningful as Vice President of FlareOn, working across media production, setup, and operational execution.",
          ],
          sections: [
            {
              title: "My Role & Responsibilities",
              groups: [
                {
                  heading: "Media coverage and documentation",
                  items: [
                    "Supporting behind-the-scenes photography and videography.",
                    "Capturing event preparations, performances, and important moments.",
                    "Supporting visual storytelling and content documenting the experience beyond the main stage.",
                  ],
                },
                {
                  heading: "Canopy preparation and activities",
                  items: [
                    "Contributing to the preparation and decoration of the FlareOn canopy.",
                    "Supporting interactive activities designed to engage students.",
                    "Coordinating with teammates responsible for different parts of the setup.",
                  ],
                },
                {
                  heading: "Team coordination",
                  items: [
                    "Working with students, volunteers, and faculty during preparation and execution.",
                    "Addressing unexpected requirements and taking ownership across tasks when needed.",
                  ],
                },
              ],
            },
            {
              title: "Behind the Scenes",
              paragraphs: [
                "We attended classes during the day, worked on behind-the-scenes coverage from approximately 5 PM until midnight, and continued decorating the canopy until around 4 AM with only two to three hours of sleep.",
                "Despite last-minute changes and tight timelines, the team worked together to prepare the canopy, document the event, and deliver the required content.",
              ],
            },
            {
              title: "Memorable Moments",
              items: [
                "Being trusted to record the event from the restricted front-stage area, capturing performances and the Chancellor's reactions.",
                "Dr. Madhu Gupta visiting the FlareOn canopy and interacting with activities created by the team.",
              ],
            },
          ],
          team: "Sameer Saini, Tanisha Garg, Drishti Pathak, Dhanu Shree, Rahul Lal, Prachi Chhabra, Peeru Choudhary, Riya Patial, and volunteers; guided by Anand A. Jha, Dr. Manav Bansal, Vrinda Sharma, Aameen Khanna, Tushar, and Pushp Taneja.",
          learnings: [
            "Managing responsibilities alongside academic commitments.",
            "Planning and executing content coverage under time pressure.",
            "Telling a story through photography and videography.",
            "Coordinating a team working across different responsibilities and adapting when plans change.",
          ],
          takeaway: "The final event is what people remember, but the preparation is what teaches you how to create it.",
        },
      },
      {
        slug: "poster-making-e1",
        title: "FlareOn Online Poster-Making Competition",
        tag: "E1 · DESIGN COMPETITION",
        status: "Completed",
        upcoming: false,
        cover: "/images/clubs/FlareOn/E1 Poster Making competition/Thumbnail.png",
        galleryFolder: "images/clubs/FlareOn/E1 Poster Making competition",
        about:
          "Organised a fast-turnaround digital poster-making competition alongside the OSL main event, crossing 40+ registrations and judging the Top 10+1 entries.",
        details: {
          subtitle: "FlareOn | Under the Office of Student Life",
          meta: [
            { label: "Category", value: "Online creative competition" },
            { label: "Format", value: "Digital poster-making competition" },
            { label: "Registration", value: "40+ registrations target crossed" },
            { label: "Timeline", value: "Event on the 17th; submissions closed on the 18th" },
          ],
          overview: [
            "The FlareOn Online Poster-Making Competition encouraged students to explore visual communication, creative thinking, and digital design.",
            "Conducted alongside the team's responsibilities for the Office of Student Life main event, it required independent planning, promotion, participant coordination, and judging under a short timeline.",
          ],
          sections: [
            {
              title: "Contribution & Execution",
              items: [
                "Planning the competition themes and structure.",
                "Coordinating registrations, outreach, and promotional activities.",
                "Coordinating prize-related arrangements and working with the core team on judging.",
                "Supporting the selection and recognition of the Top 10+1 winners.",
              ],
            },
            {
              title: "Judging & Challenges",
              paragraphs: [
                "The biggest constraint was the short timeline while simultaneously supporting the OSL main event.",
                "Selecting the Top 10+1 required careful discussions around quality, creativity, and fairness because many participants submitted deserving work.",
              ],
            },
          ],
          team: "Sameer Saini, Tanisha Garg, Drishti Pathak, Peeru Choudhary, Rahul Lal, Dhanu Shree, Prachi Chhabra, Nitish Kumar, Simran Kaur, and Riya Patial; guided by Dr. Manav Bansal, Aameen Khanna, Vrinda Sharma, Tushar, and Pushp Taneja.",
          learnings: [
            "Planning a short-duration online competition and coordinating promotion under time constraints.",
            "Approaching creative judging with fairness and consistency.",
            "Balancing multiple concurrent projects and deadlines.",
          ],
          takeaway: "Creativity deserves not only a platform, but also a fair process that recognises the effort behind every submission.",
          tagline: "Building Creativity for Visibility, one poster at a time.",
        },
      },
      {
        slug: "senkhon-sir-event-e2",
        title: "The Art of Mastery",
        tag: "E2 · GUEST SESSION",
        status: "Completed",
        upcoming: false,
        cover: "/images/clubs/FlareOn/E2 Senkhon sir event/Thumbnail.png",
        galleryFolder: "images/clubs/FlareOn/E2 Senkhon sir event",
        about:
          "Inspirational guest session with Mr. Harinder Singh Sekhon at Chenab Hall (52 attendees), blending poetry, discipline, fitness insights, and student Q&A.",
        details: {
          subtitle: "FlareOn | Under the Office of Student Life",
          meta: [
            { label: "Guest", value: "Mr. Harinder Singh Sekhon" },
            { label: "Date & Time", value: "1 August 2026 · 11:00 AM – 1:00 PM" },
            { label: "Venue", value: "Chenab Hall, Chitkara University" },
            { label: "Attendees", value: "52 reported attendees" },
            { label: "SDG Alignment", value: "SDG 3, SDG 4, SDG 11" },
          ],
          overview: [
            "The Art of Mastery was an inspirational guest session organised by FlareOn to introduce students to discipline, perseverance, fitness, resilience, and personal growth.",
            "Featuring Mr. Harinder Singh Sekhon, whose achievements span public service and competitive bodybuilding, the session gave students practical inspiration through real-life stories and direct Q&A.",
          ],
          sections: [
            {
              title: "Programme Flow",
              items: [
                "Opening poetry performance by Anshu Sharma.",
                "Introductory segment and guest welcome.",
                "Motivational session by Mr. Harinder Singh Sekhon.",
                "Interactive question-and-answer session with students.",
                "Guest felicitation by faculty members and concluding group photograph.",
              ],
            },
            {
              title: "Contribution & Execution",
              paragraphs: [
                "Contributed to broader planning and execution across programme sequencing, guest interaction, stage activities, media, and operational coordination alongside the FlareOn core team and volunteers.",
              ],
            },
          ],
          team: "Sameer Saini, Tanisha Garg, Drishti Pathak, Dhanu Shree, Prachi Chhabra, Peeru Choudhary, Nitish Kumar, Rahul Lal, Anvi Mangla, Nitish Mehta, Dhruv Pathak, Anshu Sharma, NSS, and NCC; guided by Anand Jha, Colonel Ravi, Anil Kumar, Vrinda Sharma, Pushp Taneja, and Dr. Manav Bansal.",
          learnings: [
            "Structuring a speaker-led programme around a central message.",
            "Sequencing performances and interactive segments to boost audience engagement.",
            "Coordinating stage, media, and operational teams seamlessly.",
          ],
          takeaway: "A successful guest session is not measured only by attendance. It is measured by the quality of the experience and the ideas students take away.",
        },
      },
      {
        slug: "traitors-e3",
        title: "The Traitors",
        tag: "E3 · FLAREON × CREOAWAVE",
        status: "Completed",
        upcoming: false,
        cover: "/images/clubs/FlareOn/E3 Traitors/Thumbnail.png",
        galleryFolder: "images/clubs/FlareOn/E3 Traitors",
        about:
          "Joint FlareOn × CreoAwave social-deduction & filmmaking competition at Shivalik Hall with 170 registrations, 87 attendees, secret missions, and elimination rounds.",
        details: {
          subtitle: "FlareOn × CreoAwave",
          meta: [
            { label: "Category", value: "Interactive competition, content creation & collaboration" },
            { label: "Date & Time", value: "22 August 2026 · 11:00 AM – 1:15 PM" },
            { label: "Venue", value: "Shivalik Hall, Chitkara University" },
            { label: "Scale", value: "170 registrations · 87 reported attendees" },
            { label: "SDG Alignment", value: "SDG 4, SDG 11" },
          ],
          overview: [
            "The Traitors was an interactive student event jointly organised by FlareOn and CreoAwave, combining strategy, storytelling, filmmaking, communication, and social deduction.",
            "Participants were divided into Innocents and Traitors, competing in creative ad/reel challenges, secret missions, hidden shield hunts, and the Circle of Shaq elimination rounds.",
          ],
          sections: [
            {
              title: "Activities & Recognitions",
              items: [
                "Creative short-form advertisement and reel challenges using assigned elements.",
                "Secret tasks, hidden shields, and strategic voting in The Circle of Shaq.",
                "Special recognitions: Master of Deception, One of the Most Influential Personalities in the Room, and The Hidden Ace.",
              ],
            },
            {
              title: "Execution & Collaboration",
              paragraphs: [
                "Supported planning, anchoring, posters, technical coordination, media, decorations, discipline, and participant engagement across both clubs.",
                "Balanced structured gameplay rules with spontaneous moments, adapting smoothly through last-minute changes.",
              ],
            },
          ],
          team: "FlareOn (Sameer Saini, Tanisha Garg, Drishti Pathak, Anvi Mangla, Prachi Chhabra, Nitish Mehta, Nitish Kumar, Dhruv, Rahul Lal, Manish Kumar, Dhanu Shree, Peeru Choudhary) & CreoAwave (Sunanya Sharma, Shreyansh Sharma, Sujal, Kanhaiya, Vanshika, Shaun, Simon); appreciated by Ms. Vrinda Sharma.",
          learnings: [
            "Coordinating a collaborative event across two student clubs.",
            "Balancing structure with spontaneity and clear activity transitions.",
            "Trusting teammates with responsibilities so everyone contributes their strengths.",
          ],
          takeaway: "A strong event is built not just through planning, but through collaboration, creative freedom, and the ability to adapt.",
        },
      },
      {
        slug: "chetan-monga-e4",
        title: "Comedy Beyond The Script ft. Chetan Monga",
        tag: "E4 · CREATOR SESSION",
        status: "Completed",
        upcoming: false,
        cover: "/images/clubs/FlareOn/E4 Chetan Monga Event/Thumbnail.png",
        galleryFolder: "images/clubs/FlareOn/E4 Chetan Monga Event",
        about:
          "Large-scale live creator session with Chetan Monga drawing 600+ registrations in 3 days and 350+ students attended — managing guest coordination, backstage flow, bus logistics, and multi-team operations under shifting schedules.",
        details: {
          subtitle: "FlareOn | Under the Office of Student Life",
          meta: [
            { label: "Category", value: "Guest session, entertainment & content creation" },
            { label: "Guest", value: "Chetan Monga" },
            { label: "Format", value: "Live creator session, performances & audience Q&A" },
            { label: "Scale", value: "600+ registrations in 3 days · 350+ students attended" },
          ],
          overview: [
            "Comedy Beyond The Script was organised by FlareOn to explore content creation, storytelling, and audience engagement through the experiences of creator Chetan Monga.",
            "The programme featured a musical performance by Krishna, FlareOn and CHERE videos, a dance performance by Ankush, an interactive session and Q&A with Chetan Monga, and a closing felicitation.",
          ],
          sections: [
            {
              title: "My Role & Responsibilities",
              groups: [
                {
                  heading: "Guest & backstage coordination",
                  items: [
                    "Coordinating guest arrival, entry, and movement to keep the guest experience organised.",
                    "Supporting backstage arrangements and transitions between programme segments.",
                  ],
                },
                {
                  heading: "Logistics, media & technical operations",
                  items: [
                    "Coordinating bus routes, stops, gift arrangements, and operational follow-ups across blocks.",
                    "Reviewing edits from media teams and following up on technical deliverables.",
                  ],
                },
              ],
            },
            {
              title: "Behind the Execution",
              paragraphs: [
                "Preparation involved postponed dates, schedule changes, transport coordination, and venue issues — requiring constant problem-solving across guest-management, administration, technical, and organising teams.",
                "Despite uncertainty, the team adapted continuously and delivered the event at a large scale.",
              ],
            },
          ],
          team: "Sameer Saini, Drishti Pathak, Tanisha Garg, Peeru Choudhary, Anvi Mangla, Nitish Kumar, Shivam, Gagan, Dhanu Shree, Nitish Mehta, Rahul Lal, Muskan, Palak, Piyush, Aditi, Simran, Dhruv, and Prachi Chhabra; guided by Anil Sir, Ravi Sharma Sir, Harsh Shrivastavaa, Pushp Taneja, Vrinda Sharma, Aameen Khanna, Dr. Manav Bansal, Anand A. Jha, and Tushar.",
          learnings: [
            "Patience under pressure and problem-solving without complete information.",
            "Clear communication and prioritisation across multiple teams.",
            "Taking ownership beyond a narrow job description when situations change.",
          ],
          takeaway: "The real test of event management is not when everything goes according to plan. It is how you respond when it does not.",
        },
      },
    ],
  },
  {
    id: "drr",
    role: "Core Team Member",
    organization: "Disaster Risk Reduction (DRR) Club",
    duration: "August 2026 – Present",
    detail:
      "Coordinated college-level initiatives and events, collaborating with senior faculty, college officials and student teams.",
    image: "/images/clubs/drr-logo.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    events: [
      {
        slug: "drr-orientation-e0",
        title: "DRR Freshers' Orientation: A New Beginning",
        tag: "E0 · ORIENTATION",
        status: "Completed",
        upcoming: false,
        cover: "/images/clubs/DRR/E0 Launch/1789915075756.jpg",
        galleryFolder: "images/clubs/DRR/E0 Launch",
        about:
          "Introduced incoming freshers to the DRR Club's mission of preparedness, prevention, and safety — taking ownership of orientation execution as a new core member.",
        details: {
          subtitle: "Disaster Risk Reduction (DRR) Club | Chitkara University",
          meta: [
            { label: "Category", value: "Club orientation and student engagement" },
            { label: "Format", value: "Freshers' orientation" },
          ],
          overview: [
            "The DRR Freshers' Orientation introduced the Disaster Risk Reduction Club's purpose to incoming students and highlighted the importance of awareness, preparedness, prevention, and safety.",
            "Designed to familiarise freshers with the club's objectives, it encouraged students to join a community focused on disaster risk reduction.",
          ],
          sections: [
            {
              title: "My Contribution & Execution",
              paragraphs: [
                "Having recently joined the DRR Core Team, I took ownership of the responsibilities assigned to me and contributed to the event's preparation and execution.",
                "It was one of my first opportunities to experience student-club operations from the inside — learning through execution, coordinating with teammates, and delivering on shared plans.",
              ],
            },
          ],
          team: "Tarun, Sameer Saini, Sneha, Ishika Aggarwal, Anamika, Yuvraj Gotra, and Vansh; guided by Ravi Sharma and Prof. (Dr.) Ashok Kumar Thakur.",
          learnings: [
            "Taking responsibility even when new to a team.",
            "Understanding the objective before executing a task and coordinating with teammates.",
            "Why initiative and willingness to learn matter in leadership.",
          ],
          takeaway: "You do not need to know everything before taking responsibility. You need the willingness to learn and deliver.",
        },
      },
      {
        slug: "drr-survival-iq-e1",
        title: "SURVIVAL IQ: How Prepared Are You?",
        tag: "E1 · ONLINE QUIZ",
        status: "Completed",
        upcoming: false,
        cover: "/images/clubs/DRR/E1 Quiz/Thumbnail.jpeg",
        galleryFolder: "images/clubs/DRR/E1 Quiz",
        about:
          "Interactive Google Forms awareness quiz on disaster preparedness & safety protocols — contributed from conceptualisation and poster design to award presentation.",
        details: {
          subtitle: "Disaster Risk Reduction (DRR) Club | Chitkara University",
          meta: [
            { label: "Category", value: "Awareness, education and student engagement" },
            { label: "Format", value: "Online quiz · Google Forms" },
          ],
          overview: [
            "SURVIVAL IQ: How Prepared Are You? was an initiative by the DRR Club to promote disaster preparedness, risk awareness, emergency response, and essential safety protocols among students.",
            "Using an interactive quiz format, it made safety concepts accessible and encouraged students to recognise the importance of informed action during emergencies.",
          ],
          sections: [
            {
              title: "My Contribution",
              items: [
                "Contributing to the conceptualisation of the quiz.",
                "Developing the quiz structure and form using Google Forms.",
                "Designing the promotional poster and sharing the initiative among students.",
                "Coordinating with the team and taking part in the award presentation alongside faculty members.",
              ],
            },
            {
              title: "Results & Recognition",
              items: [
                "Winners recognised: Saivansha Vashist, Manya Behl, and Kiratnoor Kaur.",
                "Presented awards in recognition of their knowledge, participation, and commitment to disaster preparedness.",
              ],
            },
          ],
          team: "Tarun, Sameer Saini, Sneha, Ishika Aggarwal, Anchal Guleria, Anamika Srivastava, Vansh Goyal, Yuvraj, Rahul Lal, and Peeru Choudhary; faculty guidance from Ravi Sharma, Dr. Abhishek, Prof. (Dr.) Ashok Kumar Thakur, Dr. Preetpal, Dr. Akriti, Ms. Poluru, Dr. Ruhani, Er. Parth, Mr. Naveen, Mr. Vikas, and Mr. Ravi.",
          learnings: [
            "Converting an idea into a structured digital activity and designing promotional material around a clear objective.",
            "Communicating educational information in a simple, engaging way.",
            "Coordinating with different people while keeping the initiative on track.",
          ],
          takeaway: "Effective awareness begins with clear communication and meaningful participation.",
          tagline: "Think Smart. Act Fast. Stay Prepared.",
        },
      },
    ],
  },
];

export const portfolioLearning = {
  title: "Portfolio-wide Learning: What These Events Taught Me",
  intro:
    "Working across DRR initiatives, FlareOn events, and the FlareOn × CreoAwave collaboration gave me experience in educational initiatives, guest sessions, creative competitions, and large-scale interactive events.",
  skills: [
    {
      title: "Event Planning & Execution",
      detail: "Taking an idea from initial concept through planning, preparation, coordination, and final execution.",
    },
    {
      title: "Leadership & Ownership",
      detail: "Taking responsibility, supporting people, making decisions, and staying accountable when situations become difficult.",
    },
    {
      title: "Team Management & Collaboration",
      detail: "Understanding different working styles and creating space for people to contribute their strengths.",
    },
    {
      title: "Communication & Stakeholder Coordination",
      detail: "Communicating clearly with faculty members, student teams, guests, volunteers, and technical coordinators.",
    },
    {
      title: "Problem-Solving Under Pressure",
      detail: "Focusing on practical solutions during last-minute changes, delays, and logistical issues.",
    },
    {
      title: "Media & Creative Production",
      detail: "Developing visual storytelling skills through content coverage, poster design, video reviews, and documentation.",
    },
    {
      title: "Time & Resource Management",
      detail: "Balancing academic responsibilities with event preparation under limited time and resources.",
    },
    {
      title: "Adaptability & Resilience",
      detail: "Responding quickly when plans change so the team keeps moving toward a shared outcome.",
    },
  ],
  closing:
    "The most valuable outcome was not just what we organised. It was what we learned while bringing it to life.",
};

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
    name: "KrishiWave",
    tagline: "AI-Driven Smart Agriculture Concept",
    domain: "PROPOSED PROJECT · AI/ML · RF SIGNAL SENSING · FEDERATED LEARNING",
    image: "/images/projects/krishiwave.jpg",
    imageFit: "contain",
    imageBg: "#ffffff",
    overview: [
      "KrishiWave is a proposed smart agriculture platform that explores how wireless radio-frequency (RF) signals and artificial intelligence could help farmers monitor soil moisture, identify crop stress, and receive early disease-risk alerts.",
      "The central idea is to use changes in wireless signal behaviour—such as signal strength, attenuation, and propagation patterns—as indirect indicators of agricultural conditions. The concept combines this approach with federated learning, allowing multiple farms to contribute to shared model improvement without sharing their raw farm data.",
    ],
    approach: [
      "Identified challenges in existing precision-agriculture solutions, particularly affordability, connectivity, sensor maintenance, and farm-data privacy.",
      "Researched how RF propagation changes when signals interact with soil and vegetation.",
      "Explored how machine learning models could interpret signal patterns to estimate soil moisture, crop stress, and disease risk.",
      "Proposed a federated learning architecture to support collaborative AI training while keeping individual farm data local.",
      "Outlined a modular system architecture connecting RF data simulation, AI inference, privacy-preserving model training, and a farmer-facing dashboard.",
      "Investigated a future hardware roadmap involving LoRa nodes, ESP32 gateways, software-defined radio, and antenna systems.",
    ],
    learning:
      "This concept helped me explore the intersection of full-stack development, machine learning, wireless communication, and privacy-focused system design. It also highlighted an important engineering challenge: validating simulated RF predictions against real agricultural field measurements before making practical deployment claims.",
    status:
      "Concept and technical proposal. The proposed software and hardware architecture require implementation and real-world validation.",
  },
];

export const journeyStories = [
  ["01", "Projects", "Neurofied.ai, QuickPull, SkillXchange & Roam.ai built across hackathons and live deployments.", "PROJECTS", "/images/journey/Projects.webp", "/projects"],
  ["02", "Research", "Published machine learning papers, book chapters, and ongoing Alzheimer's research.", "PUBLICATIONS", "/images/journey/research.webp", "/research"],
  ["03", "Code Competitions", "100+ LeetCode problems solved in C++ and Java, CodeWars 6.0 & algorithmic problem solving.", "COMPETITIVE CODING", "/images/journey/DSAquestions.webp", "/dsa"],
  ["04", "Hackathons", "7+ national hackathons including Top 15 Finalist at HackIndia Spark 7 & Adobe Round 2.", "BUILDING", "/images/journey/hackathons.webp", "/hackathons"],
  ["05", "Clubs & Societies", "Vice President & Co-Founder of FlareOn and Core Team Member at Disaster Risk Reduction Club.", "LEADERSHIP", "/images/journey/clubs.webp", "/experience#clubs"],
  ["06", "Patent", "QuickPull — Community-Driven Route Optimization System intellectual property filing.", "INNOVATION", "/images/journey/Patent.webp", "/research#patent"],
  ["07", "AI Summit", "Attended India AI Impact Summit 2026 at Bharat Mandapam, New Delhi.", "CONFERENCES", "/images/journey/ai-summit.webp", "/ai-summit"],
  ["08", "Campus Events", "FlareOn E0–E4 productions, technical seminars, IEEE & Red Hat developer communities.", "CAMPUS LIFE", "/images/journey/campus-events.webp", "/campus-events"],
  ["09", "Achievements", "National recognitions, 100/100 AI masterclass distinction, NSO medals & certifications.", "MILESTONES", "/images/journey/achievements.webp", "/achievements"],
];

export const homeHighlights = [
  { n: "01", title: "Projects", metric: "4+", metricLabel: "MERN stack projects", detail: "Neurofied.ai, QuickPull, SkillXchange & More Ideas.", href: "/projects", tag: "NOTABLE WORK" },
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
