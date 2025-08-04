import React from "react";
import classroomImage from "../../src/assets/Classroom.png";

const WhatYouCanDoWithSkilline = () => {
  return (
    <div className="
        relative isolate px-6 lg:px-20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-8 overflow-x-hidden dark:bg-black">
      {/* Text Section */}
        <div className="relative z-0 ml-7">
            {/* Yellow décor circles */}
            <div className="absolute -z-10 -top-2 -left-3 h-12 w-12 bg-[#F4B767] dark:bg-[#eba051] rounded-full" />
            <div className="absolute -z-10 top-40 right-10 h-4 w-4 bg-[#F4B767] dark:bg-[#eba051] rounded-full" />

            <h2 className="text-2xl md:text-3xl mb-4">
                <span className="text-[#2F327D] dark:text-[#65DAFF]">
                    Everything you can do in a physical classroom,
                </span>{" "}
                <span className="text-[#F48C06] dark:text-[#eba051]">
                    you can do with Skilline
                </span>
            </h2>
            <p className="text-[#696984] dark:text-[#d6cfcf] mb-6 max-w-[395px]">
                Skilline’s school management software helps traditional and online schools manage
                scheduling, attendance, payments and virtual classrooms—all in one secure cloud‑based
                system.
            </p>
            <a href="#" className="text-[#696984] dark:text-[#d6cfcf] underline font-medium">
                Learn more
            </a>
        </div>

      {/* ✅ Image Section */}
        <div className="relative z-20 rounded-xl ">
        {/* Blue and orange background blocks for decoration */}
            <div className="absolute -z-10 -top-3 -left-3 w-24 h-24 bg-[#23BDEE] dark:bg-[#65DAFF] rounded-xl" />
            <div className="absolute -z-10 -bottom-3 -right-3 w-44 h-44 bg-[#F3AC50] dark:bg-[#eba051] rounded-xl" />

            <img src={classroomImage} alt="Classroom"className="w-full h-auto object-cover"
            />

            {/* Play-button overlay */}
            <div className="absolute inset-0 z-20 flex items-center justify-center">
                <button className="w-14 h-14 rounded-full bg-white/90 dark:bg-gray-800/75 backdrop-blur-md shadow-md flex items-center justify-center hover:scale-105 transform transition">
                    <svg className="h-6 w-6 text-[#23BDEE]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
  );
};

export default WhatYouCanDoWithSkilline;
