import React from 'react'
import WhatisSkillinePhotoComponent from './whatisSkillinePhotoComponent'
import teacher from '../assets/teacher.png'
import student from '../assets/student.png'


const WhatIsSkillineComponent = () => {
  return (
    <div className=" pl-30  py-16 pr-30 overflow-x-hidden dark:bg-black">
        {/* heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#2F327D]">
            What is <span className="text-[#F48C06] ">Skilline?</span>
        </h2>

        {/* description */}
        <p className="text-center max-w-3xl mx-auto mb-10 text-[#696984] dark:text-[#d6cfcf] text-xl ">
            Skilline is a platform that allows educators to create online classes whereby
            they can store the course materials online; manage assignments, quizzes and
            exams; monitor due dates; grade results and provide students with feedback
            all in one place.
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0.5">
        <WhatisSkillinePhotoComponent
            bgImage={teacher}
            title="FOR INSTRUCTORS"
            buttonLabel="Start a class today"
            button = 'transparent'
            
        />
        <WhatisSkillinePhotoComponent
            bgImage={student}
            title="FOR STUDENTS"
            buttonLabel="Enter access code"
            button = '#23BDEEE5'
        />
        </div>
    </div>
  )
}

export default WhatIsSkillineComponent