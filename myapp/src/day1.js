import React from "react";

// function Firstcomponent(){
//   const name='maahi'
//   return (
//     <h2>hii {name} welcome to react application</h2>
//   )
// }

// function Arr(){
//   const a=[10,20,30,40]
//   const ele=a.map((item,index)=>
//   <ul key={index}>
//   <li>{item}</li>
//   </ul>
//  )

//   return (
//     <>
//     {ele}
//     </>
//   )
// }


function Child1(){
  return(
    <h1 style={{backgroundColor:'red'}}>hello this is a child1</h1>
  )
}

function Child2(){
  return(
    <h2 style={{backgroundColor:'yellow'}}>hello this is a Child2</h2>
  )
}

function Child3(){
  return(
    <h3 style={{backgroundColor:'black',color:'white'}}>hello this is a child3</h3>
  )
}

function Parent(){
  return(
    <>
    <Child1/>
    <Child2/>
    <Child3/>
    </>
  )
}


export default Parent