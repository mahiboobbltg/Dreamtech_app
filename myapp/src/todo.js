import React, { useState } from "react";


const Todolist = () => {
    const [task, settask] = useState([])
    const [newtask, setnewtask] = useState("")

    const addtask = () => {
                if (newtask.trim() !== "") {
                            settask([...task, newtask])
                            setnewtask("")
                        }
             }

    const deletetask = (index) => {
            const updatedtask = [...task]
            updatedtask.splice(index,1)
            settask(updatedtask)
        }
        return (
                <>
                    <div style={{ textAlign: 'center', textTransform: 'capitalize' }}>
                        <h1>todo list</h1>
                        <input placeholder="add task" type="text" value={newtask} onChange={(e) => setnewtask(e.target.value)} />
                        <button type="submit" onClick={addtask}>add task</button>
               

                    <ul style={{listStyleType:'none'}}>
                        {task.map((item,index) => (<li>{item} <button >edit</button>  <button onClick={()=>deletetask(index)}>delete</button></li>))}
                    </ul>
                    </div>
                </>
        )
    }


    export default Todolist
















