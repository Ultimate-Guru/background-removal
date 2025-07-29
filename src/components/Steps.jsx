import React from 'react'
import { assets } from '../assets/assets'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Steps = () => {
    // ScrollReveal effect for the steps section
    useEffect(() => {
        ScrollReveal().reveal('.top', {
            duration: 1000,
            distance: '50px',
            origin: 'top',
            reset: false, // if true, it reveals again on re-scroll
            delay: 200,
            cleanup: true
        });

        ScrollReveal().reveal('.bottom', {
            duration: 1000,
            distance: '50px',
            origin: 'bottom',
            reset: false, // if true, it reveals again on re-scroll
            delay: 100,
            cleanup: true
        });
    }, []);

    return (
        <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent top'>
                Steps to remove background <br /> image in seconds
            </h1>

            <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center bottom'>

                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                    <img src={assets.upload_icon} alt="Upload Icon" className='max-w-9' loading='lazy' />
                    <div>
                        <p className='text-xl font-medium'>Upload Image</p>
                        <p className='text-sm text-neutral-500 mt-1'>Choose the image you want to edit.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                    <img src={assets.remove_bg_icon} alt="Upload Icon" className='max-w-9' loading='lazy' />
                    <div>
                        <p className='text-xl font-medium'>Remove Background</p>
                        <p className='text-sm text-neutral-500 mt-1'>Let the tool erase the background.</p>
                    </div>
                </div>

                <div className='flex items-start gap-4 bg-white drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
                    <img src={assets.download_icon} alt="Upload Icon" className='max-w-9' loading='lazy' />
                    <div>
                        <p className='text-xl font-medium'>Download Image</p>
                        <p className='text-sm text-neutral-500 mt-1'>Save the final image instantly.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Steps