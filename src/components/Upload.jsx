import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'

const Upload = () => {

    useEffect(() => {
        ScrollReveal().reveal('.left', {
            duration: 1000,
            distance: '50px',
            origin: 'left',
            reset: false, // if true, it reveals again on re-scroll
            delay: 200,
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
    }

    return (
        <div className='pb-16 left'>
            {/* Title */}
            <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent py-6 md:py-16'>See the magic. Try Now</h1>

            <div className='text-center mb-24'>
                <input type="file" name="" id="upload2" hidden onChange={handleFileChange} />
                <label htmlFor="upload2" className='inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700'>
                    <img width={20} src={assets.upload_btn_icon} alt="Upload Button Icon" loading='lazy' />
                    <p className='text-white text-sm'>
                        Upload Your Image
                    </p>
                </label>
            </div>

        </div>
    )
}

export default Upload