import React from 'react'
import profilepic3 from "../images/profilepic3.jpg"

const Search = () => {
    return (
        <>
            <div className='md:pr-20 md:pl-5 p-5 md:pt-0 pt-7'>
                <input className="w-full placeholder:font-italitc border relative md:bg-gray-100 bg-gray-300  placeholder-black drop-shadow-md md:rounded-2xl rounded-lg py-2 pl-3 pr-10 focus:outline-none" placeholder="Search user" type="text"/>
            </div>

            {/* <div className=' flex items-center p-5 gap-3 '>
                <img className='h-16 w-16 bg-red-400 rounded-full object-cover'
                    src={profilepic3}
                    alt="sdf"/>
                <h1 className=' text-sm font-medium'>Ajith R Thampi</h1>
            </div> */}
            <div className='h-[1px] bg-black mx-5'></div>
        </>
    )
}

export default Search
