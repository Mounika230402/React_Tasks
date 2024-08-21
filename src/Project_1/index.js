import React, { createContext, useEffect, useState } from "react"
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./Recipes";
import TaskManager from "./Todo";
import { Login } from "./login";
import { LogOut } from "./logout";
import CardDetails from "./Recipes/cardDetails";
import axios from "axios";
import Favorites from "./Recipes/favorites";


export const Profile=createContext()
const MainPage = () => {
  const[data,setData]=useState([])
  const[favorites,setFavorites]=useState([])
  useEffect(()=>{
    fetchData()
},[])
const addToFavorites=(fav)=>{
  const filtered=favorites.find(each=>each.id===fav.id)
  if(!filtered)
    setFavorites([...favorites,fav])
  
}
const removefavorites=(id)=>{
  const filtered=favorites.filter(each=>each.id!==id)
    setFavorites(filtered)
    
}
const fetchData=async ()=>{
    const response= await axios("https://dummyjson.com/recipes")
    if(response.status===200){
        setData(response.data.recipes)

    }

}
  return (
  <Profile.Provider value={{data,favorites,addToFavorites,removefavorites}}>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/Recipes" element={<RecipeList/>}></Route>
    <Route path="/favorites" element={<Favorites/>}></Route>
    <Route path="/:id" element={<CardDetails/>}></Route>
    <Route path="/TodoList" element={<TaskManager/>}></Route>
    <Route path="/Logout" element={<LogOut/>}></Route>
   </Routes>
   </BrowserRouter>
   </Profile.Provider>
   
  )
};

export default MainPage;
