import { Header } from "./Header";
import { Skills } from "./Skills";
import { Education } from "./Education";

export const Cv = () => {
  return (
    <div className="background">
      <div className="cv">
        <Header />
        <Skills />
        <Education />
      </div>
    </div>
  );
};
