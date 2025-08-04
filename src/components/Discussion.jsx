import React from 'react'

import woman1 from '../../src/assets/DiscussionWomen1.png'
import woman2 from '../../src/assets/DiscussionWomen2.png'
import DiscussionBackRectangle from '../../src/assets/DiscussionBackRectangle.png'


const Discussion = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl dark:bg-black mx-auto px-6 py-20 gap-5 overflow-x-hidden ">
    {/* Left Section - Images */}
    <div className="relative w-md max-w-xl ml-25 mt-10 dark:z-0">
        <div className='absolute w-50 h-50 bg-[#73BCFF] dark:bg-[#65DAFF] rounded-3xl top-0 -left-19 -z-15 '></div>
        
        <div className='w-20 h-20 rounded-full bg-[#73BCFF] dark:bg-[#65DAFF] flex items-center justify-center absolute right-8 -top-22  -z-10'>
            <div className='w-14 h-14 rounded-full bg-white dark:bg-black'></div>
        </div>
        <div className='inline-block w-0 h-0 border-solid rotate-[81deg] border-t-0 border-r-[10px] border-l-[10px] border-b-[17.3px] border-l-transparent border-r-transparent border-t-transparent border-b-[#FBA333] dark:border-b-[#eba051] absolute -right-6 -top-4'></div>
            
        <div className="absolute -top-23 -left-15 w-full h-full -z-10">
            <img src={DiscussionBackRectangle} alt="Discussion Back Rectangle" className="w-full h-full object-contain" />
        </div>
        <div className='w-md h-full z-20 rounded-t-3xl bg-[#EAEAEA] flex items-center '>
            <div className='rounded-full w-3 h-3 ml-6 bg-[#EE6767]'></div>
            <div className='rounded-full w-3 h-3 m-2 bg-[#F6C566]'></div>
            <div className='rounded-full w-3 h-3 bg-[#5BEB7B]'></div>
        </div>
        <div className="rounded-b-2xl shadow-xl p-6 flex flex-col gap-4 bg-white w-md">
            <div className="flex items-center gap-4 ">
                
                
                <div className="grid grid-cols-2 gap-4 flex-1">
                    <img src={woman1} alt="Student 1" className="rounded-lg object-contain w-full h-40" />
                    <img src={woman2} alt="Student 2" className="rounded-lg object-contain w-full h-40" />
                </div>
            </div>
        <div className="flex justify-between gap-4">
            <div>
                <h3 className="text-lg font-semibold text-[#696984]">Private Discussion</h3>
                <p className="text-sm text-[#A8A8B6]">Your video can’t be seen by others</p>
            </div>
            <button className="bg-gradient-to-r from-[#F55454] to-[#E5422B] text-white px-4 py-2 rounded-full font-semibold w-max self-end ">
                End Discussion
            </button>
        </div>
        </div>
    </div>

    {/* Right Section - Text */}
    <div className="max-w-md">
        <h2 className="text-3xl font-bold text-[#2F327D] mr-30 dark:text-[#65DAFF]">
        One-on-One <span className="text-[#F48C06] dark:text-[#eba051]">Discussions</span>
        </h2>
        <p className="mt-4 text-[#696984] dark:text-[#d6cfcf] mr-20">
        Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
        </p>
    </div>
    </div> 
  )
}

export default Discussion