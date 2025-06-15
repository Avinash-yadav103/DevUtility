import React from 'react'

const Subscribe = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
      {/* Heading */}
      <div className="max-w-md">
        <h3 className="text-4xl sm:text-5xl font-bold mb-4">
          Sign Up for <span className="text-coral-red">Updates</span>
          <br /> & Newsletter
        </h3>
      </div>
      
      {/* Subscription Form */}
      <div className="w-full max-w-md">
        <form className="flex items-center w-full border border-gray-300 rounded-full p-1 pr-1.5">
          <input 
            type="email" 
            placeholder="subscribe@nike.com" 
            className="flex-1 pl-5 py-3 rounded-full focus:outline-none text-gray-700"
          />
          <button 
            type="submit" 
            className="bg-coral-red hover:bg-red-500 transition-colors text-white font-medium py-3 px-8 rounded-full"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Subscribe
