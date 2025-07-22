import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {

    const { openSignIn } = useClerk();
    const { isSignedIn } = useUser();

    return (
        <div className='flex justify-between items-center mx-4 py-3 lg:mx-44'>
            <NavLink to='/'>
                <img src={assets.logo} alt="Logo" className='w-32 sm:w-44' loading='lazy' />
            </NavLink>

            {
                isSignedIn
                    ? <div>
                        <UserButton />
                    </div>
                    : <button onClick={() => openSignIn({})} className='bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full cursor-pointer'>
                        Get Started
                        <img src={assets.arrow_icon} alt="Right_Arrow" className='w-3 sm:w-4 h-3.5' loading='lazy' />
                    </button>
            }
        </div>
    )
}

export default Navbar