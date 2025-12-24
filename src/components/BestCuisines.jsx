import React from 'react'

const cuisines = [
  "Chinese", "South Indian", "North Indian",
  "Biryani", "Pizza", "Burger",
  "Desserts", "Ice Cream", "Healthy Food"
]

function BestCuisines() {
  return (
    <div className='max-w-[1200px] mx-auto mt-16 px-4'>

      <h2 className='text-[25px] font-bold mb-6 text-[#282c3f]'>
        Best Cuisines Near Me
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'>
        {cuisines.map((item, index) => (
          <div
            key={index}
            className='group bg-[#f0f0f5] rounded-xl p-4 text-center font-medium
                       text-[#282c3f]
                       hover:bg-[#fc8019]
                       hover:text-white
                       hover:shadow-[0_10px_25px_rgba(252,128,25,0.35)]
                       transition-all duration-300 cursor-pointer'
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  )
}

export default BestCuisines
