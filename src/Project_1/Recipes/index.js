
import React,{ useState, useContext } from "react";

import "./index.css";
import CardComponent from "./card";
import NavBar from "./Navbar";
import CustomSpinner from "./Spinner";
import { Profile } from "..";

function RecipeList(){
    const {data}=useContext(Profile)
  
    const[recipe,setRecipe]=useState("")
    const[searched,setSearched]=useState([])
  
    const RecipeHandler=(event)=>{
        setRecipe(event.target.value)
  
    const filtered=data.filter(each=> each.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setSearched(filtered)

    }
    return (
        <>
        <NavBar className="navbar"/>
        <input type="text" value={recipe} onChange={RecipeHandler} placeholder="Search for Recipes" className="input-box"/>
        <div className="card-container">
        {
            data.length>0 ?
            <>
            {
                searched.length>0 ? 
                <>
                {
                    searched.map(each=>{

                        return <CardComponent data={each}/>
                    })
                }
                </>:
                <>
                {
                    searched.length===0 && recipe.length>0 ?<h1>No Results</h1>:
                    data.map(each=>{
                        return <CardComponent data={each}/>
                    })
                }
                </>
            }
            </>
             : <CustomSpinner/>
        }
      
        </div>
        </>
    )

}
export default RecipeList