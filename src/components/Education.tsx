import {
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  Check,
  X,
} from "lucide-react";
import { Input } from "./Input";
import { useState } from "react";
export const EducationDetails = () => {
  const [expended, setExpended] = useState(false);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Untitled Degree");
  const handleClick = () => {
    setExpended(expended ? false : true);
  };
  const addEducationClick = () => {
    setOpen(open ? false : true);
  };
  return (
    <div className="border px-5 rounded-lg w-[90%] border-slate-400">
      {/* Header Section */}
      <div
        className={`flex justify-between items-center py-5 ${
          expended ? "border-b border-slate-400" : ""
        }`}
        onClick={handleClick}
      >
        <h1 className="flex font-bold text-xl gap-2 items-center cursor-default">
          <GraduationCap />
          Education
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expended && (
        <div>
          {open && (
            <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
              <h1 className="font-bold text-lg  tracking-wide">{value}</h1>
              <Input
                type="text"
                value="Degree"
                placeHolder="Degree | Field of study"
                required={true}
              />
              <Input
                type="text"
                value="School"
                placeHolder="School | College | University"
                required={true}
              />
              <Input
                type="date"
                value="Start Date"
                placeHolder="02-3-2023"
                required={true}
              />
              <Input
                type="date"
                value="End Date"
                placeHolder="10-2-2025"
                required={true}
              />
              <Input
                type="text"
                value="Location"
                placeHolder="Berlin,Germany"
                required={true}
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
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <X size={15} />
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          )}
          {/* Add education button */}
          <div className="flex flex-col items-center">
            <button
              className="flex items-center gap-1 font-semibold my-3 border border-blue-400 rounded-full px-3 py-2 hover:bg-blue-400 hover:text-white"
              onClick={addEducationClick}
            >
              <Plus size={20} /> Add Education
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
