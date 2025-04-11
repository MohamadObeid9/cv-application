import { FileUser, FilePlus, Github, Download, Trash2 } from "lucide-react";
export const BtnContainer = () => {
  return (
    <div className="px-5 flex flex-col h-screen justify-between border-r w-fit border-slate-400 dark:border-slate-400 ">
      <div>
        <h1 className="text-xl font-semibold mt-5 mb-10 flex items-center gap-2">
          <FileUser color="blue" strokeWidth={2} size={30} className="inline" />{" "}
          CV Generator
        </h1>
        <div className="flex flex-col gap-5 ">
          <button className="flex gap-2 text-lg border w-32 py-1 rounded-2xl items-center justify-center text-violet-500 hover:bg-violet-500 hover:text-white dark:border-violet-500">
            <FilePlus size={18} /> Example
          </button>
          <button className="flex gap-2 text-lg border w-32 py-1  rounded-2xl items-center justify-center text-red-500 hover:bg-red-500 hover:text-white dark:border-red-500">
            <Trash2 size={18} /> Clear
          </button>
          <button className="flex gap-2 text-lg border  w-32 py-1 rounded-2xl items-center justify-center text-green-500 hover:bg-green-500 hover:text-white dark:border-green-500">
            <Download size={18} /> Download
          </button>
        </div>
      </div>
      <div>
        <a
          href="https://github.com/MohamadObeid9"
          className="flex  items-center gap-3 border-t w-40 py-2 hover:text-blue-500 border-slate-400 dark:border-slate-400"
        >
          <Github size={18} /> Mohamad Obeid
        </a>
      </div>
    </div>
  );
};
