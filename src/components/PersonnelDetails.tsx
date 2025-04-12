import { User, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Input } from "./Input";
export const PersonnnelDetails = () => {
  const [expended, setExpended] = useState(false);
  const handleClick = () => {
    setExpended(expended ? false : true);
  };
  return (
    <div className=" border px-5  rounded-lg mt-1 md:mt-5 w-[90%] border-slate-400">
      {/* Header Section */}
      <div
        className={`flex justify-between items-center py-5 ${
          expended ? "border-b border-slate-400" : ""
        }`}
        onClick={handleClick}
      >
        <h1 className="flex font-bold text-xl gap-2 items-center cursor-default">
          <User />
          Personnel Details
        </h1>
        {expended ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </div>
      {expended && (
        <>
          <Input
            value="Full Name"
            type="text"
            placeHolder="Jhon Smith"
            required={true}
          />
          <Input
            value="Email"
            type="email"
            placeHolder="john.smith@example.com"
            required={true}
          />
          <Input
            value="Phone Number"
            type="tel"
            placeHolder="+1 (555) 123-4567"
            required={true}
          />
          <Input
            value="Address"
            type="text"
            placeHolder="123 Main St, City, Country"
            required={true}
          />
          <Input
            value="LinkedIn Profile"
            type="url"
            placeHolder="https://www.linkedin.com/in/your-profile/"
            required={false}
          />
          <Input
            value="Github Profile"
            type="url"
            placeHolder="https://github.com/your-user-name"
            required={false}
          />
        </>
      )}
    </div>
  );
};
