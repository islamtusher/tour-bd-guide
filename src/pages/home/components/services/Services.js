import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from './service/Service';
import { Row, Container } from 'react-bootstrap';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container id='service' className='services'>
            <div className='titles'>
                <p className='section-sub-title'>BOOK WITH OFFERS</p>
                <h1 className='section-title'>POPULAR DESTINATION</h1>
            </div>
            <Row xs={1} md={2} lg={3} className="gy-5">
                {services.map(service => <Service key={service._id} service={service}> </Service>)}
            </Row>
        </Container>
    );
};

export default Services;