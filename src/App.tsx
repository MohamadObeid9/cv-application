import { BtnContainer } from "./components/BtnContainer";
import { FormContainer } from "./components/FormContainer";
import { GithubLink } from "./components/GithubLink";
import { Preview } from "./components/Preview";

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
      <Preview />
    </div>
  );
};

export default App;
