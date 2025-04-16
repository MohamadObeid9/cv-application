import { useState, useRef } from "react";
import { BtnContainer } from "./components/BtnContainer";
import { FormContainer } from "./components/FormContainer";
import { GithubLink } from "./components/GithubLink";
import { Preview } from "./components/Preview";
import { exampleData } from "./components/example";
import html2pdf from "html2pdf.js";

const App = () => {
  const [data, setData] = useState(exampleData);
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);
  const loadExample = () => setData(exampleData);
  const previewRef = useRef<HTMLDivElement>(null);
  const handleDownload = () => {
    const element = previewRef.current;
    const opt = {
      margin: [-0.15, 0, -0.2, 0], // [top, left, bottom, right] in inches
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
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
        className={`max-xl:bg-gray-100 z-10 min-h-screen flex max-xl:flex-col justify-between max-lg:fixed  transition-transform lg:translate-x-0  ${
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
      <Preview ref={previewRef} openNavBar={setIsNavBarVisible} data={data} />
    </div>
  );
};

export default App;
