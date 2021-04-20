import React from 'react';
import logo from '../../images/logo/logo.png';
import Navbar from '../Shared/Navbar';
import './Login.css';
import { AiFillFacebook } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Login = () => {
    return (
        <div className="login-container">
            <Navbar></Navbar>

            <div className="text-center">
                <img className="image-header" src={logo} alt="" />
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h2 className="text text-center">Join All The Users From Different Regions</h2>
                        <p className="text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio dicta corrupti, molestiae necessitatibus error exercitationem, pariatur quae, in saepe soluta officia? Fugit quia inventore eaque reiciendis esse ipsam quisquam sequi.
                        </p>


                        <h5 className="continue-text"> Continue with</h5>

                        <div className="login-buttons text-center row justify-content-center">
                            <div className="facebook row justify-content-center">
                                <h5 className="social-icon mt-1 mr-2"><AiFillFacebook /></h5>
                                <h5 className="align-self-center">Facebook</h5>
                            </div>
                            <div className="gmail row justify-content-center">
                                <h5 className="social-icon mt-1 mr-2"><SiGmail /></h5>
                                <h5 className="align-self-center">Gmail</h5>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;