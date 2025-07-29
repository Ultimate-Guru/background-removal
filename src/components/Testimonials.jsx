import React from 'react'
import { testimonialsData } from '../assets/assets';
import { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

const Testimonials = () => {
    // ScrollReveal effect for the steps section
    useEffect(() => {
        ScrollReveal().reveal('.from-up', {
            duration: 1000,
            distance: '50px',
            origin: 'top',
            reset: false, // if true, it reveals again on re-scroll
            delay: 200,
            cleanup: true
        });

        ScrollReveal().reveal('.from-down', {
            duration: 1000,
            distance: '50px',
            origin: 'bottom',
            reset: false, // if true, it reveals again on re-scroll
            delay: 100,
            cleanup: true
        });
    }, []);
    return (
        <div>
            {/* Title */}
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-5 from-up'>
                Customer Testimonials
            </h1>
            1
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8 from-down'>
                {
                    testimonialsData.map((item, index) => (
                        <div className='bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700' key={index}>
                            <p className='text-4xl text-gray-500'>”</p>
                            <p className='text-sm text-gray-500'>{item.text}</p>
                            <div className='flex items-center gap-3 mt-5'>
                                <img src={item.image} alt="Customer Image 1" className='w-9 rounded-full' loading='lazy' />
                                <div>
                                    <p>{item.author}</p>
                                    <p className='text-sm text-gray-600'>{item.jobTitle}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Testimonials