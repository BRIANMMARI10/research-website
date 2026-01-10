export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
  reports?: Array<{ title: string; url: string }>;
  videos?: Array<{ title: string; url: string }>;
}

export const experienceData: Experience[] = [
  {
    date: "Aug 2025 - Present",
    title: "AI/ML Engineer",
    company: "CoFactor AI, Inc.",
    description:
      "Building machine learning architectures that improve how healthcare systems extract, reason over, and act on clinical data at scale.",
    companyUrl: "https://www.cofactor.ai",
  },
  {
    date: "June - Aug 2025",
    title: "AI Research & Innovation Associate",
    company: "Veterans EZ Info, Inc. (EZ Labs)",
    description:
      "Automated daily ingestion of ~10 federal opportunities using web scraping and n8n, reducing manual effort by 90%. Built an AWS Lambda trigger function that enables real-time email alerts via n8n, saving capture managers hours of manual search by instantly notifying them of new relevant opportunities. Developed a Python client for the Microsoft 365 Copilot Retrieval API with integration to SharePoint workflows, streamlining capture research and improving opportunity evaluation efficiency by 70%.",
  },
  {
    date: "Jan 2023 - May 2025",
    title: "Undergraduate Researcher, \"BlueGuppy\"",
    company: "Self-Organizing Swarms & Robotics Group",
    advisor: "Prof. Radhika Nagpal, Dr. Hungtang Ko",
    description:
      "Designed 3 iterations of fish-like flapping robots in Fusion360: improved buoyancy by 20% and performance by 15%. Integrated a magnetic coil propulsion system with improved waterproofing and streamlined actuation. Programmed turning algorithms in C++ to enable remote control and asymmetric flapping behaviors. Conducted underwater experiments and analyzed turning dynamics to evaluate maneuverability. Co-authored abstracts for SICB 2024 (Seattle) and DFD 2024 (Salt Lake City) conferences, and a peer-reviewed publication in Bioinspiration & Biomimetics (2025).",
    companyUrl: "https://ssr.princeton.edu",
    reports: [
      { title: "Experiment report 1", url: "/assets/reports/Mmari_Brian_298.pdf" },
      { title: "Experiment report 2", url: "/assets/reports/Mmari_Brian_398.pdf" },
    ],
    videos: [
      { title: "Fish Turning", url: "/videos/10_15(50_1_7)_cut_4x.mp4" },
      { title: "Fish Straight", url: "/videos/10_17(50_1_1)_cut.mp4" },
    ],
  },
  {
    date: "May - July 2024",
    title: "Summer Undergraduate Research Fellow, \"Active Aerodynamic Tail Enhances Agile Locomotion of Legged Robots\"",
    company: "Purdue University, RISE Lab",
    advisor: "Prof. Upinder Kaur, Dr. Jiajun An",
    description:
      "Engineered an active aerodynamic tail for Mini Pupper 2 and built a corresponding URDF, then simulated it in NVIDIA Isaac Sim (Omniverse) to evaluate stability before hardware testing. Trained physics-informed regression and LSTM models to characterize tail-induced stabilization and disturbance rejection. Produced agility metrics for the Mini Pupper 2, useful for understanding how quadruped robots can behave in unpredictable environments.",
    reports: [
      { title: "Experiment report", url: "/assets/reports/Mmari_Brian_TechnicalSummary.pdf" },
      { title: "Experiment slides", url: "/assets/reports/Purdue Symposium Presentation.pdf" },
    ],
    videos: [
      { title: "Tail Moving Left", url: "/videos/MoveLeft.mp4" },
      { title: "Tail Moving Right", url: "/videos/MoveRight.mp4" },
      { title: "Tail Swinging", url: "/videos/Swing.mp4" },
    ],
  },
  {
    date: "Jan - May 2024",
    title: "R & D Engineering Fellow, \"Exploring portable applications for the Plastic Hunter\"",
    company: "Polygone Systems, Inc.",
    manager: "Nathaniel Banks & Yidian Liu",
    description:
      "Designed an electrical system using Raspberry Pi for an Unmanned Surface Vehicle (USV). Wired and C++ coded a Buffer Pad system for integration into a water filtration system. Contributed in securing $1,973,817 from the Marine Debris Challenge to develop infrastructure for removing microplastic debris from the Hudson River Watershed.",
    companyUrl: "https://polygonesystems.com.com/",
    reports: [
      { title: "Project report", url: "/assets/reports/Brian Polygone-Work.pdf" },
    ],
    videos: [
      { title: "Final Testing", url: "/videos/Final_Testing.MOV" },
      { title: "Motor Testing 1", url: "/videos/Motor_Testing 1.MOV" },
      { title: "Motor Testing 2", url: "/videos/Motor_Testing 2.mov" },
    ],
  },
  {
    date: "June - Sep 2023",
    title: "Electrical Engineer Intern, \"MicroFred\"",
    company: "Clear Blue Sea Organization",
    manager: "Tim Perry",
    description:
      "Researched ROS-compatible GPS, IMU, and network hardware for semi-autonomous vehicle integration. Created wiring schematics on CircuitLab & performed circuit simulation and analysis on SPICE. Facilitated wireless communication between the underwater vehicle MicroFRED and its controller, enhancing semi-autonomous vehicle control.",
    companyUrl: "https://www.clearbluesea.org/",
    reports: [
      { title: "Project report", url: "/assets/reports/Brian Mmari Task List.pdf" },
    ],
  },
];
