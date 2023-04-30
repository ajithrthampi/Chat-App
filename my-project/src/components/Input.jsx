import React, {useContext, useState} from 'react'
import {FcAddImage} from 'react-icons/fc'
import {MdSend} from 'react-icons/md'
import {ChatContext} from '../context/ChatContext'
import {AuthContext} from '../context/AuthContext'
import {Timestamp, arrayUnion, doc, serverTimestamp, updateDoc} from 'firebase/firestore'
import {db, storage} from '../firebase'
import {v4 as uuid} from 'uuid';
import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'

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
                            }),
                    });
                });
            })

            } else {
                await updateDoc(doc(db, "chats", data.chatId), {
                    messages: arrayUnion(
                        {
                            id: uuid(), 
                            text, 
                            senderId: currentUser.uid, 
                            date: Timestamp.now()}
                    )
                })
            }

            await updateDoc(doc (db, "userChat", currentUser.uid), {
                [data.chatId + ".lastMessage"] : {
                  text
                },
                [data.chatId + ".date"]: serverTimestamp()
            });
            await updateDoc(doc (db, "userChat", data.user.uid), {
                [data.chatId + ".lastMessage"] : {
                  text
                },
                [data.chatId + ".date"]: serverTimestamp()
            });
            setText("")
            setImg(null)
        }

        return (
            <>
                <div className='flex justify-cente items-center h-full  mx-10 '>
                    <div className=' w-full flex gap-3 '>
                        <input className='w-full rounded-md py-2 p-2 ' type="text" placeholder="Type something"
                            onChange={
                                e => setText(e.target.value)
                            }
                            value={text}
                            />
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
            </>
        )
    }

    export default Input
