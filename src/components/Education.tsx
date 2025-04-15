import {
  GraduationCap,
  ChevronDown,
  ChevronUp,
  Plus,
  Trash2,
  Check,
  X,
  Edit,
} from "lucide-react";
import { Input } from "./Input";
import { useState } from "react";
import { exampleData } from "./example";
type props = {
  education: typeof exampleData.education;
  expended: boolean;
  onClick: () => void;
};
export const EducationDetails = ({ education, expended, onClick }: props) => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const handleClick = () => {
    onClick();
  };
  const addEducationClick = () => {
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
          <GraduationCap />
          Education
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expended && (
        <div>
          {education.map((section) =>
            editOpen ? (
              <>
                <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
                  <h1 className="font-bold text-lg">{section.degree}</h1>
                  <Input
                    type="text"
                    value={section.degree}
                    title="Degree"
                    name="degree"
                    placeHolder="Degree | Field of study"
                    required={true}
                  />
                  <Input
                    type="text"
                    title="School or University"
                    value={section.university}
                    name="university"
                    placeHolder="School | College | University"
                    required={true}
                  />
                  <Input
                    type="date"
                    title="Start Date"
                    value={String(new Date(section.startDate))}
                    name="startDate"
                    placeHolder="02-3-2023"
                    required={true}
                  />
                  <Input
                    type="date"
                    title="End Date"
                    value={String(new Date(section.endDate))}
                    name="endDate"
                    placeHolder="10-2-2025"
                    required={true}
                  />
                  <Input
                    type="text"
                    title="Location"
                    value={section.uniLocation}
                    name="uniLocation"
                    placeHolder="Berlin,Germany"
                    required={true}
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
                          setEditOpen(false);
                          setOpen(false);
                        }}
                      >
                        <Check size={15} />
                        Edit
                      </button>
                      <button
                        className="flex items-center rounded-lg gap-1 px-1 border border-black hover:bg-black hover:text-white"
                        onClick={() => {
                          setEditOpen(false);
                          setOpen(false);
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
              <div className="flex items-center border border-slate-400 rounded-lg mt-3 px-3 py-2 font-semibold">
                {section.degree}
                <Edit
                  className="hover:text-blue-500"
                  onClick={() => setEditOpen(true)}
                />
              </div>
            )
          )}
          {open && (
            <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
              <h1 className="font-bold text-lg  tracking-wide">{}</h1>
              <Input
                type="text"
                title="Degree"
                value=""
                name="degree"
                placeHolder="Degree | Field of study"
                required={true}
              />
              <Input
                type="text"
                title="School or University"
                value=""
                name="university"
                placeHolder="School | College | University"
                required={true}
              />
              <Input
                type="date"
                title="Start Date"
                value=""
                name="startDate"
                placeHolder="02-3-2023"
                required={true}
              />
              <Input
                type="date"
                title="End Date"
                value=""
                name="endDate"
                placeHolder="10-2-2025"
                required={true}
              />
              <Input
                type="text"
                title="Location"
                value=""
                name="uniLocation"
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
