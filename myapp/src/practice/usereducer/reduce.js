import React, { useReducer } from 'react'

const reducer=(data,action)=>{
    switch(action.type){
        case 'INCREMENT': return{count:data.count+1}
        case 'DECREMENT': return{count:data.count-1}
        case 'RESET': return{count:data.count=0}
        default:return data

    }
}


function Reduce() {
    const[data,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
      <p>count:{data.count}</p>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
        <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
        <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
      
    </div>
  )
}

export default Reduce