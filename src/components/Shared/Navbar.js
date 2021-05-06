import React, { useContext } from 'react';
import logo from '../../images/logo/logo.png'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Navbar = () => {
    const {loggedInUser, setLoggedInUser, isAdmin, setIsAdmin} = useContext(UserContext);
    const handleLogOut = () => {
        setLoggedInUser({}); 
        setIsAdmin(false);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/home">
                    <img src={logo} className="image-responsive" alt="" />
                </Link>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav align-items-center  ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link mr-5 active" aria-current="page" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mr-5" href="#">Tourist Places</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link mr-5" aria-current="page" to="/travelGroupList">Travel Groups</Link>
                        </li>
                        {
                            isAdmin &&
                            <li className="nav-item">
                                <Link className="nav-link mr-5" aria-current="page" to="/admin">Admin Panel</Link>
                            </li>
                        }
                        <li className="nav-item">
                            {
                                loggedInUser.email 
                                ?
                                <div className="dropdown show">
                                    <div className="nav-link text-secondary" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img className="w-25 mr-2 rounded-circle" src={loggedInUser.photo} alt=""/>
                                        {loggedInUser.name}
                                    </div>

                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li className="dropdown-item text-secondary">Bookmarks</li>
                                        <li onClick={handleLogOut} className="dropdown-item text-secondary font-weight-bold">Logout</li>
                                    </ul>
                                </div>
                                :
                                <Link className="nav-link mr-5 text-black" to="/login">
                                    <FontAwesomeIcon style={{fontSize: '1.3em'}} icon={faUser} /> Login
                                </Link>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;