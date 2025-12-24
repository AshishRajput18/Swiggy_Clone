import React, { useRef } from 'react'
import topRestaurants from '../data/topRestaurants'
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";

function TopRest() {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 400;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 400;
  };

  return (
    <div className='max-w-[1200px] mx-auto mt-10'>

      {/* Heading + Arrows */}
      <div className='flex my-4 items-center justify-between'>
        <h2 className='text-[25px] font-bold'>
          Top restaurant chains in Jodhpur
        </h2>

        <div className='flex'>
          <button
            onClick={scrollLeft}
            className='flex justify-center items-center w-[32px] h-[32px] bg-[#e2e2e7] rounded-full mx-2'
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={scrollRight}
            className='flex justify-center items-center w-[32px] h-[32px] bg-[#e2e2e7] rounded-full mx-2'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className='flex gap-6 overflow-x-auto scroll-smooth no-scrollbar'
      >
        {
          topRestaurants.map((rest, index) => (
            <div
              key={index}
              className='w-[260px] shrink-0 cursor-pointer'
            >
              {/* Image */}
              <div className='rounded-xl overflow-hidden'>
                <img
                  src={`/images/${rest.image}`}
                  alt={rest.title}
                  className='w-full h-[170px] object-cover'
                />

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

export default TopRest;
