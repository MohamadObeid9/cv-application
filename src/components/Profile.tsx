import { PresentationIcon, ChevronDown, ChevronUp } from "lucide-react";
import { exampleData } from "./example";
type props = {
  profile: typeof exampleData.profile;
  expended: boolean;
  onClick: () => void;
};
export const Profile = ({ profile, expended, onClick }: props) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className="shadow-xl border px-5 rounded-lg w-[90%] border-slate-400">
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
          <label htmlFor="summary" className="font-bold tracking-wide">
            Summary
          </label>
          <textarea
            name="summary"
            id="summary"
            value={profile.summary}
            className="border my-1 w-full rounded-lg border-slate-400 p-1 placeholder:text-sm h-40 text-slat-900"
            placeholder="Experienced web developer with a strong background in frontend and backend development."
          ></textarea>
        </div>
      )}
    </div>
  );
};
