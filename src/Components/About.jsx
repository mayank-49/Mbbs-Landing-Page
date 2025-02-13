import React from 'react'
import bg from "../assets/bg-3.png"

const About = () => {

  return (
    <div id='about' className='w-full md:p-10 p-5 bg-white'>
      <div className='flex justify-center'>
        <h1 className='text-md font-semibold text-slate-400'>About Us</h1>
      </div>
      <div className='flex flex-col mt-8 gap-2 text-center lg:px-40'>
        <h1 className='text-4xl md:text-5xl font-bold text-center text-green-500'>Our Story</h1>
        <div className='flex justify-center'>
        <img src={bg} alt="" className='h-1/2 w-2/3 rounded-xl'/>
      </div>
        <h1 className='lg:text-lg text-slate-500'>Founded in 2010, Study MBBS Abroad has been at the forefront of international medical education consultancy. We've helped thousands of students achieve their dreams of becoming medical professionals through quality education abroad.
        <br />Our mission is to bridge the gap between aspiring medical students and world-class medical universities across the globe. We believe in providing transparent, reliable, and comprehensive guidance to ensure our students success.</h1>
      </div>
    </div>
  )
}

export default About
