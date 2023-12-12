import React, { useState } from "react";


const Fetchapi=()=>{

    const[data,setdata]=useState([])
    const Api=async()=>{
        try{
            const response= await fetch('https://jsonplaceholder.typicode.com/users')
            const result= await response.json()
            setdata(result)
        } catch(error){
            console.log(error)
        }
    }
    Api()

    return(
        <div>
            {
                data.map((item,index)=>(<li key={index}>{item.name}</li>))
            }
        </div>
    )
}


export default Fetchapi






