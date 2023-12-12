import { React, useState } from 'react'

import { Button, Modal } from 'react-bootstrap'
import data from '../leads/data.json'
import Navbarpage from "../emp/Navbarpage"
import Sidebar from '../responsivenav/humburger';


function Tickets() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div className=' container-fluid ps-0 pe-0'>
            <Navbarpage />
            <div className=' d-flex '>
                <Sidebar />
                <div className='container bg-light'>

                    <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <div className="modal-body">
                            <h5 className="modal-title text-center" id="exampleModalLabel">Add Ticket</h5>
                            <form >
                                <div className="row gy-3">
                                    <div className="col-6">
                                        <label for="">plan name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label for="">plan dd</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label for="">plan name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label for="">plan dd</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label for="">plan name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label for="">plan dd</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label for="">plan name</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label for="">plan dd</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="col-6">
                                        <label for="">no of user</label>

                                        <input type="text" className="form-control" />

                                    </div>
                                    <div className="col-6">
                                        <label for="">user type</label>
                                        <select id="inputState" className="form-select">
                                            <option defaultValue ></option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label for="">no user</label>
                                        <select id="inputState" className="form-select">
                                            <option defaultValue ></option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="col-6">
                                        <label for="">storage</label>
                                        <select id="inputState" className="form-select">
                                            <option defaultValue ></option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                            <hr />
                            <table className="table table-responsive table-striped ">
                                <thead>
                                    <tr>
                                        <th scope="col">module permission</th>
                                        <th scope="col">read</th>
                                        <th scope="col">write</th>
                                        <th scope="col">create</th>
                                        <th scope="col">delete</th>
                                        <th scope="col">import</th>
                                        <th scope="col">export</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">holidays</th>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">task</th>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>
                                        <td> <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." /></td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className='text-center mb-4'>
                            <Button variant="warning" className=' rounded-pill' onClick={handleClose}>
                                Submit
                            </Button>
                        </div>
                    </Modal>



                    <header className='d-flex justify-content-between mt-4 mb-4'>
                        <div>
                            <h2>Ticket</h2>
                            <p>dashboard <span>Ticket</span></p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center '>
                            <div>
                                <Button variant="warning" className='btn rounded-pill' onClick={handleShow}>
                                    <i className='fa fa-plus'></i> add Ticket
                                </Button>
                            </div>


                        </div>
                    </header>

                    <div className='card-group mt-5 mb-5'>
                        <div className='card'>
                            <div className='card-body   '>
                                <div className='d-flex justify-content-between'>
                                    <h6>new employee</h6>
                                    <p>+12% </p>
                                </div>

                                <div className='fs-3'>10</div>
                                <div className="progress mt-2 mb-2" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className='fs-6'>overall employees</div>

                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-body   '>
                                <div className='d-flex justify-content-between'>
                                    <h6>new employee</h6>
                                    <p>+12% </p>
                                </div>

                                <div className='fs-3'>10</div>
                                <div className="progress mt-2 mb-2" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className='fs-6'>overall employees</div>

                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-body   '>
                                <div className='d-flex justify-content-between'>
                                    <h6>new employee</h6>
                                    <p>+12% </p>
                                </div>

                                <div className='fs-3'>10</div>
                                <div className="progress mt-2 mb-2" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className='fs-6'>overall employees</div>

                            </div>
                        </div>
                        <div className='card'>
                            <div className='card-body   '>
                                <div className='d-flex justify-content-between'>
                                    <h6>new employee</h6>
                                    <p>+12% </p>
                                </div>

                                <div className='fs-3'>10</div>
                                <div className="progress mt-2 mb-2" style={{ height: "5px" }}>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div className='fs-6'>overall employees</div>

                            </div>
                        </div>
                    </div>


                    <div className='row mb-4'>
                        <div className=' col-sm-3 col-md-3 col-lg-2 '>
                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                <label htmlFor="floatingPassword">Employye Name</label>
                            </div>

                        </div>
                        <div className=' col-sm-3 col-md-3 col-lg-2 mb-3 '>
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option defaultValue >Select Designation</option>
                                    <option value="1">utui</option>
                                    <option value="2">One</option>
                                    <option value="3">Three</option>
                                    <option value="4">Three</option>

                                </select>
                                <label htmlFor="floatingSelect">designation</label>
                            </div>
                        </div>
                        <div className=' col-sm-3 col-md-3 col-lg-2 mb-3 '>
                            <div className="form-floating">
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option defaultValue >Select Designation</option>
                                    <option value="1">utui</option>
                                    <option value="2">One</option>
                                    <option value="3">Three</option>
                                    <option value="4">Three</option>

                                </select>
                                <label htmlFor="floatingSelect">designation</label>
                            </div>
                        </div>
                        <div className=' col-sm-3 col-md-3 col-lg-2 mb-3 '>
                            <input type='date' className='form-control  py-3' />
                        </div>
                        <div className=' col-sm-3 col-md-3 col-lg-2 mb-3 '>
                            <input type='date' className='form-control py-3' />
                        </div>

                        <div className=' col-sm-3 col-md-3 col-lg-2 mb-3 ' >
                            <div className='d-grid'>
                                <button className='text-center btn  btn-danger  py-3' >search</button>

                            </div>
                        </div>
                    </div>

                    <div className='mb-4 d-flex flex-wrap'>
                        <div className='row'>
                            <div className='col'>
                                <div>
                                    <div className=" d-flex align-items-center" style={{ width: "145px" }}>
                                        show
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option defaultValue >10</option>
                                            <option value="1">20</option>
                                            <option value="2">30</option>
                                            <option value="3">40</option>
                                            <option value="4">50</option>

                                        </select>
                                        entris
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='row d-flex flex-wrap'>
                        <div className='col-md-12 colsm-12 col-lg-12'>
                            <table className="table table-striped table-responsive text-center">
                                <thead>
                                    <tr >
                                        <th scope="col"># <i className="fa-solid fa-sort-up fa-xs"></i><i className="fa-solid fa-sort-down fa-xs "></i></th>
                                        <th scope="col">Ticket Id</th>
                                        <th scope="col">Ticket Subject</th>
                                        <th scope="col">Assigned Staff</th>
                                        <th scope="col">Created Date</th>
                                        <th scope="col">Last Reply</th>
                                        <th scope="col">Priority</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map((item, inedx) =>
                                        <tr key={inedx}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.phone}</td>
                                            <td>{item.website}</td>
                                            <td>img</td>
                                            <td>{item.address.street}</td>
                                            <td>{item.address.street}</td>
                                            <td><i className='fa fa-ellipsis-vertical'></i></td>
                                        </tr>
                                    )}

                                </tbody>
                            </table>
                        </div>
                    </div>





                </div>
            </div>
        </div>
    )
}

export default Tickets