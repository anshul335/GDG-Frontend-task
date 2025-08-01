import React from 'react'
import SmillingWomen from '../../src/assets/SmillingWomen.png'

const Testimonial = () => {
return (
    <section className="py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
    {/* Left Content */}
        <div className="md:w-1/2 space-y-6">
            <div className="flex items-center space-x-4">
            <div className="h-px w-16 bg-[#2F327D]" />
            <span className="uppercase tracking-wider text-sm text-[#2F327D]">Testimonial</span>
            </div>
            <h2 className="text-5xl font-[550] text-[#2F327D]">What They Say?</h2>
            <p className="text-[#696984] text-2xl  mr-30">
            Skilline has got more than 100k positive ratings from our users around the world.
            </p>
            <p className="text-[#696984] text-2xl  mr-30">
            Some of the students and teachers were greatly helped by the Skilline.
            </p>
            <p className="text-[#696984] text-2xl  mr-30">Are you too? Please give your assessment</p>

            <button className="border border-[#F48C06] text-[#F48C06] rounded-full px-6 py-3 font-medium hover:bg-[#F48C06] hover:text-white transition">
            Write your assessment →
            </button>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className=" p-4 rounded-xl  border-blue-300 relative z-10">
            <img
                src={SmillingWomen}
                alt="Testimonial"
                className="rounded-lg w-full h-130 object-contain"
            />
            </div>

            {/* Quote Card */}
            <div className="absolute -bottom-8 left-4 md:left-16 bg-white shadow-lg rounded-lg p-6 w-[90%] md:w-[70%] z-20">
            <p className="text-sm text-[#696984]">
                "Thank you so much for your help. It's exactly what I've been looking for. You won't
                regret it. It really saves me time and effort. Skilline is exactly what our business
                has been lacking."
            </p>
            <div className="mt-4 flex items-center justify-between">
                <span className="font-semibold text-[#5F5F7E]">Gloria Rose</span>
                <div className="text-sm text-[#80819A]">12 reviews at Yelp ⭐⭐⭐⭐⭐</div>
            </div>
            </div>
        </div>
    </section>
    )
}

export default Testimonial