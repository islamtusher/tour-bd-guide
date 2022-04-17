import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    // react firebase hooks
    const [signInWithGoogle, user, , error] = useSignInWithGoogle(auth)

    // redirect page
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])
    
    return (
        <div  className=' user-form'>
        <Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light mb-0'>Email</Form.Label>
                <Form.Control className='' placeholder='Email' type="email"  />
                <Form.Text className="text-muted">
                    
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-light mb-0'>Password</Form.Label>
                <Form.Control type="password" placeholder='Password'  autoComplete='false' />
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

export default Login;