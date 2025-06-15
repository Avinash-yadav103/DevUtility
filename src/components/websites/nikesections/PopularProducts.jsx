import React from 'react'
import { Star } from 'lucide-react'

const PopularProducts = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: 'Nike Air Jordan-01',
      price: '$200.20',
      rating: 4.5,
      imgSrc: '../../../assets/components/website/nike/shoe-1.png', // Update with correct path
    },
    {
      id: 2,
      name: 'Nike Air Jordan-10',
      price: '$210.20',
      rating: 4.5,
      imgSrc: '../../../assets/components/website/nike/shoe-2.png', // Update with correct path
    },
    {
      id: 3,
      name: 'Nike Air Jordan-100',
      price: '$220.20',
      rating: 4.5,
      imgSrc: '../../../assets/components/website/nike/shoe-3.png', // Update with correct path
    },
    {
      id: 4,
      name: 'Nike Air Jordan-001',
      price: '$230.20',
      rating: 4.5,
      imgSrc: '../../../assets/components/website/nike/shoe-4.png', // Update with correct path
    },
  ]

  return (
    <div className="w-full">
      {/* Section Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-5">
          Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="text-gray-500 max-w-lg">
          Experience top-notch quality and style with our sought-after selections. 
          Discover a world of comfort, design, and value.
        </p>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col">
            {/* Product Image */}
            <div className="bg-pale-blue rounded-2xl mb-4 p-6 h-72 flex items-center justify-center relative overflow-hidden">
              <img 
                src={product.imgSrc} 
                alt={product.name} 
                className="object-contain h-48 w-full z-10 hover:scale-110 transition-transform duration-300"
              />
              {/* Decorative diagonal lines */}
              <div className="absolute right-0 top-0 h-full w-full opacity-50">
                <div className="absolute right-0 top-0 h-[140%] w-[1px] bg-white transform rotate-[30deg] origin-top-right"></div>
                <div className="absolute right-12 top-0 h-[140%] w-[1px] bg-white transform rotate-[30deg] origin-top-right"></div>
              </div>
            </div>
            
            {/* Product Rating */}
            <div className="flex items-center gap-2 mb-2">
              <Star className="h-5 w-5 fill-coral-red text-coral-red" />
              <span className="text-gray-500 text-sm">({product.rating})</span>
            </div>
            
            {/* Product Name */}
            <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
            
            {/* Product Price */}
            <p className="text-coral-red font-medium text-xl">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PopularProducts
