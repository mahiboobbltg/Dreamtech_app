import React, { useState } from 'react'
import { createContext } from 'react'
import Ch1 from './ch1'
import Ch2 from './ch2'

export const context = createContext()

function Parent() {

  const [data] = useState(['welcome'])

  return (

    <context.Provider value={data}>
      <Ch1 />
      <Ch2 />
    </context.Provider>

  )
}

export default Parent