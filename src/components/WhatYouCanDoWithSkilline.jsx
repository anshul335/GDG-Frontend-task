import React from 'react'
import classroomImage from '../../src/assets/Classroom.png'


const WhatYouCanDoWithSkilline = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8">
      {/* Text Section */}
    <div className='relative ml-7'>
        <div className='absolute h-12 w-12 -top-2 -left-3 bg-[#F4B767] rounded-full -z-10'></div>
        <div className='absolute h-4 w-4 top-40 right-10 bg-[#F4B767] rounded-full -z-10'></div>
        <h2 className="text-2xl md:text-3xl  mb-4">
            <span className="text-[#2F327D]">Everything you can do in a physical classroom, </span>
            <span className="text-[#F48C06]">you can do with Skilline</span>
        </h2>
        <p className="text-[#696984] mb-6 max-w-[395px]">
            Skilline’s school management software helps traditional and online schools manage
            scheduling, attendance, payments and virtual classrooms all in one secure cloud-based
            system.
        </p>
        <a href="#" className="text-[#696984] underline font-medium">
        Learn more
        </a>
    </div>

    {/* Image Section */}
    <div className="relative rounded-xl ">
        <div className="absolute -top-3 -left-3 w-24 h-24 bg-[#23BDEE] rounded-xl -z-10" />
        <div className="absolute -bottom-3 -right-3 w-44 h-44 bg-[#F3AC50] rounded-xl -z-10" />
        <img src={classroomImage} alt="Classroom" className="w-full h-auto object-cover" />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
        <button className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center hover:scale-105 transition-transform">
            <svg
            
            className="h-6 w-6 text-2xl text-[#23BDEE]"
            fill="currentColor"
            viewBox="0 0 20 20"
            >
            <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
            </svg>
        </button>
        </div>
    </div>
    </section>
)
}

export default WhatYouCanDoWithSkilline