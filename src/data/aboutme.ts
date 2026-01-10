export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Brian Goodluck Mmari",
  title: "Machine Learning Engineer",
  institution: "Cofactor AI",
  // Note that links work in the description
  description:
    "Hi there! I'm currently at <a href='https://www.cofactor.ai' target='_blank'>Cofactor AI</a>, where I build machine learning architectures that help hospitals capture value lost through clinical documentation gaps, coding inefficiencies, and denied or underpaid claims.<br><br>I recently graduated from <a href='https://www.princeton.edu' target='_blank'>Princeton University</a>, where I earned a degree in Electrical and Computer Engineering with a concentration in Robotics & Cyber-Physical Systems. My technical interests span legged and underwater robotics, multi-agent systems, machine learning, and embedded systems.<br><br>My long-term goal is to build multi-agent systems that can robustly interact in both physical and virtual environments. In the meantime, I'm focused on deepening my expertise by collaboratively solving challenging, real-world problems across AI, robotics, and systems—feel free to reach out via <a href='https://www.linkedin.com/in/brian-mmari-88b11216b' target='_blank'>LinkedIn</a> if you'd like to connect.<br><br>Outside of work, I enjoy playing soccer, working out, mentoring and tutoring students, playing board games, and spending time in nature.",
  email: "bm6442@alumni.princeton.edu",
  imageUrl: "/assets/img/Brian Mmari Headshot.jpeg",
  googleScholarUrl: "https://scholar.google.com/citations?user=um_Xny8AAAAJ&hl=en",
  githubUsername: "BRIANMMARI10",
  linkedinUsername: "brian-mmari-88b11216b",
  cvUrl: "/assets/resume/Mmari_Brian_Grad_CV.docx-3.pdf",
  institutionUrl: "https://www.cofactor.ai",
};
