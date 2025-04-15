import { useState } from "react";
import { BtnContainer } from "./components/BtnContainer";
import { FormContainer } from "./components/FormContainer";
import { GithubLink } from "./components/GithubLink";
import { Preview } from "./components/Preview";
import { exampleData } from "./components/example";

const App = () => {
  const [data, setData] = useState(exampleData);
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const loadExample = () => setData(exampleData);
  const handleClear = () => {
    setData({
      personnelDetails: {
        fullName: "",
        jobTitle: "",
        phone: "",
        email: "",
        github: "",
        linkedin: "",
      },
      profile: {
        summary: "",
      },
      workExperience: [
        {
          jobTitle: "",
          company: "",
          companyLocation: "",
          startDate: "",
          endDate: "",
          responsibilities: [],
        },
      ],
      education: [
        {
          degree: "",
          university: "",
          uniLocation: "",
          startDate: "",
          endDate: "",
        },
      ],
      technicalSkills: [{ skillTitle: "", skills: "" }],
    });
  };

  return (
    <div className="flex">
      <div
        className={`max-xl:bg-gray-100 z-10 min-h-screen flex max-xl:flex-col justify-between max-lg:fixed  transition-transform lg:translate-x-0  ${
          isNavBarVisible ? "" : " -translate-x-full"
        }`}
      >
        <div className="flex max-xl:flex-col">
          <BtnContainer
            closeNavBar={setIsNavBarVisible}
            clear={handleClear}
            example={loadExample}
          />
          <FormContainer data={data} />
        </div>
        <GithubLink style={"xl:hidden flex justify-center items-end"} />
      </div>
      <Preview openNavBar={setIsNavBarVisible} data={data} />
    </div>
  );
};

export default App;
