import React from 'react';
import logo from '../../images/logo/logo.png'
import './Navbar.css'

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
                            <a className="nav-link mr-5 active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-white" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5 text-white" href="#">Link</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;