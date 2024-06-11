import React from 'react'
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'



const ContactBanner = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  return (
    <div className='flex h-screen items-center justify-center '>
     <div  className="w-[600px] px-4 py-2 relative">
        <div className=" dark:bg-slate-700 dark:text-white">
                  

          <h3 className="font-bold text-lg">Contact Us</h3>

          <form action="" onSubmit={handleSubmit(onSubmit)} >
              <div className="flex flex-col space-y-2 my-2">
                <label>Name</label>
                <input type="text" name="" placeholder='Enter your name' {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}

                <label>Email</label>
                <input type="email" name="" id="" className="px-4 border w-80 outline-none rounded-md border-gray-300" placeholder="enter your email" {...register("email", { required: true })} />
                {errors.email&& <span>This field is required</span>}

                <label >Message</label>
                <textarea className='border rounded-md resize-none' name="" id="" {...register("message", { required: true })}></textarea>
            
                {errors.message && <span>This field is required</span>}


                <div to="/" className="flex justify-start mt-5 ">
                 <button  className="bg-pink-500 text-white px-2 py-1 rounded-lg">Submit</button>
            
          
                </div>


              </div>

             


          </form>

          
          

         
        </div>
      </div>
    </div>
  )
}

export default ContactBanner
