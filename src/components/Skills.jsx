import React from "react";

export const Skills = () => {
  const [skills, setSkills] = React.useState([
    "Bilingual - (Enter Languages)",
    "Creative thinking",
    "X years experience as Web Developer",
    "X years of experience in direct customer service",
    "Well developed ability to communicate effectively with diverese culture populations",
  ]);

  const allSkills = skills.map((skill, id) => {
    return (
      <li key={id} className="section--content">
        {skill}
      </li>
    );
  });

  return (
    <section className="skills--section">
      <h4 className="section--title">Skills & Qualifications</h4>
      <ul className="skills--list">{allSkills}</ul>
    </section>
  );
};
