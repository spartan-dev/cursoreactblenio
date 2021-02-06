import { Link } from "react-router-dom";
import header from "../images/assests/header.jpg";
const Home = () => {
  return (
    <header
      className=" bg-gradient-to-r from-gray-500 to-gray-50  relative h-screen bg-center bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${header})`,
      }}
    >
      <div className="items-center absolute top-2/4 left-2/4 text-white">
        <h1 className="text-4xl">Crea usuarios de dummy</h1>
        <p className="text-base">Hola soy nuevo en react</p>
        <Link to="/usuarios">
          <button className="m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline">
            A Acrear
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Home;
