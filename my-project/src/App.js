import { useContext, useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register"
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { AuthContext } from "./context/AuthContext";

function App() {
    
    const {currentUser} = useContext(AuthContext)
    console.log("User",currentUser);

    const ProtectedRoute =  ({children}) => {
        if(!currentUser){
            return <Navigate to="/login" />
        } 
        return children
    }

    return (
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
                </Routes>
            </Router>
            {/* <Home/> */}
        </>
    );
}

export default App;