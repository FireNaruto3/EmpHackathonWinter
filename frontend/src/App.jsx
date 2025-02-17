import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/Hellos'
import Map from './Pages/Maps'
import Features from './Pages/Features'

import Header from "./Components/HeaderComponent/HeaderComponent"
import Footer from "./Components/FooterComponent/FooterComponent";

function App() {
  return (
      <BrowserRouter>
      <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map />} />
            <Route path = "/features" element = {<Features />}/>
          </Routes>

          <Footer/>
      </BrowserRouter>
  )
};

export default App;
