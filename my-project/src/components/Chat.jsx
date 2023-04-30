import React, { useContext } from 'react'
import profilepic2 from "../images/profilepic2.jpg"
import Messages from './Messages'
import Input from './Input'
import { ChatContext } from '../context/ChatContext'

const Chat = () => {
     
    const {data} = useContext(ChatContext)
    // console.log("datattata", data);

    return (
        <>
            <div className='w-[67%] bg-red-00 hidden md:block '>
                <div className='h-[13%] flex items-center'>
                    <div className=' flex  p-5 gap-3 justify-cente'>
                        <img className='h-16 w-16 bg-red-400 rounded-full object-cover'
                            src={data.user?.photoURL}
                            alt="sdf"/>
                        <h1 className=' pt-1 text-md font-medium '>{data.user?.displayName}</h1>
                    </div>
                </div>

                {/* Message */}
                <div className=' bg-yello-500 h-[87%]'>
                    <div className='h-[87%]'>
                        <Messages/>
                    </div>
                    <div className=' h-[13%] bg-gray-500'>
                        <Input/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Chat
