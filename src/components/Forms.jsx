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
