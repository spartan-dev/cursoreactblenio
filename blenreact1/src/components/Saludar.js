import React from "react";

const Saludar = ({ alumno, saludarFn }) => {
  const { nombre = "Anonimo", edad, hobbie } = alumno;
  return (
    <div>
      <p>
        Hola nuevo alumno tu nombre es: {nombre}
        <br />
        tu edad es : {edad} <br /> tu hobie es: {hobbie}
      </p>
      <button onClick={() => saludarFn("buenas tardes a todos")}>
        Decir Hola grupo
      </button>
    </div>
  );
};

export default Saludar;
