import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import Head from './Head'
import Navbar from './Navbar'

function Header() {
  return (
    <div className='container'>
    {/* <Search/>   */}
    <Head/>
    <Navbar />



    </div>
  )
}

export default Header
