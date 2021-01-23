//import React,{useState} from 'react';
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import SuperHeroe from "./components/SuperHero";
import Saludar from "./components/Saludar";
import data from "./data/super.json";
import Formulario from "./components/Formulario";
import Layout from "./components/Layout";
function App() {
  //* variable de la izquierda (guarda el valor)
  //* variable de la derecha ( es la que lo cambia)
  const [name, setName] = useState("Scorpion");

  useEffect(() => {
    async function llamar() {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const lla = await res.json();
      console.log(lla);
    }
    llamar();
  }, []);

  const alumno = {
    nombre: "kain",
    edad: 37,
    hobbie: "beber sangre de mis enemigos",
  };
  const saludarFunc = (name, hob) => {
    alert(`${name} le mama hacer.${hob}  amen.`);
  };

  /*
   * <img src={logo} className="App-logo" alt="logo" />
        <SuperHeroe name="Iron Man" /> 
        <Saludar alumno={alumno} saludarFn={saludarFunc} />
        <br />
        <Formulario />
   */
  const handleChange = (event) => {
    //este trae el evento con su valor que viene del input
    console.log(event.target.value);
    //* este es el hook que va a acambiar el estado
    setName(event.target.value);
  };
  const handleSubmit = () => {};

  return (
    <>
      <div className="App">
        <header className="App-header">
          <section>
            <h1>{name} ha realizado una fatality 💀 🔥</h1>
            <input type="text" onChange={handleChange} name="cambianombre" />
            <button onClick={handleSubmit}>
              Manda el nombre del personaje a la base
            </button>
          </section>
          <Saludar alumno={alumno} saludarF={saludarFunc} />
        </header>
      </div>
    </>
  );
}

export default App;
