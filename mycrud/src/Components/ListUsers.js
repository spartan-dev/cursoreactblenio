import { useState, useEffect } from "react";
import EditUser from "./EditUser";
const URL = `http://localhost:4200/users`;
const Listusers = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [view, setView] = useState(false);
  useEffect(() => {
    async function callUsers() {
      const getUsers = await fetch(`${URL}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await getUsers.json();
      setUsers(data);
    }
    callUsers();
  }, []);
  useEffect(() => {}, [users]);
  const deleteUser = async (userId) => {
    const dele = await fetch(`${URL}/${userId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    if (dele.status === 200) alert(`Usuario borrado con exito`);
  };

  const editUser = (user) => {
    setUser(user);
    setView(!view);
  };

  return (
    <section className="mb-12 h-3/5 container mx-auto px-6 py-6 box-content bg-purple-300 rounded-md shadow-md ">
      <div>
        <h1 className="text-purple-700 m-12 text-4xl">Lista de Usuarios</h1>
      </div>

      <article>
        <div>
          <section className="grid grid-flow auto-col-max">
            {users.map((user) => {
              return (
                <div
                  key={user.id}
                  className="flex flex-col w-4/5 justify-items-center items-center"
                >
                  <div>
                    <p>
                      <span> {user.username}</span>
                      <span> {user.email}</span>
                    </p>
                    <div className="w-full   flex flex-row justify-items-center items-center">
                      <button
                        className="m-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                        onClick={() => deleteUser(user.id)}
                      >
                        Borrar Usuario
                      </button>
                      <button
                        className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                        onClick={() => editUser(user)}
                      >
                        {view ? "Cerrar Edicion" : " Editar Usuario"}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </article>
      <section>{view && <EditUser user={user} />}</section>
    </section>
  );
};

export default Listusers;
