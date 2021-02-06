import { useState } from "react";
const URL = `http://localhost:4200/users`;
const CreateUser = () => {
  const [user, setuser] = useState({ username: "", password: "", email: "" });
  const handleChange = (event) => {
    setuser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await fetch(`${URL}`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    console.log(resp);
    if (resp.status === 201) alert("El usuario ha sido creado con exito 🔥");
  };

  return (
    <section>
      <div>
        <h1 className="text-purple-800  m-12 text-3xl">Crear un Usuario</h1>
      </div>
      <div className="w-full max-w-md box-border">
        <form action="" className="bg-blue-500 shadow-md rounded p-8 ">
          <div className="px-4 pb-4">
            <label htmlFor="username" className="text-sm block font-bold pb-2">
              User Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              onChange={handleChange}
              type="text"
              name="username"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold pb-2">
              User Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="maligno@maligno.com"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              User Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="password"
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSubmit}
            type="submit"
          >
            Crear usuario
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreateUser;
