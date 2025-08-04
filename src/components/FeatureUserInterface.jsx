import React from 'react'
import teacher from '../../src/assets/DiscussionWomen1.png'
import student4 from '../../src/assets/DiscussionWomen2.png'
import UserInterfacestudent1 from '../../src/assets/UserInterfacestudent1.png'
import UserInterfacestudent2 from '../../src/assets/UserInterfacestudent2.png'
import UserInterfacestudent3 from '../../src/assets/UserInterfacestudent3.png'


const FeatureUserInterface = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20 gap-5 overflow-x-hidden dark:bg-black ">
        {/* Left Section - Images */}
        <div className="relative w-md max-w-xl ml-25 mt-10 dark:z-0 ">
            
            <div className='w-20 h-20 rounded-full bg-[#33EFA0] flex items-center justify-center absolute right-8 -top-22  -z-10'></div>
            <div className='w-20 h-20 rounded-full bg-[#33D9EF] flex items-center justify-center absolute right-8 -top-22  -z-10'></div>
            <div className='w-20 h-20 rounded-full bg-[#5B61EB] flex items-center justify-center absolute right-8 -top-22  -z-10'></div>
            <div className='w-20 h-20 rounded-full bg-[#F56666] flex items-center justify-center absolute right-8 -top-22  -z-10'></div>
            
                
            <div className="absolute -top-23 -left-15 w-full h-full -z-10">
                {/* <img src={DiscussionBackRectangle} alt="Discussion Back Rectangle" className="w-full h-full object-contain" /> */}
            </div>
            <div className='w-md h-full z-20 rounded-t-3xl bg-[#EAEAEA] opacity-[60%] blur-[80] flex items-center '>
                <div className='rounded-full w-3 h-3 ml-6 bg-[#EE6767]'></div>
                <div className='rounded-full w-3 h-3 m-2 bg-[#F6C566]'></div>
                <div className='rounded-full w-3 h-3 bg-[#5BEB7B]'></div>
            </div>
            <div className="rounded-b-2xl shadow-xl p-6 flex flex-col gap-4 bg-[#F4F4F499]/[60%] blur-[80]] w-md">
                <div className="flex items-center gap-4 ">
                    
                    
                    <div className="grid grid-cols-2 gap-4 flex-1">
                        {/* <img src={woman1} alt="Student 1" className="rounded-lg object-contain w-full h-40" />
                        <img src={woman2} alt="Student 2" className="rounded-lg object-contain w-full h-40" /> */}
                        <img src={teacher} alt="Teacher" className="rounded-lg object-contain w-full h-40" />

                    </div>
                </div>
            <div className="flex justify-between gap-4">
                
            </div>
            </div>
        </div>
    
        {/* Right Section - Text */}
        <div className="max-w-md">
            <h2 className="text-3xl font-bold text-[#2F327D] mr-30">
            A<span className="text-[#F48C06]"> user interface</span> designed for the classroom
            </h2>
            <p className="mt-4 text-[#696984] mr-20">
            Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
            </p>
        </div>
    </div>
    )
}

export default FeatureUserInterface