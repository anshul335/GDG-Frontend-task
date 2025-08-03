import React from 'react'
import ToolsBg from '../../src/assets/ToolsBg.png'
import ToolsImage from '../../src/assets/ToolsImage1.png'


const Tools = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 overflow-hidden">
    {/* Text Section */}
    <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-[#F48C06]">Tools </span>
            <span className="text-[#2F327D]">For Teachers</span>
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-[#2F327D] mt-1">And Learners</h3>
        <p className="text-[#696984] mt-4 text-sm md:text-base max-w-[30vw]">
        Class has a dynamic set of teaching tools built to be deployed and used during class. 
        Teachers can handout assignments in real-time for students to complete and submit.
        </p>
    </div>

    {/* Image Section */}
    <div className="relative md:w-1/2 h-110 flex justify-center">
        
        <div className="absolute inset-0 w-full h-10vh">
        <img src={ToolsBg} alt="DottedbackGround" className="w-[80%] h-full object-contain absolute left-10" />
        <div className="absolute top-[10%] right-[35%] w-2.5 h-2.5 bg-[#33EFA0] rounded-full"></div>
        <div className="absolute bottom-[20%] left-[5%] w-3 h-3 bg-[#FF9A7A] rounded-full"></div>
        <div className="absolute bottom-[15%] right-[17%] w-2.5 h-2.5 bg-[#8C7AFF] rounded-full"></div>
        </div>
        <img src={ToolsImage} alt="Student" className="relative z-10 w-64 md:w-80 object-contain" />
    </div>
    </div>
  )
}

export default Tools