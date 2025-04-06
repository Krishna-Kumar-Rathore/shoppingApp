import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

// ✅ Import the image correctly
import logo from './logo.png';

const Navbar = () => {
  const cart = useSelector((state) => state.cart); // get cart state

  return (
    <div>
      <nav className='flex flex-row justify-between items-center max-w-6xl mx-auto'>
        <NavLink to="/">
          <div className='ml-5'>
            {/* ✅ Use imported logo */}
            <img src={logo} className="h-14" alt="Logo" />
          </div>
        </NavLink>

        <div className='flex flex-row gap-3 justify-between items-center font-medium text-slate-100 mr-5'>
          <NavLink to='/'>
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className='relative'>
              <FaShoppingCart className='text-2xl' />
              <span
                className='flex justify-center items-center absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 animate-bounce rounded-sm text-white'>
                {cart.length}
              </span>
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
