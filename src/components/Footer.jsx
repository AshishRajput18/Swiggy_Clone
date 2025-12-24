import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#f0f0f5] mt-16'>
      
      <div className='max-w-[1200px] mx-auto px-4 py-10'>

        {/* Top Section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8'>

          {/* Logo */}
          <div>
            <h2 className='text-2xl font-bold text-[#fc8019]'>Swiggy</h2>
            <p className='text-sm text-gray-600 mt-2'>
              © 2025 Bundl Technologies Pvt. Ltd
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className='font-bold mb-3'>Company</h3>
            <ul className='space-y-2 text-gray-600 text-sm'>
              <li className='cursor-pointer hover:text-black'>About</li>
              <li className='cursor-pointer hover:text-black'>Careers</li>
              <li className='cursor-pointer hover:text-black'>Team</li>
              <li className='cursor-pointer hover:text-black'>Swiggy One</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className='font-bold mb-3'>Contact</h3>
            <ul className='space-y-2 text-gray-600 text-sm'>
              <li className='cursor-pointer hover:text-black'>Help & Support</li>
              <li className='cursor-pointer hover:text-black'>Partner with us</li>
              <li className='cursor-pointer hover:text-black'>Ride with us</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className='font-bold mb-3'>Legal</h3>
            <ul className='space-y-2 text-gray-600 text-sm'>
              <li className='cursor-pointer hover:text-black'>Terms & Conditions</li>
              <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
              <li className='cursor-pointer hover:text-black'>Cookie Policy</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className='border-t mt-8 pt-6 text-center text-sm text-gray-500'>
          Made with ❤️ for learning | Swiggy Clone by Ashish Rajput
        </div>

      </div>
    </footer>
  )
}

export default Footer
