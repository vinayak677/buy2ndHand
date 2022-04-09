import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Navbar = () => {
  const [search, setSearch] = useState('')
  return (
    <div className='main'>
      <div className="buy2hand-container">
        <div className='buy2hand-container-content'>
          <Link className='buy2hand-container-content-home' to="/"><i class="fa fa-fw fa-home"></i> Home</Link>
          <input className='buy2hand-container-content-search' value={search} SearchOutlined type='text' placeholder='search' onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
        <Link className='buy2hand-container-content-login' to="login">Login</Link>
        <Link className='buy2hand-container-content-sell' to="sell"> Sell</Link>
        </div>
      </div>
      <div className='All-tags'>
        <div >
        <select className='option'>
          <option >Open this select menu</option>
          <option value="bikes">bikes</option>
          <option value="cars">Cars</option>
          <option value="mobiles">Mobiles</option>
          <option value="furniture">Furniture</option>
          <option value="books">Books</option>
          <option value="music-instrument">Music instrument</option>
          <option value="gym-items">Gym items</option>
          <option value="sport-equipment">Sport Equipment</option>
          <option value="computer-laptops">Computer/Laptops</option>
          </select>
        </div>
        
        <Link className='buy2hand-container-tags-bikes'  to="bike">Bikes</Link>
        <Link className='buy2hand-container-tags-cars' to="cars">Cars</Link>
        <Link className='buy2hand-container-tags-furniture' to="furniture">Furniture</Link>
        <Link className='buy2hand-container-tags-mobiles' to="mobiles">Mobiles</Link>
        <Link className='buy2hand-container-tags-books' to="books">Books</Link>
        <Link className='buy2hand-container-tags-gym-items' to="gymitems">Gym items</Link>
        <Link className='buy2hand-container-tags-music-instrument' to="musicinstrument">Music instrument</Link>
        <Link className='buy2hand-container-tags-sport-equipment' to="sport equipment">Sport Equipment</Link>
        <Link className='buy2hand-container-tags-computer-laptops' to="computer,laptops">Computer/Laptops</Link>

      </div>


    </div>

  )
}

export default Navbar