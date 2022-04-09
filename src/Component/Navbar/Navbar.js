import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [search,setSearch]=useState('')
  return (
    <div className='main'>
      <div className="buy2hand-container">
        <div className='buy2hand-container-content'>
            <Link className='buy2hand-container-content-home' to="/"><i class="fa fa-fw fa-home"></i> Home</Link>
            <input className='buy2hand-container-content-search' value={search} SearchOutlined type='text' placeholder='search'onChange={(e)=>setSearch(e.target.value)}/>
        </div>
        <Link className='buy2hand-container-content-login' to="login"><i class="fa fa-fw fa-user"></i> Login</Link>
      </div>
    </div>

  )
}

export default Navbar