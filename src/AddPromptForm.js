import React, { useState } from "react";

function AddPromptForm({ onAddPrompt }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPrompt = { text, category };
    fetch("http://localhost:3001/api/prompts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPrompt),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        onAddPrompt(newPrompt);
      });
    setText("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>NEW PROMPT TEXT</label>
        <input
          className="rounded-inputs"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="ENTER YOUR PROMPT"
        />
      </div>
      <br />
      <div>
        <label>NEW PROMPT CATEGORY</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="GET IT DOWN YA">GET IT DOWN YA</option>
          <option value="RULE">RULE</option>
          <option value="VOTE">VOTE</option>
          <option value="CHALLENGE">CHALLENGE</option>
        </select>
      </div>
      <br />
      <button type="submit" className="big-red-button">
        ADD PROMPT
      </button>
    </form>
  );
}

export default AddPromptForm;
