import React from 'react'
import nikeIcon from '../../../assets/components/website/nike/favicon.ico' // Update path as needed

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12">
        {/* Nike Logo and Description */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img src={nikeIcon} alt="Nike" className="w-12 h-auto object-contain" />
            <span className="text-3xl font-bold">Nike</span>
          </div>
          <p className="text-gray-400 mb-8 max-w-xs">
            Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex gap-5">
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.61.5C10.41.5,9.51,3,9.51,5.3V7.46H6.5v4h3v12h5v-12h3.85l.42-4Z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.32,6.44a.5.5,0,0,0-.2-.87l-.79-.19A.49.49,0,0,1,22,5.1a.5.5,0,0,1,0-.43l.45-.89a.5.5,0,0,0-.59-.7l-1,.31a.5.5,0,0,1-.55-.13.51.51,0,0,1-.1-.56l.21-.65A.49.49,0,0,0,19.62,2L18.87,3a.5.5,0,0,1-.52.16.51.51,0,0,1-.36-.4L17.83,1.8A.5.5,0,0,0,17,.92l-.9.45a.49.49,0,0,1-.54,0,.5.5,0,0,1-.26-.46V.5a.5.5,0,0,0-.73-.44l-.9.45A.47.47,0,0,1,13.2.48a.5.5,0,0,1-.2-.51L13.28.5a.5.5,0,0,0-.6-.7l-.89.29a.48.48,0,0,1-.53-.12.5.5,0,0,1-.09-.54l.25-.81A.5.5,0,0,0,10.5.17L9.8.36a.5.5,0,0,1-.5-.13A.49.49,0,0,1,9.16,0L8.61,0A.5.5,0,0,0,8,1.1L9,1.4a.5.5,0,0,1,.33.33.5.5,0,0,1-.07.46l-.27.38A.51.51,0,0,1,8.53,3a.5.5,0,0,1-.42-.15l-.38-.47A.5.5,0,0,0,7,2.69l.53.84A.5.5,0,0,1,7.38,4a.51.51,0,0,1-.43.06l-.86-.3a.49.49,0,0,0-.62.61l.3.86a.5.5,0,0,1-.06.44A.51.51,0,0,1,5.3,6l-.84-.53a.5.5,0,0,0-.68.69l.47.38A.51.51,0,0,1,4.4,7a.5.5,0,0,1-.46-.33l-.2-.53A.5.5,0,0,0,3,6l.34.94A.5.5,0,0,1,3,7.43a.49.49,0,0,1-.43.15l-.52-.1a.49.49,0,0,0-.54.76l.44.45a.49.49,0,0,1,.08.56.48.48,0,0,1-.51.18l-.79-.24A.5.5,0,0,0,0,9.74l.33.73a.52.52,0,0,1,0,.4.49.49,0,0,1-.32.29l-.74.15a.5.5,0,0,0-.1.93l.68.3a.51.51,0,0,1,.3.38.49.49,0,0,1-.16.45l-.54.44a.5.5,0,0,0,.29.88l.74-.08a.5.5,0,0,1,.45.17.49.49,0,0,1,.08.47l-.22.68a.49.49,0,0,0,.65.64l.67-.21a.5.5,0,0,1,.5,0,.51.51,0,0,1,.24.42v.74a.5.5,0,0,0,.69.46l.76-.29a.5.5,0,0,1,.51.08.51.51,0,0,1,.17.48l-.09.77a.5.5,0,0,0,.8.45l.65-.45a.51.51,0,0,1,.53-.05.5.5,0,0,1,.26.44v.63a.5.5,0,0,0,.85.36l.53-.53a.5.5,0,0,1,.7,0l.36.36a.5.5,0,0,0,.85-.36v-.63a.5.5,0,0,1,.26-.44.49.49,0,0,1,.52.05l.66.45a.5.5,0,0,0,.8-.45l-.1-.77a.51.51,0,0,1,.17-.48.5.5,0,0,1,.51-.08l.76.29a.5.5,0,0,0,.69-.46v-.74a.5.5,0,0,1,.25-.42.5.5,0,0,1,.49,0l.67.21a.5.5,0,0,0,.65-.64l-.22-.68a.5.5,0,0,1,.09-.47.5.5,0,0,1,.45-.17l.74.08a.5.5,0,0,0,.29-.88l-.54-.44a.51.51,0,0,1-.16-.45.5.5,0,0,1,.3-.38l.68-.3a.5.5,0,0,0-.1-.93ZM17.33,12.34a5,5,0,1,1-5-5A5,5,0,0,1,17.33,12.34Z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85,0,3.2,0,3.58-.07,4.85-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07-3.2,0-3.58,0-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85,0-3.2,0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7,.07c-4.46.2-6.8,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.44,2.53,6.8,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.46-.2,6.8-2.56,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.45-2.53-6.8-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.43,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Products Links */}
        <div>
          <h4 className="text-xl font-medium mb-6">Products</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Air Force 1</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Air Max 1</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Air Jordan 1</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Air Force 2</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nike Waffle Racer</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Nike Cortez</a></li>
          </ul>
        </div>

        {/* Help Links */}
        <div>
          <h4 className="text-xl font-medium mb-6">Help</h4>
          <ul className="space-y-4 text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">How it works</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Payment policy</a></li>
          </ul>
        </div>

        {/* Get in touch */}
        <div>
          <h4 className="text-xl font-medium mb-6">Get in touch</h4>
          <ul className="space-y-4 text-gray-400">
            <li>customer@nike.com</li>
            <li>+92554862354</li>
          </ul>
        </div>
      </div>

      {/* Copyright and Terms section */}
      <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 mb-4 md:mb-0">© Copyright. All rights reserved.</p>
        <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
      </div>
    </footer>
  )
}

export default Footer
