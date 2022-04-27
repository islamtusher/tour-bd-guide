import React from 'react';
import { Button } from 'react-bootstrap';
import useServices from '../customHooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices()
    const deleteService = (id) => {
        console.log(id);
    }
    return (
        <div className='text-center mt-5'>
            <div>
            {
                services.map(service => <h5>{service.name} <Button onClick={()=>deleteService(service._id)}>Delete</Button></h5>)
            }
            </div>
        </div>
    );
};

export default ManageServices;