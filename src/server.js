const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors()); // enable CORS for all requests
app.use(express.json()); // enable JSON request body parsing

let selectedPrompts = []; // initialize an empty array to store the prompts

app.post("/api/prompts", (req, res) => {
  selectedPrompts = req.body;
  console.log("Selected prompts received:", selectedPrompts);
  // You can add your code here to handle the selected prompts
  res.json({ message: "Selected prompts received! and working!" });
});

app.get("/api/prompts", (req, res) => {
  res.json(selectedPrompts); // send the selected prompts back as the response
  selectedPrompts = [];
});

app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
