import React from "react";
import { General } from "./General";
import { Experience } from "./Experience";
import { Education } from "./Education";

export const Form = () => {
  const [generalData, setGeneralData] = React.useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    address: "",
    email: "",
    phone: "",
    description: "",
  });

  const [educationData, setEducationData] = React.useState({
    school: "",
    degreee: "",
    city: "",
    graduationDate: "",
  });

  const [experienceData, setExperienceData] = React.useState({
    position: "",
    company: "",
    city: "",
    from: "",
    to: "",
  });

  const handleChange = (e, section) => {
    const { name, value } = e.target;

    if (section === "general") {
      setGeneralData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (section === "education") {
      setEducationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (section === "experience") {
      setExperienceData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <form className="cv--form">
      <General data={generalData} updateValues={handleChange} />
      <Education data={educationData} updateValues={handleChange} />
      <Experience data={experienceData} updateValues={handleChange} />
    </form>
  );
};
