import React from 'react';
import ('./NavBar.scss')

export default function NavBar(){

        return (
            <nav>
                <div className="nav-wrapper nav-bar blue">
                    <a href="/" className="brand-logo"> M E R N </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Log In</a></li>
                    </ul>
                </div>
            </nav>
        );
}