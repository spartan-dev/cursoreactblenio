import logo from "./logo.svg";
import "./App.css";
import SuperHeroe from "./components/SuperHero";
import data from "./data/super.json";
function App() {
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <SuperHeroe name="Iron Man" />
      </header>
    </div>
  );
}

export default App;
