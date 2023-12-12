import React, { useEffect, useState } from 'react';


// function ComponentFetchapi() {
//     const [data, setdata] = useState([])

//     useEffect(() => {
//         const Fetchapi = async () => {
//             try {
//                 let response = await fetch('https://fakestoreapi.com/users')
//                 let result = await response.json()
//                 console.log(result)
//                 setdata(result)
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//         Fetchapi()
//     })
//     return (
//         <>
//             <div>
//                 <ul>
//                 {
//                     data.map((item) => <li>{item.username}</li>

//                     )
//                 }
//                 </ul>


//             </div>
//         </>
//     )
// }








// function Apicomponent(){
//     const[data,setdata]=useState([])

// useEffect(()=>{
//     const api=async()=>{
//       try{
//         const response= await fetch('https://fakestoreapi.com/users')
//         const result=await response.json()
//         setdata(result)
//       } catch(error){console.error(error)}
//     }
//     api()
// })
//     return(
//         <>
//         {
//             data.map((item)=>(
//             <p>{item.username}</p>

//             ))}     
//         </>
//     )
// }













function Apicomponent() {
    const [data, setdata] = useState([])

    useEffect(() => {
        const api = async () => {
            try {
                let res = await fetch('https://fakestoreapi.com/users')
                let result = await res.json()
                setdata(result)
            } catch (error) { console.error(error) }
        }
        api()
    },[])

    return (
        <>
            <div>
            {data? data.map((item) => <div key={item.id}>{item.id} {item.username}  {item.password}</div>): <p>loading........</p>}
            </div>
        </>
    )
}










export default Apicomponent



