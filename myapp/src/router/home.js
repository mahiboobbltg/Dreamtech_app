import React from 'react'
import { BrowserRouter, Link, Routes,Route } from 'react-router-dom'

const Home = () => <h1>home page</h1>
const About = () => <h1>about page</h1>
const Contact = () => <h1>contact page</h1>

  function Itisparent() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li>
              <Link to='/' >Home</Link>
              <Link to='/About'>About</Link>
              <Link to='/Contact'>Contact</Link>
            </li>
          </nav>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    )
  }

export default Itisparent








