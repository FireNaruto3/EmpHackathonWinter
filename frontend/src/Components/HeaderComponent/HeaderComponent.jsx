import './HeaderComponent.css';
import React from 'react';
//import { Link } from "react-router-dom";


const Header = ({ title }) => {
    return (
        <header className="header">
        <div className="logo">
            {/* <Link to="/">My Website</Link> */}
        </div>
        <nav className="navigation">
            <ul>
                {/* <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
            </ul>
            <h1>You are on {title.name}</h1>
        </nav>
    </header>
    );
}

export default Header;


/*
        <header className="header">
            <div className="logo">
                <Link to="/">My Website</Link>
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>*/