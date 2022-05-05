import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebaseConfig';
import useSserviceDetails from '../customHooks/useServiceDetails';

const Order = () => {
    const [user] = useAuthState(auth)
    const params = useParams()
    const [details] = useSserviceDetails(params._id)
    return (
        <div className='d-flex justify-content-center align-items-center' style={{'height': '100vh'}}>
            <div>
                <h1>order: {details?.name}</h1>
                <form >
                    <input className='bg-white p-3 mb-3' type="text" value={user.displayName} name='name' placeholder='Name'   />
                    <input className='bg-white p-3 mb-3' type="email" value={user.email} name='email' placeholder='Email'   />
                    <input className='bg-white p-3 mb-3' type="text" value={details?.name} name='service' placeholder='Service Name'   />
                    <input className='bg-white p-3 mb-3' type="text" value='' name='address' placeholder='Address'   />
                    <input className='bg-white p-3 mb-3' type="text" value='' name='phone' placeholder='Phone' />
                    <input type="submit" value="Order" />
                </form>
            </div>
        </div>
    );
};

export default Order;