import React from 'react'
import NavBar from './NavBar'
import StudentImage from "../../src/assets/studentImage.png"

const HeroSection = () => {
    return (
    <div className="min-h-screen bg-[#FFF2E1] flex flex-col">
        {/* Navbar */}
        <NavBar/>

        {/* Hero */}
        <main className="flex-1 container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16 py-12 lg:py-20 -mt-30">
        {/* Left content */}
        <div className="flex-1 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2F327D]">
            <span className="text-[#F48C06]">Studying</span> Online is now much easier
            </h1>
            <p className="text-[#464646] text-base lg:text-lg">
            Skilline is an interesting platform that will teach you in more interactive ways.
            </p>
            <div className="flex items-center space-x-4">
            <button className="px-6 py-3 bg-[#F48C06] text-white rounded-full font-medium">
                Join for free
            </button>
            <button className="flex items-center text-[#252641] font-medium">
                <i className="bx bx-play  mr-2 bg-white rounded-full p-1 text-[#23BDEE] text-3xl"></i> Watch how it works
            </button>
            </div>
        </div>
        {/* Right hero image */}
        <div className="flex-1 relative">
            <img src={StudentImage} alt="Student" className="w-[60%] rounded-xl mx-auto mt-20" />

            <div className="absolute bottom-[60%] left-[20%] transform -translate-x-1/2 translate-y-1/2 bg-white/50 backdrop-blur-lg border border-white/20 py-4 px-2 rounded-xl flex items-center space-x-4 max-w-xs z-10">
                <div className="bg-[#23BDEE] p-2 rounded">
                <i className="bx bx-calendar text-white text-xl"></i>
                </div>
                <div>
                <div className="font-semibold">250k</div>
                <div className="text-sm text-gray-600">Assisted Students</div>
                </div>

            </div>
            <div className="absolute bottom-[30%] left-[20%] transform -translate-x-1/2 translate-y-1/2 bg-white/50 backdrop-blur-lg border border-white/20 py-4 px-2 rounded-xl flex items-center space-x-4 max-w-xs z-10">
                <div className='flex flex-col'>
                    <div>
                    <div className="font-semibold">User Experience Class</div>
                    <div className="text-sm text-gray-600">Today at 12.00 PM</div>
                    </div>
                    <button className="px-2 py-1 bg-[#D8587E] text-white rounded-full">Join Now</button>
                </div>
            </div>
            <div className=" absolute bottom-[50%] left-[70%] transform -translate-x-1/2 translate-y-1/2 bg-white/50 backdrop-blur-lg border border-white/20 py-4 px-2 rounded-xl flex items-center space-x-4 max-w-xs z-10">
                <div className="bg-green-100 p-2 rounded">
                <i className="bx bx-check-circle text-green-600 text-xl"></i>
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
            fill="#fff"
            />
        </svg>
        </div>
    </div>
    )
}

export default HeroSection