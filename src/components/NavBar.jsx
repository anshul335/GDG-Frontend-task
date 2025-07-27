import React from 'react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

return (
    <nav className=" py-4">
    <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center -space-x-6 ">
        <div
            className="w-8 h-8 bg-[#65DAFF] relative rounded-sm"
            style={{
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
        />
        <span className="text-[#113C49] font-[700] z-10 ">Skilline</span>
        </div>
        <div className='flex items-center justify-evenly'>
            {/* Nav links */}
            <div>
                <ul className="hidden md:flex items-center space-x-8 text-neutral-800 mr-10">
                {['Home', 'Careers', 'Blog', 'About Us'].map((item) => (
                    <li
                    key={item}
                    className="text-sm text-[#252641] transition-colors duration-200 font-[400]"
                    >
                    {item}
                    </li>
                ))}
                </ul>
            </div>

            {/* Action buttons */}
            <div>
                <div className="flex items-center space-x-3">
                <button className="text-sm px-5 py-2 rounded-full border border-neutral-800 bg-white hover:bg-neutral-100 text-[#6C6C6C] font-[400] transition">
                    Login
                </button>
                <button className="text-sm px-4 py-2 rounded-full bg-[#F48C06] text-white hover:bg-orange-600 transition font-[500]">
                    Sign Up
                </button>
            </div>
        </div>

        {/* Hamburger for small screens */}
        <button onClick={() => setIsOpen((prev) => !prev)} className="md:hidden ml-2 text-xl z-40">
            <i className={isOpen ? 'bx bx-x' : 'bx bx-menu'} />
        </button>
        
        </div>
    </div>
    
    
    </nav>
);
};

export default Navbar;
