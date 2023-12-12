import React, { useMemo, useState } from "react";


const Count = () => {
    const [one, setone] = useState(0)
    const [two, settwo] = useState(0)


    const handleone = () => 
    {setone(one + 1) }
    
    const handletwo = 
    () =>{ settwo(two + 1)}


    const even=useMemo( ()=>{
        for(let i=0;i<=200000;i++)
        return one%2===0
    },[one]

    )
   
    return (
        <>
            <button onClick={handleone}>increment:{one}</button>
            <span>{even ? 'evenno' : 'oddno'}</span>
           
           <div>
           <button onClick={handletwo}>increment: {two}</button>
           </div>
        </>
    )
}


export default Count











