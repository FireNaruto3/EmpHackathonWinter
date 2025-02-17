import '../../index.css';
import React from 'react';
import { Link } from "react-router-dom";


const Header = ({ title }) => {
    return (
        <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">AccessAble </h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="/" className="hover:text-gray-200">Home</a></li>
              <li><a href="/about" className="hover:text-gray-200">About</a></li>
                <li><a href ="/map" className="hover:text-gray-200">Map</a></li>
            </ul>
          </nav>
        </div>
      </header>
    );
}

export default Header;
