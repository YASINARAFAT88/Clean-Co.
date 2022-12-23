import React from 'react';

const Reviews = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>If a dog chews shoes Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eos necessitatibus molestiae sed non ipsa aliquam, nam.</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mt-3 mr-5">
                            <img src={review.img} alt='' />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl'>{review.name}</h2>
                        <h2>{review.location}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;