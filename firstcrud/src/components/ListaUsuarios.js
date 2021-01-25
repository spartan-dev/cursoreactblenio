import { useEffect, useState } from "react";
import EditUser from "./EditarUsuario";
const ListaUsers = () => {
  const [users, setUsers] = useState([]);
  const [view, setView] = useState(false);
  const [user, setUser] = useState({});
  useEffect(() => {
    async function callUsers() {
      const call = await fetch("http://localhost:4200/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await call.json();
      setUsers(data);
    }
    callUsers();
  }, []);

  const borrarUsuario = async (userId) => {
    console.log("user id llegando:", userId);
    await fetch(`http://localhost:4200/users/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  };
  const handleEdit = (user) => {
    setView(!view);
    setUser(user);
  };

  return (
    <section className="mb-12 h-3/5 w-3/5 container mx-auto px-6 py-6 box-content bg-purple-300 rounded-md shadow-md ">
      <div>
        <h1 className="text-purple-700 m-12 text-4xl">Lista de Usuarios</h1>
      </div>
      <article>
        <div>
          <ul className="grid grid-flow-col auto-cols-max">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex flex-col w-3/5 justify-center items-center "
              >
                <span className="text-white text-xl mb-4 border-solid rounded-full py-3 px-6 bg-purple-800 ">
                  {user.username}
                </span>
                <button
                  className="mb-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => borrarUsuario(user.id)}
                >
                  Borrar usuario
                </button>
                <button
                  className="mb-2 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => handleEdit(user)}
                >
                  {view ? "Cerrar Edicion" : "Editar usuario"}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {view && <EditUser user={user} />}
      </article>
    </section>
  );
};

export default ListaUsers;
