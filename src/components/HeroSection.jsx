import React from 'react'
import NavBar from './NavBar'
import StudentImage from "../../src/assets/studentImage.png"
import Calendar from '../../src/assets/HeadingCalendar.png'
import Image1 from '../../src/assets/HeroImage1.png'
import Image2 from '../../src/assets/HeroImage2.png'
import EmailImage from '../../src/assets/HeroEmailImage.png'
const HeroSection = () => {
    

    return (
    <div className="min-h-screen bg-[#FFF2E1] dark:bg-[#231818] flex flex-col overflow-x-hidden transition-color duration-150 ease-in">
        {/* Navbar */}
        <NavBar/>

        {/* Hero */}
        <main className="flex-1 container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 py-12 lg:py-20 -mt-30">
        {/* Left content */}
        <div className="flex-1 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-[rgb(47,50,125)] dark:text-[#65DAFF]">
            <span className="text-[#F48C06] dark:text-[#eba051]">Studying</span> Online is now much easier
            </h1>
            <p className="text-[#464646] dark:text-[#d6cfcf] text-base lg:text-lg">
            Skilline is an interesting platform that will teach you in more interactive ways.
            </p>
            <div className="flex items-center space-x-4">
            <button className="px-6 py-3 bg-[#F48C06] dark:bg-[#eba051] text-white rounded-full font-medium">
                Join for free
            </button>
            <button className="flex items-center text-[#252641] dark:text-[#2F327D] font-medium">
                <i className="bx bx-play  mr-2 bg-white rounded-full p-1 text-[#23BDEE] text-3xl"></i> Watch how it works
            </button>
            </div>
        </div>
        {/* Right hero image */}
        <div className="flex-1 relative">
            <img src={StudentImage} alt="Student" className="w-[60%] rounded-xl mx-auto mt-20" />

            <div className="absolute bottom-[60%] left-[20%] transform -translate-x-1/2 translate-y-1/2 bg-white/50 backdrop-blur-lg border border-white/20 py-4 px-2 rounded-xl flex items-center space-x-4 w-30 h-15 md:w-50 md:h-19 z-10">
                <div className="bg-[#23BDEE] p-2 rounded-lg">
                <img src={Calendar} alt="Calendar" />
                </div>
                <div>
                <div className="font-semibold">250k</div>
                <div className="text-sm text-[#545567]">Assisted Students</div>
                </div>

            </div>
            <div className="absolute bottom-[30%] left-[20%] transform -translate-x-1/2 translate-y-1/2 bg-white/50 backdrop-blur-lg border border-white/20 py-4 px-2 rounded-xl flex items-center space-x-4 w-45 h-30  md:w-65 md:h-30 z-10">
                <div >
                    <img src={Image1} alt="HeroImage" className='w-8 h-8 object-contain relative -top-5' />
                    <div className='w-2 h-2 bg-[#2EBB5E] rounded-full relative -top-7 left-5'></div>
                </div>

                <div className='flex flex-col justify-center gap-3'>
                    <div>
                    <div className="text-sm md:text-md font-semibold">User Experience Class</div>
                    <div className="text-sm text-[#545567]">Today at 12.00 PM</div>
                    </div>
                    <button className="px-15 py-0.5 h-9 w-9 text-sm bg-[#D8587E]  text-white rounded-full whitespace-nowrap flex items-center justify-center">Join Now</button>
                </div>
            </div>
            <div className=" absolute bottom-[50%] left-[70%] transform -translate-x-1/2 translate-y-1/2 bg-white/50 backdrop-blur-lg border border-white/20 py-2 rounded-xl flex items-center space-x-4 w-45 h-15 md:w-70 md:h-15 z-10">
                <div className ='relative h-3 w-3 rounded-full bg-[#4EE381] -right-60 -top-3 flex items-center justify-center'>
                    <img src={Image2} alt="Tick mark" />
                </div>
                
                <div className="bg-[#F88C3D] p-2 md:rounded-lg w-7 h-7 md:w-8 md:h-8">
                    <img src={EmailImage} alt="Email" className='w-7 md:w-8  object-contain'  />
                </div>
                <div>
                    <div className="font-semibold">Congratulations</div>
                    <div className="text-sm text-gray-600">
                        Your admission completed
                    </div>
                </div>
            </div>
        </div>

        </main>

        {/* Bottom SVG curve divider */}
        <div className="relative w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="w-full h-24 lg:h-32">
            <path
            d="M0,0 C300,50  900,30 1200,0 L1200,100 L0,100 Z"
            className="fill-white dark:fill-black"
            />
        </svg>
        </div>
    </div>
    )
}

export default HeroSection