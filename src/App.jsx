import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart'
import Home from './pages/Home'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Toaster } from 'react-hot-toast';

function App() {
  

  return (
    <div>
      <div className='bg-slate-900 '>
      <Navbar />
      </div>
        
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/cart" element={ <Cart/> } />
        </Routes>


        
    </div>
  )
}

export default App
