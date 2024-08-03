import axios from "axios";
import React,{ useState,useEffect } from "react";
// import CustomSpinner from "../spinner/dnaSpinner";
import "./index.css";
import CardComponent from "./card";
import NavBar from "./Navbar";
import CustomSpinner from "./Spinner";

function RecipeList(){
    const[data,setData]=useState([])
    const[recipe,setRecipe]=useState("")
    const[searched,setSearched]=useState([])
    useEffect(()=>{
        console.log("useeffect executing")
        fetchData()
    },[])
    const fetchData=async ()=>{
        const response= await axios("https://dummyjson.com/recipes")
        if(response.status===200){
            setData(response.data.recipes)
            console.log(response.data.recipes)
        }

    }
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