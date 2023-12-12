import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
    return (
         <div className="container  d-flex vh-100 justify-content-center align-items-center ">
            <div className="row w-25 ">
                <div className="col ">
                    <div className="card bg-info "  style={{width:"350px"}}>
                        <div className="card-title text-center mt-4 " >
                            <h1> login page</h1>
                        </div>
                        <div className="card-body">
                            <form >

                                <label><strong>usename</strong></label>
                                <input className="form-control mb-3 py-2" type="text" placeholder="enter usename" />
                                <label><strong>password</strong></label>
                                <input className="form-control mb-3 py-2 " type="password" placeholder="enter password" />
                                <button className="btn btn-primary mb-3  w-100">login</button>
                               
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
                            <p className="text-center">do not have account ?</p>
                                <Link to='/signup' className="btn bg-success border w-100 rounded mb-2 ">create account</Link>
                        </div>


                    </div>
                </div>
            </div>
        </div>
       
    )
}



export default Login







