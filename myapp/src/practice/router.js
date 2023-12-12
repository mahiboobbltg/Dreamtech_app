import React from "react";
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';


const Home=()=><h1>home page</h1>
const About=()=><h1>About page</h1>
const Contact=()=><h1>Contact page</h1>



const Routerapp=()=>{
    return(
        <Router>

        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                </ul>
            </nav>

                <Routes>

                    <Route path='/' element={<Home/>} />
                    <Route path='/About' element={<About/>} />
                    <Route path='/Contact' element={<Contact/>} />

                </Routes>



            
        </div>
        </Router>

    )
}





export default Routerapp









