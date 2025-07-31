import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Contexts/AuthContext'


export default function Navbar() {

const [isOpen,setIsOpen]=useState(false)

let { userToken , setUserToken } = useContext(AuthContext)
const navigate = useNavigate()


function signOut()
{
  setUserToken("");
  localStorage.removeItem("token");
  navigate("/Login")
}

  return (
    <>
  
{/* <header className="bg-green-800 absolute w-full  ">
  <nav className="container mx-auto px-6 py-3">
    <div className="flex items-center justify-between">
      <div className='flex items-center'>
      <div className="text-white font-bold text-xl me-8">
        <i className="fa-solid fa-cart-shopping mx-2 fa-1x"></i>
        <a href="#">FreshCart</a>
      </div>
      
      {userToken && <div className="hidden md:block">
        <ul className="flex items-center space-x-2">
        <li><NavLink to={"/"} className="block px-1 py-2 text-white">Home</NavLink></li>
        <li><NavLink to={"/Products"} className="block px-1 py-2 text-white ">Products</NavLink></li>
        <li><NavLink to={"/Categories"} className="block px-1 py-2 text-white ">Categories</NavLink></li>
        <li><NavLink to={"/Brands"} className="block px-1 py-2 text-white ">Brands</NavLink></li>
        <li><NavLink to={"/Cart"} className="block px-1 py-2 text-white ">Cart</NavLink></li>
        </ul>
      </div>}
      <div className="md:hidden">
        <button onClick={()=> setIsOpen(!isOpen)} className="outline-none mobile-menu-button">
          <svg className="w-6 h-6 text-white" x-show="!showMenu" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      </div>
      <div className='flex gap-2 items-center'>
        <div className="social-icons">
        <a target='_blank' href="https://www.facebook.com/"><i className="fa-brands text-white hover:text-black mx-1 fa-facebook-f"></i></a>
        <a target='_blank' href="https://x.com/?lang=ar"><i className="fa-brands text-white hover:text-black mx-1 fa-twitter"></i></a>
        <a target='_blank' href="https://www.linkedin.com/feed/"><i className="fa-brands text-white hover:text-black mx-1 fa-linkedin"></i></a>
        <a target='_blank' href="https://www.youtube.com/"><i className="fa-brands text-white hover:text-black mx-1 fa-youtube"></i></a>
        <a target='_blank' href="https://www.tiktok.com/ar/"><i className="fa-brands text-white hover:text-black mx-1 fa-tiktok"></i></a>
        </div>
        <div>
      <ul className='flex gap-1 '>
       
      {!userToken && <>
       <li><NavLink to={"/Login"} className="block px-1 py-2 text-white ">Login</NavLink></li>
       <li><NavLink to={"/Register"} className="block px-1 py-2 text-white ">Register</NavLink></li>
       </>}

        {userToken && <li> <button onClick={signOut} className="block px-1 py-2 text-white ">SignOut</button> </li>}
      </ul>
        </div>
      </div>
    </div>
   {userToken && <div className={isOpen ? "mobile-menu md:hidden " : " mobile-menu md:hidden hidden "}>
      <ul className="mt-4 space-y-4">
        <li><NavLink to={"/"} className="block px-1 py-2 text-white bg-gray-900 rounded">Home</NavLink></li>
        <li><NavLink to={"/Products"} className="block px-1 py-2 text-white bg-gray-900 rounded">Products</NavLink></li>
        <li><NavLink to={"/Categories"} className="block px-1 py-2 text-white bg-gray-900 rounded">Categories</NavLink></li>
        <li><NavLink to={"/Brands"} className="block px-1 py-2 text-white bg-gray-900 rounded">Brands</NavLink></li>
        <li><NavLink to={"/Cart"} className="block px-1 py-2 text-white bg-gray-900 rounded">Cart</NavLink></li>
      </ul>
       
    </div>}
    
  </nav>
</header> */}


<header className="bg-green-800 p-1 w-full z-50 fixed top-0 left-0">
  <nav className="container mx-auto px-4 sm:px-6 py-3">
    <div className="flex items-center justify-between flex-wrap">
      {/* Logo + Main Links */}
      <div className="flex items-center justify-between w-full md:w-auto">
        {/* Logo */}
        <div className="flex items-center text-white font-bold text-xl">
          <i className="fa-solid fa-cart-shopping mx-2"></i>
          <a href="#">FreshCart</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Desktop Nav */}
      {userToken && (
        <div className="hidden md:flex md:items-center md:space-x-4 mt-3 md:mt-0">
          <NavLink to="/" className="text-white hover:text-gray-300">
            Home
          </NavLink>
          <NavLink to="/Products" className="text-white hover:text-gray-300">
            Products
          </NavLink>
          <NavLink to="/Categories" className="text-white hover:text-gray-300">
            Categories
          </NavLink>
          <NavLink to="/Brands" className="text-white hover:text-gray-300">
            Brands
          </NavLink>
          <NavLink to="/Cart" className="text-white hover:text-gray-300">
            Cart
          </NavLink>
        </div>
      )}

      {/* Social + Auth */}
      <div className="flex items-center gap-3 mt-3 md:mt-0">
        {/* Social Icons */}
        <div className="flex space-x-2 text-white">
          <a href="https://www.facebook.com/" target="_blank">
            <i className="fa-brands fa-facebook-f hover:text-black"></i>
          </a>
          <a href="https://x.com" target="_blank">
            <i className="fa-brands fa-twitter hover:text-black"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            <i className="fa-brands fa-linkedin hover:text-black"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank">
            <i className="fa-brands fa-youtube hover:text-black"></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank">
            <i className="fa-brands fa-tiktok hover:text-black"></i>
          </a>
        </div>

        {/* Auth Links */}
        <div>
          <ul className="flex gap-2 text-white">
            {!userToken ? (
              <>
                <li>
                  <NavLink to="/Login" className="hover:text-gray-300">
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Register" className="hover:text-gray-300">
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <li>
                <button onClick={signOut} className="hover:text-gray-300">
                  Sign Out
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>

    {/* Mobile Dropdown Nav */}
    {userToken && isOpen && (
      <div className="md:hidden mt-4">
        <ul className="space-y-2 rounded-md p-4">
          <li>
            <NavLink to="/" className="block text-white">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Products" className="block text-white">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/Categories" className="block text-white">
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/Brands" className="block text-white">
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink to="/Cart" className="block text-white">
              Cart
            </NavLink>
          </li>
        </ul>
      </div>
    )}
  </nav>
</header>

    </>
  )
}
