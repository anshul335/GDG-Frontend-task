import React from 'react';
import ClassImage1 from '../../src/assets/ClassImage1.png';
import ClassImage2 from '../../src/assets/ClassImage2.png';
import ClassImage3 from '../../src/assets/ClassImage3.png';
import ClassImage4 from '../../src/assets/ClassImage4.png';
import ClassImage5 from '../../src/assets/ClassImage5.png';
import Star from '../../src/assets/Star.png';
import Book from '../../src/assets/Book.png'

const ClassMangement = () => {
  return (
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 overflow-x-hidden dark:bg-black">
        {/* Left Text Section */}
        <div className="md:w-1/2 dark:z-0">
            <h2 className="text-2xl md:text-3xl font-bold text-[#F48C06] dark:text-[#eba051]">Class Management</h2>
            <h3 className="text-2xl md:text-3xl font-bold text-[#2F327D] dark:text-[#65DAFF]  mt-2">Tools for Educators</h3>
            <p className="text-[#696984] dark:text-[#d6cfcf] mt-4 text-sm md:text-base max-w-100">
            Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. 
            With the Gradebook, teachers can review and grade tests and quizzes in real-time.
            </p>
        </div>

        {/* Right Gradebook UI */}
        <div className="relative shadow-xl rounded-2xl w-125 pb-4 bg-white dark:z-0">
            <div className="absolute -top-6 right-2 h-5 w-5 rounded-full  bg-[#9FD7FF]"></div>
            <div className="absolute -top-1 -right-4 h-3 w-3 rounded-full  bg-[#9FD7FF]"></div>
            <div className='w-15 h-15 rounded-full bg-[#f5f5f5] absolute  z-20 -top-2 -left-2 flex items-center justify-center '>
                <div className='w-11 h-11 rounded-full bg-white backdrop-blur-2xl flex justify-center items-center  object-center '>    
                    <img src={Star} alt="Hand" className=" rounded-full object-contain object-center absolute  w-11 h-11    " />
                </div>
            </div>
            <div className='w-15 h-15 rounded-full bg-[#f5f5f5] absolute  z-20 top-7 -right-4 flex items-center justify-center '>
                <div className='w-11 h-11 rounded-full bg-white backdrop-blur-2xl flex justify-center items-center  object-center '>    
                    <img src={Book} alt="Hand" className=" rounded-full object-contain object-center absolute  w-8 h-8    " />
                </div>
            </div>
            <img src={ClassImage5} alt="waves" className='w-20 h-10 absolute bottom-3.5 -left-9'/>
            <div className="absolute -bottom-3 -left-3 h-35 w-35 rounded-2xl -z-10  bg-[#B2C4F0] dark:hidden "></div>

            {/* Gradebook Header */}
            <div className=" bg-[#54AFF0] text-white text-center max-w-127  text-lg font-semibold py-2 rounded-t-xl ">GradeBook</div>    
            {/* Score Bars */}
            <div className="space-y-4 mt-5 flex flex-col sm:pt-15 max-w-127 md:pt-10  ">
            {/* Row 1 */}
                <div className='flex justify-end items-center relative'>
                    <img src={ClassImage1} alt="User1" className='w-10 h-10 rounded-full z-10 absolute right-60'   />
                    <div className=' w-[50%] h-6 relative bg-[#3189EF] flex items-center justify-center z-1'></div>
                    <div className='h-3 px-8 rounded-full py-4 w-3 bg-[#CDE4FF] absolute top-8 right-57 flex items-center justify-center text-sm text-[#486F9C] font-semibold z-20'>98</div>
                </div>

                {/* Row 2 */}
                <div className='flex justify-start items-center relative'>
                    <img src={ClassImage2} alt="User2" className='w-10 h-10 rounded-full z-10 absolute left-20'   />
                    <div className=' w-[20%] h-6 relative bg-[#3AC6F2] flex items-center justify-center z-1'></div>
                    <div className='h-3 px-8 rounded-full py-4 w-3 bg-[#CDF3FF] absolute top-2 left-27 flex items-center justify-center text-sm text-[#43869B] font-semibold z-20'>100</div>
                </div>

            {/* Row 3 */}
                <div className='flex justify-end items-center relative'>
                    <img src={ClassImage3} alt="User3" className='w-10 h-10 rounded-full z-10 absolute right-30'   />
                    <div className=' w-[25%] h-6 relative bg-[#F13C3C] flex items-center justify-center z-1'></div>
                    <div className='h-3 px-8 rounded-full py-4 w-3 bg-[#FFCDCD] absolute top-4 right-36 flex items-center justify-center text-sm text-[#9E5555] font-semibold z-20'>75</div>

                </div>

            {/* Row 4 */}
                <div className='flex justify-start items-center relative'>
                    <img src={ClassImage4} alt="User4" className='w-10 h-10 rounded-full z-10 absolute left-45'   />
                    <div className=' w-[40%] h-6 relative bg-[#68F146] flex items-center justify-center z-1 '></div>
                    <div className='h-3 px-8 rounded-full py-4 w-3 bg-[#D7FFCD] absolute top-2 left-52 flex items-center justify-center text-sm text-[#4E8C3F] font-semibold z-20'>85</div>

                </div>
            </div>

            {/* Export Button */}
            <div className="mt-6 text-right">
            <button className="bg-gradient-to-r from-[#545AE7] to-[#393FCF] text-white px-5 py-1.5 mr-5 rounded-full shadow-md hover:scale-105 transition">
                Export
            </button>
            </div>
        </div>
    </div>
  );
};

export default ClassMangement;
