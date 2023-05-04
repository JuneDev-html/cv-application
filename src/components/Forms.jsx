import React from "react";

export const HeadForm = ({ data, updateValues, finishEdit }) => {
  return (
    <section className="form--section">
      <h4 className="form--title">Personal information</h4>
      <input
        id="firstName"
        type="text"
        name="firstName"
        className="input--field"
        value={data.firstName}
        placeholder="First name"
        onChange={(e) => updateValues(e)}
      />
      <input
        id="lastName"
        type="text"
        name="lastName"
        className="input--field"
        value={data.lastName}
        placeholder="Last name"
        onChange={(e) => updateValues(e)}
      />

      <input
        id="email"
        type="email"
        name="email"
        className="input--field"
        value={data.email}
        placeholder="Email"
        onChange={(e) => updateValues(e)}
      />
      <input
        id="phone"
        type="tel"
        name="phone"
        className="input--field"
        value={data.phone}
        placeholder="Phone number"
        onChange={(e) => updateValues(e)}
      />
      <textarea
        name="objective"
        id="objective"
        cols="30"
        rows="5"
        maxLength={150}
        value={data.objective}
        placeholder="Objective"
        onChange={(e) => updateValues(e)}
      ></textarea>
      <button className="edit--save" onClick={finishEdit}>
        Save
      </button>
    </section>
  );
};

// ------- Skills & Qualifications ------
export const SkillsForm = ({
  skills,
  editSkills,
  addSkill,
  removeSkill,
  finishEdit,
}) => {
  const allSkills = skills.map((skill, id) => {
    return (
      // Wrap everything in a div
      // add a remove button on the left
      // maybe place it with absolute
      <div className="input--wrap">
        <button
          key={id + 1}
          name={id + 1}
          className="remove--btn"
          onClick={removeSkill}
        >
          -
        </button>
        <input
          type="text"
          key={id}
          name={id + 1}
          placeholder="Enter skill"
          className="input--field"
          value={skill.skill}
          onChange={(e) => editSkills(e, skill.id)}
        />
      </div>
    );
  });

  return (
    <section className="form--section">
      <h4 className="form--title">Skills & Qualifications</h4>
      <div className="edit--wrap">{allSkills}</div>
      <button className="edit--add" onClick={addSkill}>
        +
      </button>
      <button className="edit--save" onClick={finishEdit}>
        Save
      </button>
    </section>
  );
};

// -------- Education ----------

export const EducationForm = ({
  education,
  finishEdit,
  editEducation,
  addEducation,
  removeEducation,
}) => {
  const educationHistory = education.map((item) => {
    return (
      <fieldset key={item.id} className="education--wrap">
        <input
          type="text"
          id={item.id}
          name="degree"
          placeholder="Degree"
          className="input--field"
          value={item.degree}
          onChange={(e) => editEducation(e, item.id)}
        />
        <input
          type="text"
          id={item.id}
          name="graduation"
          placeholder="Graduation Date (Month, YYYY)"
          className="input--field"
          value={item.graduation}
          onChange={(e) => editEducation(e, item.id)}
        />
        <input
          type="text"
          id={item.id}
          name="school"
          placeholder="School Name"
          className="input--field"
          value={item.school}
          onChange={(e) => editEducation(e, item.id)}
        />
        <input
          type="text"
          id={item.id}
          name="schoolLocation"
          placeholder="School Location (City, State)"
          className="input--field"
          value={item.schoolLocation}
          onChange={(e) => editEducation(e, item.id)}
        />
        <button
          id={item.id}
          className="remove--field"
          onClick={removeEducation}
        >
          -
        </button>
      </fieldset>
    );
  });
  return (
    <section className="form--section">
      <h4 className="form--title">Education</h4>
      <div className="edit--wrap">{educationHistory}</div>
      <button className="edit--add" onClick={addEducation}>
        +
      </button>
      <button className="edit--save" onClick={finishEdit}>
        Save
      </button>
    </section>
  );
};

// ------ Experience ------

export const ExperienceForm = ({
  experience,
  editExperience,
  finishEdit,
  addExperience,
  removeExperience,
}) => {
  const experienceHistory = experience.map((exp) => {
    return (
      <fieldset key={exp.id} className="education--wrap">
        <input
          type="text"
          id={exp.id}
          name="position"
          placeholder="Position"
          className="input--field"
          value={exp.position}
          onChange={(e) => editExperience(e, exp.id)}
        />
        <input
          type="text"
          id={exp.id}
          name="from"
          placeholder="From (Month YYYY)"
          className="input--field"
          value={exp.from}
          onChange={(e) => editExperience(e, exp.id)}
        />
        <input
          type="text"
          id={exp.id}
          name="to"
          placeholder="To (Month YYYY)"
          className="input--field"
          value={exp.to}
          onChange={(e) => editExperience(e, exp.id)}
        />
        <input
          type="text"
          id={exp.id}
          name="company"
          placeholder="Company"
          className="input--field"
          value={exp.company}
          onChange={(e) => editExperience(e, exp.id)}
        />

        <button
          id={exp.id}
          className="remove--field"
          onClick={removeExperience}
        >
          -
        </button>
      </fieldset>
    );
  });
  return (
    <section className="form--section">
      <h4 className="form--title">Experience</h4>
      <div className="edit--wrap">{experienceHistory}</div>
      <button className="edit--add" onClick={addExperience}>
        +
      </button>
      <button className="edit--save" onClick={finishEdit}>
        Save
      </button>
    </section>
  );
};

export const Description = ({
  job,
  editDescription,
  addDescription,
  removeDescription,
  finishEdit,
}) => {
  const description = job.description.map((item, id) => {
    return (
      <div key={id} className="input--wrap">
        <button
          className="remove--btn"
          onClick={() => removeDescription(job.id, item.id)}
        >
          -
        </button>
        <input
          type="text"
          name="description"
          placeholder="Enter skill"
          className="input--field"
          value={item.body}
          onChange={(e) => editDescription(e, job.id, id + 1)}
        />
      </div>
    );
  });

  return (
    <section className="form--section">
      <h4 className="form--title">Job duties</h4>
      {description}
      <button className="edit--add" onClick={() => addDescription(job.id)}>
        +
      </button>
      <button className="edit--save" onClick={finishEdit}>
        Save
      </button>
    </section>
  );
};
