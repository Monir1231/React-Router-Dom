import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  const Navigate = useNavigate()
    const handleClick = () =>{
        Navigate("/")
    }
      return (
    <>
         <p className='text-2xl text-center mt-36 font-semibold'>Error:</p>
        <h1 className='text-7xl text-center text-gray-400 font-bold'>404</h1>
        <div className='text-center my-3'>
            <button className='py-2 px-6 bg-pink-500 rounded-md text-white' onClick={handleClick}>Back Home</button>
        </div>
    </>
  )
}

export default Error