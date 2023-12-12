import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Home = () => <h1>home page</h1>
const About = () => <h1>about page</h1>
const Contact = () => <h1>contact page</h1>


const Approuter = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/About'>About</Link>
                        </li>
                        <li>
                            <Link to='/Contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="/" element={< Home />} />
                    <Route path="/About" element={< About />} />
                    <Route path="/Contact" element={< Contact />} />
                </Routes>
            </div>
        </Router>
    )
}



export default Approuter


















