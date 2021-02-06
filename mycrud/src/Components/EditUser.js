import { useState } from "react";
const URL = `http://localhost:4200/users`;

const EditUsuario = ({ user }) => {
  const { username, email, password, id } = user;
  const [edituser, setEditUser] = useState({ username, email, password });
  const handleChange = (e) => {
    setEditUser({ ...edituser, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const gansito = await fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(edituser),
      headers: { "Content-Type": "application/json" },
    });
    console.log(gansito);
    if (gansito.status === 200) alert("Usuario Modificado con exito");
  };
  return (
    <section>
      <div>
        {" "}
        <h1>Editar usuario</h1>{" "}
      </div>
      <div>
        <form action="">
          <div>
            <label htmlFor="username">USER NAME</label>
            <input
              onChange={handleChange}
              type="text"
              name="username"
              value={edituser.username}
              id=""
              placeholder="Jhon Snow"
            />
          </div>
          <div>
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              value={edituser.email}
              id=""
              placeholder="Johnbull@example.com"
            />
          </div>
          <div>
            <label htmlFor="password">PASSWORD</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              value={edituser.password}
              id=""
              placeholder="Enter your password"
            />
          </div>
          <div>
            <button onClick={handleSubmit} type="button">
              Editar Usuario
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditUsuario;
