import { useState } from "react";
import CreateUser from "./CreateUser";
import ListUsers from "./ListUsers";
const Users = () => {
  const [isView, setView] = useState(false);
  return (
    <div className="flex justify-center items-center flex-row mb-12 h-4/5 w-4/5 container mx-auto px-6 py-6 box-content">
      <div className=" w-6/12 flex justify-center items-center flex-col mb-12">
        <h1 className="text-purple-600 m-12 text-4xl">Nuestro Primer CRUD</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={() => setView(!isView)}
        >
          {isView ? "Ocultar Formulario" : "Crear Usuarios"}
        </button>
        <section className="mb-12">{isView && <CreateUser />}</section>
      </div>
      <div className="w-6/12">
        <ListUsers />
      </div>
    </div>
  );
};

export default Users;
