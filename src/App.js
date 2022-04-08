import './App.css';
import Navbar from './Component/Navbar/Navbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
