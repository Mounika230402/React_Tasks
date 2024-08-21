import axios from "axios";
import React, { useEffect, useState } from "react"

const Sample = (props) => {
    const[data,setData]=useState([])
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const response= await axios.get("https://console.firebase.google.com/u/0/project/country-details-3144b/authentication/users")
        console.log(response)
    }
  return (
    <div>
      Hiii
    </div>
  )
};

export default Sample;
