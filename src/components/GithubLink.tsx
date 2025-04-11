import { Github } from "lucide-react";
type props = {
  style: string;
};
export const GithubLink = ({ style }: props) => {
  return (
    <div className={style}>
      <a
        href="https://github.com/MohamadObeid9"
        className="flex  items-center gap-3 text-slate-700 border-t w-40 py-2 hover:text-blue-500 border-slate-400 dark:border-slate-400"
      >
        <Github size={18} /> Mohamad Obeid
      </a>
    </div>
  );
};
