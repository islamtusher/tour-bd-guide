import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebaseConfig';
import useSserviceDetails from '../customHooks/useServiceDetails';
import axios from 'axios';
import { Form, Toast } from 'react-bootstrap';

const Order = () => {
    const [user] = useAuthState(auth)
    const params = useParams()
    const [details] = useSserviceDetails(params._id)

    const handleOrder = (e) => {
        e.preventDefault()
        const order = {
            serviceId: params._id,
            serviceName: details?.name,
            userName: user.displayName,
            userEmail: user.email,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(res => {
                alert('Order Stored')
                e.target.reset()
            })
        
    }

    return (
        <div className='d-flex justify-content-center align-items-center' style={{'height': '100vh'}}>
            <div>
                <h1>order: {details?.name}</h1>
                <Form onSubmit={handleOrder}>
                    <input className='bg-white p-3 mb-3' type="text" value={user.displayName} name='name' placeholder='Name' readOnly  />
                    <input className='bg-white p-3 mb-3' type="email" value={user.email} name='email' placeholder='Email' readOnly  />
                    <input className='bg-white p-3 mb-3' type="text" value={details?.name} name='service' placeholder='Service Name' readOnly  />
                    <input className='bg-white p-3 mb-3' type="text"  name='address' placeholder='Address'   />
                    <input className='bg-white p-3 mb-3' type="text"  name='phone' placeholder='Phone' />
                    <input type="submit" value="Order" />
                </Form>
            </div>
        </div>
    );
};

export default Order;