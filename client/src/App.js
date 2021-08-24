import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./pages/routes"
import {AuthContext} from "./context/AuthContext"
import {useAuth} from "./hooks/auth.hook";

function App() {
    const routes = useRoutes()
    const {login,logout,token,userId,isReady} =useAuth()
    const isLogin = !!token

    return (
       < AuthContext.Provider value={{login,logout,token,userId,isReady,isLogin}} >
        <div className="app">

            <BrowserRouter>
                <Navbar/>
                {routes}
            </BrowserRouter>

        </div>
       </AuthContext.Provider>
    )
}

export default App
