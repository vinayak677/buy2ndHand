import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [search,setSearch]=useState('')
  return (
    <div className='main'>
      <div className="navbar">
          <Link className='left' to="/"><i class="fa fa-fw fa-home"></i> Home</Link>
          <input className='search-bar' value={search} SearchOutlined type='text' placeholder='search'onSubmit={(e)=>setSearch(e.preventDefault())}/>
          <Link className='right' to="login"><i class="fa fa-fw fa-user"></i> Login</Link>
      </div>
    </div>

  )
}

export default Navbar