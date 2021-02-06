import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="h-20  bg-green-300 flex justify-center items-center">
      <ul className="h-full flex flex-row justify-center items-center">
        <li className="mx-4 h-full flex  justify-center items-center w-22  hover:bg-green-400">
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
        <li className="mx-4 h-full flex  justify-center items-center w-22  hover:bg-green-400">
          <Link to="/usuarios"> Usuarios</Link>{" "}
        </li>
        <li className="mx-4 h-full flex  justify-center items-center w-22  hover:bg-green-400">
          {" "}
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
