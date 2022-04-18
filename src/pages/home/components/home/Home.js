import React from 'react';
import Banner from '../banner/Banner';
import Reviews from '../clientReviews/Reviews';
import Footer from '../footer/Footer';
import Services from '../services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;