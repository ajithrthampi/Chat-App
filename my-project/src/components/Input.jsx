import React from 'react'
import {FcAddImage} from 'react-icons/fc'
import {MdSend} from 'react-icons/md'

const Input = () => {
    return (
        <>
            <div className='flex justify-cente items-center h-full  mx-10 '>
                <div className=' w-full flex gap-3 '>
                    <input className='w-full rounded-md py-2 p-2 ' type="text" placeholder="Type something"/>

                    <button className=' text-3xl'><FcAddImage/></button>
                    <button className=' bg-black text-white px-5 rounded-md '><MdSend/></button>
                </div>
            </div>
        </>
    )
}

export default Input
