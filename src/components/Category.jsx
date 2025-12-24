import React, { useRef } from 'react'
import categories from '../data/categories'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Category() {

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollLeft -= 300;
  };

  const scrollRight = () => {
    scrollRef.current.scrollLeft += 300;
  };

  return (
    <div className='max-w-[1200px] mx-auto'>

      {/* Heading + Arrows */}
      <div className='flex my-4 items-center justify-between'>
        <div className='text-[25px] font-bold'>
          What's on your mind?
        </div>

        <div className='flex'>
          <button
            onClick={scrollLeft}
            className='flex justify-center items-center w-[32px] h-[32px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={scrollRight}
            className='flex justify-center items-center w-[32px] h-[32px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer'
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Category Slider */}
      <div
        ref={scrollRef}
        className='flex gap-4 overflow-x-auto scroll-smooth no-scrollbar'
      >
        {
          categories.map((cat, index) => (
            <div
              key={index}
              className='w-[150px] shrink-0 text-center cursor-pointer'
            >
              <img
                src={`/images/${cat.image}`}
                alt={cat.name}
                className='w-full'
              />
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default Category;
