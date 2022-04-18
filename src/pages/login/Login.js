import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebaseConfig';

const Login = () => {
    const [userInfo, setUserInfo] = useState({ name: "", email: "", password: "" })
    const [userError, setUserError] = useState({ emailError: '', passwordError: '' })
    
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";

    // react firebase hooks
    const [signInWithGoogle, , , googleSigninError] = useSignInWithGoogle(auth)
    const [signInWithEmailAndPassword, , ,emailSigninError] = useSignInWithEmailAndPassword(auth);

    // redirect page
    useEffect(() => {
        if (user) {
            navigate(from, { replace: true })
        }
    }, [user])

    // get email
    const getUserEmail= (e) => {
        const value = e.target.value
        setUserInfo({ ...userInfo, email: value })
        
    }
    // get password
    const getUserPassword = (e) => {
        const value = e.target.value
        setUserInfo({ ...userInfo, password: value })
    }
    
    // login with email and pass
    const emailAndPasswordLogin = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword( userInfo?.email, userInfo?.password)
    }

    // login hooks error handling
    useEffect(() => {
        const hooksError = googleSigninError || emailSigninError
        if (hooksError) {
            switch (hooksError?.code) {
                case "auth/invalid-email":
                    setUserError({ ...userError, emailError: 'Enter A invalid Email' })
                    console.log(hooksError?.code);
                    break;
                case "auth/user-not-found":
                    setUserError({ ...userError, emailError: 'This User is not existing' })
                    console.log(hooksError?.code);
                    break;
                case 'auth/wrong-password':
                    setUserError({ ...userError, passwordError: 'Enter A wrong Password!' })
                    break;
                default:
                    alert('Something Worng Please Chack!')
            }
        }
        else {
            setUserError({ ...userError, emailError: '', passwordError: ''  })
        }
    }, [googleSigninError, emailSigninError])

    console.log(emailSigninError?.code);
    return (
        <div id='login' className=' user-form'>
        <Form onSubmit={emailAndPasswordLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-light mb-0'>Email</Form.Label>
                <Form.Control onChange={getUserEmail} className='' name='email' placeholder='Email' type="email"  />
                <Form.Text className="text-muted">
                    {userError.emailError && <p className='error'>{userError.emailError}</p>}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-light mb-0'>Password</Form.Label>
                <Form.Control onChange={getUserPassword} type="password" name='password' placeholder='Password'  autoComplete='false' />
                <Form.Text className="text-muted">
                    {userError.passwordError && <p className='error'>{userError.passwordError}</p>}
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