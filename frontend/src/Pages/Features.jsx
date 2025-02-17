import React from 'react';

function Features() {
    return (
        <div className="Features">
            {/* Features Section */}
            <div className="container mx-auto text-center py-16 px-6">
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-800">Our Features</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Libraries</h3>
                        <p className="text-gray-700">Find nearby libraries with easy access and facilities for all.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Public Bathrooms</h3>
                        <p className="text-gray-700">Locate clean and accessible public bathrooms near you.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Bus Stops</h3>
                        <p className="text-gray-700">Find the nearest bus stops for convenient travel options.</p>
                    </div>
                    {/* New Resources */}
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Charging Stations</h3>
                        <p className="text-gray-700">Locate nearby charging stations for your electric vehicles.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Hospitals</h3>
                        <p className="text-gray-700">Find nearby hospitals with accessible medical facilities.</p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
                        <h3 className="text-xl font-semibold mb-4 text-gray-800">Water Fountains</h3>
                        <p className="text-gray-700">Locate water fountains for hydration on the go.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
