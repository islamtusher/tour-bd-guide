import React, { useEffect, useState } from 'react';
import './Signup.css';
import { Button, Form } from 'react-bootstrap';
import {useCreateUserWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebaseConfig';

const Signup = () => {
    const [userInfo, setUserInfo] = useState({name:"", email: "", password: ""})
    const [userError, setUserError] = useState({emailError: '', passwordError: '', generalError: '' })

    // react firebase hooks
    const [signInWithGoogle] = useSignInWithGoogle(auth)
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    // onChange USER input-valu ecess
    // name
    const getUserName = (e) => {
        const value = e.target.value
        setUserInfo({...userInfo, name:value})
    }
    // email
    const getUserEmail= (e) => {
        const value = e.target.value
        setUserInfo({...userInfo, email:value})
    }
    // password 
    const getUserPassword = (e) => {
        const value = e.target.value
        if (value.length < 6) {
            setUserError({...userError, passwordError: "Too short password"})
        } else {
            setUserError({...userError, passwordError: ""})
            setUserInfo({...userInfo, password:value})
        }
    }


    // Form Handler
    const signInFormHandle = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        if (error) {
            alert(error.message)
            console.log(error.message);
        }
    }
    useEffect(() => {
        console.log(user);
    },[user])
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
                    <Form.Text className="text-muted">
                        {userError.passwordError && <p className='error'>{userError.passwordError}</p>}    
                    </Form.Text>
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