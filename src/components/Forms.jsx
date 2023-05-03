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
      {allSkills}
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

export const EducationForm = () => {
  return <h1>education</h1>;
};
