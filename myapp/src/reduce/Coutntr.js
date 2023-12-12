import React, { useReducer } from 'react'


const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: state.count = 0
            }
    }
}

function Coutntr() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 })


    return (
        <div>
            <center><div>count: {state.count}</div>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>reset</button></center>


        </div>
    )
}

export default Coutntr