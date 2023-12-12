import React from 'react'
import './style.css'
// import profile from "./images/profile.jpg"
// import logo from "./images/logo.png"
// import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "/node_modules/flag-icons/css/flag-icons.min.css";

function Pricing() {
    return (
          <div className="container ">




            <div data-new-gr-c-s-check-loaded="14.1144.0" data-gr-ext-installed="">

                <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
                    <symbol id="check" viewBox="0 0 16 16">
                        <title>Check</title>
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
                    </symbol>
                </svg>

                <div className="container py-3">
                    {/* <header>
                        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
                            <a href="/www.google.com" className="d-flex align-items-center text-dark text-decoration-none">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" className="me-2" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>
                                <span className="fs-4">Pricing example</span>
                            </a>

                            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                                <a className="me-3 py-2 text-dark text-decoration-none" href="www.google.com">Features</a>
                                <a className="me-3 py-2 text-dark text-decoration-none" href="www.google.com">Enterprise</a>
                                <a className="me-3 py-2 text-dark text-decoration-none" href="www.google.com">Support</a>
                                <a className="py-2 text-dark text-decoration-none" href="www.google.com">Pricing</a>
                            </nav>
                        </div>

                        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                            <h1 className="display-4 fw-normal">Pricing</h1>
                            <p className="fs-5 text-muted">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization.</p>
                        </div>
                    </header> */}

                    <main>
                        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Free</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>10 users included</li>
                                            <li>2 GB of storage</li>
                                            <li>Email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm">
                                    <div className="card-header py-3">
                                        <h4 className="my-0 fw-normal">Pro</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>20 users included</li>
                                            <li>10 GB of storage</li>
                                            <li>Priority email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card mb-4 rounded-3 shadow-sm border-primary">
                                    <div className="card-header py-3 text-white bg-primary border-primary">
                                        <h4 className="my-0 fw-normal">Enterprise</h4>
                                    </div>
                                    <div className="card-body">
                                        <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                                        <ul className="list-unstyled mt-3 mb-4">
                                            <li>30 users included</li>
                                            <li>15 GB of storage</li>
                                            <li>Phone and email support</li>
                                            <li>Help center access</li>
                                        </ul>
                                        <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="card border-0">

                            <div class="card-body">
                                <h2 className="fs-2 border-bottom bg-light ">Compare plans</h2>

                                <table class="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">First</th>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>@mdo</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td colspan="2">Larry the Bird</td>
                                            <td>@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>


                    </main>


                </div>
            </div>



        </div>
    )
}

export default Pricing