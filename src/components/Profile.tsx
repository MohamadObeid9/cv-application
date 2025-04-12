import { PresentationIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
export const Profile = () => {
  const [expended, setExpended] = useState(false);
  const handleClick = () => {
    setExpended(expended ? false : true);
  };
  return (
    <div className=" border px-5 rounded-lg w-[90%] border-slate-400">
      {/* Header Section */}
      <div
        className={`flex justify-between items-center py-5 ${
          expended ? "border-b border-slate-400" : ""
        }`}
        onClick={handleClick}
      >
        <h1 className="flex font-bold text-xl gap-2 items-center cursor-default">
          <PresentationIcon />
          Profile
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expended && (
        <div className="mt-2">
          <label htmlFor="summary" className="font-semibold tracking-wide">
            Summary
            <textarea
              name="summary"
              id="summary"
              className="border my-1 w-full rounded-lg border-slate-400 p-1 placeholder:text-sm h-20"
              placeholder="Experienced web developer with a strong background in frontend and backend development."
            ></textarea>
          </label>
        </div>
      )}
    </div>
  );
};
