import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/Hellos'
import Map from './Pages/Maps'

import Footer from "./Components/FooterComponent/FooterComponent";

function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map />} />
          </Routes>

          <Footer/>
      </BrowserRouter>
  )
};

export default App;
