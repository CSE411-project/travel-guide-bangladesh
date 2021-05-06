import emailjs from 'emailjs-com';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import './ContactSection.css';

const ContactSection = () => {
    const {loggedInUser} = useContext(UserContext);

    const sendEmail = (e) => {
        e.preventDefault();
        
        if(!loggedInUser.email) {
            alert('Please login first to send messages !!');
            return;
        }
        
        emailjs.sendForm('travel_guide_bangladesh', 'template_bfx2scp', e.target, 'user_BPa2tbQdJgcaCtBiivUJl')
        .then((result) => {
            console.log(result.text);
            alert("Message sent successfully !!");
        }, (error) => {
            console.log(error.text);
            alert("Error while sending message. Try again later !!");
        });
        
        e.target.reset();
    }

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
                        <h1 className="mt-5">Contact Us</h1>

                        <form onSubmit={sendEmail}>
                            {
                                loggedInUser.email &&
                                <>
                                    <input type="text" className="form-control my-4" placeholder="Name" name="name" value={loggedInUser.name} />
                                    <input type="email" className="form-control my-4" placeholder="Email" name="email" value={loggedInUser.email} />
                                </>                                
                            }
                            <input type="text" className="form-control my-4" placeholder="Subject" name="subject" required />
                            <textarea className="form-control" rows="5" placeholder="Message US" name="message" required></textarea>
                            <input className="btn btn-block btn-outline-success mt-3" type="submit" value="Send Message"/>
                        </form>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default ContactSection;