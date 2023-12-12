import React from 'react'
import profile from './image/profile.jpg'
import './style.css'

function Client() {
    return (
        <div>
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body d-grid item-center'>
                                <div className='row'>
                                    <div className=' col-lg-2 col-md-6 col-sm-12 '>
                                        <div className='d-flex justify-content-center align-item-center'>
                                            <img src={profile} alt='pic' className='rounded-pill' width={120} />
                                        </div>
                                    </div>
                                    <div className='  col-lg-2 col-md-6 col-sm-12 '>
                                        <p>profile name</p>
                                        <p>ux/xi</p>
                                        <p>date</p>
                                        <p>name</p>
                                    </div>
                                    {/* <div className="vr" style={{ all: "initial", border: "1px dashed grey", marginRight: "20px" }}></div> */}

                                    <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5 col-md-6 col-sm-5'>
                                        <p>profile name</p>
                                        <p>ux/xi</p>
                                        <p>date</p>
                                        <p>name</p>
                                    </div>
                                    <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6 mb-5 col-md-6 col-sm-5'>
                                        <p>profile name</p>
                                        <p>ux/xi</p>
                                        <p>date</p>
                                        <p>name</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='container mt-4'>
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
                                            <p className=''>
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
                                            <p className=''>
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
                                            <p className=''>
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
                                            <p className=''>
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

export default Client