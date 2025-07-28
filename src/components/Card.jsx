import React from 'react';

const Card = ({ icon, title, description,color }) => {
return (
    <div className=" relative flex flex-col items-center h-full w-[250px]  ">
        <div style={{ backgroundColor: color }} className="text-white absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center mb-4 z-2 ">
        {icon}
        </div>
        <div className="h-full bg-white p-6 rounded-2xl shadow-md flex flex-col justify-between items-center text-center hover:shadow-lg transition-shadow duration-300">
        <h3 className="font-semibold text-lg text-[#2F327D] mb-2  mt-9">{title}</h3>
        <p className="text-sm text-[#696984]">{description}</p>
        </div>
    </div>
);
};

export default Card;
