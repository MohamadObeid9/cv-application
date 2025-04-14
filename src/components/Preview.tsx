import { LucideLayers3 } from "lucide-react";
type props = {
  openNavBar: React.Dispatch<React.SetStateAction<boolean>>;
};
export const Preview = ({ openNavBar }: props) => {
  const handleClick = () => {
    openNavBar(true);
  };
  return (
    <div className="bg-gray-300 w-full max-h-screen overflow-auto">
      <div className="bg-gray-400 py-px sticky top-0">
        <LucideLayers3
          className="m-5 lg:hidden cursor-pointer"
          size={25}
          onClick={handleClick}
        />
      </div>
      <div className="bg-white mx-5 md:mx-10 mt-5 mb-10 px-5 md:px-10 pt-2 md:pt-5 pb-5 md:pb-10 flex flex-col">
        <h1 className="text-center font-bold text-3xl capitalize mt-5 mb-1 tracking-wide">
          john Smith
        </h1>
        <h3 className="text-center mb-5 font-semibold text-sm">
          Full Stack Developer
        </h3>
        <div className=" flex flex-col items-start md:grid md:grid-cols-2 xl:grid-cols-4 gap-2 mb-5">
          <div className="flex  gap-1 md:justify-center text-xs   hover:text-blue-500 cursor-pointer">
            <span className="font-bold">Phone:</span>+1 (555) 123-4567
          </div>
          <div className="flex  gap-1  text-xs   hover:text-blue-500 cursor-pointer">
            <span className="font-bold">Email:</span>
            john.smith@example.com
          </div>
          <div className="flex  gap-1  text-xs md:justify-center  hover:text-blue-500">
            <span className="font-bold">Github:</span>{" "}
            <a href="https://github.com/johnsmith">github.com/johnsmith</a>
          </div>
          <div className="flex  gap-1  text-xs  hover:text-blue-500">
            <span className="font-bold">LinkedIn:</span>{" "}
            <a href="https://linkedin.com/in/johnsmith">
              linkedin.com/in/johnsmith
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold text-lg md:text-2xl tracking-wide mr-2">
            Profile
          </h1>
          <div className=" w-full border-b-3 mt-3 md:mt-5"></div>
        </div>
        <div className="text-xs md:text-sm my-2 md:my-5 ">
          Experienced software developer with over 5 years of expertise in web
          development and cloud technologies. Passionate about creating clean,
          efficient, and scalable code. Strong problem-solving skills and
          ability to work in fast-paced environments.
        </div>
        <div className="flex items-center  my-2 md:my-5">
          <h1 className="font-bold text-lg md:text-2xl tracking-wide whitespace-nowrap mr-2">
            Work Experience
          </h1>
          <div className="w-full border-b-3 mt-2 md:mt-5"></div>
        </div>
        <div>
          <div className="font-bold md:text-lg">Senior Software Developer</div>
          <div className="flex items-center pl-2 md:pl-5">
            <div className="font-semibold max-md:text-sm whitespace-nowrap">
              Tech Innovations
            </div>
            <span className="p-1 font-bold">-</span>
            <div className="text-slate-500 text-xs whitespace-nowrap">
              San Francisco, CA
            </div>
          </div>
          <div className="text-slate-500 text-xs md:text-sm pl-2 md:pl-5">
            January 2020 - Present
          </div>
          <ul className=" my-2 md:my-5 list-disc ml-4 pl-2 md:pl-5">
            <li className="text-xs my-1 ">
              Led a team of 5 developers to deliver high-quality web
              applications
            </li>
            <li className="text-xs my-1">
              Implemented CI/CD pipelines that reduced deployment time by 40%
            </li>
            <li className="text-xs my-1">
              Refactored legacy codebase, improving performance by 30%
            </li>
          </ul>
          <div className="flex items-center my-2 md:my-5">
            <h1 className="font-bold text-lg md:text-2xl tracking-wide whitespace-nowrap mr-2">
              Education
            </h1>
            <div className=" w-full border-b-3 mt-2 md:mt-5"></div>
          </div>
          <div>
            <div className="flex items-center">
              <div className="font-bold text-sm md:text-xl whitespace-nowrap">
                Master of Science in Computer Science
              </div>
            </div>
            <div className="py-1 flex items-center pl-2 md:pl-5">
              <div className="font-semibold max-md:text-sm whitespace-nowrap">
                University of Technology
              </div>
              <span className="px-2 font-bold">-</span>
              <div className="text-slate-500 text-xs whitespace-nowrap">
                Boston, MA
              </div>
            </div>
            <div className="text-slate-500 text-sm pl-2 md:pl-5">
              2015 - 2017
            </div>
          </div>
          <div className="flex items-center my-2 md:my-5">
            <h1 className="font-bold text-lg md:text-2xl tracking-wide whitespace-nowrap mr-2">
              Technical Skills
            </h1>
            <div className=" w-full border-b-3 mt-2 md:mt-5"></div>
          </div>
          <div className="flex max-md:flex-col max-md:items-start gap-2 items-center my-2 max-md:pl-2">
            <div className="font-bold max-md:text-sm">
              Programming Languages:
            </div>
            <div className="text-xs md:text-sm">
              JavaScript, TypeScript, Python, Java, SQL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
