import React from 'react'
import company from '../../src/assets/Company.png'

const Company = () => {
  return (
    <div className="flex justify-center items-center py-8 overflow-x-hidden dark:bg-black">
      <img src={company} alt="companies" className="w-[70%] object-contain" />
    </div>
  );
};


export default Company