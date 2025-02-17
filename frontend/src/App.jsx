import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home'
import Header from './Components/HeaderComponent/HeaderComponent'
import ResourceSelector from './Components/DropdownComponent/Dropdown'

function App() {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter> */}
      <ResourceSelector></ResourceSelector>

      <p></p>
    </div>
  );
}

export default App;
