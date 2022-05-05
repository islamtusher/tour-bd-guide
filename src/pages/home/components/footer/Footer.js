import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Col, Row, Navbar, Nav, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div>
            <div className='titles'>
                <p className='section-sub-title'>FELL FREE TO CONTACT</p>
                <h1 className='section-title'>GET IN CLOSE</h1>
            </div>
            <div className='footer mt-5'>
                <Container>
                    <Row xs={1} md={2} lg={3} className="gy-5 py-5 footer-area">
                        <Col className='d-flex align-items-center justify-content-center'>
                            <Navbar className='footer-page-part'>
                                <Navbar.Collapse className='pages'>
                                    <Nav.Link className='footer-page' as={HashLink} to="/home#home">Home</Nav.Link>
                                    <Nav.Link className='footer-page' as={HashLink} to="/home#service">Services</Nav.Link>
                                    <Nav.Link className='footer-page' as={HashLink} to="/home#reviews">Reviews</Nav.Link>
                                    <Nav.Link className='footer-page' as={HashLink} to="/signup">Sign Up</Nav.Link>
                                    <Nav.Link className='footer-page' as={HashLink} to="/login">Log In</Nav.Link>
                                </Navbar.Collapse>
                            </Navbar>
                        </Col>
                        <Col className='d-flex align-items-center justify-content-center'>
                            <div className="social-contact d-flex flex-column justify-content-center align-items-center">
                                <img src="./images/app.png" width="135" height="40" className="img-fluid mb-3 rounded-3 border border-1 border-light" alt="" />
                                <img src="./images/app2.png" width="135" height="40" className="img-fluid rounded-3 border border-1 border-light" alt="" />
                            </div>
                        </Col>
                        <Col className='d-flex align-items-center justify-content-center'>
                            <div className="contact">
                                <p> H#12 Road#3 Gulshan, Dhaka 1212</p>
                                <p>01014745577 or 01014745577</p>
                                <p></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
       </div>
    );
};

export default Footer;