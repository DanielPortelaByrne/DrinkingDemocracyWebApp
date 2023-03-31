// import React, { useState, useEffect } from "react";
import logo from "./logo512.png";
import "./App.css";
import Navbar from "./Navbar";
import Form from "./Form";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GameRoom from "./GameRoom";
import AddPromptForm from "./AddPromptForm";

function App() {
  // const [prompts, setPrompts] = useState([]);
  // const [newPrompt, setNewPrompt] = useState({ text: "", category: "" });

  // useEffect(() => {
  //   fetch("http://localhost:3001/api/prompts")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPrompts(data);
  //     });
  // }, []);

  // const handleNewPromptSubmit = (event) => {
  //   event.preventDefault();
  //   fetch("http://localhost:3001/api/prompts", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(newPrompt),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setPrompts([...prompts, newPrompt]);
  //       setNewPrompt({ text: "", category: "" });
  //     });
  // };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo" />
          <Routes>
            <Route path="/" element={<Form />} />
            <Route path="/game-room" element={<AddPromptForm />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
