import React from 'react'
import image from './next.svg';

const Home = () => {
  const cartItems = 10;
  const displayMessage = (msg) => {
    return <div className='border border-red-500 bg-red-100 p-3 rounded-md w-1/2 mx-auto my-3'>
      <span className='text-red-500 dont-bold'>{msg}</span>
    </div>
  }


  return (
    <div>
      {displayMessage('Alert! You need to login')}
      <h1 style={{ color: 'red', textAlign: 'center', fontsize: 50 }}>My Home Page</h1>

      <br />
      <h2 className='text-2xl text-center'>Cart Items</h2>

      <button className='btn'>My Button</button>

      <img src="/next.svg" alt="" />
      <img src={image.src} alt="" />

    </div>


  )
}

export default Home


{/* // lowercase  */ }
{/* // react-dom */ }