import React from 'react'
import onedrive from '../../src/assets/onedrive.png'
import drive from '../../src/assets/drive.png'
import dropbox from '../../src/assets/dropbox.png'
import teams from '../../src/assets/teams.png'

const logos = [
    {
        link : onedrive,
        alt : 'onedrive',
        h: '195px',
        w: '228px'

    },
    {
        link : dropbox,
        alt : 'dropbox',
        h: '121px',
        w: '130px'
    },
    {
        link : drive,
        alt : 'drive',
        h: '135px',
        w: '138px'
    },
    {
        link : teams,
        alt : 'teams',
        h:'159px',
        w: '159px'
    }
]

const integration = () => {
  return (
    <div className="py-12 overflow-x-hidden dark:bg-black ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
        <div className="flex  flex-row flex-wrap justify-center w-100 items-center gap-6">
            {logos.map(({ link, alt ,h,w}) => (
            <img
                key={alt}
                src={link}
                alt={alt}
                style={{ width: w, height: h }}
                className="object-contain opacity-100  "
            />
            ))}
        </div>
        <div className="text-center lg:text-left space-y-4">
            <p className="uppercase text-md tracking-wider text-[#525596] dark:text-[#65DAFF] flex items-center gap-5 ">
                <hr className='w-19'></hr>
                INTEGRATIONS
            </p>
            <h2 className="text-4xl font-bold text-[#2F327D] dark:text-[#65DAFF]">
            200+ educational tools and platform <span className='text-[#F48C06] dark:text-[#eba051] '>integrations</span>
            </h2>
            <p className="text-md max-w-115 font-[400] text-[#696984] dark:text-[#d6cfcf] ">
            Schoology has every tool your classroom needs and comes
            pre‑integrated with more than 200+ tools, student information
            systems (SIS), and education platforms.
            </p>
            <button className="inline-block px-6 py-3 border border-[#F48C06] dark:border-[#eba051] rounded-full text-[#F48C06] dark:text-[#eba051] ">
            See All Integrations
            </button>
        </div>
        </div>
    </div>
    )
}

export default integration