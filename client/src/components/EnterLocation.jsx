import React from 'react'
import { FaSearchLocation } from "react-icons/fa";
import { Button } from './ui/button';
import { MdMyLocation } from "react-icons/md";

const EnterLocation = () => {
  return (
    <div>
      <form action="">
        <div className='flex items-center justify-center gap-12'>
      <div className='flex items-center justify-center mt-8' ><input type="text" name="" id="" className='text-gray-400 h-9 w-150 border-2 border-gray-400 pl-4' value="Search for your city" /><Button className='rounded-r-full h-9 bd-[#2A2E34]'><FaSearchLocation /></Button></div>
      <div className='flex items-center gap-3 mt-6.5 text-red-600 font-mono'><MdMyLocation/><button className='text-[1rem]' >Detect my location</button></div>
      </div>
      </form>
    </div>
  )
}

export default EnterLocation