import React, { useEffect, useState } from 'react';
import './Services.css'
import { Container, Row } from 'react-bootstrap';
import Service from './service/Service';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Container className='services'>
            <div className='my-5'>
                <p className='section-sub-title'>BOOK WITH OFFERS</p>
                <h1 className='section-title'>POPULAR DESTINATION</h1>
            </div>
            <Row xs={1} md={3} className="gy-5">
                {services.map(service => <Service key={service.id} service={service}> </Service>)}
            </Row>
        </Container>
    );
};

export default Services;