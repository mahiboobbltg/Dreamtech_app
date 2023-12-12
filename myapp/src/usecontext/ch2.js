import React, { useContext } from 'react'
import { context } from './parent'


function Ch2() {

    const [data]=useContext(context)
  return (
    <div>this is a child2, {data}</div>
  )
}

export default Ch2