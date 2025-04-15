import { LucideLayers3 } from "lucide-react";
import { exampleData } from "./example";
type props = {
  openNavBar: React.Dispatch<React.SetStateAction<boolean>>;
  data: typeof exampleData;
};
export const Preview = ({ openNavBar, data }: props) => {
  const handleClick = () => {
    openNavBar(true);
  };
  return (
    <div className="bg-gray-300 w-full h-screen overflow-auto">
      <div className="bg-gray-400 py-px sticky top-0">
        <LucideLayers3
          className="m-5 lg:hidden cursor-pointer"
          size={25}
          onClick={handleClick}
        />
      </div>
      <div className="bg-white min-h-[85vh] mx-5 md:mx-10 mt-5 mb-10 px-5 md:px-10 pt-2 md:pt-5 pb-5 md:pb-10 flex flex-col">
        <h1 className="text-center font-bold text-3xl capitalize mt-5 mb-1 tracking-wide">
          {data.personnelDetails.fullName}
        </h1>
        <h3 className="text-center mb-5 font-semibold text-sm">
          {data.personnelDetails.jobTitle}
        </h3>
        <div className=" flex flex-col items-start md:grid md:grid-cols-2 xl:grid-cols-4 gap-2 mb-5">
          {data.personnelDetails.phone && (
            <div className="flex  gap-1 md:justify-center text-xs   hover:text-blue-500 cursor-pointer">
              <span className="font-bold">Phone:</span>
              {data.personnelDetails.phone}
            </div>
          )}
          {data.personnelDetails.email && (
            <div className="flex  gap-1  text-xs   hover:text-blue-500 cursor-pointer">
              <span className="font-bold">Email:</span>
              {data.personnelDetails.email}
            </div>
          )}
          {data.personnelDetails.github && (
            <div className="flex  gap-1  text-xs md:justify-center  hover:text-blue-500">
              <span className="font-bold">Github:</span>
              <a href={data.personnelDetails.github}>
                {data.personnelDetails.github.slice(8)}
              </a>
            </div>
          )}
          {data.personnelDetails.linkedin && (
            <div className="flex  gap-1  text-xs  hover:text-blue-500">
              <span className="font-bold">LinkedIn:</span>
              <a href={data.personnelDetails.linkedin}>
                {data.personnelDetails.linkedin.slice(8)}
              </a>
            </div>
          )}
        </div>
        {data.profile.summary && (
          <div className="flex items-center">
            <h1 className="font-bold text-lg md:text-2xl tracking-wide mr-2">
              Profile
            </h1>
            <div className=" w-full border-b-3 mt-3 md:mt-5"></div>
          </div>
        )}
        <div className="text-xs md:text-sm my-2 md:my-5 ">
          {data.profile.summary}
        </div>
        {data.workExperience.length > 0 && (
          <div className="flex items-center  my-2 md:my-5">
            <h1 className="font-bold text-lg md:text-2xl tracking-wide whitespace-nowrap mr-2">
              Work Experience
            </h1>
            <div className="w-full border-b-3 mt-2 md:mt-5"></div>
          </div>
        )}
        {data.workExperience.map((experience) => (
          <>
            <div className="font-bold md:text-lg">{experience.jobTitle}</div>
            <div className="flex items-center pl-2 md:pl-5">
              <div className="font-semibold max-md:text-sm whitespace-nowrap">
                {experience.company}
              </div>
              <span className="p-1 font-bold">-</span>
              <div className="text-slate-500 text-xs whitespace-nowrap">
                {experience.companyLocation}
              </div>
            </div>
            <div className="text-slate-500 text-xs md:text-sm pl-2 md:pl-5">
              {experience.startDate + " - " + experience.endDate}
            </div>
            <ul className=" my-2 md:my-5 list-disc ml-4 pl-2 md:pl-5">
              {experience.responsibilities.map((responsibility) => (
                <li className="text-xs my-1" key={responsibility.key}>
                  {responsibility.task}
                </li>
              ))}
            </ul>
          </>
        ))}

        {data.education.length > 0 && (
          <div className="flex items-center my-2 md:my-5">
            <h1 className="font-bold text-lg md:text-2xl tracking-wide whitespace-nowrap mr-2">
              Education
            </h1>
            <div className=" w-full border-b-3 mt-2 md:mt-5"></div>
          </div>
        )}
        {data.education.map((section) => (
          <>
            <div className="flex items-center">
              <div className="font-bold text-sm md:text-xl whitespace-nowrap">
                {section.degree}
              </div>
            </div>
            <div className="py-1 flex items-center pl-2 md:pl-5">
              <div className="font-semibold max-md:text-sm whitespace-nowrap">
                {section.university}
              </div>
              <span className="px-2 font-bold">-</span>
              <div className="text-slate-500 text-xs whitespace-nowrap">
                {section.uniLocation}
              </div>
            </div>
            <div className="text-slate-500 text-sm pl-2 md:pl-5">
              {section.startDate + " - " + section.endDate}
            </div>
          </>
        ))}

        {data.technicalSkills.length > 0 && (
          <div className="flex items-center my-2 md:my-5">
            <h1 className="font-bold text-lg md:text-2xl tracking-wide whitespace-nowrap mr-2">
              Technical Skills
            </h1>
            <div className=" w-full border-b-3 mt-2 md:mt-5"></div>
          </div>
        )}
        {data.technicalSkills.map((section) => (
          <div className="flex max-md:flex-col max-md:items-start gap-2 items-center my-2 max-md:pl-2">
            <div className="font-bold max-md:text-sm">
              {section.skillTitle} :
            </div>
            <div className="text-xs md:text-sm">{section.skills}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
