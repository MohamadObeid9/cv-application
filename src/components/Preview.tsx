import {
  Github,
  Linkedin,
  LucideLayers3,
  LucideWalletCards,
  Phone,
} from "lucide-react";
import { useRef } from "react";
export const Preview = () => {
  const cvContainerRef = useRef<HTMLDivElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    const nav = document.querySelector("#navBar");
    nav?.classList.add("translate-x-0");
    topBarRef.current?.classList.remove("sticky");
    cvContainerRef.current?.classList.remove("relative");
  };
  return (
    <div
      className="bg-gray-300 w-full min-h-screen relative"
      ref={cvContainerRef}
    >
      <div
        className="bg-gray-400 py-px  sticky top-0"
        id="topBar"
        ref={topBarRef}
      >
        <LucideLayers3
          className="m-5 lg:hidden"
          size={25}
          onClick={handleClick}
        />
      </div>
      <div className="bg-white min-w-1/3 h-screen mx-10 mt-5 mb-20 px-10 flex flex-col">
        <h1 className="text-center font-bold text-3xl capitalize my-5 tracking-wide">
          john Smith
        </h1>
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 text-xs px-3 border-r hover:text-blue-500">
            <Phone size={15} />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex gap-1 text-xs px-3 border-r hover:text-blue-500">
            <LucideWalletCards size={15} />
            <a href="john.smith@example.com">john.smith@example.com</a>
          </div>
          <div className="flex gap-1 text-xs px-3 border-r hover:text-blue-500">
            <Github size={15} />
            <a href="https://github.com/johnsmith">github.com/johnsmith</a>
          </div>
          <div className="flex gap-1 text-xs px-3 hover:text-blue-500">
            <Linkedin size={15} />
            <a href="https://linkedin.com/in/johnsmith">
              linkedin.com/in/johnsmith
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <h1 className="font-bold text-2xl tracking-wide mr-2">Profile</h1>
          <div className=" w-full border-b-3 mt-5"></div>
        </div>
        <div className="text-sm my-5">
          Experienced software developer with over 5 years of expertise in web
          development and cloud technologies. Passionate about creating clean,
          efficient, and scalable code. Strong problem-solving skills and
          ability to work in fast-paced environments.
        </div>
        <div className="flex items-center">
          <h1 className="font-bold text-2xl tracking-wide mr-2">Experience</h1>
          <div className=" w-full border-b-3 mt-5"></div>
        </div>
        <div>
          <div className="flex justify-between mt-5">
            <div className="font-bold">Tech Innovations Inc.</div>
            <div className="text-slate-500 text-sm">San Francisco, CA</div>
          </div>
          <div className="flex justify-between">
            <div className="text-slate-500 text-sm">
              Senior Software Developer
            </div>
            <div className="text-slate-500 text-sm">January 2020 - Present</div>
          </div>
          <ul className="my-5 list-disc ml-4">
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
          <div className="flex items-center">
            <h1 className="font-bold text-2xl tracking-wide mr-2">Education</h1>
            <div className=" w-full border-b-3 mt-5"></div>
          </div>
          <div>
            <div className="flex justify-between mt-5">
              <div className="font-bold">University of Technology</div>
              <div className="text-slate-500 text-sm">Boston, MA</div>
            </div>
            <div className="flex justify-between">
              <div className="text-slate-500 text-sm">
                Master of Science in Computer Science
              </div>
              <div className="text-slate-500 text-sm">2015 - 2017</div>
            </div>
          </div>
          <div className="flex items-center">
            <h1 className="font-bold text-2xl tracking-wide mr-2 mt-5">Skills</h1>
            <div className=" w-full border-b-3 mt-5"></div>
          </div>
          <div className="flex gap-2 items-center my-2">
           <div className="font-bold">Programming Languages:</div>
           <div className="text-sm">JavaScript, TypeScript, Python, Java, SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
};
