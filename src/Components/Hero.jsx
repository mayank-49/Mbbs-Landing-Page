import React from 'react'
import hero1 from "../assets/hero1.jpg"
import hero2 from "../assets/hero2.jpg"
import hero3 from "../assets/hero3.jpg"
import hero4 from "../assets/hero4.jpg"

const Hero = () => {
  return (
    <div id='hero' className='grid lg:grid-cols-2 bg-gray-100 w-full h-full lg:gap-0 gap-8 p-5 md:px-10 md:py-18'>
      <div className='flex flex-col gap-6 h-full justify-center'>
        <h1 data-aos="zoom-in" className='text-4xl md:text-7xl bg-gradient-to-r from-green-800 to-green-400 text-transparent bg-clip-text font-semibold'>Study MBBS Abroad</h1>
        <p data-aos="zoom-in" data-aos-delay="200" className='text-md md:text-2xl text-slate-500'>Begin your journey to become a medical professional with world-class education from prestigious international universities.</p>
        <a data-aos="zoom-in" data-aos-delay="300" href='#form' className='px-5 py-3 hover:bg-green-600 transition duration-300 bg-green-500 w-fit rounded-xl text-lg font-semibold text-white'>Apply Now</a>
      </div>
      <div className='grid grid-cols-2 gap-2 items-center p-0 cursor-pointer'>
        <img src={hero1} alt="" className='rounded-xl h-full w-full max-w-full'/>
        <img src={hero3} alt="" className='rounded-xl h-full w-full max-w-full'/>
        <img src={hero4} alt="" className='rounded-xl h-full w-full max-w-full'/>
        <img src={hero2} alt="" className='rounded-xl h-full w-full max-w-full'/>
      </div>
    </div>
  )
}

export default Hero
