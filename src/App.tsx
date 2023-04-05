import React from 'react'
import 'antd/dist/reset.css';
import Navbar from './components/common/Navbar/Navbar'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Router from './Router'
import './App.css';
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <div className='h-screen'>
        <Navbar />
        <Router />
      </div>
    </BrowserRouter>
     
  )
}
