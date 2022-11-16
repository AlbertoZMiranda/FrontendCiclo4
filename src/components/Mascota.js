import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function Mascota(props) {
  const { mascota } = props;
  return (
    <Card key={mascota.slug}>
      <Link to={`/mascota/${mascota.slug}`}>
        <img src={mascota.image} className="card-img-top" alt={mascota.name} />
      </Link>
      <Card.Body>
        <Link to={`/mascota/${mascota.slug}`}>
            <Card.Title>{mascota.name}</Card.Title>
        </Link>
        <Card.Text>{mascota.description}</Card.Text>
        <Button>Mensaje</Button>
      </Card.Body>
    </Card>
  );
}

export default Mascota;