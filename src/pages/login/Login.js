import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';

const Login = () => {
    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" })
    
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    // react firebase hooks
    const [signInWithGoogle, , , error] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    // redirect page
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])

    const getUserEmail= (e) => {
        const value = e.target.value
        setUserInfo({...userInfo, email:value})
    }
    const getUserPassword = (e) => {
        const value = e.target.value
    }
    
    // user login with email and pass
    const emailAndPasswordLogin = (event) => {
        event.preventDefault()
        const email = event.target.email.value
        const password = event.target.password.value
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div  className=' user-form'>
        <Form onSubmit={emailAndPasswordLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light mb-0'>Email</Form.Label>
                <Form.Control onChange={getUserEmail} className='' name='email' placeholder='Email' type="email"  />
                <Form.Text className="text-muted">
                    
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-light mb-0'>Password</Form.Label>
                <Form.Control onChange={getUserPassword} type="password" name='password' placeholder='Password'  autoComplete='false' />
                <Form.Text className="text-muted">
                    
                </Form.Text>
            </Form.Group>
                
            <div className='text-center mb-3'>
                <Button  className='submit-btn' type="submit"> Login </Button>
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

export default Login;