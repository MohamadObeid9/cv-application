import { FileUser, FilePlus, Download, Trash2, X } from "lucide-react";
import { GithubLink } from "./GithubLink";
export const BtnContainer = () => {
  return (
    <div className="px-5 max-md:sticky max-md:top-0 flex flex-col md:h-screen justify-between md:border-r  border-slate-400  dark:border-slate-400 ">
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold mt-5 mb-5 md:mb-10 flex items-center gap-2">
            <FileUser
              color="blue"
              strokeWidth={2}
              size={30}
              className="inline"
            />{" "}
            CV Generator
          </h1>
          <X
            className="md:hidden"
            onClick={() => {
              const nav = document.querySelector("#navBar");
              nav?.classList.remove("translate-x-0");
            }}
          />
        </div>
        <div className="flex md:flex-col gap-1 md:gap-5 ">
          <button className="flex gap-2 md:text-lg border w-28  md:w-32 py-1 rounded-2xl items-center justify-center text-violet-500 hover:bg-violet-500 hover:text-white dark:border-violet-500">
            <FilePlus size={18} /> Example
          </button>
          <button className="flex gap-2 md:text-lg border w-28  md:w-32 py-1  rounded-2xl items-center justify-center text-red-500 hover:bg-red-500 hover:text-white dark:border-red-500">
            <Trash2 size={18} /> Clear
          </button>
          <button className="flex gap-2 md:text-lg border w-28  md:w-32 py-1 rounded-2xl items-center justify-center text-green-500 hover:bg-green-500 hover:text-white dark:border-green-500">
            <Download size={18} /> Download
          </button>
        </div>
      </div>
      <GithubLink style={"max-md:hidden"} />
    </div>
  );
};
