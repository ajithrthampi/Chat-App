import React, {useContext} from 'react'
import {ChatContext} from '../context/ChatContext'
import {SlArrowLeft} from 'react-icons/sl'

const MobileNav = () => {
    const {data} = useContext(ChatContext)
    return (
        <> {
            data ?. user ?. displayName ? <>
                <div className='md:hidden '>
                    <div className='w-full fixed  flex  items-center bg-white py-3 rounded-br-3xl rounded-bl-3xl  top-0 z-30 '>
                        <div className=' flex justify-center items-center gap-7 px-5 h-full'>
                            <div className='text-lg '>
                                <SlArrowLeft />
                            </div>
                            <div className='flex gap-3'>
                                <img className='h-10 w-10 bg-red-400 rounded-full object-cover'
                                    src={
                                        data.user ?. photoURL
                                    }
                                    alt="sdf"/>
                                <h1 className=' pt-1 text-md font-medium '>
                                    {
                                    data.user ?. displayName
                                }</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </> : <></>
        } </>
    )
}

export default MobileNav
