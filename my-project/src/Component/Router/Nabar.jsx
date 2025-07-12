import React from 'react'
import {Link} from 'react-router-dom'

function Nabar() {
  return (
   
    <>
        <div className='w-[90%] mx-auto pt-4 flex items-center justify-between '>
            <div>
               <a href='#' className='text-2xl text-gray-600 font-bold'>Logo</a>
            </div>
            <div >
                <ul className='flex items-center gap-6 text-xl' >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to = "/Blog">Blog</Link></li>
                <li><Link to = "">Contact</Link></li>
            </ul>
            </div>
        </div>
    </>
  )
}

export default Nabar