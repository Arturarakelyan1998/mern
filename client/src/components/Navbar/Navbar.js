import React, {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
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
                                    <li><Link to="/createPost">Create Post</Link></li>
                                    <li><Link to="/profile">Profile</Link></li>
                                    <li><Link to="/login" onClick={logout}>Log Out</Link></li>
                                </ul>
                            </>
                            :     <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/login">Log In</Link></li>
                            </ul>
                    }


                </div>
            </nav>
        );
}
