import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class SidebarButton extends Component {      
    render () {
    return (
        <div>
            <Link className="navItem" to="/">
                <input type ="button" className="btn_sidebar" name="submit" id="submitButton"
                value ="Back to dashboard" />
            </Link>
        </div>
    );
}
}

export default SidebarButton;