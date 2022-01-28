// import React from 'react'
// import Navbar from './components/Navbar/Navbar'
// import {BrowserRouter} from 'react-router-dom'
// import {useRoutes} from "./routes"
// import {AuthContext} from "./context/AuthContext"
// import {useAuth} from "./hooks/auth.hook";
//
// function App() {
//
//     const {login,logout,token,userId,isReady} =useAuth()
//     const isLogin = !!token
//     const routes = useRoutes(isLogin)
//
//     return (
//        < AuthContext.Provider value={{login,logout,token,userId,isReady,isLogin}} >
//         <div className="app">
//             <BrowserRouter>
//                 <Navbar/>
//                 {routes}
//             </BrowserRouter>
//
//         </div>
//        </AuthContext.Provider>
//     )
// }
//
// export default App


import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar/Navbar";
import {useAuth} from "./hooks/auth.hook";
import {useRoutes} from "./pages/routes";
import {AuthContext} from "./context/AuthContext"

export default  function App() {

    const {login,logout,token,userId,isReady} =useAuth()
    const isLogin = !!token
    const routes = useRoutes(isLogin)
    return (
        < AuthContext.Provider value={{login,logout,token,userId,isReady,isLogin}} >
        <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="profile" element={<Profile />} />
            </Routes>
        </div>
        </AuthContext.Provider>
    );
}