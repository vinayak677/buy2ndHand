import React from 'react'
import './Navbar.css'
import { SearchOutlined} from '@ant-design/icons';
import { useState } from 'react';

const Navbar = () => {
  const [search,setSearch]=useState('')
  return (
    <div className='main'>
      <div className="navbar">
          <a className='left' href="/"><i className="fa fa-fw fa-home"></i> Home</a>
          <input className='search-bar' value={search} SearchOutlined type='text' placeholder='search'onSubmit={(e)=>setSearch(e.preventDefault())}/>
          <a className='right' href="#"><i className="fa fa-fw fa-user"></i> Login</a>
      </div>
    </div>

  )
}

export default Navbar