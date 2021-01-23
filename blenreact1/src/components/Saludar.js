import React from "react";
//destructure
const Saludar = ({ alumno, saludarF }) => {
  const { nombre, edad, hobbie } = alumno;
  return (
    <div>
      <h3>Hola Alumno {nombre} </h3>
      <p>
        <br />
        tu edad es : {edad} <br /> tu hobie es: {hobbie}
      </p>
      <button onClick={() => saludarF(nombre, hobbie)}>
        Darle saludar perroooo
      </button>
    </div>
  );
};

export default Saludar;
