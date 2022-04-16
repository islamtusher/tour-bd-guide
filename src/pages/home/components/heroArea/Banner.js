import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../header/customLink/CustomLink';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <Navbar className='nav-contain' expand="lg">
                <Container className='py-3'>
                    <Link className='brand' to={'/'}>Travel BD Guide</Link>
                    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto">
                            <CustomLink to={'/'}> Home</CustomLink>
                            <CustomLink to={'/reviews'}> Services</CustomLink>
                            <CustomLink to={'/Dashboard'}> About Me</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            <CustomLink to={'/blogs'}> Contact</CustomLink>
                        </Nav>   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Banner;