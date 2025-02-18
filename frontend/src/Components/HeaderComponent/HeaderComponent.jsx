import '../../index.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-500 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-2xl font-bold">AccessAble</h1>
                </Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li>
                            <Link to="/" className="hover:text-gray-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="hover:text-gray-200">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/map" className="hover:text-gray-200">
                                Map
                            </Link>
                        </li>
                        <li>
                            <Link to="/features" className="hover:text-gray-200">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link to="/learn" className="hover:text-gray-200">
                                Learn
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;

