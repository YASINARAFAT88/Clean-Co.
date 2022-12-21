import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';
import SingleService from './SingleService';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <SingleService></SingleService>
        </div>
    );
};

export default Home;