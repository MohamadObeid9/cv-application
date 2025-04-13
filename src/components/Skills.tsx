import {
  ChevronDown,
  ChevronUp,
  Plus,
  TerminalSquareIcon,
  Trash2,
  Check,
  X,
} from "lucide-react";
import { useState } from "react";
import { Input } from "./Input";
export const Skills = () => {
  const [expended, setExpended] = useState(false);
  const [open, setOpen] = useState(false);
  // const [value, setValue] = useState("Untitled Degree");
  const handleClick = () => {
    setExpended(expended ? false : true);
  };
  const addSkillsClick = () => {
    setOpen(open ? false : true);
  };
  return (
    <div className="border shadow-xl px-5 rounded-lg w-[90%] border-slate-400">
      {/* Header Section */}
      <div
        className={`flex justify-between items-center py-5 ${
          expended ? "border-b border-slate-400" : ""
        }`}
        onClick={handleClick}
      >
        {" "}
        <h1 className="flex font-bold text-xl gap-2 items-center cursor-default">
          <TerminalSquareIcon />
          Skills
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expended && (
        <div>
          {open && (
            <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
              <Input
                type="text"
                value="Skill Category"
                placeHolder="E.g.,Progamming Languages ,Soft Skills"
                required={false}
              />
              <Input
                type="text"
                value="Skills (comma separated)"
                placeHolder="E.g.,Java,Python,React,Djando,Node"
                required={false}
              />
              <div className="flex justify-between my-2">
                <button className="flex items-center  rounded-lg gap-1 px-1 border border-red-500 hover:bg-red-500 hover:text-white">
                  <Trash2 size={15} />
                  Delete
                </button>
                <div className="flex gap-2">
                  <button className="flex items-center rounded-lg gap-1 px-1 border border-blue-500 hover:bg-blue-500 hover:text-white">
                    <Check size={15} />
                    Save
                  </button>
                  <button
                    className="flex items-center rounded-lg gap-1 px-1 border border-black hover:bg-black hover:text-white"
                    onClick={() => setOpen(false)}
                  >
                    <X size={15} />
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Add education button  */}
          <div className="flex flex-col items-center">
            <button
              className="flex items-center gap-1 font-semibold my-3 border border-blue-400 rounded-full px-3 py-2 hover:bg-blue-400 hover:text-white"
              onClick={addSkillsClick}
            >
              <Plus size={20} /> Add Skill
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
