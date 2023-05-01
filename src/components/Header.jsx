import "../styles/header.css";

export const Header = () => {
  let myUrl = "../../public/headshot.png";
  let phone = "(555) 555-5555";
  let email = "email@email.com";
  return (
    <section>
      <header>
        <div className="headshotWrap">
          <img src={myUrl} className="headshot" alt="" />
        </div>
        <div className="header--spacer"></div>
        <section className="cv--title">
          <h1 className="name">June DaSilva</h1>
          <p className="contactInfo">
            {phone} // {email}
          </p>
        </section>
      </header>
      <div className="objective">
        <h4 className="section--title">Objective</h4>
        <p className="section--content">
          Seeking full-time position as front-end/fullstack developer
        </p>
      </div>
      <hr className="headerBreak" />
    </section>
  );
};
