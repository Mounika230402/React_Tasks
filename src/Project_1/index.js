import React, { createContext, useEffect, useState } from "react"
import {  BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./Recipes";
import TaskManager from "./Todo";
import { Login } from "./login";
import { LogOut } from "./logout";
import CardDetails from "./Recipes/cardDetails";
import axios from "axios";


export const Profile=createContext()
const MainPage = (props) => {
  const[data,setData]=useState([])
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
  return (
  <Profile.Provider value={{data}}>
    <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/Recipes" element={<RecipeList/>}></Route>
    <Route path="/:id" element={<CardDetails/>}></Route>
    <Route path="/TodoList" element={<TaskManager/>}></Route>
    <Route path="/Logout" element={<LogOut/>}></Route>
   </Routes>
   </BrowserRouter>
   </Profile.Provider>
   
  )
};

export default MainPage;
