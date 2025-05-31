    import React, { useEffect, useState } from 'react'
    import { assets } from '../assets/assets'

    const Navbar = () => {
    const [showMobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
        return () => {
        document.body.style.overflow = 'auto'
        }
    }, [showMobileMenu])

    return (
        <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
            <img src={assets.logo} alt="Logo" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex justify-center gap-8 text-white">
            <li><a href="/" className="cursor-pointer hover:text-gray-400">Home</a></li>
            <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
            <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
            <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a></li>
            </ul>

            <button className='hidden md:block bg-white px-8 py-2 rounded-full'>
            Sign up
            </button>

            {/* Mobile Menu Icon */}
            <img
            onClick={() => setMobileMenu(true)}
            src={assets.menu_icon}
            className='md:hidden w-7 cursor-pointer'
            alt="Open menu"
            aria-label="Open menu"
            />
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed top-0 right-0 bottom-0 left-0 z-20 bg-white transition-all duration-300 ${showMobileMenu ? 'h-screen w-full' : 'h-0 w-0 overflow-hidden'}`}>
            <div className='flex justify-end p-6'>
            <img
                onClick={() => setMobileMenu(false)}
                src={assets.cross_icon}
                className='w-6 cursor-pointer'
                alt="Close menu"
                aria-label="Close menu"
            />
            </div>
            <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <a onClick={() => setMobileMenu(false)} href="#" className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={() => setMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
            <a onClick={() => setMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
            <a onClick={() => setMobileMenu(false)} href="#Testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
            </ul>
        </div>
        </div>
    )
    }

    export default Navbar
