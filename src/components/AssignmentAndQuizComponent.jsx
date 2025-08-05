import React from 'react'
import Assignment from '../../src/assets/Assignment.png'
import plane from '../../src/assets/planeImage.png'


const AssignmentAndQuizComponent = () => {
  return (
    <div className=" items-center max-w-full mx-auto px-6 py-16 gap-20 grid grid-cols-1 lg:grid-cols-2  justify-center overflow-x-hidden dark:bg-black ">
        
        {/* Left side: Card content */}
        <div className="relative max-w-100 mx-auto  ">

        <div className="absolute -top-7 left-10 w-4 h-4 bg-[#F3A268] rounded-full" />
        <div className="absolute -top-4 -left-10 w-20 h-20 bg-[#687EF3] rounded-full" />
        <div className="absolute bottom-45 right-3 w-3 h-3 bg-[#F3538C] rounded-full" />
        <div className="absolute -bottom-8 -left-1.5 w-3.5 h-3.5 bg-[#34E7A5] rounded-full" />

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4 w-85 h-90 relative">
            <div className="flex items-center space-x-2">
                <span className="text-xs font-medium bg-[#CDD8FF] text-[#717FB0] px-5 py-1.5 rounded-full">Question 1</span>
            </div>
            <h3 className="text-xl font-semibold text-[#55578D]">True or false? This play takes place in Italy</h3>
            <img src={Assignment} alt="question visual" className="w-100 h-48 object-contain rounded-lg absolute" />
            <div className='absolute bg-white flex flex-row items-center justify-around rounded-xl w-50 h-20 -bottom-6 -right-15 shadow-lg'>
                <div className='w-8 h-8  rounded-full bg-[#D8F9ED] flex items-center justify-center absolute left-3'>
                </div>
                <img src={plane} alt="plane" className="w-10 h-10 z-10 "/>
                <p className='text-[#41BE90] font-semibold max-w-30 z-20'>Your answer was sent successfully</p>
                <div className='w-6 h-6 rounded-full bg-[#D8F9ED] absolute right-1 bottom-3 ' />
            </div>
        </div>
        </div>

        {/* Right side: Heading and description */}
        <div className="max-w-87 flex flex-col mx-auto items-center justify-center ">
        <h2 className="text-4xl font-bold text-[#2F327D] dark:text-[#65DAFF]">
            Assessments, <span className="text-[#F48C06] dark:text-[#eba051]">Quizzes</span>, Tests
        </h2>
        <p className="mt-4 text-[#696984] dark:text-[#d6cfcf]">
            Easily launch live assignments, quizzes, and tests. Student results are automatically entered in the online gradebook.
        </p>
        </div>
    </div>
  )
}

export default AssignmentAndQuizComponent