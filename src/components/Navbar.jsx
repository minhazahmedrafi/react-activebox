import React, { Component, Fragment } from 'react'
import logo from '../images/logo.png';
import {NavLink} from 'react-router-dom';

export default class Navbar extends Component {
render() {
return (
<Fragment>
    <nav className="navbar navbar-expand-lg  navbar-dark py-3">
        <div className="container">
            <NavLink className="navbar-brand" to="/">
                <img src={logo} alt="LOGO" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link menu_active" exact to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link menu_active" to="/features">Features</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link menu_active" to="/team">Team</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link menu_active" to="/download">Download</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</Fragment>
)
}
}