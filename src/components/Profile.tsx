import { PresentationIcon, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
export const Profile = () => {
  const [expended, setExpended] = useState(false);
  const handleClick = () => {
    return expended ? setExpended(false) : setExpended(true);
  };
  return (
    <div className=" border p-5 rounded-lg w-[90%] border-slate-400">
      {/* Header Section */}
      <div className="flex justify-between  items-center" onClick={handleClick}>
        <h1 className="flex font-bold text-xl gap-2 items-center cursor-default">
          <PresentationIcon />
          Profile
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
    </div>
  );
};
