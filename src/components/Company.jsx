import React from 'react'
import Google from '../../src/assets/CompaniesImage/Google.png'
import Amazon from '../../src/assets/CompaniesImage/Amazon.png'
import Facebook from '../../src/assets/CompaniesImage/Facebook.png'
import Netflix from '../../src/assets/CompaniesImage/Netflix.png'
import Grab from '../../src/assets/CompaniesImage/Grab.png'
import AirBnb from '../../src/assets/CompaniesImage/AirBnb.png'




const Company = () => {
  const companies = [
    { id: 1, name: 'Google', image: Google },
    { id: 2, name: 'Netflix', image: Netflix },
    { id: 3, name: 'AirBnb', image: AirBnb},
    { id: 4, name: 'Amazon', image: Amazon },
    { id: 5, name: 'Facebook', image: Facebook },
    { id: 6, name: 'Grab', image: Grab }
  ]
  return (
    <div className="flex w-full justify-center items-center py-8 overflow-x-hidden dark:bg-black">
      <div className=' whitespace-nowrap overflow-auto no-scrollbar '>
        <div className='whitespace-nowrap inline-block  animate-move '
        >
          {companies.map((company) => (
            <img src={company.image} alt={company.name} key={company.id} className ="md:w-30 w-20 md:h-20 h-15  mx-[3vw] object-contain inline-block " />
          ))}
        </div>
        <div className='whitespace-nowrap  animate-move md:mx-0 inline-block'>
          {companies.map((company) => (
            <img src={company.image} alt={company.name} key={company.id} className ="md:w-30 md:h-20 w-20 h-15  mx-[3vw] object-contain inline-block " />
          ))}
        </div>
        
        
      </div>
    </div>
  );
};


export default Company