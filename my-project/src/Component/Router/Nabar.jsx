import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'

function Nabar() {
  return (
   
    <>
        <div className='w-[90%] mx-auto pt-4 flex items-center justify-between '>
            <div>
               <a href='#' className='text-2xl text-gray-600 font-bold'>Logo</a>
            </div>
            <div >
                <ul className='flex items-center gap-6 text-xl' >
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to = "/Blog">Blog</NavLink></li>
                <li><NavLink to = "/Contact">Contact</NavLink></li>
            </ul>
            </div>
        </div>
        <Outlet/>
    </>
  )
}

export default Nabar