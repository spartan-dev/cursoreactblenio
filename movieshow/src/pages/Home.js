import { useQuery } from "react-query";
import { BASE_URL, MOVIEKEY } from "../utils";
//componentes de antd
import { Row, Col } from "antd";
//componentes
import Loading from "../Components/Loading";
import Slider from "../Components/Slider";
import MovieList from "../Components/MovieList";
//queries
const fetchMovies = async (key, params) => {
  const response = await fetch(`${BASE_URL}now_playing?api_key=${MOVIEKEY}`);
  return response.json();
};

const Home = () => {
  const { data, status } = useQuery("movies", fetchMovies);
  if (status === "loading") {
    return <Loading />;
  }
  if (status === "error") {
    return "Error en la query";
  }
  return (
    <div>
      <Slider movies={data.results} />
      <Row gutter={[32, 24]}>
        <Col span={12}>
          <MovieList />
        </Col>
        <Col span={12}>
          <div>Hola columna 2</div>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
