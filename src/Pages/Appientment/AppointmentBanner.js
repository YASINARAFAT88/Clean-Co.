import React, { useState } from 'react';
import bg from '../../doctors-portal-resources/assets/images/chair.png'
import bGround from '../../doctors-portal-resources/assets/images/bGround.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero h-[600px]" style={{
            background: `url(${bGround})`
        }}>
            <div className="hero-content lg:gap-x-20 flex-col lg:flex-row-reverse">
                <img src={bg} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;