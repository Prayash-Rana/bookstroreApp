import React from 'react'
import list from '../../public/list.json'
import Cards from './Cards'
import { Link } from 'react-router-dom'

const CourseElements = () => {
  return (
    <div className=' max-w-screen-2xl mx-auto py-12 md:px-20 px-4 container'>
      <div className='mt-28 flex flex-col justify-center items-center'>
        <h1 className='text-2xl text-center md:text-4xl font-semibold '>We are delighted to have you <span className='text-pink-500'>here :) </span></h1>

        <p className='mt-8 text-lg text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi distinctio non ullam nulla cum ab ipsam a, in natus fuga veritatis similique, amet laborum culpa repudiandae quos, dolor dignissimos molestiae quisquam temporibus! Vitae facilis ipsam harum deserunt illum accusantium hic.</p>

        <Link to='/'>
        <button className='bg-pink-500 px-4 py-2 hover:bg-pink-700 duration-300 rounded-lg
         text-white mt-2'>Back</button>
        </Link>

        
      </div>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-3 space-x-2 space-y-2'>
        {list.map((item)=> (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CourseElements
