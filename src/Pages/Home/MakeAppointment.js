import React from 'react';
import doctor from '../../doctors-portal-resources/assets/images/doctor.png'
import Button from '../Shared/Button';
import bgImg from '../../doctors-portal-resources/assets/images/appointment.png'

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${bgImg})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block '>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5 '>
                <h1 className='text-xl uppercase text-primary font-bold my-3'>Appointment</h1>
                <h3 className='text-3xl text-white mb-3'>Make An Appointment Today</h3>
                <p className='text-white mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus magnam dicta eaque amet qui alias similique provident vitae! Reprehenderit, iste eius! Voluptatem, minima! Et nesciunt natus exercitationem ullam, a recusandae.</p>
                <Button></Button>
            </div>
        </section>
    );
};

export default MakeAppointment;