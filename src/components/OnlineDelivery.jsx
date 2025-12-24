import React from 'react'
import topRestaurants from '../data/topRestaurants'
import { FaStar } from "react-icons/fa";

function OnlineDelivery() {
  return (
    <div className='max-w-[1200px] mx-auto mt-12 px-4'>

      {/* Heading */}
      <h2 className='text-[25px] font-bold mb-6'>
        Restaurants with online food delivery in Jodhpur
      </h2>

      {/* Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {
          topRestaurants.map((rest, index) => (
            <div
              key={index}
              className='cursor-pointer hover:scale-[0.97] duration-200'
            >

              {/* Image */}
              <div className=' rounded-xl overflow-hidden'>
                <img
                  src={`/images/${rest.image}`}
                  alt={rest.title}
                  className='w-full h-[180px] object-cover'
                />

                {/* Offer */}
                <div className='absolute bottom-2 left-2 text-white font-bold text-sm'>
                  {rest.offer}
                </div>
              </div>

              {/* Info */}
              <div className='mt-3'>
                <h3 className='font-bold text-lg'>{rest.title}</h3>

                <div className='flex items-center gap-2 text-sm mt-1'>
                  <span className='flex items-center gap-1 bg-green-600 text-white px-2 rounded'>
                    <FaStar size={12} />
                    {rest.rating}
                  </span>
                  <span>
                    {rest.minTime}–{rest.maxTime} mins
                  </span>
                </div>

                <p className='text-gray-500 text-sm'>{rest.name}</p>
                <p className='text-gray-400 text-sm'>{rest.place}</p>
              </div>

            </div>
          ))
        }
      </div>

    </div>
  )
}

export default OnlineDelivery
