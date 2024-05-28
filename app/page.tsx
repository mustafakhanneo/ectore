import React from 'react'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Home = () => {
  
  return (
    <div className='h-screen w-screen bg-red-200'>
      <Navbar />
      <Banner />
      <div className='flex bg-blue-500'>
     prev
      </div>
      <div className='flex bg-black'>
next
      </div>
      <Footer />
      <Footer />
      <Footer />
    </div>
  )
}

export default Home