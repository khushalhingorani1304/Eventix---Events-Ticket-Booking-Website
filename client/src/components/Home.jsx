import React from 'react'
import Navbar from '../components/shared/Navbar'
import Footer from './shared/Footer'
import EnterLocation from './EnterLocation'

const Home = () => {
  return (
    <div className='border-x-5 border-[#2A2E34]' >
        <Navbar/>
        <EnterLocation/>
        {/* <Footer/> */}
    </div>
  )
}

export default Home