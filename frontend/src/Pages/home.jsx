import React from 'react';
import Footer from '../Components/FooterComponent/FooterComponent'; // Import your existing Footer component
import Header from '../Components/HeaderComponent/HeaderComponent';// Import your existing Header component

function Home() {
    return (
        <div className="Home">
            {/* Header Component */}
            <Header />

            {/* Hero Section */}
            <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://via.placeholder.com/1500x600')" }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="container mx-auto text-center text-white relative z-10 pt-24">
                    <h1 className="text-5xl font-bold mb-4">Welcome to Accessible Map</h1>
                    <p className="text-xl mb-6">Your go-to platform for finding accessible resources nearby.</p>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
                        Get Started
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Our Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Libraries</h3>
                            <p className="text-gray-700">Find nearby libraries with easy access and facilities for all.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Public Bathrooms</h3>
                            <p className="text-gray-700">Locate clean and accessible public bathrooms near you.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                            <h3 className="text-xl font-semibold mb-4">Bus Stops</h3>
                            <p className="text-gray-700">Find the nearest bus stops for convenient travel options.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
