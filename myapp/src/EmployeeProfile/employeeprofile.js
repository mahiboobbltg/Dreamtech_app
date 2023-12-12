

import React from 'react'
import './style.css'
import profile from "./images/profile.jpg"
import "/node_modules/flag-icons/css/flag-icons.min.css";

const data = [
    {
        "id": 0,
        "profilename": "jhon deo",
        "profation1": "ux/ui designer",
        "profation2": "web designer",
        "empid": "FT-001",
        "join": "1st jan 2023",
        "email": "jhon@123",
        "emp_ph": "8999927383",
        "birthday": "23july 1989",
        "address": "banglore",
        "gender": "male",
        "report": "jerry",

        "passport_no": "873942814793",
        "passport_exp": "23july 1989",
        "tel": "299079989",
        "nationality": "indian",
        "religion": "chistian",
        "marital_staus": "married",
        "spouse": "house wife",
        "childrens": "5",

        "primary": "p",
        "primary_name": "jhon",
        "primary_phon": "990799897,7463487634",
        "primary_relationship": "father",

        "secondary": "r",
        "secondary_name": "kevin",
        "secondary_phon": "299079989",
        "secondary_relationship": "brother",

        "bank_name": "icici",
        "bank_account": "4547423734354",
        "ifsc": "icic9899",
        "secondary_ph": "HRT0799829",

        "fname": "surya",
        "fphon": "990799869",
        "fdate": "feb 29/2022",
        "frelationship": "brother",

        "ug_collage": "international college of science ",
        "ug_course": "bsc computer science",
        "ug_year": "2003",
        "pg_collage": "international college of science ",
        "pg_course": "bsc computer science",
        "pg_year": "2003",

        "job1": "web desiner at zen corporation",
        "jod_date": "july 2023(5 years 2 months)",
        "job2": "web desiner at zen corporation",
        "job3": "web desiner at zen corporation",

    }
]











