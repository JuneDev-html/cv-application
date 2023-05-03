import React from "react";
import { defaultEducation } from "./Data";
import { Edit } from "./Edit";
import { EducationForm } from "./Forms";

export const Education = () => {
  const [education, setEducation] = React.useState(defaultEducation);

  const editEdu = (e, id) => {
    const { name, value } = e.target;

    setEducation((prevEdu) => {
      return prevEdu.map((edu) => {
        return edu.id === id
          ? {
              ...edu,
              [name]: value,
            }
          : edu;
      });
    });
  };

  // Add Education Entry
  const addEdu = () => {
    setEducation((prevEdu) => {
      return [
        ...prevEdu,
        {
          id: prevEdu.length + 1,
          degree: "",
          graduation: "",
          school: "",
          schoolLocation: "",
        },
      ];
    });
  };

  // Remove Education Entry
  const removeEdu = (e) => {
    const { id } = e.target;
    console.log(id);

    setEducation((prevEdu) => {
      return prevEdu.filter((edu) => edu.id != [id]);
    });
  };

  // helps to decide whether to show button / editing modal
  const [edit, setEdit] = React.useState({
    isHovering: false,
    isEditing: false,
  });

  // changes hover state to show edit button
  const showButton = () => {
    setEdit((prevData) => ({
      ...prevData,
      isHovering: !prevData.isHovering,
    }));
  };

  // changes editing state to show editing modal
  // & puts isHovering into default falsy value
  const editSection = () => {
    setEdit((prevData) => ({
      isHovering: false,
      isEditing: !prevData.isEditing,
    }));
  };

  const educationHistory = education.map((item) => {
    return (
      <div key={item.id} name={item.id} className="education--item">
        <div className="education--lvl">
          <p className="degree">{item.degree}</p>
          <p className="degree--completion">{item.graduation}</p>
        </div>
        <p className="school">
          {item.school} - {item.schoolLocation}
        </p>
      </div>
    );
  });

  return (
    <section
      name="isHovering"
      className="skills--section"
      onMouseEnter={showButton}
      onMouseLeave={showButton}
    >
      {edit.isEditing && (
        <div className="modal--container">
          <div id="headerModal" className="modal">
            <EducationForm
              education={education}
              finishEdit={editSection}
              editEducation={editEdu}
              addEducation={addEdu}
              removeEducation={removeEdu}
            />
          </div>
          <div id="overlay"></div>
        </div>
      )}
      <Edit title="Education" edit={edit} editSection={editSection} />
      {educationHistory}
    </section>
  );
};
