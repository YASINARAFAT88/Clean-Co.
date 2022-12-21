import React from 'react';
import treatment from '../../doctors-portal-resources/assets/images/treatment.png'

const SingleService = () => {
    return (
        <div className="hero min-h-screen w-4/5 my-10 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary border-none text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default SingleService;