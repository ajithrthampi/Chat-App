import React from 'react'
import Message from './Message'
import profilepic2 from "../images/profilepic2.jpg"


const Messages = () => {
  return (
    <>
      <div className='bg-green-100 2xl:h-[550px] md:h-[430px] xl:h-[420px] overflow-scroll scrollbar-hide  '>
        <Message/>
      </div>
    </>
  )
}

export default Messages