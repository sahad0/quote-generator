import React from 'react'
import 'antd/dist/antd.min.js';
import Navbar from './components/common/Navbar/Navbar'
import { BrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom'
import Router from './Router'
import './App.css';
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
     
  )
}
