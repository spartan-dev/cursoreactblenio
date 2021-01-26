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
  const [isOn, setIsOn] = useState(false);
  const [kmavanza, setKm] = useState(0);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>holis</h1>
          <div>
            <h3>Carro</h3>
            <span>MI Nave esta :{isOn ? "encendido" : "apagado"}</span>
            <br />
            <button
              className={`${isOn ? "apagado" : "encendido"}`}
              onClick={() => setIsOn(!isOn)}
            >
              {isOn ? "Apagar la nave" : "Encender la Nave"}
            </button>
            <button
              onClick={() => setKm(kmavanza + 10)}
              disabled={!isOn ? true : false}
            >
              A darle gas
            </button>
            <br />
            <span>Haz avanzado : {kmavanza} km</span>
          </div>
          {/* <section>
            <h1>{name} ha realizado una fatality 💀 🔥</h1>
            <input type="text" onChange={handleChange} name="cambianombre" />
            <button onClick={handleSubmit}>
              Manda el nombre del personaje a la base
            </button>
          </section>
          <Saludar alumno={alumno} saludarF={saludarFunc} /> */}
        </header>
      </div>
    </>
  );
}

export default App;
