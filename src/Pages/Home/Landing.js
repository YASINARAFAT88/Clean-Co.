import React from 'react';
import img from '../../components/bucketgirl.png'

const Landing = () => {
    return (
        <>
            <div className="hero h-screen lg:h-[60vh] bg-pink-200 px-20 mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='max-w-xl shrink-1'>
                        <p className='text-xl'>Best Quality</p>
                        <h1 className="text-4xl font-bold">Professional Cleanig <br />Service</h1>
                        <p className="py-3">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-[57vh]'>
                        <img src={img} alt='' className="h-full z-50 rounded-lg" />
                    </div>
                </div>
            </div >

            <div className='shadow-lg rounded-2xl max-w-[1200px] relative z-[20] bg-yellow-100 mx-auto mt-[-50px] z-auto p-10 w-5/6'>
                <h1 className='text-xl mb-2'>Get Free Estimate!</h1>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Email" className="input input-bordered w-full" />
                    <input type="text" placeholder="Service name" className="input input-bordered w-full" />
                    <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                    <input type="text" placeholder="More Info" className="input input-bordered w-full" />
                </div>
                <button className="btn btn-primary my-3">Submit</button>
            </div>
        </>
    );
};

export default Landing;