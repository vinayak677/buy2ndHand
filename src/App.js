import './App.css';
import Navbar from './Component/Navbar/Navbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/sell" element={<Sell />} />
        <Route path="/login" element={<Login />} /> */}
    </Routes>
    </div>
  );
}

export default App;
