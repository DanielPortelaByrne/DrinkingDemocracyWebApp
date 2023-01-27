import logo from "./logo512.png";
import "./App.css";
import Navbar from "./Navbar";
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src={logo} alt="logo" />
        {/* <p>Welcome to Drinking Democracy!</p> */}
        <Form />
      </header>
    </div>
  );
}

export default App;
