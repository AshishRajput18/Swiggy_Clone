import React from 'react'

const explore = [
  "Restaurants Near Me",
  "Fast Food Near Me",
  "Pure Veg Restaurants Near Me",
  "Bakeries Near Me",
  "Cafes Near Me",
  "Late Night Food Near Me"
]

function ExploreNearMe() {
  return (
    <div className='max-w-[1200px] mx-auto mt-16 px-4'>

      <h2 className='text-[25px] font-bold mb-6 text-[#282c3f]'>
        Explore Every Restaurants Near Me
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
        {explore.map((item, index) => (
          <div
            key={index}
            className='group bg-white rounded-xl p-5 font-medium
                       border border-[#e2e2e7]
                       flex items-center justify-between
                       hover:border-[#fc8019]
                       hover:shadow-[0_8px_25px_rgba(252,128,25,0.25)]
                       hover:scale-[1.02]
                       transition-all duration-300 cursor-pointer'
          >
            {item}
            <span className='text-[#fc8019] text-lg group-hover:translate-x-1 transition'>
              →
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default ExploreNearMe
