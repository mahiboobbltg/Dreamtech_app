import React from 'react'
import './portfolio.css'




let Home = () => {
    return (
        <>
            <div className='cointainer'>

                <div className='logo'> Maahiportfolio</div>

                <div className='nav-items'>
                    <div><a href='/www.google.com'>Home</a></div>
                    <div><a href='/www.google.com'>About</a></div>
                    <div><a href='/www.google.com'>Projects</a></div>
                    <div><a href='/www.google.com'>Contact Me</a></div>
                </div>
            </div>

            <div className='home-section'>
                    <div className='home-body'>
                        <p>Hi,
                            <br />i'am
                            <span style={{color:'red'}}> maahi</span><br />
                            <span>react.js developer </span>
                            <span>web developer</span>
                        </p>
                       
                    </div>
                    <div> <img src='/img1.jpg' alt='img1'/> </div>
            </div>
            <div className='about-section'>
                <div className='about-body'>




                </div>
            </div>
        </>
    )
}

export default Home

















