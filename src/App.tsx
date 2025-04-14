import { useState } from "react";
import { BtnContainer } from "./components/BtnContainer";
import { FormContainer } from "./components/FormContainer";
import { GithubLink } from "./components/GithubLink";
import { Preview } from "./components/Preview";

const App = () => {
  const [isNavBarVisible, setIsNavBarVisible] = useState(false);

  return (
    <div className="flex">
      <div
        className={`max-xl:bg-gray-100 z-10 min-h-screen flex max-xl:flex-col justify-between max-lg:fixed  transition-transform lg:translate-x-0  ${
          isNavBarVisible ? "" : " -translate-x-full"
        }`}
      >
        <div className="flex max-xl:flex-col">
          <BtnContainer closeNavBar={setIsNavBarVisible} />
          <FormContainer />
        </div>
        <GithubLink style={"xl:hidden flex justify-center items-end"} />
      </div>
      <Preview openNavBar={setIsNavBarVisible} />
    </div>
  );
};

export default App;
