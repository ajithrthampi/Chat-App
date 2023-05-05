import { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";
import MobileChat from "./components/MobileChat";
import SplashScreen from "./pages/SplashScreen";

function App() {
    
    const [loading, setLoading] = useState(false)
    const {currentUser} = useContext(AuthContext)
    // console.log("ENV file", process.env);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        },4000)
    },[])

    const ProtectedRoute =  ({children}) => {
        if(!currentUser){
            return <Navigate to="/login" />
        } 
        return children
    }
    return (
        <>
        {
            loading ? 
            <>
              <SplashScreen loading={loading}/>
            </> 
            :
            <>
             <Router>
                <Routes> 
                    <Route path="/" element={
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }
                />
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/chat" element={<MobileChat/>}/>
                </Routes>
            </Router>
            {/* <Home/> */}

            </>

        }
           
        </>
    );
}

export default App;
