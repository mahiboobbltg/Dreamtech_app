import React, { useState } from "react";
import './login.css'

const Loginpage=()=>{
    const[user,setuser]=useState([])
    const[newuser,setnewuser]=useState('')
    const[password,setpassword]=useState([])
    const[newpassword,setnewpassword]=useState('')


    const adddata=()=>{
        if(newuser.trim()!=="" && newpassword.trim()!==""){
            setuser([user,newuser])
            setnewuser("")

            setpassword([password,newpassword])
            setnewpassword("")
            console.log("username:",newuser,"and","password:",newpassword)
        }
    }

const handleuser=(e)=>{setnewuser(e.target.value)}
const handlepassword=(e)=>{setnewpassword(e.target.value)}


    return(
        <div className="container">
            <div className="login-body">
            <h1>Login</h1>

                <form>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" placeholder="enter username" value={newuser} onChange={handleuser}/>
                   
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="enter password" value={newpassword} onChange={handlepassword}/>
                   
                    <button type="button" onClick={adddata}>Login</button>
                </form>
                <div><a href="home.js">forgot password</a></div>
                {/* <div><a href="/ w">Sign Up here</a></div> */}
        </div>



    </div>
    )
}

export default Loginpage







