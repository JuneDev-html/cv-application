export const Experience = ({ data, updateValues }) => {
  return (
    <section className="skills--section">
      <h4 className="section--title">Experience</h4>
      <section className="exp--item">
        <div className="position">
          <p className="position--title">Front End Developer</p>
          <p className="position--date">SEP 2022 - CURRENT</p>
        </div>
        <p className="position--location">Freelance</p>
        <ul className="exp--list">
          <li className="exp--list--item">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            fuga!
          </li>
          <li className="exp--list--item"> Lorem ipsum dolor sit amet.</li>
          <li className="exp--list--item">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </li>
          <li className="exp--list--item">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore!
          </li>
        </ul>
      </section>
      <section className="exp--item">
        <div className="position">
          <p className="position--title">Front End Developer Internship</p>
          <p className="position--date">APRIL 2022 - SEP 2022</p>
        </div>
        <p className="position--location">Cool Tech Company</p>
        <ul className="exp--list">
          <li className="exp--list--item">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            fuga!
          </li>
          <li className="exp--list--item"> Lorem ipsum dolor sit amet.</li>
          <li className="exp--list--item">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </li>
          <li className="exp--list--item">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore!
          </li>
        </ul>
      </section>
      <div className="spacer"></div>
    </section>
  );
};
