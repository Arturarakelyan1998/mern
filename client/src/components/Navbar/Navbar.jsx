import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper navbar blue">
                    <a href="/" className="brand-logo"> M E R N </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/">Log In</a></li>


                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;