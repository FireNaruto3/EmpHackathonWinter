import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">

            <section
                id="home"
                className="relative bg-center h-screen bg-cover"
                style={{ backgroundImage: "url('https://via.placeholder.com/1500x600')" }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="container mx-auto text-center text-white relative z-10 pt-24 px-6">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
                        Welcome to Accessible Map
                    </h1>
                    <p className="text-lg sm:text-xl mb-6 max-w-xl mx-auto">
                        Your go-to platform for finding accessible resources nearby.
                    </p>
                    <Link to="/features">
                        <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition duration-300 shadow-md transform hover:scale-105">
                            Explore Features
                        </button>
                    </Link>
                </div>
            </section>

            <section className="py-16 bg-gray-100 text-center">
                <h2 className="text-3xl font-bold mb-6">Watch Our Intro Video</h2>
                <div className="max-w-4xl mx-auto">
                    <video
                        className="w-full rounded-lg shadow-lg"
                        controls
                    >
                        <source src="/aivid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </section>
        </div>
    );
}

export default Home;