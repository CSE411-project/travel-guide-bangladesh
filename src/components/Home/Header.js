import React from 'react';
import Navbar from '../Shared/Navbar';
import Carousel from '../Home/Carousel';
import './Header.css';

const Header = () => {
    return (
        <div className="headermain">
            <Navbar></Navbar>
            <Carousel></Carousel>
        </div>
    );
};

export default Header;