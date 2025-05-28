export type Award = {
  name: string;
  year: string;
  link?: string;
  image?: string;
  description?: string;
};

export type Education = {
  institution: string;
  degree: string;
  date: string;
  description: string[];
};

export type WorkExperience = {
  title: string;
  company: string;
  date: string;
  description: string[];
};

export const AwardList: Award[] = [
  {
    name: "CSE Outstanding Academic Performance (Bronze)",
    year: "2023-24"
  },
  {
    name: "Dean's List",
    year: "2021-24"
  },
  {
    name: "Academic Secretary",
    year: "2022",
    description: "The 43rd Bethlehem Hall Resident Association"
  }
];

export const EducationList: Education[] = [
  {
    institution: "The Chinese University of Hong Kong",
    degree: "Bachelor of Engineering in Artificial Intelligence: Systems and Technology",
    date: "Sep 2021 - Expected Aug 2025",
    description: [
      "Current GPA: 3.755 / 4.0",
      "Major GPA: 3.795 / 4.0"
    ]
  },
  {
    institution: "Bishop Hall Jubilee School",
    degree: "Hong Kong Diploma of Secondary Education",
    date: "Sep 2015 - Aug 2021",
    description: [
      "DSE(2021):",
      "5** in Maths and Physics,",
      "5* in Chemistry, ICT, and Maths (M2)",
      "5 in Chinese and English"      
    ]
  }
];

export const WorkExperienceList: WorkExperience[] = [
  {
    title: "Machine Learning Intern",
    company: "Glassbox AI Limited, Sha Tin",
    date: "Jun 2024 - Nov 2024",
    description: [
      "Backend pipeline for automated data fetching from APIs and LLM inference (Python, Flask, MySQL)",
      "Implemented and trained RNN-based models for sign language translation tasks",
      "Researched and optimized methods for temporal alignment on gesture sequences"
    ]
  }
];