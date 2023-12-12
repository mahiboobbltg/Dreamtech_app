import React from "react";
import { Link} from "react-router-dom";

const Signup = () => {
    return (
         <div className="container d-flex vh-100 justify-content-center align-items-center text-capitalize ">
            <div className="row w-25 ">
                <div className="col ">
                    <div className="card bg-dark text-light" style={{width:"350px"}}>
                        <div className="card-title text-center mt-4">
                            <h1> Signup page</h1>
                        </div>
                        <div className="card-body">

                            <form >
                                <label>email</label>
                                <input className="form-control  mb-3 py-2 " type="text" placeholder="enter email" />
                                <label>usename</label>
                                <input className="form-control  mb-3 py-2" type="text" placeholder="enter usename" />
                                <label>password</label>
                                <input className="form-control  mb-3 py-2" type="password" placeholder="enter password" />
                                <button className="btn bg-success border rounded w-100 mb-2">create account</button>
                                <p className="text-center">already have a account </p>
                                <Link to='/' className="btn btn-primary mb-3 w-100">login</Link>

                            </form>
                            <div className="text-center">or</div>
                            <hr />
                            <div className="icons ">
                                <ul style={{ listStyleType: 'none' }} className="d-flex justify-content-around align-items-center">
                                    <li ><a href="/www.facebook.com"> <i class="fa-brands fa-xl fa-facebook"></i></a></li>
                                    <li ><a href="/www.google.com"><i class="fa-brands fa-xl fa-google"></i> </a></li>
                                    <li ><a href="/www.instgram.com"><i class="fa-brands fa-xl fa-instagram"></i> </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Signup

