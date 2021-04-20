import React from 'react';
import logo from '../../images/logo/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={logo} className="image-responsive" />
                </a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  ml-auto">
                        <li className="nav-item">
                            <a className="nav-link mr-5 active text-black" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-black" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-black" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-black" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-black" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-black" href="#">
                                <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faUser} /> Login
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;