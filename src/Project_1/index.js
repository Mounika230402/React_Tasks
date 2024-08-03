import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeList from "./Recipes";
import TaskManager from "./Todo";
import { Login } from "./login";
import { LogOut } from "./logout";
import CardDetails from "./Recipes/cardDetails";

const MainPage = (props) => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/Recipes" element={<RecipeList/>}></Route>
    <Route path="/:id" element={<CardDetails/>}></Route>
    <Route path="/TodoList" element={<TaskManager/>}></Route>
    <Route path="/Logout" element={<LogOut/>}></Route>
   </Routes>
   </BrowserRouter>
  )
};

export default MainPage;
