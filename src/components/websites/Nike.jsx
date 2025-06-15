import Hero from './nikesections/Hero'
import Nav from './nikesections/Nav';
import CustomerReviews from './nikesections/CustomerReviews';
import PopularProducts from './nikesections/PopularProducts';
import Services from './nikesections/Services';
import SpecialOffers from './nikesections/SpecialOffers';
import Subscribe from './nikesections/Subscribe';
import Footer from './nikesections/Footer';


function Nike() {
  return (
    <main className='min-h-screen bg-white text-gray-900 font-sans justify-center overflow-hidden w-full'>
      {/* Navigation Bar Section */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-[1440px] mx-auto">
          <Nav />
        </div>
      </div>

      {/* Hero Section */}
      <section className='xl:px-24 lg:px-16 md:px-12 px-8 pb-16 max-w-[1440px] mx-auto'>
        <Hero />
      </section>
      
      {/* Popular Products Section */}
      <section className="py-16 px-8 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <PopularProducts />
      </section>
      
      {/* Super Quality Section - Commented out but preserving spacing */}
      <section className="py-16 px-8 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        {/* <SuperQuality /> */}
      </section>
      
      {/* Services Section */}
      <section className="px-8 md:px-12 lg:px-16 py-12 max-w-[1440px] mx-auto">
        <Services />
      </section>
      
      {/* Special Offers Section */}
      <section className="py-16 px-8 md:px-12 lg:px-16 max-w-[1440px] mx-auto">
        <SpecialOffers />
      </section>
      
      {/* Customer Reviews Section with light blue background */}
      <section className="py-16 px-8 md:px-12 lg:px-16 bg-blue-50 w-full">
        <div className="max-w-[1440px] mx-auto">
          <CustomerReviews />
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="px-8 md:px-12 lg:px-16 py-16 sm:py-32 w-full max-w-[1440px] mx-auto">
        <Subscribe />
      </section>
      
      {/* Footer Section with black background */}
      <section className="bg-black text-white px-8 md:px-12 lg:px-16 pt-16 pb-8 w-full">
        <div className="max-w-[1440px] mx-auto">
          <Footer />
        </div>
      </section>
    </main>
  )
}

export default Nike
