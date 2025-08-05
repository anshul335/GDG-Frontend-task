import React from 'react'
import Google from '../../src/assets/Google.png'
import Amazon from '../../src/assets/Amazon.png'
import Facebook from '../../src/assets/Facebook.png'
import Netflix from '../../src/assets/Netflix.png'
import Grab from '../../src/assets/Grab.png'
import AirBnb from '../../src/assets/AirBnb.png'

const Company = () => {
  const companies = [
    { id: 1, name: 'Google', image: Google },
    { id: 2, name: 'Netflix', image: Netflix },
    { id: 3, name: 'AirBnb', image: AirBnb },
    { id: 4, name: 'Amazon', image: Amazon },
    { id: 5, name: 'Facebook', image: Facebook },
    { id: 6, name: 'Grab', image: Grab }
  ]

  // Duplicate the array so the strip can loop seamlessly
  const looped = [...companies, ...companies]

  return (
    <div className="flex flex-col w-full items-center py-8 overflow-hidden dark:bg-black">
      <h2 className="text-[#696984] dark:text-[#d6cfcf] text-lg">
        Trusted by 5,000+ Companies Worldwide
      </h2>

      {/* 
        outer div must hide overflow
        inner div is super-wide flex with animation
      */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-scroll">
          {looped.map((company, idx) => (
            <div key={idx} className="flex-shrink-0 mx-[3vw]">
              <img
                src={company.image}
                alt={company.name}
                className="h-15 w-20 md:h-20 md:w-30 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Company
