import React, { useContext, useEffect, useRef } from 'react'
import profilepic2 from "../images/profilepic2.jpg"
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

const Message = ({  message}) => {

    // console.log("Messages", message);
    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)
    // console.log("data",data);

    const ref = useRef()

    useEffect(() => {
      ref.current?.scrollIntoView({ behavior:"smooth" })
    }, [message])

    return (
        <> {/* Large Screen */}
            <div className=' py-3 gap-5 ' ref={ref}>
                <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-scree ">
                    <div id="messages" className=" scrollbar-hide flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                        {
                            message.senderId === currentUser.uid ? 
                        <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                    <div className='flex flex-col gap-3'>
                                        {
                                            message.text && <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message?.text}</span>
                                        }
                                        
                                        {
                                            message.img &&   <div>
                                            <img className='w-60 object-cover' src={message.img} alt=""/>
                                        </div>
                                        }
                                      
                                    </div>
                                </div>
                                {
                                    message &&  <img className="w-14 h-14 rounded-full object-cover order-1" src={currentUser.photoURL} alt="My profile"/>
                                }
                               
                            </div>
                        </div>
                            :
                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                                    <div className=' flex flex-col gap-3'>
                                        {
                                            message.text &&   <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">{message?.text}</span>
                                        }
                                      
                                      
                                            { 
                                                message.img &&   <div> 
                                                    <img className='w-60 object-cover rounded-md'  src={message.img} alt=""/> 
                                                </div>
                                            }
                                    </div>
                                </div>
                                {

                                }
                                <img className="w-14 h-14 rounded-full order-1 object-cover" src={data.user.photoURL} alt="all profile"/>
                            </div>
                        </div>   
                        }
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}
            <div></div>

        </>
    )
}

export default Message
