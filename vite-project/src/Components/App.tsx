import React from 'react'
import TypedAnimation from '../Pages/TypeAnimation'
import FancyLabs from '../../public/FancyLabs.png'

function App() {
  return (
    <div  className='container mx-auto flex flex-col items-center justify-center h-screen bg-black'>
        <div className='bg-black '>
            <img src={FancyLabs} alt="FancyLab" className='bg-black h-20 items-center flex' />
            <TypedAnimation />
        </div>
    </div>
  )
}

export default App
