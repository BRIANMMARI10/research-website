export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
  honors?: string[];
}

export const educationData: Education[] = [
  {
    year: "Aug 2021 - May 2025",
    institution: "Princeton University",
    degree: "Bachelor of Science in Engineering in Electrical and Computer Engineering",
    honors: [
      "<strong>Charlotte Mangum Student Support Program</strong>, <strong>Departmental Excellence in Engineering Funding</strong>, <strong>Undergraduate Fund for Academic Conferences</strong>: Awarded in total $1200 to present my research",
      "<strong>Princeton Pathways to Graduate School Program</strong>: Selected from a competitive pool into the 2024 cohort",
      "<strong>National Society of Black Engineers Conference Invitation</strong>: Granted free travel and accommodation by the Computer Science and Mechanical and Aerospace Engineering Departments to attend the NSBE conference in Kansas City, MO 2023",
    ],
    // Relevant Courseworks: Research Projects in Data Sciences, Optimal Learning, Intelligent Robotic Systems, Automatic Control Systems, Robotic and Autonomous Systems Lab, Machine Learning for Predictive Data Analytics, Algorithms and Data Structures
  },
];
