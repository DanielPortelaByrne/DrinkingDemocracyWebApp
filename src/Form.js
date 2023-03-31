import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  function handleSubmit(event) {
    event.preventDefault();

    // Log form data to console
    console.log(formData.name);
    console.log(formData.code);
    // Navigate to new page
    navigate(`/game-room?code=${formData.code}`);
  }

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
      <button type="submit" className="big-red-button">
        PLAY
      </button>
    </form>
  );
}

export default Form;
