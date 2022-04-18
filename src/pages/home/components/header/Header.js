import React from 'react';
import './Header.css'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from './customLink/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebaseConfig';
import { signOut } from 'firebase/auth';


const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <Navbar className='nav-contain' fixed="top" expand="lg">
                <Container className='py-3 '>
                    <Link className='brand' to={'/'}>Travel BD Guide</Link>
                    <Navbar.Toggle className='bg-light' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav ">
                        <Nav className="ms-auto d-flex align-items-center">
                            {user?.email && <p className='text-warning m-0'>{user?.email}</p>}
                            <CustomLink to={'/'}> Home</CustomLink>
                            <CustomLink to={'/services'}> Services</CustomLink>
                            <CustomLink to={'/About'}> About Me</CustomLink>
                            <CustomLink to={'/blogs'}> Blogs</CustomLink>
                            <CustomLink to={'/contact'}> Contact</CustomLink>
                            {
                                user?.email ?
                                    <Button onClick={()=>signOut(auth)} className='bg-white py-1 px-2 border-0 ms-3 text-dark'> LogOut </Button>
                                    :
                                    <>
                                        <CustomLink to={'/login'}> Login </CustomLink>        
                                        <CustomLink to={'/signup'}> Signup</CustomLink>
                                    </>
                            }
                        </Nav>   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;