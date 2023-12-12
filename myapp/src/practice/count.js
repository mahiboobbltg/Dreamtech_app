import React, { useState } from "react";


const Countnumber=()=>{

    const[data,setdata]=useState(0)


    const incrementdata=()=>{setdata(data+1)}
    const decrementdata=()=>{setdata(data-1)}


    return(
        <div>
        <i className="fa fa-bars" onClick={incrementdata}></i>
        <p>{data}</p>
        <button onClick={decrementdata}>decrement</button>
        </div>
    )
}

export default Countnumber













