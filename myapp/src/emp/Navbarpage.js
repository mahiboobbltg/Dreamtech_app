import React from 'react'
import { Navbar, NavDropdown, Dropdown, Form } from "react-bootstrap";
import emp1 from './images/smarthr1.jpg'
import emp2 from './images/smarthr2.jpg'
import emp3 from './images/smarthr3.jpg'
import emp4 from './images/smarthr4.jpg'
import img3 from "./images/client1.jpg";
import logo from "./images/logo.png";


function Navbarpage() {

  const myComponent = {
    width: '500px',
    height: '400px',
    overflowY: 'scroll',

  };

  return (
    <div>


      <Navbar expand="lg" className="response">


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <div className="navbar d-flex justify-content-arround">
            <ul className="nav">
              <li className="nav-link">
                <img src={logo} className="image-navbar" width={40} alt="logo" />
              </li>


              <li className="nav-link">
                <h3 className="navar-text">Dreams Technologies</h3>
              </li>

            </ul>

            <ul className="nav justify-content-center align-items-center">
              <li className="nav-link navar-text-list">
                <Form action="#" method="post" className="searchbar">
                  <input type="text" name="search-queary" placeholder="search here" className="search"></input>
                  <button type="submit" className="searchbtn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffff" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                  </button>
                </Form>



              </li>

              <img className="image-dropdown " src="https://img.freepik.com/premium-vector/united-kingdom-flag-red-blue-stripes-vector-illustration_34480-663.jpg" alt="admin" />
              <NavDropdown
                className="navar-text"
                title="English"
                text="white"
              >

                <NavDropdown.Item href="#">IND</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  USA
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  UK
                </NavDropdown.Item>

              </NavDropdown>

              <li className="nav-link navar-text-list">

                <Dropdown
                  align={{ lg: 'end' }}>
                  <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "rgb(181 18 85)", color: "white", borderColor: "none", border: "none", alignItems: "center" }} >
                    <i className="fa fa-comment"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={myComponent} >
                    <Dropdown.Item href="#/action-3" className="d-flex justify-content-between">

                      <div style={{ fontSize: "20px", color: "black", fontWeight: 600 }}>Messages</div>
                      <div style={{ color: "Red", backgroundColor: "white" }}> Clear All  </div>


                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={emp1} style={{ width: 43, height: 43, backgroundColor: "white" }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}><span ><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>

                        <p>lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                        </p></div>

                    </div></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={emp2} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}> <span ><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>

                        <p>lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                        </p></div>

                    </div></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={emp3} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}> <span><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>

                        <p>lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                        </p></div>

                    </div></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={img3} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}> <span ><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>

                        <p>lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                        </p></div>

                    </div></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={emp4} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}><span ><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>
                        <p>lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                        </p></div>

                    </div></Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </li>




              <li className="nav-link navar-text-list">

                <Dropdown align={{ lg: 'end' }} className="dropdownres">
                  <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "rgb(181 18 85)", color: "white", borderColor: "none", border: "none" }}  >
                    <i className="fa fa-bell"></i>
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={myComponent}>
                    <Dropdown.Item href="#/action-3" className="d-flex justify-content-between ">

                      <div style={{ fontSize: "20px", color: "black", fontWeight: 600 }}> Notifications</div>
                      <div style={{ color: "Red", backgroundColor: "white" }}> Clear All  </div>


                    </Dropdown.Item>

                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={img3} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}> <span><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>lorem ipsum dolor sit amet,<span style={{ color: "gray" }}></span> <p>consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                      </p></div>

                    </div></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={emp1} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}> <span ><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>

                        <p>lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                        </p></div>

                    </div></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={emp2} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}> <span><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>

                        <p>lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                        </p></div>

                    </div></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={emp3} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}> <p><span><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>

                        lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                      </p></div>

                    </div></Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><div className="d-flex ">
                      <img className="image-body" src={emp4} style={{ width: 43, height: 43 }} alt="" />

                      <div className=" bd-highlight" style={{ lineHeight: "1.0", marginLeft: "12px" }}> <span><h6 style={{ fontSize: "18px", fontWeight: 700 }}>Richard Jhon</h6></span>

                        <p>lorem ipsum dolor sit amet, consectetur  elit <span style={{ color: "gray" }}>8 min</span>
                        </p></div>

                    </div></Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
              </li>








              <img className="image-navbar" src={img3} alt="admin" />

              <NavDropdown
                align={{ lg: 'end' }}
                className="navar-text text-center"
                title="admin"
                text="white"
              >

                <NavDropdown.Item href="#">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Viewprofile
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Logout
                </NavDropdown.Item>

              </NavDropdown>
            </ul>

          </div>

        </Navbar.Collapse>

      </Navbar>



    </div>
  )
}

export default Navbarpage