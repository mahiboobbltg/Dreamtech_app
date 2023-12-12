import React, { createContext, useState } from 'react'
import Child1 from './child1'



 export const najeersab=createContext()

function Parent() {
const [data]=useState(['this is a najeer'])

  return (
    <najeersab.Provider value={data}>
    <Child1/>
   
    </najeersab.Provider>
  )

}

export default Parent




// usman sab    key =createcontext()

// najeer sab data=usecontext(key)
// console.log(data)

// wajeer sab key


// daul sab key 

// mahiboob   key