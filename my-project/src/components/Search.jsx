import React, {useContext, useState} from 'react'
import profilepic3 from "../images/profilepic3.jpg"
import {
    collection,
    doc,
    getDoc,
    getDocs,
    query,
    serverTimestamp,
    setDoc,
    updateDoc,
    where
} from "firebase/firestore";
import {db} from '../firebase';
import {AuthContext} from '../context/AuthContext';
import {FcAddImage} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {IoMdClose, IoMdCloseCircleOutline} from 'react-icons/io';

const Search = () => {

    const [username, setUsername] = useState("")
    const [user, setUser] = useState("")
    const [err, setErr] = useState(false)
    const {currentUser} = useContext(AuthContext)

    // Search user
    const handleSearch = async () => { // checking with Enter
        const q = query(collection(db, "users"), where("displayName", "==", username))


        try { // Getting searched user data..
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => { // doc.data() is never undefined for query doc snapshots
                setUser(doc.data())
            });
        } catch (error) {
            setErr(true)
        }
    }

    // Press Enter
    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    }

    // click search user
    const handleSelect = async () => { // check whether  the group( chats in firestore) exists, if not create.
        const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
        console.log(combinedId);
        try {
            const res = await getDoc(doc(db, "chats", combinedId));

            if (! res.exists()) { // create chat in chat collection
                await setDoc(doc(db, "chats", combinedId), {messages: []});

                // create user chats
                await updateDoc(doc(db, "userChat", currentUser.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: user.uid,
                        displayName: user.displayName,
                        photoURL: user.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });

                await updateDoc(doc(db, "userChat", user.uid), {
                    [combinedId + ".userInfo"]: {
                        uid: currentUser.uid,
                        displayName: currentUser.displayName,
                        photoURL: currentUser.photoURL
                    },
                    [combinedId + ".date"]: serverTimestamp()
                });

            }
        } catch (error) {}
        setUser(null)
        setUsername("")
    }

    const handleClose = () => {
        setUser(null)
    }

    return (
        <>
            <div className='md:pr-20 md:pl-5 p-5 md:pt-0 pt-7 flex gap-5'>

                <input className="w-full placeholder:font-italitc border relative md:bg-gray-100   placeholder-gray-500 drop-shadow-md md:rounded-2xl rounded-lg md:py-2 py-4 pl-3 pr-10 focus:outline-none" placeholder="Search user" type="text"
                    value={username}
                    onKeyDown={handleKey}
                    onChange={
                        e => setUsername(e.target.value)
                    }/>

                <div className=' md:hidden bg-white  px-7 py-1 rounded-lg '>
                    <h1 className='absolute top-[108px] right-[36px]  md:hidden text-gray-500'
                        onClick={handleSearch}><BsSearch size={26}/>
                        
                    </h1>
                </div>


                {
                err ? <span className='bg-green-600'>user not found</span> : ""
            } </div>

            {/* search user  */}
            {
            user && <div className='
                                fixed bg-black bg-opacity-25 backdrop-blur-sm
                                md:fle justify-center items-center z-20 md:w-[27%] w-full
                                '>
                                    <div className='absolut'>
                <div className=' flex items-center p-2 gap-3 bg-gray-200  cursor-pointer w-screen md:w-full relative '
                    onClick={handleSelect}>
                    <img className='h-16 w-16 bg-red-400 rounded-full object-cover'
                        src={
                            user.photoURL
                        }
                        alt="sdf"/>
                    <h1 className=' text-sm font-medium'>
                        {
                        user.displayName
                    }</h1>
                </div>
                <h1 className=' absolute top-7 right-9 cursor-pointer' onClick={handleClose}><IoMdCloseCircleOutline size={26}/></h1>
                </div>
            </div>
        }
            <div className='h-[1px] bg-black mx-5 '></div>
        </>
    )
}

export default Search
