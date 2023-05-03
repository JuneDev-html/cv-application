import React from "react";
import { defaultEducation } from "./Data";
import { Edit } from "./Edit";

export const Education = () => {
  const [education, setEducation] = React.useState(defaultEducation);

  const editEdu = (e, id) => {
    const { value } = e.target;

    // setEducation((prevEdu) => {
    //   return prevEdu.map((body) => {
    //     return body.id === id
    //       ? {
    //           ...body,
    //           skill: value,
    //         }
    //       : body;
    //   });
    // });
  };

  // Add skill
  // const addEdu = () => {
  //   setSkills((prevSkills) => {
  //     return [...prevSkills, { id: prevSkills.length + 1, skill: "" }];
  //   });
  // };

  // Remove Skill
  // const removeEdu = (e) => {
  //   const { name } = e.target;

  //   setSkills((prevSkills) => {
  //     return prevSkills.filter((skill) => skill.id != [name]);
  //   });
  // };

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
      <Edit title="Education" edit={edit} editSection={editSection} />
      {/* <div className="btn-row">
        <h4 className="section--title">Education</h4>
        {edit.isHovering && (
          <button className="edit--btn" onClick={editSection}>
            Edit
          </button>
        )}
      </div> */}
      {educationHistory}
    </section>
  );
};
