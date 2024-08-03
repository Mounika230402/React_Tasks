import axios from "axios";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import "./cardDetails.css"
// import "./index.css";

const CardDetails = (props) => {
    const {id}=useParams()
    const[recipes,setRecipes]=useState({})
    const[instructions,setIns]=useState([])
    const[ingredients,setIn]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const {data,status}=await axios.get(`https://dummyjson.com/recipes/${id}`)
        if(status===200)
        {
          setRecipes(data)
          console.log(data)
          setIns(data.instructions)
          setIn(data.ingredients)
        }
           
    }
  return (
<div className="container">
  <h1>{recipes.name}</h1>
  <img src={recipes.image} alt={recipes.name} className="Image"></img>
      <h2>Ingredients</h2>
      <ol>
        {
            ingredients.map((each,index)=>{
                return(<li key={index}>{each}</li>)
            })
        }
      </ol>
    
     <h2>Instructions</h2>
      <ol>
        {
            instructions.map((each,index)=>{
                return(<li key={index}>{each}</li>)
            })
        }
      </ol>
     </div>

  )
};

export default CardDetails;
