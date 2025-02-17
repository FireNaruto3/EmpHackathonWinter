import React from "react";
import image from "../../src/assets/picture.jpg"

const About = () => {
    return (
        <div className="bg-gray-50 py-12 px-6">

            <section className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h2>
                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-8 lg:space-y-0">
   
                    <div className="lg:w-1/2 text-left">
                        <p className="text-lg text-gray-600 mb-6">
                            Welcome to our website! We are committed to providing the best services to our customers.
                            Our team is dedicated to ensuring your needs are met with quality and excellence.
                        </p>
                        <p className="text-lg text-gray-600 mb-6">
                            Our mission is to bring people together and offer helpful resources. We believe in continuous improvement and strive to stay ahead of the curve.
                        </p>
                    </div>
              
                    <div className="lg:w-1/2">
                        <img
                            src={image}
                            alt="About Us Image"
                            className="rounded-lg shadow-xl mb-6 w-full sm:w-3/4 md:w-2/3 mx-auto"
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center mb-12 space-y-8 lg:space-y-0">         
                    <div className="lg:w-1/2 text-left">
                        <p className="text-lg text-gray-600 mb-6">
                            Our dedicated team works hard to make sure you have the best experience. With years of expertise, we are here to support you every step of the way.
                        </p>
                    </div>
                </div>
            </section>

            <section className="bg-blue-500 text-white py-8 text-center rounded-lg shadow-lg mt-12">
    <h3 className="text-2xl font-semibold mb-4">Join Us Today!</h3>
    <p className="text-lg mb-6">If you want to learn more about what we offer, feel free to reach out to us.</p>
    <button className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-200">
        Contact Us
    </button>
</section>



        </div>
    );
}

export default About;
