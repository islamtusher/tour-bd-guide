import React, { useState } from 'react';
import './Signup.css';
import { Button, Form } from 'react-bootstrap';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({name:"", email: "", password: ""})
    const [userError, setUserError] = useState({emailError: '',passwordError: '', generalError: '' })

    const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth)
    

    // onChange USER INGO valu ecess
    const getUserName = (e) => {
        const value = e.target.value
        setUserInfo({...userInfo, name:value})
    }
    const getUserEmail= (e) => {
        const value = e.target.value
        setUserInfo({...userInfo, email:value})
    }
    const getUserPassword = (e) => {
        const value = e.target.value
        setUserInfo({...userInfo, password:value})
    }


    // Form Handler
    const signInFormHandle = (event) => {
        event.preventDefault()
        console.log(userInfo);
    }
    return (
        <div  className=' user-form'>
            <Form onSubmit={signInFormHandle}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label className='text-light mb-0'>Name</Form.Label>
                    <Form.Control onChange={getUserName} className='input-fild' placeholder='Name' type="text"  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-light mb-0'>Email</Form.Label>
                    <Form.Control onChange={getUserEmail}  className='' placeholder='Email' type="email"  />
                    <Form.Text className="text-muted">
                        
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-light mb-0'>Password</Form.Label>
                    <Form.Control onChange={getUserPassword} type="password" placeholder='Password'  autoComplete='false' />
                </Form.Group>
                <div className='text-center mb-3'>
                    <Button className='submit-btn' type="submit"> Sign Up </Button>
               </div>
            </Form>
            <div className='d-flex justify-content-evenly align-items-center text-light'>
                <hr className='line' />
                <p>Or</p>
                <hr className=' line' />
            </div>
            <div className="text-center">
                <Button onClick={()=>signInWithGoogle()} className='w-100' variant="primary" type="submit">
                    Google SignIn
                </Button>
            </div>
        </div>
    );
};

export default Signup;