function EmployeeProfile() {





    return (

        <>
            <div className='container-fluid bg-light'>

                {data.map((item) => (


                    <div className="  mt-4 ">
                        <div className='  text-capitalize'>
                            <h5 className='' >Profile</h5>
                            <span >dashboard <span className='text-danger'>/profile</span></span>
                        </div>
                        <div className="row ">
                            <div className="col">
                                <div className="card ">
                                    <div className='card-title'>
                                        <i className="fa-thin fa-pen-to-square fa float-end"></i>
                                    </div>
                                    <div className="card-body d-flex flex-wrap ">
                                        <div className='col-sm-1'>
                                            <img src={profile} alt='maahipic' className='rounded-circle' width={120} />
                                        </div>
                                        <div className='col-sm-5'>
                                            <div className='left-side'>
                                                <h3 className='' >{item.profilename}</h3>
                                                <p>{item.profation1}</p>
                                                <p>{item.profation2}</p>
                                                <h5 >emp id:{item.empid}</h5>
                                                <p>date of join: {item.join}</p>
                                            </div>
                                            <button className='btn btn-danger'>send message</button>
                                        </div>

                                        <div className="vr" style={{ all: "initial", border: "1px dashed grey", marginRight: "20px" }}></div>

                                        <div className='col-sm-2  '>
                                            <p >phone</p>
                                            <p >email</p>
                                            <p >birthday</p>
                                            <p >adress</p>
                                            <p >gender</p>
                                            <p >reports to</p>
                                        </div>
                                        <div className='col-sm-3 '>
                                            <p ><span className='text-primary'>{item.emp_ph}</span></p>
                                            <p ><span className='text-primary'>{item.email}</span></p>
                                            <p ><span>{item.birthday}</span></p>
                                            <p ><span>{item.address}</span></p>
                                            <p ><span>{item.gender}</span></p>
                                            <p >
                                                <img className="image-body rounded-pill " src={profile} alt="profile" width={30} height={30} style={{ marginRight: "5px" }} />


                                                <span className='text-primary'>{item.report}</span></p>
                                        </div>
                                    </div>





                                </div>
                            </div>
                        </div>

                        {/*  right side of  profile  section start */}

                        <div className='row'>
                            <div className='col'>
                                <div className='card ' >
                                    <ul className=' d-flex  flex-wrap justify-content-between w-50 mt-3 ' style={{ listStyleType: 'none' }}>
                                        <li>profile</li>
                                        <li>projects</li>
                                        <li>bank&statutory<span className='text-danger'>(admin only)</span></li>
                                        <li>assets</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        {/* personal information  section strat*/}

                        <div className='personal-section mt-5'>
                            <div className='row g-4  mb-5'>
                                <div className='col mt-3'>
                                    <div className='card '>
                                        <div className='card-title'>
                                            <i className="fa-thin fa-pen-to-square fa float-end"></i>
                                            <h4>Personal Information</h4>
                                        </div>
                                        <div className='card-body d-flex'>
                                            <div className='card1 col-sm-4'>
                                                <p>passport no   </p>
                                                <p >passport exp date   </p>
                                                <p >tel    </p>
                                                <p >nationality   </p>
                                                <p >religion   </p>
                                                <p >marital staus    </p>
                                                <p >employement of spouse    </p>
                                                <p >no. of children  </p>
                                            </div>
                                            <div className='col-sm-5  '>
                                                <p ><span>{item.passport_no}</span> </p>
                                                <p > <span>{item.passport_exp}</span>  </p>
                                                <p ><span className='text-primary'>{item.tel}</span> </p>
                                                <p > <span>{item.nationality}</span> </p>
                                                <p > <span>{item.religion}</span></p>
                                                <p > <span>{item.marital_staus}</span>  </p>
                                                <p > <span>{item.spouse}</span>  </p>
                                                <p >  <span>{item.childrens}</span>  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*    emergency contact  section strat*/}

                                <div className='col mt-3'>
                                    <div className='card'>
                                        <div className='card-title'>
                                            <i className="fa-thin fa-pen-to-square fa float-end"></i>
                                            <h4>Emergency Contact</h4>
                                        </div>
                                        <div className='card-body d-flex'>
                                            <div className='col-sm-4'>
                                                <p >primary</p>
                                                <p >name</p>
                                                <p >relationship</p>
                                                <p >phone </p>

                                                <hr />

                                                <p >secondary</p>
                                                <p >name</p>
                                                <p >relationship</p>
                                                <p >phone</p>
                                            </div>
                                            <div className='col-sm-5 '>
                                                <p > &nbsp;</p>
                                                <p ><span>{item.primary_name}</span> </p>
                                                <p > <span>{item.primary_relationship}</span> </p>
                                                <p > <span>{item.primary_phon}</span> </p>
                                                <hr />
                                                <p >  &nbsp; </p>
                                                <p >  <span>{item.secondary_name}</span> </p>
                                                <p > <span>{item.secondary_relationship}</span></p>
                                                <p > <span>{item.secondary_phon}</span>  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*    bank information  section strat*/}

                        <div className='persional-section mt-5'>
                            <div className='row g-4  mb-5'>
                                <div className='col mt-3'>
                                    <div className='card '>
                                        <div className='card-title'>
                                            <i className="fa-thin fa-pen-to-square fa float-end"></i>
                                            <h4>Bank Information</h4>
                                        </div>

                                        <div className='card-body d-flex'>
                                            <div className='col-sm-4'>
                                                <p >bank name   </p>
                                                <p >bank account no  </p>
                                                <p >ifsc code   </p>
                                                <p >pan no   </p>
                                            </div>

                                            <div className='col-sm-5 '>
                                                <p > <span>{item.bank_name}</span> </p>
                                                <p ><span>{item.bank_account}</span>  </p>
                                                <p > <span>{item.ifsc}</span>  </p>
                                                <p >  <span>{item.secondary_ph}</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*    family information  section strat*/}

                                <div className='col mt-3'>
                                    <div className='card d-flex'>
                                        <div className='card-title'>
                                            <i className="fa-thin fa-pen-to-square fa float-end"></i>
                                            <h4> Family Information</h4>
                                        </div>
                                        <div className='card-body'>
                                            <table className='table table-responsive  '>
                                                <thead>
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Relationship</th>
                                                        <th>DoB</th>
                                                        <th>Phone</th>
                                                    </tr>
                                                </thead>
                                                <tbody >
                                                    <tr>
                                                        <td>{item.fname}</td>
                                                        <td>{item.frelationship}</td>
                                                        <td>{item.fdate}</td>
                                                        <td>{item.fphon}</td>
                                                        <td><i className="fa-solid fa-ellipsis-vertical fa"></i></td>
                                                    </tr>
                                                </tbody>
                                            </table>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/*    education information  section strat*/}
                        <div className='persional-section mt-5'>
                            <div className='row g-4  '>
                                <div className='col mt-3 mb-5'>
                                    <div className='card '>
                                        <div className='card-title'>
                                            <i className="fa-thin fa-pen-to-square fa float-end"></i>
                                            <h4>Education Information</h4>
                                        </div>

                                        <div className='card-body d-flex'>

                                            <div className='vr' style={{ marginRight: "10px", height: "200px" }}></div>
                                            <div >
                                                <h5 >{item.ug_collage}</h5>
                                                <p ><span>{item.ug_course}</span>  </p>
                                                <p ><span>{item.ug_year}</span>  </p>
                                                <h5 >{item.pg_collage}</h5>
                                                <p ><span>{item.pg_course}</span>  </p>
                                                <p ><span>{item.pg_year}</span>  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/*    exepirence information  section strat*/}
                                <div className='col mt-3'>
                                    <div className='card'>
                                        <div className='card-title'>
                                            <i className="fa-thin fa-pen-to-square fa float-end"></i>
                                            <h4>Exepirence</h4>
                                        </div>
                                        <div className='card-body d-flex'>
                                            <div className='vr' style={{ marginRight: "10px", height: "200px" }}></div>







                                            <div>
                                                <h5 >{item.job1}</h5>
                                                <p ><span>{item.jod_date}</span>  </p>
                                                <h5 >{item.job2}</h5>
                                                <p ><span>{item.jod_date}</span>  </p>
                                                <h5 >{item.job3}</h5>
                                                <p ><span>{item.jod_date}</span>  </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                ))}






















            </div>





        </>
    )
}






export default EmployeeProfile