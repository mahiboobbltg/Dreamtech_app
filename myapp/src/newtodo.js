import React, { useState } from "react";


const Todo=()=>{

    const[task,settask]=useState([])
    const[newtask,setnewtask]=useState([])

    const addtask=()=>{
        if(newtask.trim()!==""){
            settask([...task,newtask])
            setnewtask("")
        }
    }


    const removetask=(index)=>{
        const updated=[...task]
     updated.splice(index,1)
     settask(updated)
    }

    return(
        <>
        <div >
            <h1>to list app</h1>
        <input type="text" placeholder="enter a task" value={newtask} onChange={(el)=>setnewtask(el.target.value)}/>
        <button type="submit" onClick={addtask}>Add Task</button>
        {task.map((el,index)=><li key={index}>{el} <button onClick={()=>removetask(index)}>remove</button></li>)}
        </div>
        </>
    )
}

export default Todo















