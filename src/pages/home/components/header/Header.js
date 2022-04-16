import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './customLink/CustomLink';


const Header = () => {
    const bgChange = () => {
        
    }
    return (
        <div>
            <Navbar onScroll={bgChange} className='nav-contain' fixed="top" expand="lg">
                <Container className='py-3'>
                    <Link className='brand' to={'/'}>Travel BD Guide</Link>
                    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto">
                            <CustomLink to={'/'}> Home</CustomLink>
                            <CustomLink to={'/services'}> Services</CustomLink>
                            <CustomLink to={'/About'}> About Me</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            <CustomLink to={'/contact'}> Contact</CustomLink>
                            <CustomLink to={'/login'}> Login</CustomLink>
                            <CustomLink to={'/signup'}> Signup</CustomLink>
                        </Nav>   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;