import React from 'react'
import { assets } from '../assets/assets'
import { useLocation, useNavigate } from 'react-router-dom'

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageUrl = location.state?.imageUrl;

  return (
    <div className='mx-4 my-3 lg:mx-44 min-h-[75vh]'>

      <div className='bg-white rounded-lg px-8 py-6 drop-shadow-md'>

        {/* Image Container */}
        <div className='flex flex-col sm:grid grid-cols-2 gap-8'>

          {/* Left Side */}
          <div>
            <p className='font-semibold text-gray-600 mb-2'>Original</p>
            <img src={imageUrl || assets.image_w_bg} alt="Image With Bg" className='rounded-md border' loading='lazy' />
          </div>

          {/* Right Side */}
          <div className='flex flex-col'>
            <p className='font-semibold text-gray-600 mb-2'>Background Removed</p>
            <div className='rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden'>
              {/* Placeholder for processed image, use original for now */}
              <img src={imageUrl || assets.image_wo_bg} alt="Image Without Bg" loading='lazy' />
            </div>
          </div>

        </div>

        {/* Buttons */}
        <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6'>
          <button
            className='px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'
            onClick={() => navigate('/')}
          >
            Try another Image
          </button>
          {imageUrl && (
            <a
              href={imageUrl}
              download="uploaded-image.png"
              className='px-8 py-2.5 text-white text-sm cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700'
            >
              Download Image
            </a>
          )}
        </div>

      </div>

    </div>
  )
}

export default Result