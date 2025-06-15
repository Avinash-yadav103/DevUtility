import React from 'react';
import { ArrowRight } from 'lucide-react'; // You may need to install lucide-react for icons

const Hero = () => {
  // Placeholder image paths - update these with your actual image paths
  const mainShoeImage = "../../../assets/components/website/nike/hero-shoe.png";
  const thumbnailShoe1 = "../../../assets/components/website/nike/shoe-1.png";
  const thumbnailShoe2 = "../../../assets/components/website/nike/shoe-2.png";
  const thumbnailShoe3 = "../../../assets/components/website/nike/shoe-3.png";

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 gap-16">
      {/* Left Content */}
      <div className="flex-1 max-w-xl">
        <p className="text-lg text-coral-red font-normal mb-4">Our Summer collections</p>
        
        <h1 className="text-6xl sm:text-7xl font-bold leading-tight mb-6">
          The New Arrival
          <br />
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        
        <p className="text-gray-500 text-lg mb-8 max-w-lg">
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        
        <button className="bg-coral-red hover:bg-red-500 text-white py-4 px-8 rounded-full flex items-center gap-2 transition-all mb-16">
          Shop now
          <span className="bg-white rounded-full p-1 flex items-center justify-center">
            <ArrowRight size={16} className="text-coral-red" />
          </span>
        </button>
        
        {/* Statistics */}
        <div className="flex justify-start gap-16 flex-wrap">
          <div className="flex flex-col">
            <p className="text-4xl font-bold">1k+</p>
            <p className="text-gray-500">Brands</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold">500+</p>
            <p className="text-gray-500">Shops</p>
          </div>
          <div className="flex flex-col">
            <p className="text-4xl font-bold">250k+</p>
            <p className="text-gray-500">Customers</p>
          </div>
        </div>
      </div>
      
      {/* Right Content - Shoe Image */}
      <div className="flex-1 flex justify-center items-center relative">
        <div className="bg-pale-blue rounded-full h-[550px] w-[550px] flex items-center justify-center relative">
          <img 
            src={mainShoeImage} 
            alt="Nike Shoe" 
            className="object-contain z-10 max-w-[500px] transform -rotate-[25deg]"
          />
          
          {/* Thumbnail images */}
          <div className="absolute bottom-0 -mb-8 flex gap-4 transform translate-y-full">
            <div className="border-2 border-coral-red rounded-xl p-1 cursor-pointer bg-white">
              <img 
                src={thumbnailShoe1} 
                alt="Nike Shoe" 
                className="w-24 h-24 object-contain transform -rotate-[25deg]"
              />
            </div>
            <div className="border-2 border-transparent hover:border-coral-red rounded-xl p-1 cursor-pointer bg-white">
              <img 
                src={thumbnailShoe2} 
                alt="Nike Shoe" 
                className="w-24 h-24 object-contain transform -rotate-[25deg]"
              />
            </div>
            <div className="border-2 border-transparent hover:border-coral-red rounded-xl p-1 cursor-pointer bg-white">
              <img 
                src={thumbnailShoe3} 
                alt="Nike Shoe" 
                className="w-24 h-24 object-contain transform -rotate-[25deg]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
