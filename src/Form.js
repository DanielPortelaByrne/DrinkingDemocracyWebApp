import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>NAME</label>
        <input
          className="rounded-inputs"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="ENTER YOUR NAME"
        />
      </div>

      <br />
      <div>
        <label>GAME CODE</label>
        <input
          className="rounded-inputs"
          type="code"
          name="code"
          onChange={handleChange}
          placeholder="ENTER THE GAME CODE"
        />
      </div>
      <br />
      <button type="submit" class="big-red-button">
        PLAY
      </button>
    </form>
  );
}

export default Form;
