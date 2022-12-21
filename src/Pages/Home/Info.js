import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../doctors-portal-resources/assets/icons/clock.svg'
import marker from '../../doctors-portal-resources/assets/icons/marker.svg'
import phone from '../../doctors-portal-resources/assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCard cardTitle="Opening Houres" bgClass="bg-gradient-to-r from-primary to-secondary" img={clock}></InfoCard>
            <InfoCard cardTitle="Our Location" bgClass="bg-accent" img={marker}></InfoCard>
            <InfoCard cardTitle="Contact Us" bgClass="bg-gradient-to-r from-primary to-secondary" img={phone}></InfoCard>
        </div>
    );
};

export default Info;