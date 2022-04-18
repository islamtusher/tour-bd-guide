import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Review = ({ review }) => {
    const {name, picture,country, describe} = review
    return (
        
        <Col className='d-flex justify-content-center'>
            <Card className='h-100 card py-4'>
                <div className='d-flex align-items-center ms-4'>
                    <Card.Img src={picture} className='w-25 rounded-circle' alt="Card image" />
                    <div className='d-flex flex-column ms-3' >
                        <h5 className='font fs-5 m-0'>{name}</h5>
                        <h6 className='font text-primary m-0 fs-6'>{country}</h6>
                    </div>
                </div>
                <Card.Body>
                    <Card.Text className='font card-text'>{describe}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
        
    );
};

export default Review;