import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const cart = useSelector((state) => state.cart); // ✅ optimized



  return (
    <div>
      <nav className='flex flex-row justify-between items-center max-w-6xl mx-auto ' >
        <NavLink to="/" >
            <div className='ml-5' >
            <img src="public\logo.png" className='h-14' alt="Logo img" />
            </div>
       
        </NavLink>
        
        <div className='flex flex-row gap-3 justify-between items-center font-medium text-slate-100 mr-5 '>
            <NavLink to='/'>
            <p >Home</p>
            </NavLink>

            <NavLink to="/cart" >
                <div className='relative' >
                <FaShoppingCart className='text-2xl' />
                <span
                className='flex justify-between items-center absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5  animate-bounce rounded-sm px-[6px] text-white '
                > {cart.length} </span>
                </div>
            </NavLink>       
        </div>
      
    </nav>
    </div>
    
  )
}

export default Navbar
