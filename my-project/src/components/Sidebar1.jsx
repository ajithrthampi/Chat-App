import React from 'react'
import {FcCdLogo} from 'react-icons/fc'
import {FiLogOut} from 'react-icons/fi'
import {CgMenuBoxed} from 'react-icons/cg'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

const Sidebar1 = () => {
    return (
        <>
            <div className='bg-[#1a1a1b]  h-[100vh] text-white w-[6%] hidden md:block'>
                <div className='flex justify-center pt-4'>
                    <div className='flex flex-col justify-center items-center'>
                        {/* <FcCdLogo size={47}/> */}
                        <h1 className='text-whte text-2xl text-[#6753FC] font relative font-bold'>Chat</h1>
                        <h1 className='absolute top-10 font-perifpp'>Book</h1>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-10 pt-20'>
                    <CgMenuBoxed size={27}/>
                    <div 
                    onClick={() => signOut(auth)}
                    >
                        <FiLogOut size={27}/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar1
