import React, { useState } from 'react'
import Chart from "react-apexcharts";
import "./style.css"
//  import { Alert } from 'bootstrap';

function Dtechadmin() {


    const [data] = useState(

        {
            options: {

                colors: ['#FF9802', '#E91E63'],
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                },
                {
                    name: "series-2",
                    data: [20, 30, 35, 40, 39, 30, 50, 71]
                }
            ]
        }
    )



    return (
        <div className='container bg-light'>

            <header className='text-capitalize lh-1'>
                <h2 >welcome admin!</h2>
                <p className='text-danger'>dashboard</p>
            </header>

            <div className='row g-4 mt-2 mb-3'>
                <div className='col-md-6 col-sm-6 col-lg-3'>
                    <div className='card'>
                        <div className='card-body  d-flex justify-content-between align-items-center '>
                            <div className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}>
                                <i className="fa-solid fa-boxes-stacked fa-2xl" style={{ color: "#e69119" }}>
                                </i>
                            </div>
                            <p>  <span style={{ fontWeight: "700", fontSize: "30px" }}>112</span>   <br />projects </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-6 col-lg-3'>
                    <div className='card'>
                        <div className='card-body  d-flex justify-content-between align-items-center'>
                            <div className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}>
                                <i className="fa-solid fa-boxes-stacked fa-2xl" style={{ color: "#e69119" }}>
                                </i>
                            </div>
                            <p>  <span style={{ fontWeight: "700", fontSize: "30px" }}>112</span>   <br />projects </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-6 col-lg-3'>
                    <div className='card'>
                        <div className='card-body  d-flex justify-content-between align-items-center'>
                            <div className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}>
                                <i className="fa-solid fa-boxes-stacked fa-2xl" style={{ color: "#e69119" }}>
                                </i>
                            </div>
                            <p>  <span style={{ fontWeight: "700", fontSize: "30px" }}>112</span>   <br />projects </p>
                        </div>
                    </div>
                </div>
                <div className='col-md-6 col-sm-6 col-lg-3'>
                    <div className='card'>
                        <div className='card-body  d-flex justify-content-between align-items-center'>
                            <div className="rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: "60px" }}>
                                <i className="fa-solid fa-boxes-stacked fa-2xl" style={{ color: "#e69119" }}>
                                </i>
                            </div>
                            <p>  <span style={{ fontWeight: "700", fontSize: "30px" }}>112</span>   <br />projects </p>
                        </div>
                    </div>
                </div>
            </div>










            <div className='row'>
                <div className='col-lg-6 col-md-6 '>
                    <div className='card border mb-4'>
                        <div className='card-title text-center fs-2'>Total Revenue</div>
                        <div className='card-body'>
                            <Chart
                                options={data.options}
                                series={data.series}
                                type='bar'
                            />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-md-6 '>
                    <div className='card border text-center fs-2 mb-4'>
                        <div className='card-title'>sales Overview
                        </div>
                        <div className='card-body'>
                            <Chart
                                options={data.options}
                                series={data.series}
                                type='line'
                            />
                        </div>
                    </div>
                </div>
            </div>







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




            <div className='mb-5'>
                <div className=' row'>
                    <div className=' col-lg-4'>
                        <div className=' card mb-4' >
                            <div className=' card-body'>
                                <div className=' card-title fs-5 mb-3' style={{ fontWeight: "500" }}>
                                    Statistics
                                </div>
                                <div className=' row mb-1'>
                                    <div className='col'>
                                        <div className='card '>
                                            <div className='card-body '>
                                                <span>today leave <span className='float-end fw-bold'> 4/22</span></span>
                                                <div className="progress" style={{ height: "3px" }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' row mb-1' >
                                    <div className='col'>
                                        <div className='card ' >
                                            <div className='card-body '>
                                                <span>today leave <span className='float-end fw-bold'> 4/22</span></span>
                                                <div className="progress" style={{ height: "3px" }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' row mb-1'>
                                    <div className='col'>
                                        <div className='card '>
                                            <div className='card-body '>
                                                <span>today leave <span className='float-end fw-bold'> 4/22</span></span>

                                                <div className="progress" style={{ height: "3px" }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' row mb-1'>
                                    <div className='col'>
                                        <div className='card '>
                                            <div className='card-body '>
                                                <span>today leave <span className='float-end fw-bold'> 4/22</span></span>

                                                <div className="progress" style={{ height: "3px" }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=' row mb-1'>
                                    <div className='col' >
                                        <div className='card ' >
                                            <div className='card-body '>
                                                <span>today leave <span className='float-end fw-bold'> 4/22</span></span>

                                                <div className="progress" style={{ height: "3px" }}>
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "25px" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='  col-lg-4'>
                        <div className='card mb-4'>
                            <div className='card-body '>
                                <div className=' card-title fs-5 mb-3' style={{ fontWeight: "500" }}>
                                    Task Statistics
                                </div>
                                <div className='d-flex justify-content-around'>
                                    <div className='col-5 bg-light text-center border'>
                                        Total Task
                                        <h4>655</h4>
                                    </div>
                                    <div className='col-5 bg-light text-center border'>
                                        Overdue Task
                                        <h4>19</h4>
                                    </div>
                                </div>

                                <div className="progress mt-4 mb-3">
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "30%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">30</div>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "22%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">22</div>
                                    <div className="progress-bar bg-danger" role="progressbar" style={{ width: "24%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">24</div>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "21%" }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100">21</div>
                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "10%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">10</div>
                                </div>

                                <div className='d-flex justify-content-between mb-3'>
                                    <div className='checkbox'><input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />Completed Task</div>
                                    <div className='num'>123</div>
                                </div>
                                <div className='d-flex justify-content-between mb-3'>
                                    <div className='checkbox'><input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />Completed Task</div>
                                    <div className='num'>123</div>
                                </div>
                                <div className='d-flex justify-content-between mb-3'>
                                    <div className='checkbox'><input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />Completed Task</div>
                                    <div className='num'>123</div>
                                </div>
                                <div className='d-flex justify-content-between mb-3'>
                                    <div className='checkbox'><input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />Completed Task</div>
                                    <div className='num'>123</div>
                                </div>
                                <div className='d-flex justify-content-between mb-3'>
                                    <div className='checkbox'><input className="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1" value="" aria-label="..." />Completed Task</div>
                                    <div className='num'>123</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=' col-lg-4 '>
                        <div className='card mb-4'>
                            <div className='card-body'>
                                <div className=' card-title fs-5 mb-3' style={{ fontWeight: "500" }}>
                                    Today Absent
                                </div>
                                <div className='col-12  mb-3'>
                                    <div className='card bg-light'>
                                        <div className='card-body'>
                                            <i className='fa fa-user fa-2xl fa-thin'></i>martin lewis
                                            <div className='d-flex justify-content-between mt-2'>
                                                <span className='lh-1'>
                                                    date
                                                    <p>leave date</p></span>
                                                <p className='text-danger'>pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 mb-2'>
                                    <div className='card bg-light '>
                                        <div className='card-body'>
                                            <i className='fa fa-user fa-2xl fa-thin'></i>martin lewis
                                            <div className='d-flex justify-content-between mt-2'>
                                                <span className='lh-1'>
                                                    date
                                                    <p>leave date</p></span>
                                                <p className='text-danger'>pending</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='text-center mt-4 mb-4'>
                                    <button className='btn   border border-1'>Load More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className='mb-5'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 '>
                        <div className='text-center border'> <p className=''>view all invoices</p></div>
                        <div className='card  border '>
                            <div className='card-body'>
                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='text-center border'> <p className=''>view all invoices</p></div>


                    </div>

                    <div className='col-md-6 col-lg-6 '>
                        <div className='text-center border'> <p className=''>view all invoices</p></div>

                        <div className='card  border '>
                            <div className='card-body'>

                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>

                                    </tbody>

                                </table>
                            </div>
                        </div>
                        <div className='border'> <p className='text-center'>view all invoices</p></div>
                    </div>
                </div>
            </div>

            <div className='mb-5'>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 '>
                        <div className='border'> <p className='text-center'>view all invoices</p></div>
                        <div className='card  border '>
                            <div className='card-body'>

                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='border'> <p className='text-center'>view all invoices</p></div>
                    </div>

                    <div className='col-md-6 col-lg-6 '>
                        <div className='border'> <p className='text-center'>view all invoices</p></div>
                        <div className='card  border '>
                            <div className='card-body'>

                                <table className="table table-responsive">
                                    <thead>
                                        <tr>
                                            <th scope="col">First</th>
                                            <th scope="col">Last</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                            <th scope="col">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                        </tr>
                                        <tr>
                                            <td>Jacob</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className='border'> <p className='text-center'>view all invoices</p></div>
                    </div>
                </div>
            </div>











        </div>
    )
}

export default Dtechadmin