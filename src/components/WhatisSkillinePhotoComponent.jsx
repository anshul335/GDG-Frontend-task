import React from 'react'

const WhatisSkillinePhotoComponent = ({ bgImage, title, buttonLabel, button}) => {
  return (
        <div className={`relative w-full max-w-xl h-70 mx-auto rounded-2xl overflow-hidden aspect-w-4 aspect-h-3 bg-center bg-cover group
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