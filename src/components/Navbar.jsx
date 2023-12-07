import React, { useContext } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Context } from '../main'
import axios from 'axios'

const Navbar = () => {
  const { isAuthenticated, user, setIsAuthenticated } = useContext(Context)

  const handleLogout = (e) => {
    e.preventDefault()

    try {
      axios.get("http://localhost:5000/users/logout")
      .catch((err) => {
        console.log(err)
      })
      setIsAuthenticated(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
<div>
  { isAuthenticated ? (
        <div className="navbar text-black">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Stream</a></li>
              <li>
                <a>Recordings</a>
                {/* <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul> */}
              </li>
              <li><a>Connect</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl font-semibold max-sm:text-0.5xl">Poshan</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Stream</a></li>
            <li tabIndex={0}>
              {/* <details> */}
                <summary>Recordings</summary>
                {/* <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul> */}
              {/* </details> */}
            </li>
            <li><a>Connect</a></li>
          </ul>
        </div>
        <div className="navbar-end">
         <button className='btn text-white' onClick={handleLogout}>Logout</button>
        </div>
      </div>
  ) : (
    <div className="navbar text-black ">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-xl bg-white rounded-box w-52">
        <Link to="/"><li className='md:text-xl'><a>About Us</a></li></Link>
        <Link to="/contact-us"><li tabIndex={0} className='md:text-xl'>
                <summary>Contact Us</summary>
            </li></Link>
            </ul>
      </div>
      <a className="btn btn-ghost normal-case text-3xl font-semibold max-sm:text-xl">Poshan</a>
    </div>
    <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <Link to="/"><li className='md:text-xl'><a>About Us</a></li></Link>
            <Link to="/contact-us"><li tabIndex={0} className='md:text-xl'>
                <summary>Contact Us</summary>
            </li></Link>
          </ul>
        </div>
    <div className="navbar-end">
      <Link to="/signup" className="btn text-white">Read Blogs</Link>
      {/* <Link to="/" className="btn text-black">Get Started</Link> */}
    </div>
  </div>
  )}
</div>
  )
}

export default Navbar