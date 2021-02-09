import { useQuery } from "react-query";
import { BASE_URL, MOVIEKEY } from "../utils";
import Slider from "../Components/Slider";
const fetchMovies = async (key, params) => {
  const response = await fetch(`${BASE_URL}now_playing?api_key=${MOVIEKEY}`);
  return response.json();
};

const Home = () => {
  const { data, status } = useQuery("movies", fetchMovies);
  console.log(data, status);
  return (
    <div>
      <Slider />
    </div>
  );
};

export default Home;
