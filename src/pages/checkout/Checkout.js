import userEvent from '@testing-library/user-event';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const Checkout = () => {
    // const [service, setServce] = useState({}) 
    const { register, handleSubmit } = useForm();

    const onSubmit = service => {
            fetch(('http://localhost:5000/services'), {
                method: 'POST', 
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(service)
            })
                .then(res => res.json())
                .then(data => console.log(data))
            
        
    };

    

    return (
        <div className='d-flex justify-content-center mt-5'>
            <div className='h-100'>
                <h3>add service</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column mx-auto '>
                    <input className='mb-2 py-2 px-1' placeholder='Service Name'  {...register("name")} />
                    <input className='mb-2 py-2 px-1' placeholder='Describtion'  {...register("describe")} />
                    <input className='mb-2 py-2 px-1' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2 py-2 px-1' placeholder='Picture URL'  {...register("picture")} />
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;