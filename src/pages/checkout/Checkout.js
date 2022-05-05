import './Checkout.css';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import useSserviceDetails from '../customHooks/useServiceDetails';

const Checkout = () => {
    // const [service, setServce] = useState({}) 
    const params  = useParams()
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()
    const [details] = useSserviceDetails(params._id)
    // const { name } = details
    
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
        <div className='service-form'>
            <div>
                <h2>Service Name: {details?.name}</h2>
                <h3>Add service</h3>
                <form onSubmit={handleSubmit(onSubmit)} className='d-flex flex-column mx-auto '>
                    <input className='mb-2 py-2 px-1' placeholder='Service Name'  {...register("name")} />
                    <input className='mb-2 py-2 px-1' placeholder='Describtion'  {...register("describe")} />
                    <input className='mb-2 py-2 px-1' placeholder='Price' type="number" {...register("price")} />
                    <input className='mb-2 py-2 px-1' placeholder='Picture URL'  {...register("picture")} />
                    <input type="submit" value="Add" />
                </form>
                <button
                    onClick={()=> navigate(`/order/${params._id}`)}
                    className='mt-3 bg-primary py-2 px-3 border-0 text-white'
                    type="submit">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default Checkout;