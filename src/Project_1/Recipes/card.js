import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.css";
import { useNavigate } from 'react-router-dom';
function CardComponent(prop) {
    const {data}=prop
    const navigate=useNavigate()
    console.log(data)
    const Handler=(id)=>{
            navigate(`/${id}`)
    }
  return (
  
    <Card className="card">
      <Card.Img variant="top" src={data.image}  className="card-img-top" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{data.name}</Card.Title>
        <Button variant="primary" className='card-button' onClick={()=>Handler(data.id)}>Recipe</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;