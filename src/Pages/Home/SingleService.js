import React from 'react';
import treatment from '../../doctors-portal-resources/assets/images/treatment.png'
import Button from '../Shared/Button';

const SingleService = () => {
    return (
        <div className="hero min-h-screen lg:w-4/5 my-10 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div className='lg:pl-20'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <Button></Button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;