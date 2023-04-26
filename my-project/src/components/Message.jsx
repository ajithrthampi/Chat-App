import React from 'react'
import profilepic2 from "../images/profilepic2.jpg"

const Message = () => {
    return (
        <> {/* Large Screen */}
            <div className=' py-3 gap-5 '>
                <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen ">
                    <div id="messages" className=" scrollbar-hide flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                        <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-2 items-start">
                                    <div className='flex flex-col gap-4'>
                                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Can be verified on any platform using docker</span>
                                        <div>
                                            <img className='w-[50%] rounded-md' src="https://images.pexels.com/photos/13962287/pexels-photo-13962287.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <img className="w-14 h-14 rounded-full order-1" src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"/>
                            </div>
                        </div>
                        <div className="chat-message">
                            <div className="flex items-end justify-end">
                                <div className="flex flex-col space-y-2 text-sm max-w-xs mx-2 order-1 items-end">
                                    <div className=' flex flex-col gap-4'>
                                        <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span>
                                        <div> {/* <img classNameName='w-[50%] rounded-md' src="https://images.pexels.com/photos/13962287/pexels-photo-13962287.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/> */} </div>
                                    </div>
                                </div>
                                <img className="w-14 h-14 rounded-full order-1" src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Screen */}
            <div>

            </div>

        </>
    )
}

export default Message
