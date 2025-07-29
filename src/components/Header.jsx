import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Header = () => {
    useEffect(() => {
        ScrollReveal().reveal('.from-left', {
            duration: 1000,
            distance: '50px',
            origin: 'left',
            reset: false, // if true, it reveals again on re-scroll
            delay: 100,
            cleanup: true
        });

        ScrollReveal().reveal('.from-right', {
            duration: 1000,
            distance: '50px',
            origin: 'right',
            reset: false, // if true, it reveals again on re-scroll
            delay: 100,
            cleanup: true
        });
    }, []);

    const navigate = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            navigate('/result', { state: { imageUrl } });
        }
    };

    return (
        <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20'>
            {/* Left Side */}
            <div className='from-left'>
                <h1 className='text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight'>
                    Remove the
                    <br className='max-md:hidden' />
                    <span className='bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent'> background </span>
                    from
                    <br className='max-md:hidden' /> images for free.
                </h1>
                <p className='my-6 text-[15px] text-gray-500'>
                    Remove backgrounds from your images instantly and for free. <br className='max-sm:hidden' /> Upload your photo and get a clean, transparent background in   seconds!
                </p>
                <div>
                    <input type="file" name="" id="upload1" hidden onChange={handleFileChange} />
                    <label htmlFor="upload1" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700'>
                        <img width={20} src={assets.upload_btn_icon} alt="Upload Button Icon" loading='lazy' />
                        <p className='text-white text-sm'>
                            Upload Your Image
                        </p>
                    </label>
                </div>
            </div>

            {/* Right Side */}
            <div className='from-right'>
                <img src={assets.header_img} alt="Header_Image" className='w-full max-w-md' loading='lazy' />
            </div>
        </div>
    )
}

export default Header