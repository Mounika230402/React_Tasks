
import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./cardDetails.css"
import { Profile } from "..";
import NavBar from "./Navbar";


const CardDetails = (props) => {
  const navigate=useNavigate()
    const {id}=useParams()
    const {data}=useContext(Profile)
  return (
<>
<NavBar className="navbar"/>
<Button variant="primary" className="btn btn-primary" style={{backgroundColor:"#0868cf"}} onClick={()=>navigate("/Recipes")}>Back</Button>
<div className="container">
  <h1>{data[id-1].name}</h1>
 
  <img src={data[id-1].image} alt={data[id-1].name} className="Image"></img>
      <h2>Ingredients</h2>
      <ol>
        {
            data[id-1].ingredients.map((each,index)=>{
                return(<li key={index}>{each}</li>)
            })
        }
      </ol>
    
     <h2>Instructions</h2>
      <ol>
        {
            data[id-1].instructions.map((each,index)=>{
                return(<li key={index}>{each}</li>)
            })
        }
      </ol>
     </div>
</>

  )
};

export default CardDetails;
