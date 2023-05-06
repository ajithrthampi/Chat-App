import {signOut} from 'firebase/auth'
import React, {useContext, useState} from 'react'
import {auth} from '../firebase'
import {AuthContext} from '../context/AuthContext'
import {AiFillCaretDown} from 'react-icons/ai'

const Navbar = () => {

    const [showModal, setShowModal] = useState(false)
    const {currentUser} = useContext(AuthContext)


    const handleModal = () => { // signOut(auth)
        setShowModal(!showModal)
    }

    return (
        <>
            <div className='bg-[#7969f3] py-3 font-perifpp px-5 flex justify-between items-center'>
                <h1 className='font-perifpp text-white'>ChatBook</h1>
                <div></div>
                <div className='flex justify-center items-center gap-5'>
                    <img className='w-10 h-10 rounded-full object-cover '
                        src={
                            currentUser.photoURL
                        }
                        alt=""/>
                    <button className='text-white'
                        // onClick={() => signOut(auth)}
                        // onClick={handleModal}
                        onClick={handleModal}>
                        <AiFillCaretDown/>
                    </button>
                </div>
            </div>
            {
            showModal && showModal ? <>
                <div className='bg-gray-300 absolute right-2  top-[65px] z-50 rounded-md transition-all duration-500 ease-out'>
                    <div className='flex justify-center py-2 px-10'>
                        <button className='bg-[#7969f3] text-white font-perifpp px-5 rounded-xl py-1 hover:scale-110 duration-300'   >
                            <h1 onClick={() => signOut(auth)}>Logout</h1>
                        </button>
                    </div>
                </div>
            </> : <></>
        } </>
    )
}

export default Navbar
