import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <h1>Get In Close</h1>
            <div>
                <div className="pages">
                    <Link to={'/'}> Home</Link>
                    <Link to={'/services'}> Services</Link>
                    <Link to={'/About'}> About Me</Link>
                    <Link to={'/blogs'}> Blogs</Link>
                    <Link to={'/contact'}> Contact</Link>
                    <Link to={'/login'}> Login</Link>
                    <Link to={'/signup'}> Signup</Link>
                </div>
                <div className="social-contact">

                </div>
                <div className="contact">
                    <p>Address: H#12 Road#3 Block#c Gulshan, Dhaka 1212</p>
                </div>

            </div>
        </div>
    );
};

export default Footer;