import React from "react";
import { HeadForm } from "./Forms";

export const Header = () => {
  const [data, setData] = React.useState({
    firstName: "June",
    lastName: "DaSilva",
    phone: "555 555-5555",
    email: "email@email.com",
    objective:
      "Seeking full-time position as junior front-end / full-stack developer",
    photoUrl: "../../public/headshot.png",
    mouseOver: false,
  });
  const [edit, setEdit] = React.useState({
    isHovering: false,
    isEditing: false,
  });

  const showButton = () => {
    setEdit((prevData) => ({
      ...prevData,
      isHovering: !prevData.isHovering,
    }));
  };

  const editSection = () => {
    setEdit((prevData) => ({
      isHovering: false, // puts isHovering into default falsy value
      isEditing: !prevData.isEditing,
    }));
  };

  const updatePersonalInfo = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section
      name="isHovering"
      onMouseEnter={showButton}
      onMouseLeave={showButton}
    >
      {edit.isEditing && (
        <div className="modal--container">
          <div id="headerModal" className="modal">
            <HeadForm
              data={data}
              updateValues={updatePersonalInfo}
              finishEdit={editSection}
            />
          </div>
          <div id="overlay"></div>
        </div>
      )}

      <header>
        <div className="headshotWrap">
          <img src={data.photoUrl} className="headshot" alt="" />
        </div>
        <div className="header--spacer"></div>
        <section className="cv--title">
          <h1 className="name">
            {data.firstName} {data.lastName}
          </h1>
          <p className="contactInfo">
            {data.phone} // {data.email}
          </p>
        </section>
      </header>
      <div className="objective">
        <div className="obj-row">
          <h4 className="section--title">Objective</h4>
          {edit.isHovering && (
            <button className="header--edit--btn" onClick={editSection}>
              Edit
            </button>
          )}
        </div>
        <p className="section--content">{data.objective}</p>
      </div>
      <hr className="headerBreak" />
    </section>
  );
};

const editSection = () => {
  console.log("section editor working");
};
