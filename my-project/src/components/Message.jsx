import React, {useContext, useEffect, useRef} from 'react'
import profilepic2 from "../images/profilepic2.jpg"
import {AuthContext} from '../context/AuthContext';
import {ChatContext} from '../context/ChatContext';
import {FiArrowLeft} from 'react-icons/fi'
import {FcAddImage} from 'react-icons/fc';
import {RiSendPlaneFill} from 'react-icons/ri';
import {MessageContext} from '../context/MessageContext';
import MobileNav from './MobileNav';


const Message = ({message}) => {


    // const dataa = [{
    //         name: "Ajith",
    //         Age: 23,
    //         Address: "India"
    //     }]

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)
    const {chatValue} = useContext(MessageContext)
    console.log("value", chatValue);

    const ref = useRef()

    useEffect(() => {
        ref.current ?. scrollIntoView({behavior: "smooth"})
    }, [message])

    return (
        <> {/* Large Screen */}

            <div className='hidde d:block  z-0 '
                ref={ref}
                >
                   
                <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-scree  ">
                    
                    <div id="messages" className=" md:pt-0  p-2  scrollbar-hide flex flex-col   overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">

                        {
                        message.senderId === currentUser.uid ?
                        <div className="chat-message">
                        <div className="flex items-end justify-end">
                            <div className="flex flex-col space-y- text-sm max-w-xs mx-2 order-1 items-end">
                                <div className=' flex flex-co gap-3 '>
                                    {
                                    message.text && <span className="px-5 py-2   inline-block rounded-tr-xl rounded-tl-xl font-perifpp rounded-bl-xl bg-[#6753FC] text-white ">
                                        {
                                        message ?. text
                                    }</span>
                                }

                                    {
                                    message.img && <div>
                                        <img className='w-60 object-cover rounded-md'
                                            src={
                                                message.img
                                            }
                                            alt=""/>
                                    </div>
                                } </div>
                            </div>
                            {}
                            <img className="w-14 h-14 rounded-full order-1 object-cover hidden md:block"
                                src={
                                    data.user.photoURL
                                }
                                alt="all profile"/>
                        </div>
                    </div>
                        : 
                            <div className="chat-message">
                            <div className="flex items-end">
                                <div className="flex flex-col space-y- text-sm max-w-xs mx-2 order-2 items-start">
                                    <div className='flex flex-col gap-3     '>
                                        {
                                        message.text && <span className="px-4  py-2 rounded-lg inline-block rounded-bl-none bg-white font-perifpp text-gray-600">
                                            {
                                            message ?. text
                                        }</span>
                                    }

                                        {
                                        message.img && <div >
                                            <img className='md:w-60 w-44 object-cover'
                                                src={
                                                    message.img
                                                }
                                                alt=""/>
                                        </div>
                                    } </div>
                                </div>
                                {
                                message && <img className="w-14 h-14 rounded-full object-cover order-1 hidden md:block"
                                    src={
                                        currentUser.photoURL
                                    }
                                    alt="My profile"/>
                                }
                             </div>
                        </div> 
                        
                    } </div>
                </div>
            </div>

            {/* Mobile Screen */}
            {/* <div className='md:hidden'>
                <div className='fixed inset-0 bg-red-500 bg-opacity-25 backdrop-blur-sm h-sc
                            md:flex justify-center items-center md:pt-20 '>
                    <div className='w-full bg-red-500  h-screen '> */}


            {/* Navbar */}
            {/* <div className='w-full -10 flex  items-center bg-white py-3 rounded-br-3xl rounded-bl-3xl absolute top-0 z-30'>
                            <div className=' flex justify-center items-center gap-5 px-5 h-full'>
                                <FiArrowLeft size={28}/>
                                <div className='flex gap-3'>
                                    <img className='h-14 w-14 bg-red-400 rounded-full object-cover'
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
                        </div> */}


            {/* chat  messages */}

            {/* <div className='overflow-scroll scrollbar-hide h-[500px] absolute  top-20 z-0 w-full'>
                            <div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                                {
                                message.senderId === currentUser.uid ? <>
                                    <div class="chat-message">
                                        <div class="flex items-end">
                                            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">

                                                <div> {
                                                    message.text && <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                        {
                                                        message ?. text
                                                    }</span>
                                                } </div>
                                            </div>
                                            <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-1"/>
                                        </div>
                                    </div>
                                </> : <>
                                    <div class="chat-message">
                                        <div class="flex items-end justify-end">
                                            <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                <div>
                                                    <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Your error message says permission denied, npm global installs must be given root privileges.</span>
                                                </div>
                                            </div>
                                            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" class="w-6 h-6 rounded-full order-2"/>
                                        </div>
                                    </div>
                                </>
                            } </div>
                        </div> */}

            {/* INPUT */}
            {/* <div className='flex justify-center '>
                            <div className='   absolute bottom-5  rounded-tr-3xl rounded-tl-3xl w-full  px-1'>

                                <div className=' relative '>
                                    <input className='rounded-xl  px-5 py-7 w-full h-10 border border-black' type="text" placeholder='type here'/>
                                    <div className='absolute bottom-3 right-16'>
                                        <FcAddImage size={30}/>
                                    </div>
                                    <div className=' absolute bottom-3 right-5'>
                                        <RiSendPlaneFill size={30}/>
                                    </div>
                                </div>

                            </div>
                        </div> */}
            {/* </div>
                </div>
            </div> */}


            {/* Small device */}
            <div className='hidden'>
                {/* <MobileNav/> */}
                <div className="fixed inset-0 z-10 overflow-y-auto ">
                    <div className="fixed inset-0 w-full h-full bg-black opacity-40"
                        // onClick={() => setShowModal(false)}
                    ></div>
                    <div className="fle items-cente min-h-screen px- py- h-full">
                        <MobileNav/>
                        <div className="relative w-full max-w-lg p-4 mx-auto b-gray-200 rounded-md shadow-lg  h-full">
                            <div className="mt-3 sm:flex">
                                {/* <div className="flex items-center justify-center flex-none w-12 h-12 mx-auto bg-red-100 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                                    </svg>
                                </div> */}
                                <div className="mt-2 text-center sm:ml-4 sm:text-left overflow-scroll scrollbar-hide h-[550px]">

                                    <div class="mt-20 mb-16">
                                        {
                                        message.senderId === currentUser.uid ? <>
                                            <div class="clearfix ">
                                                <div class="bg-gray-300 w-3/4 mx-4 my-2 p-2 rounded-lg">{message?.text}</div>
                                            </div>
                                        </> : <>
                                            <div class="clearfix">
                                                <div class="bg-green-300 float-right w-3/4 mx-4 my-2 p-2 rounded-lg clearfix">{message?.text}</div>
                                            </div>
                                        </>
                                    } </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Message
