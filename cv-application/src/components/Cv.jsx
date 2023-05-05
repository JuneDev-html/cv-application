import { Header } from "./Header";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Experience } from "./Experience";

export const Cv = () => {
  return (
    <div className="background">
      <div className="cv">
        <Header />
        <Skills />
        <Education />
        <Experience />
      </div>
    </div>
  );
};
