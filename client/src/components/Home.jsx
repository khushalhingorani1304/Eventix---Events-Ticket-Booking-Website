import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from './shared/Footer'
import EnterLocation from './EnterLocation'
import HeroSection from './HeroSection'

const Home = () => {
  return (
    <div className='border-x-10 border-[#2A2E34]' >
        <Navbar/>
        <EnterLocation/>
        <HeroSection />
        {/* <Footer/> */}
    </div>
  )
}

export default Home