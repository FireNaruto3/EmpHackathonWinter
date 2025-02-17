import Header from "../Components/HeaderComponent/HeaderComponent"
import React from "react";
import Footer from "../Components/FooterComponent/FooterComponent";

const About = ({}) => {
    return (
        <div>
            <Header name="Home Page" />


            <main className="container mx-auto p-6">
        <section className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            Welcome to our website! We are committed to providing the best services to our customers. 
            Our team is dedicated to ensuring your needs are met with quality and excellence.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://via.placeholder.com/500"
              alt="About Us Image"
              className="rounded-lg shadow-md mb-6"
            />
            <p className="text-lg text-gray-600 text-center">
              Our mission is to bring people together and offer helpful resources. We believe in continuous improvement and strive to stay ahead of the curve.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://via.placeholder.com/500"
              alt="Team Image"
              className="rounded-lg shadow-md mb-6"
            />
            <p className="text-lg text-gray-600 text-center">
              Our dedicated team works hard to make sure you have the best experience. With years of expertise, we are here to support you every step of the way.
            </p>
          </div>
        </section>

        <section className="bg-blue-500 text-white py-8 text-center">
          <h3 className="text-2xl font-semibold mb-4">Join Us Today!</h3>
          <p className="text-lg mb-6">If you want to learn more about what we offer, feel free to reach out to us.</p>
          <button className="bg-white text-blue-500 px-6 py-3 rounded-full shadow-md hover:bg-gray-100 transition duration-200">
            Contact Us
          </button>
        </section>
      </main>
        </div>


    );
}

export default About;