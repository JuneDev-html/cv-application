import React from "react";
import { defaultExperience } from "./Data";
import { Edit } from "./Edit";
import { ExperienceForm, Description } from "./Forms";

export const Experience = () => {
  const [experience, setExperience] = React.useState(defaultExperience);

  const editExp = (e, id, item) => {
    const { name, value } = e.target;

    if (name != "description") {
      setExperience((prevExp) => {
        return prevExp.map((exp) => {
          return exp.id === id
            ? {
                ...exp,
                [name]: value,
              }
            : exp;
        });
      });
    } else {
      // I hate this. so much.
      // basically, if what were editing is the description,
      // go through all entries and find the one that matches the id of current entry
      // then map the objects in the description array
      // find the description item matching the one that is being changed and
      // update it with value of input calling the onChange function
      setExperience((prevExp) => {
        return prevExp.map((exp) => {
          if (exp.id == id) {
            let expArray = exp.description.map((duty) => {
              return duty.id === item
                ? {
                    ...duty,
                    body: value,
                  }
                : duty;
            });
            return { ...exp, description: expArray };
          } else {
            return exp;
          }
        });
      });
    }
  };

  // Add Experience
  const addExp = () => {
    setExperience((prevExp) => {
      return [
        ...prevExp,
        {
          id: prevExp.length + 1,
          position: "",
          from: "",
          to: "",
          company: "",
          description: [],
        },
      ];
    });
  };

  // Add experience entry
  const removeExp = (e) => {
    const { id } = e.target;

    setExperience((prevExp) => {
      const newExp = prevExp.filter((exp) => exp.id != [id]); // remove unwanted entry
      // update id on remaining entries
      return newExp.map((exp, id) => {
        return { ...exp, id: id + 1 };
      });
    });
  };

  const [edit, setEdit] = React.useState({
    isHovering: false,
    isEditing: false,
    isDescribing: false,
    jobEntry: 1,
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
      ...prevData,
      isHovering: false,
      isEditing: !prevData.isEditing,
    }));
  };

  const editDescription = (entry) => {
    setEdit((prevData) => ({
      ...prevData,
      isHovering: false,
      isDescribing: !prevData.isDescribing,
      jobEntry: entry,
    }));
  };

  const addDescription = (job) => {
    setExperience((prevExp) => {
      return prevExp.map((exp) => {
        return exp.id === job
          ? {
              ...exp,
              description: [
                ...exp.description,
                { id: exp.description.length + 1, body: "" },
              ],
            }
          : exp;
      });
    });
  };

  const removeDescription = (job, id) => {
    setExperience((prevExp) => {
      return prevExp.map((exp) => {
        return exp.id === job
          ? {
              ...exp,
              description: exp.description.filter((item) => item.id !== id),
            }
          : exp;
      });
    });
  };
  // map experience into an array to be rendered later
  const experienceHistory = experience.map((exp) => {
    const descriptions = exp.description.map((task, id) => (
      <li key={id}>{task.body}</li>
    ));
    return (
      <section key={exp.id} className="exp--item">
        <div className="position">
          <p className="position--title">{exp.position}</p>
          <p className="position--date">
            {exp.from} - {exp.to}
          </p>
        </div>
        <p className="position--location">{exp.company}</p>

        <ul className="exp--list">
          {descriptions}
          <button
            name={exp.id}
            className="edit--add"
            onClick={() => editDescription(exp.id)}
          >
            edit
          </button>
        </ul>
      </section>
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
            <ExperienceForm
              experience={experience}
              finishEdit={editSection}
              editExperience={editExp}
              addExperience={addExp}
              removeExperience={removeExp}
            />
          </div>
          <div id="overlay"></div>
        </div>
      )}
      {edit.isDescribing && (
        <div className="modal--container">
          <div id="headerModal" className="modal">
            <Description
              job={experience[edit.jobEntry - 1]}
              editDescription={editExp}
              addDescription={addDescription}
              removeDescription={removeDescription}
              finishEdit={editDescription}
            />
          </div>
          <div id="overlay"></div>
        </div>
      )}
      <Edit title="Experience" edit={edit} editSection={editSection} />
      {experienceHistory}
      <div className="spacer"></div>
    </section>
  );
};
