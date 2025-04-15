import { EducationDetails } from "./Education";
import { PersonnnelDetails } from "./PersonnelDetails";
import { ExperienceDetails } from "./Experience";
import { Profile } from "./Profile";
import { Skills } from "./Skills";
import { exampleData } from "./example";
import { useState } from "react";
type props = {
  data: typeof exampleData;
  setData: React.Dispatch<React.SetStateAction<typeof exampleData>>;
};
export const FormContainer = ({ data, setData }: props) => {
  const handlePersonnelDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setData((prev) => ({
      ...prev,
      personnelDetails: {
        ...prev.personnelDetails,
        [name]: value,
      },
    }));
  };
  const handleProfileChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target as HTMLTextAreaElement;
    const { name, value } = target;
    setData((prev) => ({
      ...prev,
      profile: {
        ...prev.profile,
        [name]: value,
      },
    }));
  };
  const setEducation = (educationData: typeof exampleData.education) => {
    setData((prev) => ({
      ...prev,
      education: educationData,
    }));
  };
  const setSkills = (skillData: typeof exampleData.technicalSkills) => {
    setData((prev) => ({
      ...prev,
      technicalSkills: skillData,
    }));
  };
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="xl:bg-gray-100 flex flex-col max-xl:my-3 items-center gap-3  w-sm max-xl:py-2 max-xl:max-h-[75vh] max-h-screen xl:pb-10 overflow-auto">
      <PersonnnelDetails
        personnelDetails={data.personnelDetails}
        onChange={handlePersonnelDetailsChange}
        expended={activeIndex === 1}
        onClick={() =>
          activeIndex !== 1 ? setActiveIndex(1) : setActiveIndex(0)
        }
      />
      <Profile
        profile={data.profile}
        onChange={handleProfileChange}
        expended={activeIndex === 2}
        onClick={() =>
          activeIndex !== 2 ? setActiveIndex(2) : setActiveIndex(0)
        }
      />
      <EducationDetails
        education={data.education}
        setEducation={setEducation}
        expended={activeIndex === 3}
        onClick={() =>
          activeIndex !== 3 ? setActiveIndex(3) : setActiveIndex(0)
        }
      />
      <Skills
        skills={data.technicalSkills}
        onChange={setSkills}
        expended={activeIndex === 4}
        onClick={() =>
          activeIndex !== 4 ? setActiveIndex(4) : setActiveIndex(0)
        }
      />
      <ExperienceDetails
        experience={data.workExperience}
        expended={activeIndex === 5}
        onClick={() =>
          activeIndex !== 5 ? setActiveIndex(5) : setActiveIndex(0)
        }
      />
    </div>
  );
};
