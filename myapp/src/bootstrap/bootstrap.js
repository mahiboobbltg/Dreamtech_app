import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'



const Mytodo = () => {
    const [task, settask] = useState([])
    const [newtask, setmewtask] = useState([])

    const addtask = () => {
        if (newtask.trim() !== "") {
            settask([...task, newtask])
            setmewtask('')
        }
    }
    const removetask=(index)=>{
        const updated=[...task]
        updated.splice(index,1)
        settask(updated)
    }

    const edittask=()=>{
        const edit=[...task]
        settask(edit)
    }

    return (
        <div className='container mt-4    text-capitalize'>
            <div className='row '>
                <div className='col-md-6 offset-md-3 border border-primary  bg-info' >
                    <h1 className=' mb-4 text-center  text-underline'><u>grocery shopping</u></h1>
                    <input type='text' placeholder='enter somthing to your list' className='form-control text-capitalize' value={newtask} onChange={(el) => setmewtask(el.target.value)} />
                    <button className='btn btn-primary mt-3 mb-3 float-right' onClick={addtask}>Add Items</button>

                    <ul className='list-group '>
                        {
                            task.map((item,index) =>(
                                <li key={index} className='list-group-item d-flex justify-content-between mb-4 bg-dark  text-white'>
                                    {item} 
                                    <div className='d-flex justify-content-between '>
                                        <button className='btn btn-sm btn-danger border' onClick={()=>removetask(index)}>remove</button>
                                         <button className='btn btn-sm btn-danger border' onClick={()=>edittask(index)}>edit</button>
                                    </div>
                              </li>)
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Mytodo














