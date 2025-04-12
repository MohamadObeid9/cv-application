import { LucideLayers3 } from "lucide-react";
import { BtnContainer } from "./components/BtnContainer";
import { FormContainer } from "./components/FormContainer";
import { GithubLink } from "./components/GithubLink";

const App = () => {
  return (
    <div className="flex">
      <div
        className="max-xl:bg-gray-100 h-screen flex max-xl:flex-col justify-between max-lg:fixed  transition-transform -translate-x-full lg:translate-x-0"
        id="navBar"
      >
        <div className="flex max-xl:flex-col">
          <BtnContainer />
          <FormContainer />
        </div>
        <GithubLink style={"xl:hidden flex justify-center items-end"} />
      </div>
      <LucideLayers3
        className="m-5 lg:hidden"
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
