import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
export const PersonnnelDetails = () => {
  const [expended, setExpended] = useState(false);
  const handleClick = () => {
    return expended ? setExpended(false) : setExpended(true);
  };
  return (
    <div className=" border p-5 rounded-lg mt-1 md:mt-5 w-[90%] border-slate-400">
      {/* Header Section */}
      <div className="flex justify-between  items-center" onClick={handleClick}>
        <h1 className="flex font-bold text-xl gap-2 items-center cursor-default">
          <User />
          Personnel Details
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
    </div>
  );
};
