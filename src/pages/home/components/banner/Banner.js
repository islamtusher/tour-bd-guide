import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner d-flex flex-column justify-content-center align-items-center '>
            <div className='titile text-light '> 
                <div className="sub-title">
                    <h4>ARE YOU READY FOR NEXT TRIP!</h4>
                </div>
                <div className="main-title">
                    <h1>HERE! GUIDE TO <br/>EXPLORE YOUR TRAVELS</h1>
                </div> 
            </div>
            <div className="banner-buttons ">
                <button className='common-btn mb-3' type="submit">Book Now</button>
                <button className='common-btn' type="submit">Find Tour</button>
            </div>
        </div>
    );
};

export default Banner;