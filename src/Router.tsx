import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import axios from 'axios'
import BookMark from './pages/BookMark';
import { ToastContainer } from 'react-toastify';

export default function Router() {


  axios.defaults.baseURL = import.meta.env.API_URL;

  // console.log(import.meta.env.API_URL);

  return (
    
    <Routes>

      <Route path="/" element={<Home  />} />
      <Route path="/bookmarks" element={<BookMark />} />

      
    </Routes>
  )
}
