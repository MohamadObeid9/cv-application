import { EducationDetails } from "./Education";
import { PersonnnelDetails } from "./PersonnelDetails";
import { ExperienceDetails } from "./Experience";
import { Profile } from "./Profile";
import { Skills } from "./Skills";

export const FormContainer = () => {
  return (
    <div className="xl:bg-gray-100 flex flex-col max-xl:my-3 items-center gap-3  w-sm max-xl:py-2 max-xl:max-h-[75vh] overflow-auto">
      <PersonnnelDetails />
      <Profile />
      <EducationDetails />
      <Skills />
      <ExperienceDetails />
    </div>
  );
};
