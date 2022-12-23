import React from 'react';
import bGround from '../../doctors-portal-resources/assets/images/appointment.png'
import Button from '../Shared/Button';
const ContactUs = () => {
    return (
        <div className='p-5' style={{
            background: `url(${bGround})`
        }}>
            <h3 className='text-xl text-center font-bold text-primary uppercase'>Contact Us</h3>
            <p className="text-3xl text-white text-center">Stay connected with us</p>

            <div className='grid flex-col justify-items-center mt-5'>
                <input type="text" placeholder="Type Email" className="input input-bordered input-md w-full max-w-xs mb-3" />
                <input type="text" placeholder="Subject" className="input input-bordered input-md w-full max-w-xs mb-3" />
                <textarea type="text" placeholder="Message" className="input input-bordered input-lg w-full h-[170px] max-w-xs mb-3" />
                <Button>SUBMIT</Button>
            </div>
        </div>
    );
};

export default ContactUs;