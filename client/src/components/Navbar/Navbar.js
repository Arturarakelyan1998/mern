import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import ('./NavBar.scss')

export default function Navbar(){
        const {logout,isLogin}=useContext(AuthContext)
        return (
            <nav>
                <div className="nav-wrapper nav-bar ">
                    <a href="/" className="brand-logo"> ACA App </a>

                    {
                        isLogin
                        ?   <>
                                <input type='text' placeholder='Search...'/>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><a href="/profile">Profile</a></li>
                                    <li><a href="/" onClick={logout}>Log Out</a></li>
                                </ul>
                            </>
                            :     <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="/">Log In</a></li>
                            </ul>
                    }


                </div>
            </nav>
        );
}