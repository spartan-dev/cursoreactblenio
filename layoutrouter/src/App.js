import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./Components/Layout";
import Saludar from "./Components/saludos/Saludos";
function App() {
  /*
   paso uno importar el effect de
   paso dos usar el effect
   usar fetch y llamar al endpoint
   declarrar variable y hacer console.log()
   las dos formas de promesas son con async y await (metoido moderno)
   y la otra es con .then() .catch() (metodo anterior)
  */
  useEffect(() => {
    const users = fetch(`http://localhost:4200/users/`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => {
        console.log(error);
      });

    /*  async function callUsers() {
      const users = await fetch(`http://localhost:4200/users`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await users.json();
      console.log(data);
    }
    callUsers(); */
    //console.log(users);
  });
  return (
    <Layout>
      {/* estos son los childrens */}
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>Hola amigos</h1>
        </header>
      </div>
      <Saludar />
    </Layout>
  );
}

export default App;
