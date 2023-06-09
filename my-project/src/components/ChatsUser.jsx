import React, {useContext, useEffect, useState} from 'react'
import profilepic2 from "../images/profilepic2.jpg"
import {onSnapshot, doc} from 'firebase/firestore'
import {db} from '../firebase'
import {AuthContext} from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { MessageContext } from '../context/MessageContext'
// import {FcAddImage} from 'react-icons/fc';


const ChatsUser = () => {

    const [chats, setChats] = useState([])
    const {currentUser} = useContext(AuthContext)
    const [date, setDate] = useState([])
    const {dispatch} = useContext(ChatContext)
    const {dispatch1} = useContext(MessageContext)
    
    const navigate = useNavigate()

    useEffect(() => {
        const getChat = () => {
            const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
                setChats(doc.data())
                setDate(doc.data())
            });
            return() => {
                unsub();
            }
        }
        currentUser.uid && getChat()

    }, [currentUser.uid])

//    console.log("Date", Object.entries(date));
    // console.log("chats,,,",  Object.entries(chats))


    //click on user to chat
    const handleSelect = (u) => {
        dispatch({type: "CHANGE_USER", payload: u})
        // navigate("/chat")
        // dispatch({type: "TOGLE_MODAL", payload: "defaultModal"})
    }

    return (
        <>
        {
                Object.entries(chats) ?
        <> 
         <div className=''>
            <div className='flex flex-col  overflow-scroll h-[550px] md:h-[450px] xl:h-[560px] scrollbar-hide px-5  md:px-0'>
                {
                Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map(chat => (
                    <div className='flex justify-between md:items-center pr-5 bg-white md:bg-inherit rounded-xl md:mt-0 mt-3 ' key={chats[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                        <div className=' flex   pl-5 p-3 md:gap-3 gap-2 cursor-pointer'>
                            <img className='md:h-16 md:w-16 h-14 w-14 bg-red-400 rounded-full object-cover'
                                src={chat[1]?.userInfo?.photoURL}
                                alt="sdf"/>
                            <div className='flex  flex-col justify-center gap-1'>
                            <h1 className=' pt-1 text-[14px] md:text-lg font-bold md:font-normal font-perifpp'>{chat[1]?.userInfo?.displayName}</h1>
                                <p className=' text-sm text-gray-400 font-perifpp '>{chat[1]?.lastMessage?.text}</p>
                            </div>
                        </div>
                        <p className='text-xs  text-gray-700 py-3 font-perifpp'>{moment(chat[1].date?.toDate()).calendar()}</p>
                    </div>
                ))
            } </div>
            </div>
            </>
             :
             <>
              <div>
                <h1>Search user to chat.</h1>
              </div>
             </>
        }
        
        </>
    )
}

export default ChatsUser
