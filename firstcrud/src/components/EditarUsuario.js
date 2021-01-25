import { useState } from "react";

const EditarUsuario = ({ user }) => {
  const { username, password, email } = user;
  const [edituser, setEditUser] = useState({
    username,
    password,
    email,
  });
  const handleChange = (e) => {
    setEditUser({ ...edituser, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const res = await fetch(`http://localhost:4200/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify(edituser),
      headers: { "Content-Type": "application/json" },
    });
    if (res.status === 200) alert("Usuario Editado con Exito");
  };
  return (
    <section className="mt-6 mb-12 h-3/5 w-3/5 container mx-auto px-6 py-6 box-content">
      <div>
        {" "}
        <h1 className="text-purple-700 text-2xl">Editar usuario</h1>{" "}
      </div>
      <div className="w-full max-w-md bg-gray-800">
        <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <div className="px-4 pb-4">
            <label htmlFor="username" className="text-sm block font-bold  pb-2">
              USER NAME
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={edituser.username}
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Jhon Snow"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="email" className="text-sm block font-bold  pb-2">
              EMAIL ADDRESS
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={edituser.email}
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
              placeholder="Johnbull@example.com"
            />
          </div>
          <div className="px-4 pb-4">
            <label htmlFor="password" className="text-sm block font-bold pb-2">
              PASSWORD
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={edituser.password}
              id=""
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Editar Usuario
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditarUsuario;
