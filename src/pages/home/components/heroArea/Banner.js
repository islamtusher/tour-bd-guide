import React from 'react';
import './Banner.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../header/customLink/CustomLink';
import Header from '../header/Header';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner text-light d-flex justify-content-center align-items-center'>
            <div>
                <div className="sub-title">
                    <h4>ARE YOU READY FOR NEXT TRIP!</h4>
                </div>
                <div className="main-title">
                    <h1>HERE! GUIDE TO <h1>EXPLORE YOUR TRAVELS</h1></h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;