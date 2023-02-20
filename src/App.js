import React, { useState, useEffect } from "react";
import logo from "./logo512.png";
import "./App.css";
import Navbar from "./Navbar";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameRoom from "./GameRoom";

function App() {
  const [prompts, setPrompts] = useState([]);
  const [newPrompt, setNewPrompt] = useState({ text: "", category: "" });

  useEffect(() => {
    fetch("http://localhost:3001/api/prompts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrompts(data);
      });
  }, []);

  const handleNewPromptSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/api/prompts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPrompt),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPrompts([...prompts, newPrompt]);
        setNewPrompt({ text: "", category: "" });
      });
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <form onSubmit={handleNewPromptSubmit}>
            <label>
              New prompt text:
              <input
                type="text"
                value={newPrompt.text}
                onChange={(event) =>
                  setNewPrompt({ ...newPrompt, text: event.target.value })
                }
              />
            </label>
            <label>
              New prompt category:
              <select
                value={newPrompt.category}
                onChange={(event) =>
                  setNewPrompt({ ...newPrompt, category: event.target.value })
                }
              >
                <option value="GET IT DOWN YA">GET IT DOWN YA</option>
                <option value="RULE">RULE</option>
                <option value="VOTE">VOTE</option>
                <option value="CHALLENGE">CHALLENGE</option>
              </select>
            </label>
            <button type="submit">Add prompt</button>
          </form>
          <Routes>
            <Route path="/game-room" element={<GameRoom prompts={prompts} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
