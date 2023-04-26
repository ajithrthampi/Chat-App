import React from 'react'
import Sidebar2 from '../components/Sidebar2'
import Chat from '../components/Chat'
import Navbar from '../components/Navbar'
import Sidebar1 from '../components/Sidebar1'

const Home = () => {
    return (
        <>
            <div className='md:flex'>
                <Sidebar1/>
                <Sidebar2/>
                <Chat/>
            </div>

        </>
    )
}

export default Home
