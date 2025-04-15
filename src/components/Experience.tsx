import {
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  Check,
  Plus,
  X,
  Trash2,
  Edit,
} from "lucide-react";
import { Input } from "./Input";
import { useState } from "react";
import { exampleData } from "./example";
type props = {
  experience: typeof exampleData.workExperience;
  expended: boolean;
  onClick: () => void;
};
export const ExperienceDetails = ({ experience, expended, onClick }: props) => {
  const [open, setOpen] = useState(false);
  const [responsibility, setResponsibility] = useState(0);
  const [openResponsibility, setOpenResponsibility] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const handleClick = () => {
    onClick();
  };
  const addExperienceClick = () => {
    setOpen(open ? false : true);
  };
  const addResponsibilityClick = () => {
    setResponsibility((prev) => prev + 1);
    setOpenResponsibility(true);
  };
  return (
    <div className="border shadow-md px-5 rounded-lg w-[90%] border-slate-400">
      {/* Header Section */}
      <div
        className={`flex justify-between items-center py-5 ${
          expended ? "border-b border-slate-400" : ""
        }`}
        onClick={handleClick}
      >
        <h1 className="flex font-bold text-xl gap-2 items-center cursor-default">
          <BriefcaseBusiness />
          Work Experience
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expended && (
        <div>
          {experience.map((section) =>
            editOpen ? (
              <>
                <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
                  <h1 className="font-bold text-lg  tracking-wide"></h1>
                  <Input
                    type="text"
                    title="Job Title"
                    value={section.jobTitle}
                    name="jobTitle"
                    placeHolder="Full Stack Developper | Machine Learn Engineer"
                    required={true}
                  />
                  <Input
                    type="text"
                    title="Company"
                    value={section.company}
                    name="company"
                    placeHolder="Google | Apple | Microsoft"
                    required={true}
                  />
                  <Input
                    type="date"
                    title="Start Date"
                    value={section.startDate}
                    name="startDate"
                    placeHolder="02-3-2023"
                    required={true}
                  />
                  <Input
                    type="date"
                    title="End Date"
                    value={section.endDate}
                    name="endDate"
                    placeHolder="10-2-2025"
                    required={true}
                  />
                  <Input
                    type="text"
                    title="Location"
                    value={section.companyLocation}
                    name="companyLocation"
                    placeHolder="Berlin,Germany"
                    required={true}
                  />
                  <div>
                    {openResponsibility && (
                      <>
                        <h2 className="font-semibold tracking-wide text-lg mt-2">
                          Responsibilities
                        </h2>
                        {/* Render responsibilities dynamically */}
                        {Array.from({ length: responsibility }).map(
                          (_, index) => (
                            <div className="flex gap-1 items-center">
                              <input
                                key={index}
                                type="text"
                                placeholder="Add a skill or an achievement"
                                className="border my-1 w-full rounded-lg border-slate-400 placeholder:text-xs p-1"
                              />
                              <X
                                className="border border-red-500 p-1 rounded-lg hover:bg-red-500 hover:text-white "
                                size={30}
                                onClick={() => {
                                  setResponsibility((prev) => prev - 1);
                                }}
                              />
                            </div>
                          )
                        )}
                      </>
                    )}
                  </div>
                  <button
                    onClick={addResponsibilityClick}
                    className="flex items-center gap-2 border-green-400 border rounded-lg tracking-wide font-semibold px-2 py-1 my-4 text-sm hover:bg-green-400 hover:text-white "
                  >
                    <Plus size={17} />
                    Add Responsibility
                  </button>
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
                          setEditOpen(false);
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
              <div className="flex items-center justify-between border border-slate-400 rounded-lg mt-3 px-3 py-2">
                {section.jobTitle}{" "}
                <Edit
                  size={20}
                  className="hover:text-blue-500"
                  onClick={() => setEditOpen(true)}
                />
              </div>
            )
          )}
          {open && (
            <div className="border border-slate-400 rounded-lg mt-3 px-3 py-2">
              <h1 className="font-bold text-lg  tracking-wide"></h1>
              <Input
                type="text"
                title="Job Title"
                value=""
                name="jobTitle"
                placeHolder="Full Stack Developper | Machine Learn Engineer"
                required={true}
              />
              <Input
                type="text"
                title="Company"
                value=""
                name="company"
                placeHolder="Google | Apple | Microsoft"
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
                name="companyLocation"
                placeHolder="Berlin,Germany"
                required={true}
              />
              <div>
                {openResponsibility && (
                  <>
                    <h2 className="font-semibold tracking-wide text-lg mt-2">
                      Responsibilities
                    </h2>
                    {/* Render responsibilities dynamically */}
                    {Array.from({ length: responsibility }).map((_, index) => (
                      <div className="flex gap-1 items-center">
                        <input
                          key={index}
                          type="text"
                          placeholder="Add a skill or an achievement"
                          className="border my-1 w-full rounded-lg border-slate-400 placeholder:text-xs p-1"
                        />
                        <X
                          className="border border-red-500 p-1 rounded-lg hover:bg-red-500 hover:text-white "
                          size={30}
                          onClick={() => {
                            setResponsibility((prev) => prev - 1);
                          }}
                        />
                      </div>
                    ))}
                  </>
                )}
              </div>
              <button
                onClick={addResponsibilityClick}
                className="flex items-center gap-2 border-green-400 border rounded-lg tracking-wide font-semibold px-2 py-1 my-4 text-sm hover:bg-green-400 hover:text-white "
              >
                <Plus size={17} />
                Add Responsibility
              </button>
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
          {/* Add education button */}
          <div className="flex flex-col items-center">
            <button
              className="flex items-center gap-1 font-semibold my-3 border border-blue-400 rounded-full px-3 py-2 hover:bg-blue-400 hover:text-white"
              onClick={addExperienceClick}
            >
              <Plus size={20} /> Add Experience
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
