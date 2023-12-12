import React from 'react'
import profile from "./empprofile/images/profile.jpg"
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navbar() {
    return (
        <div>



            <div className='container-fluid bg-danger '>
                <div className='nav justify-content-between '>
                    <ul className='nav-item d-flex'>
                        <li className='nav-link'>logo</li>
                        <li className='nav-link'>logo</li>
                        <li className='nav-link'>logo</li>
                    </ul>
                    <ul className='nav-item d-flex'>
                        <li className='nav-link'>
                            <form className='d-flex justify-content-center align-items-center' style={{ border: "1px solid white", width: "300px", borderRadius: "40px", backgroundColor: "whitesmoke" }}>
                                <input type='search' placeholder='search' className='' style={{ width: "90%", opacity: "0.5", border: "none" }} />
                                <i className='fa fa-search ' ></i></form>
                        </li>
                        <li className='nav-link'>

                            <NavDropdown title="english" text-white id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">kannada</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown></li>
                        <li className='nav-link'>

                            <img src={profile} className='rounded-pill' width={40} alt='logo' />

                        </li>
                    </ul>
                </div>
            </div>

<div className='d-flex justify-content-center'>
    <button className='btn-outline-secondary'>add plan</button>
    <button className='btn btn-secondary'>add plan</button>








    <div class="container">
  <div class="row g-2">
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
    <div class="col-6">
      <div class="p-3 border bg-light">Custom column padding</div>
    </div>
  </div>
</div>
</div>




























        </div>
    )
}

export default Navbar