import { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import data from "../data";

function HomeScreen(){
  const [mascotas, setMascotas] = useState([]);
  useEffect(()=>{
    const fetchData = async () => {
      const result = await axios.get('http://localhost:3030/api/mascotas')
      setMascotas(result.data);
    };
    fetchData();
  }, []);

    return <div>
        <h1>Lista de extraviados</h1>
          <div className="mascotas">
            {mascotas.map((mascota) => (
              <div className="mascota" key={mascota.slug}>
                <Link to={`/mascota/${mascota.slug}`}>
                  <img src={mascota.image} alt={mascota.name} />
                </Link>
                <div className="mascota-info">
                  <a href={`/mascota/${mascota.slug}`}>
                    <p>{mascota.name}</p>
                  </a>
                  <p>{mascota.description}</p>
                </div>
              </div>
            ))}
          </div>
    </div>
}

export default HomeScreen;