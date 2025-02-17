import 'HeaderComponent.css'
import React from 'react';

const Header = ({ title, navLinks}) => {
    return (
        <header className="header">
        <div className="logo">
            <a href="/">Home</a>
        </div>
            <nav className="navigation">
                <ul>
                    <li><a href="#home">Home</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

