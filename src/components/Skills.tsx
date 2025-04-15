import {
  ChevronDown,
  ChevronUp,
  Plus,
  TerminalSquareIcon,
  Trash2,
  Check,
  X,
  Edit,
} from "lucide-react";
import { useState } from "react";
import { Input } from "./Input";
import { exampleData } from "./example";
type props = {
  skills: typeof exampleData.technicalSkills;
  expended: boolean;
  onClick: () => void;
  onChange: (skillData: typeof exampleData.technicalSkills) => void;
};
export const Skills = ({ skills, expended, onClick, onChange }: props) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpend] = useState(false);
  const handleClick = () => {
    onClick();
    setEditOpend(false);
    setOpen(false);
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
        <h1 className="flex font-bold text-xl gap-2 items-center cursor-default">
          <TerminalSquareIcon />
          Skills
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expended && (
        <div>
          {skills.map((skill) =>
            editOpen ? (
              <>
                <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
                  <Input
                    type="text"
                    title="Skill Category"
                    value={skill.skillTitle}
                    name="skillTitle"
                    placeHolder="E.g.,Progamming Languages ,Soft Skills"
                    required={false}
                  />
                  <Input
                    type="text"
                    title="Skills (comma separated)"
                    value={skill.skills}
                    name="skills"
                    placeHolder="E.g.,Java,Python,React,Djando,Node"
                    required={false}
                  />
                  <div className="flex justify-between my-2">
                    <button className="flex items-center  rounded-lg gap-1 px-1 border border-red-500 hover:bg-red-500 hover:text-white">
                      <Trash2 size={15} />
                      Delete
                    </button>
                    <div className="flex gap-2">
                      <button
                        className="flex items-center rounded-lg gap-1 px-1 border border-blue-500 hover:bg-blue-500 hover:text-white"
                        onClick={() => {
                          setOpen(false);
                          setEditOpend(false);
                        }}
                      >
                        <Check size={15} />
                        Edit
                      </button>
                      <button
                        className="flex items-center rounded-lg gap-1 px-1 border border-black hover:bg-black hover:text-white"
                        onClick={() => {
                          setOpen(false);
                          setEditOpend(false);
                        }}
                      >
                        <X size={15} />
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
                <div className="font-bold pb-2 flex items-center justify-between">
                  {skill.skillTitle}
                  <Edit
                    size={20}
                    className="hover:text-blue-500"
                    onClick={() => setEditOpend(true)}
                  />
                </div>
                <div className="text-sm">{skill.skills}</div>
              </div>
            )
          )}
          {open && (
            <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
              <Input
                type="text"
                title="Skill Category"
                value=""
                name="skillTitle"
                placeHolder="E.g.,Progamming Languages ,Soft Skills"
                required={false}
              />
              <Input
                type="text"
                title="Skills (comma separated)"
                value=""
                name="skills"
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
