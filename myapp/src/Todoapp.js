import React, { useState } from 'react'

function Todoapp() {
    const [task, settask] = useState('')
    const [newtask, setnewtask] = useState([])


    const addtask = () => {
        if (newtask.trim() !== '') {
            settask([...task, newtask])
            setnewtask("")
        }
    }



    return (
        <div>Todoapp

            <input type='text' value={newtask} onChange={(el) => setnewtask(el.target.value)} />
            <button type='submit' onClick={addtask}>add task</button>



            {task.map((el,index)=>(<li key={index}>{el} </li>))}



        </div>
    )
}

export default Todoapp