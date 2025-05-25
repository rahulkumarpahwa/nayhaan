import Home from "./Components/Home";
import "./App.css";
import DarkMode from "./Components/DarkMode/DarkMode";

function App() {
  return (
    <div className="app-container">
      <DarkMode />
      <Home />
    </div>
  );
}

export default App;
