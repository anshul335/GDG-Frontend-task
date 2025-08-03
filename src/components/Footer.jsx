import React from 'react'
import Polygon from '../../src/assets/Polygon.png'

const Footer = () => {
    return (
        <footer className=" max-w-full mx-auto bg-[#252641]  py-12 overflow-x-hidden">
            <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Logo and tagline */}
                <div className=" flex flex-col justify-between sm:flex-row items-center gap-10 mb-8  px-[22vw]">
                <div className='relative flex items-center justify-center'>
                    <img src={Polygon} alt="Skilline logo" className=" h-10" />
                    <p className=" absolute left-3 text-lg text-white font-bold">Skilline</p>
                </div>
                <div className='w-[1px] h-10 bg-[#626381]'></div>
                <span className="text-white text-lg">Virtual Class<br/> for Zoom</span>
                </div>

                {/* Newsletter subscription */}
                <h2 className="text-md font-semibold text-[#B2B3CF] mb-2">
                    Subscribe to get our Newsletter
                </h2>
                <form className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full sm:w-auto bg-transparent border border-gray-400 text-gray-100 placeholder-gray-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-gradient-to-r from-[#545AE7] to-[#393FCF] hover:bg-blue-700 text-white font-medium rounded-full px-6 py-2 transition"
                >
                    Subscribe
                </button>
                </form>

                {/* Footer links */}
                <div className="mt-8 text-sm text-[#B2B3CF] space-x-2">
                <a href="#careers" className="hover:text-gray-100">Careers</a>
                <span>|</span>
                <a href="#privacy" className="hover:text-gray-100">Privacy Policy</a>
                <span>|</span>
                <a href="#terms" className="hover:text-gray-100"> Terms & Conditions</a>
                </div>

                {/* Copyright */}
                <p className="mt-4 text-xs text-[#B2B3CF]">
                    {'\u00a9'} {new Date().getFullYear()} Class Technologies Inc.
                </p>
            </div>
        </footer>
    )
}

export default Footer