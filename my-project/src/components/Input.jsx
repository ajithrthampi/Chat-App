import React, {useContext, useState} from 'react'
import {FcAddImage} from 'react-icons/fc'
import {MdSend} from 'react-icons/md'
import {ChatContext} from '../context/ChatContext'
import {AuthContext} from '../context/AuthContext'
import {
    Timestamp,
    arrayUnion,
    doc,
    serverTimestamp,
    updateDoc
} from 'firebase/firestore'
import {db, storage} from '../firebase'
import {v4 as uuid} from 'uuid';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'
import {AiOutlineSend} from 'react-icons/ai';

const Input = () => {

    const [text, setText] = useState("")
    const [img, setImg] = useState(null)

    const {currentUser} = useContext(AuthContext)
    const {data} = useContext(ChatContext)

    const handleSend = async () => {

        if (img) {
            const storageRef = ref(storage, uuid());

            const uploadTask = uploadBytesResumable(storageRef, img);

            uploadTask.on('state_changed', (snapshot) => {}, (error) => {}, () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                    await updateDoc(doc(db, "chats", data.chatId), {
                        messages: arrayUnion(
                            {
                                id: uuid(),
                                text,
                                senderId: currentUser.uid,
                                date: Timestamp.now(),
                                img: downloadURL
                            }
                        )
                    });
                });
            })

        } else {
            await updateDoc(doc(db, "chats", data.chatId), {
                messages: arrayUnion(
                    {id: uuid(), text, senderId: currentUser.uid, date: Timestamp.now()}
                )
            })
        }

        await updateDoc(doc(db, "userChat", currentUser.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        });
        await updateDoc(doc(db, "userChat", data.user.uid), {
            [data.chatId + ".lastMessage"]: {
                text
            },
            [data.chatId + ".date"]: serverTimestamp()
        });
        setText("")
        setImg(null)
    }
    

    return (
        <>
            <div className='hidden md:block'>
                <div className='flex justify-cente items-center h-full  mx-10 pt-5'>
                    <div className=' w-full flex gap-3 '>
                        <input className='w-full rounded-md py-2 p-2 ' type="text" placeholder="Type something"
                            onChange={
                                e => setText(e.target.value)
                            }
                            value={text}/>
                        <input className='hidden' type="file" id="file"
                            onChange={
                                e => setImg(e.target.files[0])
                            }/>
                        <label htmlFor="file" className=' text-3xl'>
                            <FcAddImage/>
                        </label>
                        <button className=' bg-black text-white px-5 rounded-md '
                            onClick={handleSend}><MdSend/></button>
                    </div>
                </div>
            </div>
            <div className='md:hidden z-50'>
                <div className='flex justify-center '>
                    <div className='   fixed bottom-0  rounded-tr-3xl rounded-tl-3xl w-full  px-'>

                        <div className='bg-white py-3 rounded-tr-3xl rounded-tl-3xl '>
                            <div className=' relative px-3'>
                                <input className='rounded-full bg-gray-100 pr-24 px-3 py-7 w-full h-10 ' type="text" placeholder='type here'
                                    onChange={
                                        e => setText(e.target.value)
                                    }/>

                                <input className='hidden' type="file" id="file"
                                    onChange={
                                        e => setImg(e.target.files[0])
                                    }/>
                                <label htmlFor="file" className=' text-3xl absolute bottom-3 right-16'>
                                    <FcAddImage size={25}/>
                                </label>
                                <div className=' absolute bottom-3 right-5 text-gray-400 '
                                    onClick={handleSend}>
                                    <AiOutlineSend size={25}/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Input
