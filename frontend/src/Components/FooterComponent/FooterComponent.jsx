import React from 'react';
import '../../index.css';

const Footer = () => {
    return (
    <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-accent-bg-color text-accent-text-color font-medium shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 ">
        <span class="text-sm sm:text-center dark:text-gray-400">
            <a href="/" class="hover:underline">Copyright &copy; 2025. All Rights Rerserved.</a>. 
        </span>
        <ul class="flex flex-wrap items-center mt-3 text-sm  dark:text-gray-400 sm:mt-0">
            <li>
                <a href={"/"} class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>

        </ul>
    </footer>
    
    );
};

export default Footer