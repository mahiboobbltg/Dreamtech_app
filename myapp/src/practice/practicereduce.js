import React, { useReducer } from 'react'


let intial = { count: 0 }
const reducer = (data, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: data.count + 1
      }
    case 'DECREMENT':
      return {
        count: data.count - 1
      }
    case 'RESET':
      return {
        count: data.count = 0
      }
    default:
      return data
  }
}



function Reducecontext() {
  const [data, dispatch] = useReducer(reducer, intial)
  return (
    <div>
      <p>count:{data.count}

      </p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>reset</button>
    </div>
  )
}

export default Reducecontext