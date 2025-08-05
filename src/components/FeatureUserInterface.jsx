import React from 'react'
import teacher from '../../src/assets/DiscussionWomen1.png'
import student4 from '../../src/assets/DiscussionWomen2.png'
import UserInterfacestudent1 from '../../src/assets/UserInterfacestudent1.png'
import UserInterfacestudent2 from '../../src/assets/UserInterfacestudent2.png'
import UserInterfacestudent3 from '../../src/assets/UserInterfacestudent3.png'
import callSign from '../../src/assets/callSign.png'
import Hand from '../../src/assets/Hand.png'
import UserInterfaceIcon1 from '../../src/assets/UserInterfaceIcon1.png'
import UserInterfaceIcon2 from '../../src/assets/UserInterfaceIcon2.png'
import UserInterfaceIcon3 from '../../src/assets/UserInterfaceIcon3.png'



const FeatureUserInterface = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-full mx-auto px-6 py-20 gap-5 overflow-x-hidden dark:bg-black ">
        {/* Left Section - Images */}
        <div className="relative w-md max-w-100 mx-auto mt-10 dark:z-0 ">
            
            <div className='w-20 h-20 rounded-full bg-[#33EFA0] flex items-center justify-center absolute left-10 -top-10  '></div>
            <div className='w-4 h-4 rounded-full bg-[#33D9EF] flex items-center justify-center absolute left-30 -top-11 '></div>
            <div className='w-35 h-35 rounded-full bg-[#5B61EB] flex items-center justify-center absolute -right-10 -bottom-15  '></div>
            <div className='w-4 h-4 rounded-full bg-[#F56666] flex items-center justify-center absolute -bottom-10 right-25 '></div>
            <div className='w-15 h-15 rounded-full bg-[#f5f5f5] absolute  z-20 top-40 right-42 flex items-center justify-center '>
                <div className='w-11 h-11 rounded-full bg-white backdrop-blur-2xl flex justify-center items-center  object-center '>    
                    <img src={Hand} alt="Hand" className=" rounded-full object-contain object-center absolute  w-8 h-8    " />
                </div>
            </div>
            
                
            <div className="absolute -top-23 -left-15 w-full h-full -z-10">
            </div>
            <div className='w-md h-full z-20 rounded-t-3xl bg-[#EAEAEA] opacity-[60%] blur-[80] backdrop-blur-md flex items-center '>
                <div className='rounded-full w-3 h-3 ml-6 bg-[#EE6767]'></div>
                <div className='rounded-full w-3 h-3 m-2 bg-[#F6C566]'></div>
                <div className='rounded-full w-3 h-3 bg-[#5BEB7B]'></div>
            </div>
            <div className="rounded-b-2xl shadow-xl p-6 flex flex-col gap-4 bg-[#F4F4F499]/[60%] backdrop-blur-md w-md">
                <div className="flex items-center gap-4 ">
                    <div className="relative grid grid-cols-2 gap-4 flex-1">
                        <img src={teacher} alt="Teacher" className="rounded-lg object-contain w-40 h-40 mb-8 ml-4" />
                        <img src={UserInterfacestudent1} alt="UserInterface" className='rounded-lg object-contain w-25 h-25 absolute top-2 right-15' />
                        <img src={UserInterfacestudent2} alt="UserInterface" className='rounded-lg object-contain w-30 h-30 absolute -top-3 -right-20'/>
                        <img src={UserInterfacestudent3} alt="UserInterface" className='rounded-lg object-contain w-25 h-25 absolute top-30 right-15'/>
                        <img src={student4} alt="Student" className="absolute rounded-lg object-contain w-35 h-35 -bottom-19 -right-25 "/>
                    </div>
                </div>
                <div className="flex justify-between gap-4">
                    <div className="absolute bottom-4 left-4 flex space-x-3">
                        <button className="px-4 py-2 w-20 h-8 flex items-center justify-center rounded-full bg-blue-600 text-white">Present</button>
                        <div className=' w-20 h-8 rounded-full flex items-center justify-center bg-[#FFD4E1]'>  
                            <button className="w-18  h-6  rounded-full bg-[#E13468] flex items-center justify-evenly text-white">
                                <img src={callSign} alt="Phone Sign"  className="w-3 h-3 object-contain" />
                                Call
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        {/* Right Section - Text */}
        <div className="max-w-md mx-auto sm:mt-10">
            <h2 className="text-3xl font-bold text-[#2F327D] dark:text-[#65DAFF] ">
                A<span className="text-[#F48C06] dark:text-[#eba051]"> user interface</span> designed for the classroom
            </h2>
            <div className=' flex items-center gap-4'>
                <img src={UserInterfaceIcon1} alt="Box Icon" className='w-3 h-3 mt-4 bg-[#FBFBFB] dark:bg-black ' />
                <p className="mt-4 text-[#696984] dark:text-[#d6cfcf] ">
                    Teachers don’t get lost in the grid view and have a dedicated Podium space.
                </p>
            </div>
            <div className=' flex items-center gap-4'>
                <img src={UserInterfaceIcon2} alt="Box Icon" className='w-3 h-3 mt-4 bg-[#FBFBFB] dark:bg-black' />
                <p className="mt-4 text-[#696984] dark:text-[#d6cfcf] ">
                TA’s and presenters can be moved to the front of the class.

                </p>
            </div>
            <div className=' flex items-center gap-4'>
                <img src={UserInterfaceIcon3} alt="Box Icon" className='w-3 h-3 mt-4 bg-[#FBFBFB] dark:bg-black ' />
                <p className="mt-4 text-[#696984] dark:text-[#d6cfcf] ">
                    Teachers can easily see all students and class data at one time.
                </p>
            </div>
        </div>
    </div>
    )
}

export default FeatureUserInterface