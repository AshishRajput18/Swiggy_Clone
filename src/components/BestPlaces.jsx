import React from 'react'

const cities = [
  "Bangalore", "Delhi", "Mumbai", "Hyderabad",
  "Chennai", "Pune", "Kolkata", "Jaipur",
  "Ahmedabad", "Chandigarh", "Jodhpur"
]

function BestPlaces() {
  return (
    <div className='max-w-[1200px] mx-auto mt-16 px-4'>

      <h2 className='text-[25px] font-bold mb-6 text-[#282c3f]'>
        Best Places to Eat Across Cities
      </h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5'>
        {cities.map((city, index) => (
          <div
            key={index}
            className='bg-white rounded-xl p-4 text-center font-medium
                       border border-transparent
                       hover:border-[#fc8019]
                       hover:shadow-[0_8px_30px_rgba(252,128,25,0.25)]
                       hover:scale-[1.03]
                       transition-all duration-300 cursor-pointer'
          >
            Restaurants in <span className='text-[#fc8019]'>{city}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default BestPlaces
