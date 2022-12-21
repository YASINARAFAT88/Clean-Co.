import React from 'react';
import cavity from '../../doctors-portal-resources/assets/images/cavity.png'
import floride from '../../doctors-portal-resources/assets/images/fluoride.png'
import whitening from '../../doctors-portal-resources/assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            id: 1,
            name: "Cavity Filling",
            img: cavity
        },
        {
            id: 2,
            name: "Floride Tretment",
            img: floride
        },
        {
            id: 3,
            name: "Teath Whitening",
            img: whitening
        },
    ]
    return (
        <div>
            <div className='my-28 text-center'>
                <h1 className='font-bold uppercase text-primary text-xl'>Our Services</h1>
                <h1 className='text-4xl'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service =>
                        <Service
                            key={service.id}
                            service={service}
                        ></Service>
                    )
                }
            </div>
        </div>
    );
};

export default Services;