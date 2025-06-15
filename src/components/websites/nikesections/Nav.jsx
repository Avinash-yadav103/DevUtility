import React, { useState } from 'react'
import icon from '../../../assets/components/website/nike/favicon.ico'

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='flex items-center justify-between gap-4 py-4 px-4 h-12 md:px-6 lg:px-8'>
      {/* Logo section */}
      <div className="flex items-center h-2">
        <img src={icon} alt="Nike" className='w-20 h-8 object-contain' /> 
        <span className="ml-2 text-xl font-bold">Nike</span>
      </div>

      {/* Mobile menu button */}
      <button 
        className="md:hidden flex items-center"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>
      
      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center justify-center gap-10 text-sm font-semibold'>
        <li className="navlinks hover:text-red-500 cursor-pointer transition-colors">Home</li>
        <li className="navlinks hover:text-red-500 cursor-pointer transition-colors">About Us</li>
        <li className="navlinks hover:text-red-500 cursor-pointer transition-colors">Products</li>
        <li className="navlinks hover:text-red-500 cursor-pointer transition-colors">Contact Us</li>
      </ul>

      {/* Sign In Button - Desktop */}
      <div className="hidden md:block">
        <button className="text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Sign In / Explore now
        </button>
      </div>

      {/* Mobile menu - full screen */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 right-0 bg-white z-50 shadow-lg">
          <ul className='flex flex-col items-center py-8 gap-6 text-base font-medium'>
            <li className="hover:text-red-500 cursor-pointer">Home</li>
            <li className="hover:text-red-500 cursor-pointer">About Us</li>
            <li className="hover:text-red-500 cursor-pointer">Products</li>
            <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
            <li className="mt-4">
              <button className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                Sign In
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Nav
