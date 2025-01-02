import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full px-5 text-xl py-5 font-medium  flex justify-between items-center bg-[#1ECBE1] text-black'>
            <div className='text-2xl bg-gray-400 rounded-md p-2'>News Orbit</div>
            <div className='flex justify-between gap-5 items-center'>
                <div className='font-lg text-xl'>Explore the world’s stories, delivered directly to you.</div>
            </div>
        </div>
    )
}

export default Navbar