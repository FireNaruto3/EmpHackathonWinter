import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-accent-bg-color text-accent-text-color font-medium shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
            <span className="text-sm sm:text-center dark:text-gray-400">
                <Link to="/" className="hover:underline">Copyright &copy; 2025. All Rights Reserved.</Link>.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
                </li>
                <li>
                    <Link to="#" className="hover:underline me-4 md:me-6">Licensing</Link>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
