import { React, useState } from 'react'
// import logo from "./image/logo.png"
import pic from "./image/pic.jpg"
import { Button, Modal } from 'react-bootstrap'
import data from "./data.json"
import { Link } from 'react-router-dom'






function Employeepage() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <div className='container-fluid bg-light'>



            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="modal-body">
                    <h5 className="modal-title text-center" id="exampleModalLabel">Add Employee</h5>
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
                    <h2>Employee</h2>
                    <p>dashboard <span>Employee</span></p>
                </div>
                <div className='d-flex justify-content-between align-items-center '>
                    <div className='border mx-2  bg-white'>
                        <i className='fa fa-bars fa-sm '>
                        </i>
                    </div>
                    <div className='border mx-2   bg-white'>
                        <i className='fa fa-list fa-sm '></i>
                    </div>
                    <div>
                        <Button variant="warning" className='btn rounded-pill'  onClick={handleShow}>
                            <i className='fa fa-plus'></i> add Employee
                        </Button>
                    </div>


                </div>
            </header>

            <div className='row mb-4'>
                <div className=' col-md-6 col-lg-3 '>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Employye Id</label>
                    </div>

                </div>
                <div className=' col-md-6 col-lg-3 mb-3'>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPasswor" placeholder="Password" />
                        <label htmlFor="floatingPasswor">Employye Id</label>
                    </div>

                </div>
                <div className=' col-md-6 col-lg-3 mb-3 '>
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

                <div className=' col-md-6 col-lg-3 mb-3 ' >
                    <div className='d-grid'>
                        <button className='text-center btn  btn-danger  py-3' >search</button>

                    </div>
                </div>
            </div>


            <div className='row g-4'>
                {
                    data.map((item,index) => (
                        <div className='col-md-3' key={index}>
                            <div className='card text-center p-3 bg-white'>
                                <div className='card-image '>
                                    <a href='/www.google.com' className='text-decoration-none'><i className="fa-light fa fa-ellipsis-vertical float-end"></i></a>
                                    <img src={pic} style={{borderRadius:"50%", width:"100px",height:"100px"}} alt='img' className='bac'  />
                                </div>
                                <div className='card-title'></div>
                                <div className='card-body'>{item.title}</div>

<div >
<button className='btn '><Link to='/employeeprofile'>view profile</Link></button>
</div>
                            </div>
                        </div>
                    ))
                }
            </div>












        </div>
    )
}

export default Employeepage