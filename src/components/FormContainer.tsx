import { EducationDetails } from "./Education";
import { PersonnnelDetails } from "./PersonnelDetails";
import { ExperienceDetails } from "./Experience";
import { GithubLink } from "./GithubLink";

export const FormContainer = () => {
  return (
    <div className="bg-gray-100 h-screen  w-sm max-md:py-2 flex flex-col justify-between relative">
      <div className="flex flex-col items-center gap-5">
        <PersonnnelDetails />
        <EducationDetails />
        <ExperienceDetails />
      </div>
      <GithubLink style={"md:hidden flex justify-center items-end absolute bottom-25 left-30"} />
    </div>
  );
};
