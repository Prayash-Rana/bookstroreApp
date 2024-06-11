import React from 'react'
import { TfiEmail } from "react-icons/tfi";
import banner from '../../public/images/banner.jpg'

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto my-12 md:px-20 px-4 container flex flex-col md:flex-row justify-between items-center">
        {/* left part  */}
        <div className='w-full md:w-1/2 order-2 md:order-1 '>
          <h1 className='text-3xl font-bold mt-12 md:mt-24'>Welcome here to learn something new <span className='text-pink-400'>Everyday</span></h1>

          <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, laborum. Officiis eum ex aut corporis. Illo hic itaque suscipit quae.</p>

          <div className='flex space-x-4 items-center mt-5 w-full relative '>
            <input type="text" className='border-2 w-full ps-14 ' placeholder='Email'    />
            <TfiEmail className='absolute left-2' />

          </div>

         <button className='px-2 py-1 bg-pink-400 rounded-lg mt-2'>Submit</button>
        </div>
        {/* right part */}
        <div className='w-full flex order-1 md:order-2  md:w-1/2'>
          <img src={banner} alt="" className='w-96 h-96 ms-auto me-8 mt-10  '/>
        </div>
      </div>

    </>
  )
}

export default Banner
