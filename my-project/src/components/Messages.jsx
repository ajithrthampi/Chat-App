import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import profilepic2 from "../images/profilepic2.jpg"
import bg from "../images/bg.jpg"
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'
import MobileNav from './MobileNav'


const Messages = () => {

  const [messages, setMessages] = useState([])
  const {data} = useContext(ChatContext)

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
       doc.exists() && setMessages(doc.data().messages)
    })
    return () => {
      unSub()
    }
  },[data.chatId])

    return (
        <>
        <div className='h-screen md:h-full'>
         <MobileNav/>
            <div className=' 2xl:h-[550px] md:h-[430px] xl:h-[420px] md:overflow-scroll md:scrollbar-hide  overflow-scroll h-full md:mb-0 md:pb-5 pb-20  md:pt-0 pt-20  bg-gray-200 '>
              {
              messages.map(m => (
                <>
               
                 <Message message={m} key={m.id}/>
                 </>
              ))
              }
               
            </div>
            </div>
        </>
    )
}

export default Messages
