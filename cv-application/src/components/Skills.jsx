import React from "react";
import { SkillsForm } from "./Forms";
import { defaultSkills } from "./Data";
import { Edit } from "./Edit";

export const Skills = () => {
  const [skills, setSkills] = React.useState(defaultSkills);

  // edit existing skills
  const editSkills = (e, id) => {
    const { value } = e.target;

    setSkills((prevSkills) => {
      return prevSkills.map((body) => {
        return body.id === id
          ? {
              ...body,
              skill: value,
            }
          : body;
      });
    });
  };

  // Add skill
  const addSkill = () => {
    setSkills((prevSkills) => {
      return [...prevSkills, { id: prevSkills.length + 1, skill: "" }];
    });
  };

  // Remove Skill
  const removeSkill = (e) => {
    const { name } = e.target;

    setSkills((prevSkills) => {
      return prevSkills.filter((skill) => skill.id != [name]);
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

  const allSkills = skills.map((skill, id) => {
    return (
      <li key={id} className="section--content">
        {skill.skill}
      </li>
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
            <SkillsForm
              skills={skills}
              editSkills={editSkills}
              addSkill={addSkill}
              removeSkill={removeSkill}
              finishEdit={editSection}
            />
          </div>
          <div id="overlay"></div>
        </div>
      )}
      <Edit
        title="Skills & Qualifications"
        edit={edit}
        editSection={editSection}
      />
      <ul className="skills--list">{allSkills}</ul>
    </section>
  );
};
