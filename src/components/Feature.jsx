import React from 'react'

const Feature = () => {
  return (
    <section className="py-12 overflow-x-hidden dark:bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">
        {/* main heading */}
        <h2 className="text-4xl font-bold text-[#2F327D] dark:text-[#65DAFF] mt-2">
            Our <span className="text-[#F48C06]  dark:text-[#eba051]">Features</span>
        </h2>

        {/* Description */}
        <p className="mt-3 text-[#696984] dark:text-[#d6cfcf]">
            This very extraordinary feature, can make learning activities more efficient
        </p>
        </div>
  </section>
  )
}

export default Feature