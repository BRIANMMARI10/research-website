export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  reports?: Array<{ title: string; url: string }>;
  videos?: Array<{ title: string; url: string }>;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Table Mountains Forest fires Predictor",
    description:
      "Predicting forest fires on the Table mountains. Dataset from AllTrails, NOAA, and NASA. Model testing: Gradient Boosting, Logistic Regression, Random Forest. Geospatial data and clustering for analytics.",
    technologies: ["Python", "Scikit-learn", "Machine Learning models", "Data Aggregation Tools", "Algorithms"],
    codeUrl: "https://github.com/BRIANMMARI10/SML312_FinalProject",
    imageUrl: "/assets/img/Table_logo.jpeg",
    reports: [
      { title: "SML312 Final Project Report", url: "/assets/reports/SML312_FinalProject.pdf" },
    ],
  },
  {
    title: "Autonomous Truck Driving",
    description:
      "Implemented RL algorithms on custom-designed robot trucks. iLQR and horizon planning for obstacle avoidance. 3rd place in lap time. Safety filter for driver action correction.",
    technologies: ["Python", "ROS", "iLQR algorithms", "onboard sensors"],
    imageUrl: "/assets/img/autonomous_logo.jpg",
    reports: [
      { title: "ECE346 Final Project Report", url: "/assets/reports/ECE346_FinalProject.pdf" },
    ],
  },
  {
    title: "Autonomous Car Lab Project",
    description:
      "Hand gesture control on a PID-tuned autonomous car. PI system for timed ramp navigation. Wireless glove control with flex sensors. Precision speed tracking with Hall-effect sensor.",
    technologies: ["PSOC", "Python", "embedded systems", "PCB design", "ESP32", "flex sensors"],
    codeUrl: "https://github.com/BRIANMMARI10/Car-and-Glove-Project",
    imageUrl: "/assets/img/carwithgloves.heic",
    reports: [
      { title: "Speed Control Report", url: "/assets/reports/SPEED CONTROL REPORT.pdf" },
      { title: "Navigation Report", url: "/assets/reports/NAVIGATION REPORT.pdf" },
    ],
  },
  {
    title: "Tanzania Weather SMS App",
    description:
      "User-responsive app for generating weather data for Tanzanian farmers. SMS Updates for Tanzanian Farmers. Real-time rainfall alerts. Enhanced server speed and data accessibility.",
    technologies: ["Java", "Python", "Twilio API"],
    codeUrl: "https://github.com/BRIANMMARI10/Tanzania-Weather-SMS",
    projectUrl: "https://youtu.be/YClk9BPwjW4?si=km_szSO34RR70rkJ",
    imageUrl: "/assets/img/sms_logo.jpg",
  },
  {
    title: "Differential Action",
    description:
      "Traction Control System for vehicles. Developed traction control algorithms. Integrated multi-sensor data via CAN and RS-485. Optimized slip ratio and cornering performance. Enhanced vehicle safety and efficiency.",
    technologies: ["Python", "C++", "MATLAB", "Simulink", "CAN protocol", "RS-485", "embedded systems software"],
    projectUrl: "https://princetonracingelectric.com/diff-action",
    imageUrl: "/assets/img/diffaction.jpg",
  },
  {
    title: "Wage Disparity Analysis Using Machine Learning",
    description:
      "Understanding Wage Disparities in the Mid-Atlantic Region Using Statistical Techniques. Utilized Polynomial Regression, Spline Regression, and GAMs to model wage trends by age, education, and time. Conducted ANOVA testing and logistic regression to assess model significance and predict high earners. Found education level as the key wage predictor.",
    technologies: ["Python", "PyGAM", "Polynomial Regression", "Spline Regression", "Generalized Additive Models", "Logistic Regression", "ANOVA Testing"],
    projectUrl: "https://www.youtube.com/watch?v=jqFAobX2ZKA",
    imageUrl: "/assets/img/wage disparities.jpeg",
    reports: [
      { title: "SML301 Final Project Presentation Slides", url: "/assets/reports/SML301 Final Project Presentation Slides.pdf" },
      { title: "SML301 Midsemester Lab", url: "/assets/reports/SML301 Midsemester Lab.pdf" },
    ],
  },
  {
    title: "Autonomous Cars Simulator",
    description:
      "Autonomous Cars Simulator. Implemented Dijstra, BFS, DFS, and A* algorithms. Analyzed performances of path-planning algorithms. Currently developing an MDP.",
    technologies: ["Python", "Pygame", "Path-planning", "Reinforcement Learning"],
    codeUrl: "https://github.com/BRIANMMARI10/autonomous-cars-simulation",
    imageUrl: "/assets/img/cars.png",
  },
  {
    title: "Clinical Trial Matching System",
    description:
      "Matched patients to clinical trials by computing semantic similarity using both Word2Vec and BERT (SentenceTransformer) embeddings. Extracted and cleaned eligibility criteria from raw XML clinical trial data and compared it against structured patient conditions. Built a similarity-based recommendation engine using cosine similarity to identify trial-patient matches with threshold tuning.",
    technologies: ["Python", "NLTK", "Word2Vec", "Hugging Face Transformers", "SentenceTransformers (BERT)"],
    codeUrl: "https://github.com/BRIANMMARI10/Clinical-Trial-Matching-System/tree/main",
    imageUrl: "/assets/img/clinical.jpeg",
  },
  {
    title: "Simulated Annealing for Swarm Navigation",
    description:
      "Designed a potential field planner for static environments with a large number of agents and obstacles. Applied Simulated Annealing to improve path quality and avoid local minima in dense environments. Evaluated performance across scales using Pandas and visualized trends with Matplotlib.",
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Simulated Annealing", "Potential Field Algorithm"],
    codeUrl: "https://github.com/BRIANMMARI10/MultiRobot-PotentialField-SA",
    imageUrl: "/assets/img/path.jpeg",
    reports: [
      { title: "CBE449 Final Project Report", url: "/assets/reports/CBE449_Final_Project.pdf" },
    ],
  },
  {
    title: "Semantic Usenet Explorer",
    description:
      "Built a semantic search engine over 18,000 Usenet posts using MiniLM sentence embeddings and FAISS for similarity search. Designed a UMAP-based visualization interface to reveal topic overlaps across usegroups in 2D latent space. Integrated GPT-4o with Retrieval-Augmented Generation (RAG) to support natural language queries with summarized results.",
    technologies: ["Python", "FAISS", "Hugging Face Transformers (MiniLM)", "UMAP", "GPT-4o (via AzureOpenAI)", "Google Colab (TPU)"],
    codeUrl: "https://github.com/BRIANMMARI10/semantic-usenet-explorer",
    imageUrl: "/assets/img/usenet.jpeg",
    reports: [
      { title: "Improving Usenet Archives: How to Process Metadataless Materials", url: "/assets/reports/Improving Usenet Archives_ How to Process Metadataless Materials.pdf" },
      { title: "TRA 301 Usenet Search Report", url: "/assets/reports/TRA_301__Usenet_Search.pdf" },
      { title: "TRA301 Final Code", url: "/assets/reports/TRA301_Final - Colab.pdf" },
    ],
  },
  {
    title: "Healthcare Cost Prediction",
    description:
      "Built a machine learning pipeline to predict medical procedure costs using payer type, hospital metadata, and geographic state features. Applied log transformation, one-hot encoding, and feature standardization to prepare a high-cardinality, skewed dataset for modeling. Evaluated and compared linear, decision tree, and feedforward neural network models, identifying overfitting issues and generalization tradeoffs.",
    technologies: ["Python", "NumPy", "Pandas", "scikit-learn", "Keras", "Matplotlib"],
    codeUrl: "https://github.com/BRIANMMARI10/healthcare-cost-prediction",
    projectUrl: "https://www.youtube.com/watch?v=kCG7YwAUNRA",
    imageUrl: "/assets/img/health.jpeg",
  },
];
