import { LucideLayers3 } from "lucide-react";
import { BtnContainer } from "./components/BtnContainer";
import { FormContainer } from "./components/FormContainer";
import { GithubLink } from "./components/GithubLink";

const App = () => {
  return (
    <div className="flex">
      <div
        className="max-md:bg-gray-100 h-screen flex max-md:flex-col justify-between max-md:fixed  transition-transform -translate-x-full md:translate-x-0"
        id="navBar"
      >
        <div className="flex max-md:flex-col">
          <BtnContainer />
          <FormContainer />
        </div>
        <GithubLink style={"md:hidden flex justify-center items-end"} />
      </div>
      <LucideLayers3
        className="m-5 md:hidden"
        size={25}
        onClick={() => {
          const nav = document.querySelector("#navBar");
          nav?.classList.add("translate-x-0");
        }}
      />
    </div>
  );
};

export default App;
