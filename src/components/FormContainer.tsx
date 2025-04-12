import { EducationDetails } from "./Education";
import { PersonnnelDetails } from "./PersonnelDetails";
import { ExperienceDetails } from "./Experience";
import { Profile } from "./Profile";
import { Skills } from "./Skills";

export const FormContainer = () => {
  return (
    <div className="md:bg-slate-100 flex flex-col max-md:my-3 items-center gap-3  w-sm max-md:py-2 max-md:max-h-[75vh] overflow-auto">
      <PersonnnelDetails />
      <Profile />
      <EducationDetails />
      <Skills />
      <ExperienceDetails />
    </div>
  );
};
