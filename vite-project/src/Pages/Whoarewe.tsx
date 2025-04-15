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
  <div className='absolute inset-0 flex-col items-center justify-center text-left text-white p-6 w-1/2'>
    <h3 className=''>Who we are ?</h3>
    <p>At Fancy Labs, we craft custom software that’s smart, scalable, 
      and built to last. Based in Accra and serving clients worldwide,
       we blend cutting-edge tech with creative thinking to deliver
        solutions that exceed expectations — every time.</p>
      <button>Meet The team</button>
  </div>
</div>



  )
}

export default Whoarewe