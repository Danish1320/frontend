import React from 'react'

const notfound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='text-center space-y-6'>
            <h1 className='text-9xl font-bold'>404</h1>
            <p>Page Not Found</p>
            <button className='bg-black text-white rounded px-3 py-2'>Back to Home</button>

        </div>
      
    </div>
  )
}

export default notfound;
