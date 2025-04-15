import React from 'react'
import womantyping from '../../public/womantyping.jpg'

function Whoarewe() {
  return (
<div className="relative w-full  h-full overflow-hidden ">
  {/* Image */}

  <img
    src={womantyping}
    alt=""
    className="w-full h-full object-cover "
  />


  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

  {/* Content */}
  <div className='absolute inset-0 flex-col items-center justify-center text-left text-white p-6 w-1/2 lg:pt-20'>
  <h3 className='text-sm uppercase tracking-wider'>Who we are</h3>
  <h1 className='text-2xl font-semibold text-yellow-600 my-2 font-sans shadow-lg'>You found the best in the business</h1>
  <p className='mb-4 text-sm ml-3 m-10 text-gray-300'>
    At Fancy Labs, we craft custom software that's smart, scalable,
    and built to last. Based in Accra and serving clients worldwide,
    we blend cutting-edge tech with creative thinking to deliver
    solutions that exceed expectations — every time.
  </p>
  <button className='bg-transparent border text-sm px-4 py-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white transition-colors duration-300 rounded-md'>
    Meet The Team
  </button>
</div>
</div>



  )
}

export default Whoarewe