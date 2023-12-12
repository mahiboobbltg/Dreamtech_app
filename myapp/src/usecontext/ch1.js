import React, { useContext } from 'react'
import { context } from './parent'

function Ch1() {
    const[data]=useContext(context)
  return (
    <div>am child 1 {data}</div>
  )
}

export default Ch1