export interface Talk {
  date: string;
  venue: string;
  title: string;
  authors?: string;
  description?: string;
  slidesUrl?: string;
  videoUrl?: string;
  reports?: Array<{ title: string; url: string }>;
  videos?: Array<{ title: string; url: string }>;
}

export const talksData: Talk[] = [
  {
    date: "2024",
    venue: "Summer Undergraduate Research Symposium, Purdue University, West Lafayette, Indiana",
    title: "Active Aerodynamic Tail Enhances Agile Locomotion of Legged Robots in Challenging Natural Environments",
    authors: "Mmari B.G, Kaur, U., An J.",
    reports: [
      { title: "Purdue Symposium Presentation", url: "/assets/reports/Purdue Symposium Presentation.pdf" },
      { title: "Technical Summary", url: "/assets/reports/Mmari_Brian_TechnicalSummary.pdf" },
    ],
  },
];
