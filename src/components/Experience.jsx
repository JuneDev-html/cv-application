export const Experience = ({ data, updateValues }) => {
  return (
    <section className="form--section">
      <h4 className="section--title">Experience</h4>
      <input
        id="position"
        type="text"
        name="position"
        className="input--field"
        value={data.position}
        placeholder="Position"
        onChange={(e) => updateValues(e, "experience")}
      />
      <input
        id="company"
        type="text"
        name="company"
        className="input--field"
        value={data.company}
        placeholder="Company"
        onChange={(e) => updateValues(e, "experience")}
      />
      <input
        id="city"
        type="text"
        name="city"
        className="input--field"
        value={data.city}
        placeholder="City"
        onChange={(e) => updateValues(e, "experience")}
      />
      <input
        id="from"
        type="text"
        name="from"
        className="input--field"
        value={data.from}
        placeholder="From"
        onChange={(e) => updateValues(e, "experience")}
      />
      <input
        id="to"
        type="text"
        name="to"
        className="input--field"
        value={data.to}
        placeholder="To"
        onChange={(e) => updateValues(e, "experience")}
      />
    </section>
  );
};
