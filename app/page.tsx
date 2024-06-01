import React from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = () => {
  
  return (
    <div className='flex flex-col h-screen max-w-full bg-white'>
      <Navbar />
      <Banner />
      <div className='flex bg-blue-500'>
     prev
      </div>
      <div className='flex bg-black'>
next
      </div>
      <Footer />
    </div>
  )
}

export default Home