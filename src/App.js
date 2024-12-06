import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Header1 from './Components/Header1'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Sidebar from './Components/Sidebar/Sidebar';


export default function App() {
  return (
    <>
    {/* <Header></Header> */}
    <Header1></Header1>
 <Sidebar></Sidebar>
    {/* <Header1></Header1> */}

    <Outlet></Outlet>
    <ToastContainer /> 
    </>

  )
}
