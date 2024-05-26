import React from 'react'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

const Home = () => {

  const banner = [{
    url: "https://picsum.photos/1530/500",
    title: "First",
    description: "This is first banner."
  },
  {
    url: "https://picsum.photos/1530/500",
    title: "Second",
    description: "This is Second banner."
  },
  {
    url: "https://picsum.photos/1530/500",
    title: "Third",
    description: "This is Third banner."
  },
  {
    url: "https://picsum.photos/1530/500",
    title: "Fourth",
    description: "This is Fourth banner."
  },
  ]

  return (
    <div  className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
<Navbar />
<Banner banner={banner} />
<Footer />
      
    </div>
  )
}

export default Home