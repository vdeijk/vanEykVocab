import React from 'react';
import {Link } from 'react-router-dom';

function NavBar () {
    return (
        <div>
        <div className="top"></div>
        <nav>
            <div className="main_nav-container">
                    <Link className="navItem" to="/">Modules</Link>
                    <Link className="navItem" to="/Help">Help</Link>
                    <Link className="navItem" to="/About">About</Link>
                    <Link className="navItem" to="/Account">Account</Link>     
            </div>
        </nav>
        </div>
    );
}

export default NavBar;