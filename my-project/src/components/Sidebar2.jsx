import React, {useContext} from 'react'
import profilepic1 from "../images/profilepic1.jpg"
import Search from './Search'
import ChatsUser from './ChatsUser'
import {AuthContext} from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import Navbar from './Navbar'


const Sidebar2 = () => {

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)
    if (currentUser) { // console.log("User home",currentUser);
    }

    return (
        <> {/* Large Screen */}
            <div className='  h-scren w-[27%] hidden md:block'>
                <div className='hidden md:block'>
                    <div className=' flex  gap-3 p-5'>
                        <img className='h-[80px] w-[80px] bg-red-400 rounded-full object-cover'
                            src={
                                currentUser.photoURL
                            }
                            alt="sdf"/>
                        <h1 className='pt-3 text-sm font-medium'>
                            {
                            currentUser.displayName
                        }</h1>
                    </div>
                </div>
                <Search/>
                <ChatsUser/>
            </div>

            {/* Small Screen */}
            <div className='md:hidden bg-gray-100'>
                {
                data ?. user ?. displayName ? 
                <>
                
                </> 
                :
                 <>
                 <Navbar/>
                  <Search/>
                <ChatsUser/>
                 </>
            }
               
            </div>
        </>
    )
}

export default Sidebar2
