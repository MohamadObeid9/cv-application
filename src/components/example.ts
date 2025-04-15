export const exampleData = {
  personnelDetails: {
    fullName: "John Smith",
    jobTitle: "Full Stack Developer",
    phone: "+1 (555) 123-4567",
    email: "john.smith@example.com",
    github: "https://github.com/johnsmith",
    linkedin: "https://linkedin.com/in/johnsmith",
  },
  profile: {
    summary:
      "Experienced software developer with over 5 years of expertise in web development and cloud technologies. Passionate about creating clean, efficient, and scalable code. Strong problem-solving skills and ability to work in fast-paced environments.",
  },
  workExperience: [
    {
      jobTitle: "Senior Software Developer",
      company: "Tech Innovations",
      companyLocation: "San Francisco,CA",
      startDate: "January 2020",
      endDate: "Present",
      responsibilities: [
        {
          task: "Led a team of 5 developers to deliver high-quality web applications",
          key: crypto.randomUUID(),
        },
        {
          task: "Implemented CI/CD pipelines that reduced deployment time by 40%",
          key: crypto.randomUUID(),
        },
        {
          task: "Refactored legacy codebase, improving performance by 30%",
          key: crypto.randomUUID(),
        },
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      university: "University of Technology",
      uniLocation: "Boston,MA",
      startDate: "2015",
      endDate: "2017",
    },
    {
      degree: "Master of Science in  Science",
      university: "University of Technology",
      uniLocation: "Boston,MA",
      startDate: "2015",
      endDate: "2017",
    },
  ],
  technicalSkills: [
    {
      skillTitle: "Programming Languages:",
      skills: "JavaScript , TypeScript , Python , Java , SQl",
    },
  ],
};
