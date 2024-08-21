import React, { useContext } from "react"
import { Profile } from "..";
import CardComponent from "./card";
import NavBar from "./Navbar";
import "./index.css";

const Favorites = (props) => {
    const {favorites}=useContext(Profile)
  return (
    <div>
        <NavBar className="navbar"/>
        <div className="card-container">
     {
         favorites.map(each=>{
            return(<CardComponent data={each}/>)
         })
     }
     </div>
    </div>
  )
};

export default Favorites;
