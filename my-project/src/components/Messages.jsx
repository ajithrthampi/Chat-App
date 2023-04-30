import React, { useContext, useEffect, useState } from 'react'
import Message from './Message'
import profilepic2 from "../images/profilepic2.jpg"
import bg from "../images/bg.jpg"
import { ChatContext } from '../context/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase'


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
console.log("2222222222222222222222222",messages);
    return (
        <>
            <div className=' 2xl:h-[550px] md:h-[430px] xl:h-[420px] overflow-scroll scrollbar-hide  '>
              {
              messages.map(m => (
                 <Message message={m} key={m.id}/>
              ))
              }
               
            </div>
        </>
    )
}

export default Messages
