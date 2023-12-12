import React from 'react'
import data from './data.json'
import Navbarpage from "../emp/Navbarpage"
import Sidebar from '../responsivenav/humburger';





function Leadpage() {
    return (

        <div className=' container-fluid ps-0 pe-0'>
            <Navbarpage />
            <div className=' d-flex '>
                <Sidebar />

                <div className='container-fluid bg-light'>

                    <header className=' mb-4'>
                        <div>
                            <h2>client</h2>
                            <p>dashboard <span>client</span></p>
                        </div>
                    </header>

                    <div className='mb-4'>
                        <div className='row'>
                            <div className='col'>
                                <div>
                                    <div className=" d-flex" style={{ width: "145px" }}>
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




                    <div className='row '>
                        <div className='col'>
                            <table class="table table-striped table-responsive text-center">
                                <thead>
                                    <tr >
                                        <th scope="col"># <i class="fa-solid fa-sort-up fa-xs"></i><i class="fa-solid fa-sort-down fa-xs "></i></th>
                                        <th scope="col">Lead Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone</th>
                                        <th scope="col">Project</th>
                                        <th scope="col">Assigned Staff</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Created</th>
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

export default Leadpage