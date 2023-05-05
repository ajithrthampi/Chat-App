import {signOut} from 'firebase/auth'
import React, { useState } from 'react'
import {auth} from '../firebase'

const Navbar = () => {

    const [showModal, setShowModal] = useState(false)

    const handleModal = () => {
        signOut(auth)
    }

    return (
        <>
            <div className='bg-white py-4 font-perifpp px-5 flex justify-between items-center'>
                <h1 className='font-perifpp'>ChatBook</h1>
                <button className='bg-[#6753FC] px-5 py-1 rounded-full text-white'
                    // onClick={() => signOut(auth)}
                    onClick={handleModal}
                >Logout</button>
            </div>


        </>
    )
}

export default Navbar
