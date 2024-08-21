import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./index.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { Profile } from '..';
function CardComponent(prop) {
  const {addToFavorites,removefavorites}=useContext(Profile)
    const {data}=prop
    const[click,setClick]=useState(false)
    const navigate=useNavigate()
    const Handler=(id)=>{
            navigate(`/${id}`)
    }
    const FavoriteHandler=(id)=>{
      if(click){
        removefavorites(id)
        
        
      }
      else
      {
        addToFavorites(data)
      }
     
      setClick(!click)
    }
  return (
   
    <Card className="card">
      
      <Card.Img variant="top" src={data.image}  className="card-img-top"/><FontAwesomeIcon 
          icon={faHeart} 
          className={`heart-icon ${click ? 'clicked' : ''}`} 
          onClick={() => FavoriteHandler(data.id)} 
        />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{data.name}</Card.Title>
        {/* <i class="fa-solid fa-heart"></i>  */}
        {/* <Button variant="primary" className='card-button' onClick={()=>FavoriteHandler(data.id)}>Add to favorites</Button> */}
        <Button variant="primary" className='card-button' onClick={()=>Handler(data.id)}>Recipe</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;