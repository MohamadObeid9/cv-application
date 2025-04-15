import { User, ChevronDown, ChevronUp } from "lucide-react";
import { exampleData } from "./example";
import { Input } from "./Input";
type props = {
  personnelDetails: typeof exampleData.personnelDetails;
  expended: boolean;
  onClick: () => void;
};
export const PersonnnelDetails = ({
  personnelDetails,
  expended,
  onClick,
}: props) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div className=" border px-5  rounded-lg mt-1 lg:mt-5 w-[90%] border-slate-400 shadow-xl">
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
        <div className="pb-3">
          <Input
            title="Full Name"
            value={personnelDetails.fullName}
            name="fullName"
            type="text"
            placeHolder="John Smith"
            required={true}
          />
          <Input
            title="Job Title"
            value={personnelDetails.jobTitle}
            name="jobTitle"
            type="text"
            placeHolder="Full Stack Developer"
            required={true}
          />
          <Input
            title="Email"
            value={personnelDetails.email}
            name="email"
            type="email"
            placeHolder="john.smith@example.com"
            required={true}
          />
          <Input
            title="Phone Number"
            value={personnelDetails.phone}
            name="phone"
            type="tel"
            placeHolder="+1 (555) 123-4567"
            required={true}
          />
          {/* <Input
            title="Address"
            value=""
            name=""
            type="text"
            placeHolder="123 Main St, City, Country"
            required={true}
          /> */}
          <Input
            title="LinkedIn Profile"
            value={personnelDetails.linkedin}
            name="linkedin"
            type="url"
            placeHolder="https://www.linkedin.com/in/your-profile/"
            required={false}
          />
          <Input
            title="Github Profile"
            value={personnelDetails.github}
            name="github"
            type="url"
            placeHolder="https://github.com/your-user-name"
            required={false}
          />
        </div>
      )}
    </div>
  );
};
