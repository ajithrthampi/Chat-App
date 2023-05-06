import React, {useContext} from 'react'
import ClipLoader from "react-spinners/PacmanLoader";
import {AuthContext} from '../context/AuthContext';

const SplashScreen = ({loading}) => {

    const {currentUser} = useContext(AuthContext)
    

    return (
        <>
            <div className='bg-[#7969f3] h-screen w-screen flex flex-col items-center justify-center'>
                <div className=' '>
                    <ClipLoader color={"white"}
                        loading={loading}
                        // cssOverride={override}
                        size={30}
                        aria-label="Loading Spinner"
                        data-testid="loader"/>
                </div>

                {
                currentUser ? 
                <>
                <h1 className='text-white font-perif text-xl'>Loading please wait...</h1>
                </>
                 : 
                 <>
                    <div>
                        <h1 className='font-perifpp md:text-2xl text-white text-xl'>Welcome to Chat<span className='text-gray-800'>Book</span>
                        </h1>
                    </div>
                </>
            } </div>
        </>
    )
}

export default SplashScreen
