import React from 'react'
import Hero from './nikesections/Hero'
import PopularProducts from './nikesections/PopularProducts'
// import SuperQuality from './nikesections/SuperQuality'
import Services from './nikesections/Services'
import SpecialOffers from './nikesections/SpecialOffers'
// import CustomerReviews from './nikesections/CustomerReviews'
import Footer from './nikesections/Footer'

function Nike() {
  return (
    <main>
      Nav
      <section className='xl:padding-1 wide:padding-r padding-b'></section>
      <section className="padding">
        PopularProducts
      </section>
      <section className="padding">
        SuperQuality
      </section>
      <section className="padding-x py-12">
        Services
      </section>
      <section className="padding">
        SpecialOffers
      </section>
      <section className="padding bg-pale-blue">
        CustomerReviews
      </section>      
      <section className="padding-x sm:py-32 py-16 w-full">
        Subscribe
      </section>      
      <section className="padding bg-black padding-x padding-t pb-8 ">
        Footer
      </section>
      

    </main>
  )
}

export default Nike
