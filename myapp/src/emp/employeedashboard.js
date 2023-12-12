import { React } from "react";
import "./emp_dashboard.css";
import img3 from "./images/client1.jpg";
import Navbarpage from "../emp/Navbarpage"
import Sidebar from '../responsivenav/humburger';



const people = [
  {
    id: 0,
    firstname: "Jhon Deo",
    date: "Monday,20 May 2023",
    reason1: "Richard Miles is off sick today",
    reason2: "you are away today",
    reason3: "You are woking from home today",
    reason4: "2 people will be away tomorrow",
    reason5: "2 people will to be away",
    reason6: "your first day is going to be on Thursday",
    reason7: "Its spring Bank Holiday on Monday",
    totaltask: 71,
    pendingtask: 14,
    totalprojects: 2,
    leave: 4.5,
    remaing: 12,
    allowance: "5.0 Hours",
    remaingallowance: "15Hours",
    upcoming: "Mon 20 May -Ramzon"
  },



];

const Empdashboard = () => {



  return (


    <div className=' container-fluid ps-0 pe-0'>

      <Navbarpage />

      <div className=' d-flex '>

        <Sidebar />





        <div className="container-fulid ms-5 emp_dash">

          {
            people.map((item, index) => (

              <div className="container-fulid" key={index}>
                <div className="card shawdow-lg border-0">
                  <div className="card-body d-flex bd-highlight mb-3 shadow-lg p-2  mt-1 bg-body rounded">
                    <img className="image-body1 mr-2" src={img3} alt="" />
                    <h1 className="client-text">Welcome,
                      {item.firstname}

                      <br />
                      <span className="client-text-para"> {item.date}</span>
                    </h1>
                  </div>
                </div>
                {/* header endned */}

                <div className="container-fulid body-div d-flex ">

                  <div className="row">


                    <div className="col-11">
                      <h6 className="content-text-para1">TODAY</h6>
                      <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
                        <div className="icon text-center rounded-circle mr-3 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-monitor fea icon-ex-md text-primary"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <div className="p-2 bd-highlight">{item.reason1}</div>
                        <div className="ms-auto p-2 bd-highlight">
                          <img className="image-body" src={img3} alt="" />

                        </div>
                      </div>
                      <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
                        <div className="icon text-center rounded-circle mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-monitor fea icon-ex-md text-primary"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <div className="p-2 bd-highlight" key={index.id}>
                          {item.reason2}
                        </div>

                        <div className="ms-auto p-2 bd-highlight">
                          <img className="image-body" src={img3} alt="" />
                        </div>
                      </div>
                      <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
                        <div className="icon text-center rounded-circle mr-3 mt-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-monitor fea icon-ex-md text-primary"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <div className="p-2 bd-highlight">
                          {item.reason3}
                        </div>

                        <div className="ms-auto p-2 bd-highlight">
                          <img className="image-body" src={img3} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-11">
                      <h6 className="content-text-para1 mt-4">TOMORROW</h6>
                      <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
                        <div className="icon text-center rounded-circle mr-3 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user-check fea icon-ex-md text-primary"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <polyline points="17 11 19 13 23 9"></polyline>
                          </svg>
                        </div>
                        <div className="p-2 bd-highlight">
                          {item.reason4}
                        </div>

                        <div className="ms-auto p-2 bd-highlight">
                          <img className="image-body" src={img3} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="col-11">
                      <h6 className="content-text-para1">NEXT SEVEN DAYS</h6>
                      <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
                        <div className="icon text-center rounded-circle mr-3 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="26"
                            height="26"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-monitor fea icon-ex-md text-primary"
                          >
                            <rect
                              x="2"
                              y="3"
                              width="20"
                              height="14"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="8" y1="21" x2="16" y2="21"></line>
                            <line x1="12" y1="17" x2="12" y2="21"></line>
                          </svg>
                        </div>
                        <div className="p-2 bd-highlight">
                          {item.reason5}
                        </div>
                        <div className="ms-auto p-2 bd-highlight">
                          <img className="image-body" src={img3} alt="" />
                        </div>
                      </div>
                      <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
                        <div className="icon text-center rounded-circle mr-3 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user-check fea icon-ex-md text-primary"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <polyline points="17 11 19 13 23 9"></polyline>
                          </svg>
                        </div>
                        <div className="p-2 bd-highlight">
                          {item.reason6}
                        </div>

                        <div className="ms-auto p-2 bd-highlight">
                          <img className="image-body" src={img3} alt="" />
                        </div>
                      </div>
                      <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">
                        <div className="icon text-center rounded-circle mr-3 mt-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-user-check fea icon-ex-md text-primary"
                          >
                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                            <circle cx="8.5" cy="7" r="4"></circle>
                            <polyline points="17 11 19 13 23 9"></polyline>
                          </svg>
                        </div>
                        <div className="p-2 bd-highlight">
                          {item.reason7}
                        </div>
                        <div className="ms-auto p-2 bd-highlight">
                          <img className="image-body" src={img3} alt="" />
                        </div>
                      </div>
                    </div>




                  </div>


                  <div className="row">


                    <div className="col-12">
                      <p className="content-text-para1">PROJECTS</p>
                      <div className="bd-highlight mb-3 pb-3 shadow-lg  bg-body rounded">

                        <div className="card-body d-flex justify-content-around">
                          <div>
                            <h6 className="content-text text-center">{item.totaltask}</h6>
                            Total task
                          </div>
                          <div className="vr mb-3"></div>
                          <div>
                            <h6 className="content-text text-center">{item.pendingtask}</h6>
                            Remaining
                          </div>
                        </div>
                        <div className="text-center">
                          <h6 className="content-text">{item.totalprojects}</h6>Totol Projects
                        </div>
                      </div>
                    </div>



                    <div className="col-12 ">
                      <p className="content-text-para1">YOUR LEAVE</p>
                      <div className="bd-highlight mb-3 pb-3 shadow-lg  bg-body rounded">
                        <div className=" card-title"></div>
                        <div className="card-body d-flex justify-content-around">
                          <div>
                            <h6 className="content-text text-center">{item.leave}</h6>Leave
                            Taken
                          </div>
                          <div className="vr mb-4"></div>
                          <div>
                            <h6 className="content-text text-center">{item.remaing}</h6>
                            Remaining
                          </div>
                        </div>
                        <div className="text-center mt-2">
                          <button className="btn btn-color">Apply Leave</button>
                        </div>
                      </div>

                    </div>

                    <div className="col-12">
                      <p className="content-text-para1 mt-3">YOUR TIME OF ALLOWANCE</p>
                      <div className="bd-highlight mb-3 shadow-lg pb-3  bg-body rounded">
                        <div className=" card-title"></div>
                        <div className="card-body d-flex justify-content-around">
                          <div>
                            <h6 className="content-text text-center">5.0 HOURS</h6>
                            Approved
                          </div>
                          <div className="vr"></div>
                          <div>
                            <h6 className="content-text text-center">15 HOURS</h6>
                            Remaining
                          </div>
                        </div>
                        <div className="text-center mt-2">
                          <button className="btn btn-color">Apply Time OFF</button>
                        </div>
                      </div>

                      <p className="content-text-para1 mt-3">Updated Holidays</p>
                      <div className="d-flex bd-highlight mb-3 shadow-lg p-2 mt-3 bg-body rounded">

                        <div className="p-2 bd-highlight text-align-center">{item.reason1}</div>

                      </div>
                    </div>

                  </div>


                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Empdashboard;
