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
  const handleDownload = () => {
    const originalTitle = document.title;
    document.title = `${exampleData.personnelDetails.fullName || "My CV"}`;

    window.print();

    setTimeout(() => {
      document.title = originalTitle;
    }, 100);
  };
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
      workExperience: [],
      education: [],
      technicalSkills: [],
    });
  };

  return (
    <div className="flex">
      <div
        className={`max-xl:bg-gray-100 z-10 min-h-screen flex print:hidden max-xl:flex-col justify-between max-lg:fixed  transition-transform lg:translate-x-0  ${
          isNavBarVisible ? "" : " -translate-x-full"
        }`}
      >
        <div className="flex max-xl:flex-col">
          <BtnContainer
            closeNavBar={setIsNavBarVisible}
            clear={handleClear}
            example={loadExample}
            download={handleDownload}
          />
          <FormContainer data={data} setData={setData} />
        </div>
        <GithubLink style={"xl:hidden flex justify-center items-end"} />
      </div>
      <Preview openNavBar={setIsNavBarVisible} data={data} />
    </div>
  );
};

export default App;
