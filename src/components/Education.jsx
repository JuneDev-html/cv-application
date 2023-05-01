export const Education = ({ data, updateValues }) => {
  return (
    <section className="form--section">
      <h4 className="section--title">Education</h4>
      <input
        id="school"
        type="text"
        name="school"
        className="input--field"
        value={data.school}
        placeholder="School"
        onChange={(e) => updateValues(e, "education")}
      />
      <input
        id="degree"
        type="text"
        name="degree"
        className="input--field"
        value={data.degree}
        placeholder="Degree"
        onChange={(e) => updateValues(e, "education")}
      />
      <input
        id="city"
        type="text"
        name="city"
        className="input--field"
        value={data.city}
        placeholder="City"
        onChange={(e) => updateValues(e, "education")}
      />
      <input
        id="graduationDate"
        type="text"
        name="graduationDate"
        className="input--field"
        value={data.gradutationDate}
        placeholder="Date of graduation"
        onChange={(e) => updateValues(e, "education")}
      />
      {/* TODO: create feature to add multiple education */}
    </section>
  );
};
