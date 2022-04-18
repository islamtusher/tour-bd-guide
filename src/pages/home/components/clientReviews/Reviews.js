import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    },[])
    return (
        <Container id='reviews' className='services'>
            <div className='titles'>
                <p className='section-sub-title'>Happy Clients Reviews</p>
                <h1 className='section-title'>TRAVELLR'S TESTIMONIAL</h1>
            </div>
            <Row xs={1} md={2} lg={3} className="gy-5">
                {reviews.map(review => <Review key={review._id} review={review}> </Review>)}
            </Row>
        </Container>
    );
};

export default Reviews;