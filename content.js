// ─────────────────────────────────────────────────────────────
//  All site content lives here. Edit this file; you shouldn't
//  need to touch index.html, styles.css or script.js.
//
//  • Empty strings ("") are hidden on the page.
//  • Project categories must match one of the `filters` ids below.
//  • Lines marked TODO are spots worth filling in.
// ─────────────────────────────────────────────────────────────

window.CONTENT = {
  profile: {
    firstName: "Sanjaey",
    middleName: "Shunmuga",
    lastName: "Sundaram",
    shortName: "Sanjaey S.",
    tagline: "Software engineering and AI",
    intro:
      "MS Computer Science at NC State. I've built reinforcement learning models for HVAC automation as a research intern at IIT Madras, and shipped ML and IoT tooling as an SDE at Thermelgy that cut energy costs. Lately: RAG apps, privacy-preserving local LLMs and zero-downtime CI/CD.",
    photo: "assets/profile.webp",
    photoAlt: "Portrait of Sanjaey Shunmuga Sundaram",
    role: "Software engineer",
    location: "Raleigh, NC",
    status: "Open to full-time SWE and AI roles. Open to relocation.",
    resume: "assets/Sanjaey Shunmuga Sundaram - SWE.pdf",
    github: "https://github.com/Sanjaeyss",
    linkedin: "https://www.linkedin.com/in/sanjaeyss/",
    email: "sanjaeyss@gmail.com"
  },

  // Rows in the "At a glance" card
  glance: [
    { label: "Education", value: "MS Computer Science, NC State", sub: "Aug 2024 – May 2026" },
    { label: "Industry", value: "Thermelgy (Energy ETA), Chennai", sub: "SDE · Aug 2023 – Feb 2024" },
    { label: "Research", value: "RBCDSAI, IIT Madras", sub: "Research intern · Jan 2023 – Jul 2024" },
    { label: "Focus", value: "Software engineering and AI", sub: "" }
  ],

  // Impact numbers. `value` is the number that counts up; prefix/suffix wrap it.
  stats: [
    { prefix: "", value: 10, suffix: "%", label: "energy cost cut with ML HVAC automation" },
    { prefix: "$", value: 5, suffix: "K", label: "saved with a remote IoT gateway web app" },
    { prefix: "", value: 20, suffix: "%", label: "faster reports from a reusable Python framework" }
  ],

  experience: [
    {
      role: "Software Development Engineer",
      org: "Thermelgy (Energy ETA)",
      place: "Chennai, India",
      dates: "Aug 2023 – Feb 2024",
      bullets: [
        "Led the design of ML-driven HVAC automation, cutting energy costs by 10%",
        "Built a web app for remote IoT gateway access and resets, which cut site visits and saved $5,000",
        "Wrote a reusable Python framework for cross-site analysis that sped up reports by 20%",
        "Tested and validated ESP32 IoT gateway workflows for reliable data continuity",
        "Analyzed multi-site data with Python, Pandas and Tableau to guide operations"
      ],
      tags: ["Python", "ML", "Pandas", "Tableau", "ESP32", "IoT"]
    },
    {
      role: "Research Intern",
      org: "RBCDSAI, IIT Madras",
      place: "Chennai, India",
      dates: "Jan 2023 – Jul 2024", // TODO: add "Part-time" here if it overlapped Thermelgy part-time
      bullets: [
        "Worked on a team building a reinforcement learning model that automates HVAC operations from sensor and IoT gateway data",
        "Aimed to cut power consumption while keeping thermal comfort in the target range",
        "Reviewed research literature on RL for building control and presented findings to the team"
      ],
      tags: ["Reinforcement learning", "Python", "IoT", "Sensor data", "Research"]
    },
    {
      role: "Software Developer Intern",
      org: "SM Creatives",
      place: "Chennai, India",
      dates: "Jul 2021 – Oct 2021",
      bullets: [
        "Built a full-stack e-commerce platform with Vue.js, Node.js, Express and MongoDB",
        "Designed responsive frontend components and integrated backend APIs for core shopping and user flows",
        "Owned features end to end, from frontend to backend logic and database integration",
        "Partnered with cross-functional teams to ship features in a fast-paced environment"
      ],
      tags: ["Vue.js", "Node.js", "Express", "MongoDB"]
    }
  ],

  filters: [
    { id: "all", label: "All" },
    { id: "ml", label: "AI / ML" },
    { id: "swe", label: "Software eng." },
    { id: "ops", label: "DevOps" },
    { id: "net", label: "Networking" },
    { id: "hpc", label: "HPC" },
    { id: "cloud", label: "Cloud" }
  ],

  // The first project is the case study shown when the page loads.
  // links: github, slides, report, demo. Leave "" to hide a button.
  // status: optional, e.g. "In progress". Shows a badge and labels the last section "Status".
  projects: [
    {
      id: "privacy-search",
      title: "Privacy-preserving LLM search",
      category: "ml",
      tag: "AI · Privacy",
      stack: "Local LLM · SearxNG · Wireshark",
      links: { github: "https://github.com/madhumithaaravelli/privacy-search-messaging", slides: "", report: "", demo: "" },
      caseStudy: {
        heading: "Privacy-preserving web search for a local LLM",
        meta: "AI · Privacy · Python · Team project. I built the benchmarks and the privacy analyzer.",
        metrics: [
          ["50", "benchmark queries"],
          ["3", "systems compared: local, Google API, OpenAI"],
          ["0–100", "privacy score per system"],
          ["High / Med / Low", "risk rating per header"]
        ],
        problem:
          "Cloud search and chat APIs see your queries, but it's hard to say what else leaves your machine, or how much a local setup actually protects you. The team built an agent that runs the LLM locally and fetches live results through a self-hosted SearxNG container.",
        whatIDid:
          "Built the benchmarks, which run the same 50 queries through the local agent, Google Custom Search and OpenAI, log every outgoing request, time search and LLM steps separately, and can record a Wireshark capture. Built the privacy analyzer, which flags external domains, leaked query text, fingerprinting headers, API keys in URLs and session IDs, then scores each system and generates a privacy label.",
        result:
          "Side-by-side privacy labels for the local and cloud setups: what data leaves the device, who can see it, and a 0–100 score." // TODO: add the actual scores, e.g. "Local scored 100 vs. OpenAI 41."
      }
    },
    {
      id: "l2-switch",
      title: "L2 Ethernet learning switch",
      category: "net",
      tag: "Networking · C++20",
      status: "In progress",
      stack: "C++20 · CMake · GoogleTest · GitHub Actions",
      links: { github: "https://github.com/Sanjaeyss/l2-switch", slides: "", report: "", demo: "" },
      caseStudy: {
        heading: "A software Ethernet switch in modern C++",
        meta: "Networking · C++20 · Individual project",
        metrics: [
          ["802.1Q", "VLAN tag parsing"],
          ["300 s", "MAC entry aging"],
          ["20", "GoogleTest unit tests"],
          ["2", "CI platforms: Linux, macOS"]
        ],
        problem:
          "Switching hardware decides what to do with every frame at line rate, which hides how Layer 2 forwarding actually works. Building the switch in software makes each step visible and testable.",
        whatIDid:
          "Wrote a zero-copy Ethernet II parser with std::span that reads 802.1Q VLAN tags (priority, DEI, VLAN ID) and returns error codes instead of throwing, which suits a per-packet path. Built a MAC learning table keyed by (VLAN, MAC) with 300-second aging, host-move detection, per-port flushes and a size limit, and it never learns multicast source addresses. Aging is tested without real waiting because the current time is passed in.",
        result:
          "Frame parsing and MAC learning are done, with 20 unit tests that run on Linux and macOS on every push. Next: a forwarding engine that decides to forward, flood or drop each frame, then access and trunk VLAN ports, IPv4 longest-prefix-match routing and a SAI-style hardware abstraction layer."
      }
    },
    {
      id: "rag",
      title: "RAG document Q&A",
      category: "ml",
      tag: "AI / ML",
      stack: "LangChain · ChromaDB · FastAPI · Claude",
      links: { github: "https://github.com/Sanjaeyss/rag-doc-qa", slides: "", report: "", demo: "" },
      caseStudy: {
        heading: "RAG document Q&A with cited answers",
        meta: "AI / ML · Python",
        metrics: [
          ["LangChain", "loading and chunking"],
          ["ChromaDB", "vector store"],
          ["Local", "sentence-transformers embeddings"],
          ["SSE", "streamed, cited answers"]
        ],
        problem: "Plain LLMs answer confidently from memory and make up facts that aren't in your documents.",
        whatIDid:
          "Built a FastAPI app that splits uploaded PDFs and notes into overlapping chunks, embeds them locally with sentence-transformers into ChromaDB, retrieves the top matches for each question and sends them to Claude as citable document blocks.",
        result:
          "Every claim in an answer traces back to the exact chunk it came from, answers stream token by token, and embeddings cost nothing to compute."
      }
    },
    {
      id: "captioning",
      title: "Image captioning",
      category: "ml",
      tag: "AI / ML",
      stack: "PyTorch · ViT · GPT-2 / BLIP",
      links: { github: "", slides: "", report: "", demo: "" },
      caseStudy: {
        heading: "Image captioning, from CNN-RNN to vision transformers",
        meta: "AI / ML · PyTorch · MS COCO",
        // TODO: confirm which BLEU variant this is (BLEU-1 vs BLEU-4) and which model it came from
        metrics: [
          ["0.92", "BLEU"],
          ["0.90", "METEOR"],
          ["MS COCO", "dataset"],
          ["ViT", "+ GPT-2 / BLIP"]
        ],
        problem: "A CNN-RNN baseline gives grammatical but generic captions.",
        whatIDid:
          "Trained the CNN-RNN baseline, then moved to a ViT encoder with GPT-2 and BLIP decoders for more context-aware captions.",
        result: "BLEU 0.92 and METEOR 0.90 on the evaluation set."
      }
    },
    {
      id: "zddp",
      title: "Zero-downtime deployment pipeline",
      category: "ops",
      tag: "DevOps · Team lead",
      stack: "GitHub Actions · Docker · Ansible · Nginx",
      links: { github: "", slides: "", report: "", demo: "" },
      caseStudy: {
        heading: "Zero-downtime CI/CD for a Node.js app",
        meta: "DevOps · Team lead · NC State, Dec 2025",
        metrics: [
          ["0", "downtime on deploy"],
          ["≥85%", "coverage gate"],
          ["Blue-green", "release strategy"],
          ["Auto", "rollback"]
        ],
        problem:
          "Deploying straight over a running app means downtime, and a bad build reaches every user before anyone notices.",
        whatIDid:
          "Led the team building blue-green deploys: Ansible provisions, Docker packages, Nginx switches traffic, and GitHub Actions blocks any build under 85% coverage.",
        result:
          "Releases go out with no downtime, failed health checks roll back automatically, and Prometheus and Grafana dashboards show every deploy."
      }
    },
    {
      id: "units",
      title: "Smart Units Converter",
      category: "swe",
      tag: "SWE · CSC 510",
      stack: "Chrome extension · JS · Mocha / Jest",
      links: {
        github: "https://github.com/Sanjaeyss/Unit_Conversion_2024",
        slides: "",
        report: "",
        demo: "https://youtu.be/8tz6wISzIgk"
      },
      caseStudy: {
        heading: "Smart Units Converter, a Chrome extension",
        meta: "Software engineering · JavaScript · CSC 510 · 3-person team",
        metrics: [
          ["11", "unit categories"],
          ["17", "test suites"],
          ["5", "features we added"],
          ["DOI", "Zenodo release"]
        ],
        problem: "Checking an unfamiliar unit on a web page means leaving the page to search for a conversion.",
        whatIDid:
          "As a team of three, extended an open-source extension with voice input, compound calculations, a custom tab, multilingual support and theme options, backed by Mocha, Chai and Jest tests, ESLint, StandardJS and JSDoc.",
        result:
          "Select any value on a page to convert it instantly, with statistics and health calculators in the popup. Released with a Zenodo DOI and a demo video."
      }
    },
    {
      id: "pagerank",
      title: "Parallel HITS and PageRank",
      category: "hpc",
      tag: "HPC · CSC 548",
      stack: "MPI · OpenMP · CUDA",
      links: {
        github: "https://github.com/Sanjaeyss/CSC548-Link-Based-Ranking-Algorithm",
        slides: "assets/hits-pagerank-slides.pdf",
        report: "assets/hits-pagerank-report.pdf",
        demo: ""
      },
      caseStudy: {
        heading: "HITS and PageRank on large graphs, in MPI, OpenMP and CUDA",
        meta: "HPC · C / CUDA · CSC 548 · 2-person team",
        metrics: [
          ["1,989×", "HITS speedup, CUDA vs. serial on Orkut"],
          ["1,001×", "PageRank speedup, CUDA vs. serial on Orkut"],
          ["117M", "edges in the largest graph"],
          ["3", "parallel backends: MPI, OpenMP, CUDA"]
        ],
        problem:
          "Link analysis has to touch every edge on every iteration, so a serial run over web and social graphs like Web-Google, Wiki-Talk and Orkut is slow.",
        whatIDid:
          "Started from a serial baseline over COO edge lists, then parallelized over edges three ways: OpenMP atomics with a reduction for convergence, MPI edge partitions merged with Allreduce, and CUDA kernels with one thread per edge using atomicAdd.",
        result:
          "On Orkut (3.07M nodes, 117M edges), HITS dropped from 352 s serial to 0.18 s on CUDA, and PageRank from 93 s to 0.09 s. OpenMP beat MPI on every graph except the tiny ca-GrQc, where there isn't enough work to cover parallel overhead."
      }
    },
    {
      id: "expense",
      title: "Expense management app",
      category: "swe",
      tag: "Full stack",
      stack: "React Native · Node · MongoDB",
      links: { github: "https://github.com/Sanjaeyss/Track-Ur-Tab", slides: "", report: "", demo: "" },
      caseStudy: {
        heading: "Expense management and analytics app",
        meta: "Full stack · Mobile",
        metrics: [
          ["iOS + Android", "React Native"],
          ["Node", "API"],
          ["MongoDB", "storage"],
          ["Frontend", "I led design"]
        ],
        problem: "Splitting shared costs and sticking to budgets across several apps is tedious.",
        whatIDid:
          "Led frontend design for a React Native app covering budgets, goals and shared-expense balancing, backed by Node and MongoDB.",
        result: "One responsive app for tracking, budgeting and settling up."
      }
    },
    {
      id: "checks",
      title: "Check data extraction",
      category: "cloud",
      tag: "Cloud · Cameo Corp.",
      stack: "AWS Textract → CSV / Excel",
      links: { github: "", slides: "", report: "", demo: "" },
      caseStudy: {
        heading: "Bank check data extraction",
        meta: "Cloud · AWS · Cameo Corporate Services, Chennai",
        metrics: [
          ["AWS", "Textract"],
          ["Checks", "input"],
          ["CSV / Excel", "output"],
          ["Automated", "workflow"]
        ],
        problem: "Typing bank check fields into spreadsheets by hand was slow and error-prone.",
        whatIDid:
          "Built a tool that sends scanned checks to AWS Textract and maps the extracted fields into structured CSV and Excel files.",
        result: "Automated a manual step in a financial workflow."
      }
    },
    {
      id: "summa",
      title: "Parallel SUMMA",
      category: "hpc",
      tag: "HPC · CSC 548",
      stack: "C · MPI · 2D process grid",
      links: { github: "", slides: "", report: "assets/summa-report.pdf", demo: "" },
      caseStudy: {
        heading: "Distributed matrix multiplication with SUMMA",
        meta: "HPC · C / MPI · CSC 548 · Individual project · NC State ARC and Hazel clusters",
        metrics: [
          ["2", "SUMMA variants: stationary A and C"],
          ["32,768²", "largest matrix multiplied"],
          ["64", "MPI processes"],
          ["0", "verification errors"]
        ],
        problem:
          "Dense matrix multiplication grows as n³, so a single machine can't keep up at 32,768 × 32,768. Splitting it across processes only pays off if communication stays under control.",
        whatIDid:
          "Implemented two SUMMA variants in C with MPI on a 2D Cartesian process grid: stationary A keeps A in place and broadcasts B, and stationary C broadcasts A along rows and B along columns. Packed non-contiguous blocks into contiguous buffers before scattering, padded uneven blocks for load balance, and freed temporary buffers each step so the largest matrices fit in memory.",
        result:
          "Both variants matched the serial result with zero errors. Stationary C was faster on most runs, for example 16.1 s vs. 18.3 s on 8,192² with 16 processes, and multiplied 32,768² matrices in 295 s on 64 processes."
      }
    }
  ],

  leadership: [
    { date: "Dec 2025", text: "Team lead, ZDDP project at NC State" },
    { date: "Oct 2023", text: "Guest speaker, data analytics workshop at SVCE" },
    { date: "May 2023", text: "Senior executive member, SVCE Cyber Hub" },
    { date: "Dec 2022", text: "Team lead, IBM Applied Data Science project" },
    { date: "Aug 2022", text: "Mentor, hackML'22 hackathon" }
  ],

  skills: [
    { group: "Languages", items: ["Python", "Java", "C++20", "C", "JavaScript", "SQL", "HTML/CSS"] },
    { group: "Networking", items: ["Ethernet II", "802.1Q VLANs", "MAC learning", "Wireshark"] },
    { group: "AI and ML", items: ["PyTorch", "LangChain", "ChromaDB", "RAG", "Local LLMs", "Reinforcement learning", "Pandas"] },
    {
      group: "Engineering",
      items: ["Node.js", "Express", "React", "Vue.js", "FastAPI", "GitHub Actions", "Docker", "Podman", "Ansible", "MongoDB", "Mocha / Jest", "CMake", "GoogleTest", "MPI", "CUDA"]
    }
  ],

  education: [
    { degree: "MS Computer Science", school: "North Carolina State University", year: "2026" },
    { degree: "BE Computer Science and Engineering", school: "Anna University", year: "2023" }
  ],

  contact: {
    heading: ["Let's work", "together"],
    rows: [
      { label: "Email", value: "sanjaeyss@gmail.com" },
      { label: "Academic", value: "sshunmu@ncsu.edu" },
      { label: "Location", value: "Raleigh, NC" }
    ],
    // Web3Forms access key (https://web3forms.com). It's meant to be public.
    // Messages are emailed to the address the key was created for.
    // Leave it "" and the form asks visitors to email you directly instead.
    web3forms: { accessKey: "230342ee-4a5e-46f4-b7e6-2aeae3d43703" }
  }
};
