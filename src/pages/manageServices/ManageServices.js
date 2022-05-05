import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import useServices from '../customHooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices()
    
    const deleteService = (id) => {
        fetch(`http://localhost:5000/services/${id}`, {
           method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount === 1) {
                    const filterServices = services.filter(service => service._id !== id)
                    setServices(filterServices)
                } else {
                    console.log("No documents matched the query. Deleted 0 documents.");
                }  
        })
    }
    return (
        <div className='text-center mt-5'>
            <div>
            {
                services.map(service => <h5 key={service._id}>{service.name} <Button onClick={()=>deleteService(service._id)}>Delete</Button></h5>)
            }
            </div>
        </div>
    );
};

export default ManageServices;