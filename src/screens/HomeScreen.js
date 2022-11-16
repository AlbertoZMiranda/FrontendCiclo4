import { useEffect, useReducer} from "react";
import axios from "axios";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Mascota from "../components/Mascota";
// import data from "../data";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      // cuando se haga la peticion
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      // Cuando sea exitosa la peticion
      return { ...state, mascotas: action.payload, loading: false };
    case "FETCH_FAIL":
      // cuando la peticion falle
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function HomeScreen() {
  const [{ loading, error, mascotas }, dispatch] = useReducer(reducer, {
    mascotas: [],
    loading: true,
    error: "",
  });
  // const [mascotas, setMascotas] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: "FETCH_REQUEST" });
      try {
        const result = await axios.get("http://localhost:3030/api/mascotas");
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Lista de extraviados</h1>
      <div className="mascotas">
        {loading ? (
          <div> Cargando datos...</div>
        ): error ? (
          <div>{error}</div>
        ): (
          <Row>
        {mascotas.map((mascota) => (
          <Col sm={6} md={4} lg={3} className='nb-3'>
          {/* llamamos al component Mascota.js */}
          <Mascota mascota={mascota}></Mascota>
          </Col>
        ))}
        </Row>
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
