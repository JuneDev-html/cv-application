export const General = ({ data, updateValues }) => {
  return (
    <section className="form--section">
      <h4 className="section--title">Personal information</h4>
      <input
        id="firstName"
        type="text"
        name="firstName"
        className="input--field"
        value={data.firstName}
        placeholder="First name"
        onChange={(e) => updateValues(e, "general")}
      />
      <input
        id="lastName"
        type="text"
        name="lastName"
        className="input--field"
        value={data.lastName}
        placeholder="Last name"
        onChange={(e) => updateValues(e, "general")}
      />
      <input
        id="jobTitle"
        type="text"
        name="jobTitle"
        className="input--field"
        value={data.jobTitle}
        placeholder="Title"
        onChange={(e) => updateValues(e, "general")}
      />
      <input
        id="address"
        type="text"
        name="address"
        className="input--field"
        value={data.address}
        placeholder="Address"
        onChange={(e) => updateValues(e, "general")}
      />
      <input
        id="email"
        type="email"
        name="email"
        className="input--field"
        value={data.email}
        placeholder="Email"
        onChange={(e) => updateValues(e, "general")}
      />
      <input
        id="phone"
        type="tel"
        name="phone"
        className="input--field"
        value={data.phone}
        placeholder="Phone number"
        onChange={(e) => updateValues(e, "general")}
      />
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="5"
        value={data.description}
        placeholder="Description"
        onChange={(e) => updateValues(e, "general")}
      ></textarea>
    </section>
  );
};
