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
      <label>
        Prompt text:
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Prompt category:
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </label>
      <button type="submit">Add prompt</button>
    </form>
  );
}
