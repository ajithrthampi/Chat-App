import React, {useContext, useEffect, useState} from 'react'
import profilepic2 from "../images/profilepic2.jpg"
import {onSnapshot, doc} from 'firebase/firestore'
import {db} from '../firebase'
import {AuthContext} from '../context/AuthContext'
import { ChatContext } from '../context/ChatContext'
const ChatsUser = () => {

    const [chats, setChats] = useState([])
    const {currentUser} = useContext(AuthContext)
    const {dispatch} = useContext(ChatContext)

    useEffect(() => {
        const getChat = () => {
            const unsub = onSnapshot(doc(db, "userChat", currentUser.uid), (doc) => {
                setChats(doc.data())
            });
            return() => {
                unsub();
            }
        }
        currentUser.uid && getChat()

    }, [currentUser.uid])

    // console.log("chatss.,.,", Object.entries(chats));

    //click on user to chat
    const handleSelect = (u) => {
        dispatch({type: "CHANGE_USER", payload: u})
    }

    return (
        <>
            <div className='flex flex-col  overflow-scroll h-[550px] md:h-[450px] xl:h-[560px] scrollbar-hide '>
                {
                Object.entries(chats)?.sort((a,b) => b[1].date - a[1].date).map(chat => (
                    <div className='flex justify-between items-center pr-5' key={chats[0]} onClick={() => handleSelect(chat[1].userInfo)}>
                        <div className=' flex  pl-5 pt-5 md:gap-3 gap-2 '>
                            <img className='md:h-16 md:w-16 h-14 w-14 bg-red-400 rounded-full object-cover'
                                src={chat[1].userInfo.photoURL}
                                alt="sdf"/>
                            <div>
                            <h1 className=' pt-1 text-[14px] md:text-lg font-medium '>{chat[1].userInfo.displayName}</h1>
                                <p className='text-[11px] text-gray-400'>{chat[1].lastMessage?.text}</p>
                            </div>
                        </div>
                        <p className='text-xs text-gray-700'>04:50</p>
                    </div>
                ))
            } </div>
        </>
    )
}

export default ChatsUser
