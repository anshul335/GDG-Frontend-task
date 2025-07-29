import React from 'react'

const WhatisSkillinePhotoComponent = ({ bgImage, title, buttonLabel, button}) => {
  return (
        <div className={`relative h-50 md:h-64 lg:h-72 w-108 rounded-2xl overflow-hidden group bg-contain bg-no-repeat bg-center 
        '
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
        >
        {/* dark overlay */}
        <span className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/60 transition-colors" />
        {/* content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h3 className="font-semibold tracking-wide text-lg md:text-xl">
            {title}
        </h3>
        <button style={{ backgroundColor: button }} className="mt-4 px-5 py-2 rounded-full font-medium   hover:bg-white/30 border border-white/30">
            {buttonLabel}
        </button>
        </div>
    </div>
  )
}

export default WhatisSkillinePhotoComponent