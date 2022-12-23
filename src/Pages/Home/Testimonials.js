import React from 'react';
import quote from '../../doctors-portal-resources/assets/icons/quote.svg'
import people1 from '../../doctors-portal-resources/assets/images/people1.png'
import people2 from '../../doctors-portal-resources/assets/images/people2.png'
import people3 from '../../doctors-portal-resources/assets/images/people3.png'
import Reviews from './Reviews';
const Testimonials = () => {
    const reviews = [
        {
            id: 1,
            name: 'wenson Herry',
            location: 'canada',
            img: people1
        },
        {
            id: 2,
            name: 'john Abraham',
            location: 'America',
            img: people2
        },
        {
            id: 3,
            name: 'Ali mia Khan',
            location: 'Noth Pouland',
            img: people3
        }
    ]
    return (
        <section className='my-28'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-primary font-bold'>Testimonials</h4>
                    <h2 className='text-2xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Reviews
                        key={review.id}
                        review={review}
                    ></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;