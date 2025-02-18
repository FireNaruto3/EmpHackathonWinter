import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/Hellos'
import Map from './Pages/Maps'
import Features from './Pages/Features'
import NotFound from './Pages/NotFound'
import Learn from "./Pages/Learn"

import Header from "./Components/HeaderComponent/HeaderComponent"
import Footer from "./Components/FooterComponent/FooterComponent";

function App() {
  return (
      <BrowserRouter basename="/EmpHackathonWinter">
      <Header/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<Map />} />
            <Route path = "/features" element = {<Features />}/>
            <Route path = "/*" element = {<NotFound />} />
            <Route path = "/learn" element = {<Learn />} />
          </Routes>

          <Footer/>
      </BrowserRouter>
  )
};

export default App;
