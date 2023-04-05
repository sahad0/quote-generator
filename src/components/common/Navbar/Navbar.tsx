import React from 'react'

export default function Navbar():JSX.Element {
  return (
    <div className='bg-green-200 flex  flex-row w-full flex-1 h-28    top-0'>
      
      <div className=' self-center  align-middle flex'>
        <h1 className='text-3xl font-custom m-11 font-extrabold'>
          QteG
        </h1>
      </div>

      <div className=' self-center  align-middle flex'>
          <h1 className='text-lg text-gray-900 m-7'>
            Home
          </h1>
      </div>

      <div className='  self-center align-middle flex  '>
        <h1 className='text-lg text-gray-900 m-7 ml-3'>
            Bookmarks
        </h1>
      </div>
        
        

    </div>
  )
}
