import React from 'react';
import './Service.css'
import { Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate()
    const { _id, name, picture, price, describe } = service
    console.log(_id);
    return (
        <Col className='d-flex justify-content-center'>
            <Card className='h-100 card'>
                <Card.Img src={picture} className='w-100 card-img' alt="Card image" />
                <Card.Body>
                    <h1 className='font card-title'>{name}</h1>
                    <h6 className='font card-price' >{price}<small className='text-dark'>/ Per Adult</small></h6>
                    <Card.Text className='font card-text'>{describe}</Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-center align-items-center bg-white border-0 mt-3'>
                    <button onClick={()=>navigate(`/checkout/${_id}`)} className='common-btn' style={{'border': '1px solid black', 'color': 'black'}} type="submit">Details</button>
                </Card.Footer>
            </Card>
        </Col>
       
    );
};

export default Service;