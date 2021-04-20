import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
    return (
        <div className="container ourinfo text-center">

            <div className="row">
                <div className="col-md-6 text-white mx-auto">
                    <h1>TRAVEL GUIDE BANGLADESH</h1>

                    <p className="w-100">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum."Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                        irure dolor
                        in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum."
                    </p>

                    <div className="contact text-white">
                        <h1 className="mt-5">Contact US</h1>

                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Email Address" />
                        <input type="email" className="form-control my-4" id="exampleFormControlInput1" placeholder="Subject" />
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Message US"></textarea>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ContactSection;