import { LucideLayers3 } from "lucide-react";
import { BtnContainer } from "./components/BtnContainer";
import { FormContainer } from "./components/FormContainer";
const App = () => {
  return (
    <div className="flex">
      <div
        className="md:flex  max-md:fixed  transition-transform -translate-x-full md:translate-x-0"
        id="navBar"
      >
        <BtnContainer />
        <FormContainer />
      </div>
      <LucideLayers3 className="m-5 md:hidden" onClick={()=>{
        const nav = document.querySelector("#navBar");
        nav?.classList.add("translate-x-0");
      }} />
    </div>
  );
};

export default App;
