import logo from "./logo.svg";
import "./App.css";
import SuperHeroe from "./components/SuperHero";
import Saludar from "./components/Saludar";
import data from "./data/super.json";
function App() {
  console.log(data);
  const alumno = {
    edad: 37,
    hobbie: "death metal",
  };
  const saludarFunc = (mensaje) => {
    alert("hola grupo", mensaje);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <SuperHeroe name="Iron Man" /> */}
        <Saludar alumno={alumno} saludarFn={saludarFunc} />
      </header>
    </div>
  );
}

export default App;
