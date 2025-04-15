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
  setEducation: (educationData: typeof exampleData.education) => void;
};

export const EducationDetails = ({
  education,
  expended,
  onClick,
  setEducation,
}: props) => {
  const [open, setOpen] = useState(false);
  // const [editOpen, setEditOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(-1);
  const handleClick = () => {
    onClick();
    // setEditOpen(false);
    setOpen(false);
    setEditingIndex(-1);
  };

  const handleChange = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    type EducationKeys =
      | "degree"
      | "university"
      | "uniLocation"
      | "startDate"
      | "endDate";
    const updated = [...education];
    updated[index][name as EducationKeys] = value;
    setEducation(updated);
  };
  const handleSave = () => {
    setEditingIndex(-1);
  };

  const handleCancel = () => {
    setEditingIndex(-1);
  };

  const handleDelete = (index: number) => {
    const updated = [...education];
    updated.splice(index, 1);
    setEducation(updated);
    setEditingIndex(-1);
  };

  const addNewEducation = () => {
    setEducation([
      ...education,
      {
        degree: "",
        university: "",
        startDate: "",
        endDate: "",
        uniLocation: "",
      },
    ]);
    setEditingIndex(education.length);
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
          {education.map((section, index) => {
            return editingIndex === index && open ? (
              <>
                <div
                  className="border border-slate-400 rounded-lg mt-3 px-3 py-2"
                  key={index}
                  onClick={() => setEditingIndex(index)}
                >
                  <h1 className="font-bold text-lg">
                    {section.degree || "Untitled Degree"}
                  </h1>
                  <Input
                    type="text"
                    value={section.degree}
                    onChange={(e) => handleChange(index, e)}
                    title="Degree"
                    name="degree"
                    placeHolder="Degree | Field of study"
                    required={true}
                  />
                  <Input
                    type="text"
                    title="School or University"
                    value={section.university}
                    onChange={(e) => handleChange(index, e)}
                    name="university"
                    placeHolder="School | College | University"
                    required={true}
                  />
                  <Input
                    type="text"
                    title="Start Date"
                    value={section.startDate}
                    onChange={(e) => handleChange(index, e)}
                    name="startDate"
                    placeHolder="02-3-2023"
                    required={true}
                  />
                  <Input
                    type="text"
                    title="End Date"
                    value={section.endDate}
                    onChange={(e) => handleChange(index, e)}
                    name="endDate"
                    placeHolder="10-2-2025 | Present"
                    required={true}
                  />
                  <Input
                    type="text"
                    title="Location"
                    value={section.uniLocation}
                    onChange={(e) => handleChange(index, e)}
                    name="uniLocation"
                    placeHolder="Berlin,Germany"
                    required={true}
                  />
                  <div className="flex justify-between my-2">
                    <button
                      className="flex items-center  rounded-lg gap-1 px-1 border border-red-500 hover:bg-red-500 hover:text-white"
                      onClick={() => handleDelete(index)}
                    >
                      <Trash2 size={15} />
                      Delete
                    </button>
                    <div className="flex gap-2">
                      <button
                        className="flex items-center rounded-lg gap-1 px-1 border border-blue-500 hover:bg-blue-500 hover:text-white"
                        onClick={() => {
                          handleSave();
                          // setEditOpen(false);
                          setEditingIndex(-1);
                          setOpen(false);
                        }}
                      >
                        <Check size={15} />
                        Save
                      </button>
                      <button
                        className="flex items-center rounded-lg gap-1 px-1 border border-black hover:bg-black hover:text-white"
                        onClick={() => {
                          handleCancel();
                          // setEditOpen(false);
                          setEditingIndex(-1);
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
              <div className="flex items-center justify-between border border-slate-400 rounded-lg mt-3 px-3 py-2 font-semibold">
                {section.degree}
                <Edit
                  className="hover:text-blue-500"
                  onClick={() => {
                    setEditingIndex(index);
                    setOpen(true);
                  }}
                />
              </div>
            );
          })}

          {/* Add education button */}
          <div className="flex flex-col items-center">
            <button
              className="flex items-center gap-1 font-semibold my-3 border border-blue-400 rounded-full px-3 py-2 hover:bg-blue-400 hover:text-white"
              onClick={() => {
                addNewEducation();
                setOpen(true);
              }}
            >
              <Plus size={20} /> Add Education
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
