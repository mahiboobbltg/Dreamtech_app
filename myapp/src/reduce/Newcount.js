import React, { useReducer } from "react";


const reducer=(state,action)=>{
    switch(action.type){
        case "INCREMENT":
            return{
                count:state.count+1
            }
        case "DECREMENT":
            return{
                count:state.count-1
            }
        case "RESET":
            return{
                count:state.count=0
            }
            
    }
}


function Newcount() {

const[state,dispatch]=useReducer(reducer,{count:0})

    return (
        <div>
            <div>
                <p>count:{state.count}</p>
                <button onClick={()=>dispatch({type:'INCREMENT'})}>increment</button>
                <button onClick={()=>dispatch({type:'DECREMENT'})}>decrement</button>
                <button onClick={()=>dispatch({type:'RESET'})}>reset</button>
            </div>

        </div>
    )
}


export default Newcount


