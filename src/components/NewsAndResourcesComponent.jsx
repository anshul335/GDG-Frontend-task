import React from 'react'
import Laptop from '../../src/assets/Laptop.png'
import news1 from '../../src/assets/news1.png'
import news2 from '../../src/assets/news2.png'
import press from '../../src/assets/press.png'
const posts = [
    {
        img: press,
        title: 'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
        badge: 'PRESS RELEASE',
        description :'Class Technologies Inc., the company that created Class,...'
    },
    {
        img: news1,
        title: 'Zoom’s earliest investors are betting millions on a better Zoom for schools',
        badge: 'NEWS',
        description: 'Zoom was never created to be a consumer product. Nonetheless, the...'
        },
    {
        img: news2,
        title: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
        badge: 'NEWS',
        description: 'This year, investors have reaped big financial returns from betting on Zoom...'
    },
]

const NewsAndResourcesComponent = () => {
return (
    <section className="py-16 overflow-x-hidden dark:bg-black">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2F327D] dark:text-[#65DAFF]">Latest News and Resources</h2>
            <p className="mt-2 text-[#696984] dark:text-[#d6cfcf]">
                See the developments that have occurred to Skillines in the world
            </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Featured Post */}
            <div className="lg:col-span-1 space-y-6">
                <div className="relative overflow-hidden rounded-lg flex flex-row items-center justify-center">
                <img src={Laptop} alt="" className="w-130 h-70 object-cover rounded-lg" />
                </div>
                <span className="inline-block bg-[#F4C467] dark:bg-[#eba051] text-xs font-semibold uppercase px-7 py-1.5 rounded-full ml-10 text-[#252641]">NEWS</span>
                <h3 className="text-2xl font-semibold text-[#252641] dark:text-[#666781] ml-10 mr-15">Class adds $30 million to its balance sheet for a Zoom‑friendly edtech solution</h3>
                <p className="text-[#696984] dark:text-[#d6cfcf] ml-10 text-xl mr-10">Class, launched less than a year ago by Blackboard co‑founder Michael Chasen, integrates exclusively...</p>
                <a href="#" className="text-[#696984] dark:text-[#d6cfcf] font-medium underline ml-10 ">
                Read more
                </a>
            </div>

            {/* Grid of Small Posts */}
            <div className="space-y-6">
                {posts.map((post, idx) => (
                <div key={idx} className="flex md:items-start flex-col md:flex-row items-center  gap-4">
                    <div className="flex-shrink-0 w-50 h-35 overflow-hidden rounded-md relative">
                        <img src={post.img} alt="" className="w-full h-full object-cover  absolute z-5" />
                        <span className="inline-block bg-[#F4C467] dark:bg-[#eba051] text-[10px] font-semibold bottom-3 right-3 uppercase px-5 py-1 rounded-full absolute z-10">
                        {post.badge}
                        </span>
                    </div>
                    <div>
                    <h4 className="mt-1 text-md font-semibold text-[#252641] dark:text-[#666781] max-w-80">{post.title}</h4>
                    <h4 className='text-[#696984] dark:text-[#d6cfcf] mt-2 text-md max-w-80'> {post.description}</h4>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
    </section>

)
}

export default NewsAndResourcesComponent