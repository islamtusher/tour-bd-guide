import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            <div className='titles'>
                <p className='section-sub-title'>THINKING POSITIVE</p>
                <h1 className='section-title'>ABOUT MY SELF</h1>
            </div >
            
            <div className='d-flex flex-column flex-lg-row justify-centent-center align-items-center w-75 mx-auto'>
                <div>
                    <img src="./images/myimg.jpg" className='' alt=""  style={{'width': '250px'}}/>
                </div>
                <div className='ms-lg-5'>
                    <div>
                        <h4 className='text-info'>Rafiqul Islam Tusher</h4>
                        <p>Bangladesh</p>
                        <p >
                            Hello! I am Tusher and I am a student of CSE department of Soueast University and I am Learning Web Development with the Programming Hero Team. My goal is to become a Full Stack Web Developer and Now I am working very hard every day to achieve my goal. Now Days my first priority is my development course and every day i am try to fulfill my daily task and target,  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;