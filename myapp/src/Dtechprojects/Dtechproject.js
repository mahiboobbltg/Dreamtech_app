import { React, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import profile from './image/profile.jpg'


function Dtechproject() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const projectdiv = {
        fontSize: "14px",
        lineHeight: "1.3rem",
    }





    return (


        <div className='container-fluid bg-light'>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="modal-body">
                    <h5 className="modal-title text-center" id="exampleModalLabel">Add Project</h5>
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
                    <h2>Project</h2>
                    <p>dashboard <span>Project</span></p>
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
                        <Button variant="warning" className='btn rounded-pill' onClick={handleShow}>
                            <i className='fa fa-plus'></i> add Project
                        </Button>
                    </div>


                </div>
            </header>

            <div className='row mb-4'>
                <div className=' col-md-6 col-lg-3 '>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Project Id</label>
                    </div>

                </div>
                <div className=' col-md-6 col-lg-3 mb-3'>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPasswor" placeholder="Password" />
                        <label htmlFor="floatingPasswor">Project Id</label>
                    </div>

                </div>
                <div className=' col-md-6 col-lg-3 mb-3 '>
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                            <option defaultValue >Select Company</option>
                            <option value="1">utui</option>
                            <option value="2">One</option>
                            <option value="3">Three</option>
                            <option value="4">Three</option>

                        </select>
                        <label htmlFor="floatingSelect">Company</label>
                    </div>
                </div>

                <div className=' col-md-6 col-lg-3 mb-3 ' >
                    <div className='d-grid'>
                        <button className='text-center btn  btn-danger  py-3' >search</button>

                    </div>
                </div>
            </div>



            <div className=' mt-4'>
                <div className='row'>
                    <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-title'>
                                    <div>
                                        <i class="fa-solid fa-ellipsis-vertical float-end" style={{ color: " #525655;" }}></i>
                                        <h5>Office Management</h5>
                                    </div>
                                    <div className='card-text'>
                                        <div className='projectdiv'>
                                            <p>1<span>open task</span>
                                                9<span>completed task</span>
                                            </p>
                                        </div>
                                        <div className='projectdiv'>
                                            <p className='' style={projectdiv}>
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a
                                                </span>
                                            </p>
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Deadline: </h6>
                                            <span>17 Apr 2023</span>
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Project Leader : </h6>
                                            <img src={profile} className='rounded-pill' width={40} alt='p_leader' />
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Team : </h6>
                                            <img src={profile} className='rounded-pill' width={40} alt='p_leader' />
                                        </div>


                                        <div className='projectdiv'>
                                            <h6 className='mb-3'>Progress  <span className='float-end'>40%</span></h6>
                                            <div className="progress" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: " 100%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-title'>
                                    <div>
                                        <i class="fa-solid fa-ellipsis-vertical float-end" style={{ color: " #525655;" }}></i>
                                        <h5>Office Management</h5>
                                    </div>
                                    <div className='card-text'>
                                        <div className='projectdiv'>
                                            <p>1<span>open task</span>
                                                9<span>completed task</span>
                                            </p>
                                        </div>
                                        <div className='projectdiv'>
                                            <p className='' style={projectdiv}>
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a
                                                </span>
                                            </p>
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Deadline: </h6>
                                            <span>17 Apr 2023</span>
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Project Leader : </h6>
                                            <img src={profile} className='rounded-pill' width={40} alt='p_leader' />
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Team : </h6>
                                            <img src={profile} className='rounded-pill' width={40} alt='p_leader' />
                                        </div>


                                        <div className='projectdiv'>
                                            <h6 className='mb-3'>Progress  <span className='float-end'>40%</span></h6>
                                            <div className="progress" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: " 100%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-title'>
                                    <div>
                                        <i class="fa-solid fa-ellipsis-vertical float-end" style={{ color: " #525655;" }}></i>
                                        <h5>Office Management</h5>
                                    </div>
                                    <div className='card-text'>
                                        <div className='projectdiv'>
                                            <p>1<span>open task</span>
                                                9<span>completed task</span>
                                            </p>
                                        </div>
                                        <div className='projectdiv'  >
                                            <p className='' style={projectdiv}>
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a
                                                </span>
                                            </p>
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Deadline: </h6>
                                            <span>17 Apr 2023</span>
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Project Leader : </h6>
                                            <img src={profile} className='rounded-pill' width={40} alt='p_leader' />
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Team : </h6>
                                            <img src={profile} className='rounded-pill' width={40} alt='p_leader' />
                                        </div>


                                        <div className='projectdiv'>
                                            <h6 className='mb-3'>Progress  <span className='float-end'>40%</span></h6>
                                            <div className="progress" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: " 100%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='card-title'>
                                    <div>
                                        <i class="fa-solid fa-ellipsis-vertical float-end" style={{ color: " #525655;" }}></i>
                                        <h5>Office Management</h5>
                                    </div>
                                    <div className='card-text'>
                                        <div className='projectdiv'>
                                            <p>1<span>open task</span>
                                                9<span>completed task</span>
                                            </p>
                                        </div>
                                        <div className='projectdiv'>
                                            <p className='' style={projectdiv}>
                                                <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. When an unknown printer took a
                                                </span>
                                            </p>
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Deadline: </h6>
                                            <span>17 Apr 2023</span>
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Project Leader : </h6>
                                            <img src={profile} className='rounded-pill' width={40} alt='p_leader' />
                                        </div>
                                        <div className='projectdiv'>
                                            <h6>Team : </h6>
                                            <img src={profile} className='rounded-pill' width={40} alt='p_leader' />
                                        </div>


                                        <div className='projectdiv'>
                                            <h6 className='mb-3'>Progress  <span className='float-end'>40%</span></h6>
                                            <div className="progress" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: " 100%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Dtechproject