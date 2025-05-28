export type SkillGroup = {
  title: string;
  badges: {
    name: string;
    color: string;
    logo?: string;
    logoColor?: string;
    level?: string;
  }[];
};

export type Language = {
  name: string;
  level: string;
  color: string;
};

export const SkillGroups: SkillGroup[] = [
  {
    title: "Programming",
    badges: [
      { name: "Python", color: "3776AB", logo: "python", logoColor: "white" },
      { name: "Java", color: "ED8B00", logo: "openjdk", logoColor: "white" },
      { name: "C/C++", color: "00599C", logo: "cplusplus", logoColor: "gray" }
    ]
  },
  {
    title: "Web & Backend",
    badges: [
      { name: "Flask", color: "000000", logo: "flask", logoColor: "white" },
      { name: "MySQL", color: "4479A1", logo: "mysql", logoColor: "white" },
      { name: "Git", color: "F05032", logo: "git", logoColor: "white" },
      { name: "Linux", color: "FCC624", logo: "linux", logoColor: "black" }
    ]
  },
  {
    title: "AI/ML",
    badges: [
      { name: "PyTorch", color: "EE4C2C", logo: "pytorch", logoColor: "white" },
      { name: "TensorFlow", color: "FF6F00", logo: "tensorflow", logoColor: "white" },
      { name: "Pandas", color: "250458", logo: "pandas", logoColor: "white" },
      { name: "NumPy", color: "013243", logo: "numpy", logoColor: "white" }
    ]
  },
  {
    title: "Languages",
    badges: [
      { name: "English", color: "blue", level: "Fluent" },
      { name: "Cantonese", color: "4285F4", level: "Native" },
      { name: "Mandarin", color: "4285F4", level: "Native" }
    ]
  }
]; 