import React from 'react'
import {Link} from 'react-router-dom'
import LogIn from './LogIn'
import LoginForSignUp from './LoginForSignUp'
import { useForm } from "react-hook-form";

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className='flex h-screen items-center justify-center '>
     <div  className="w-[600px] border shadow-md rounded-md px-4 py-2 relative">
        <div className=" dark:bg-slate-700 dark:text-white">
          
            {/* if there is a button in form, it will close the modal */}
          <Link to='/' className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
          </Link>          

          <h3 className="font-bold text-lg">Sign Up</h3>

          <form action="" onSubmit={handleSubmit(onSubmit)} >
              <div className="flex flex-col space-y-2 my-2">
                <label>Name</label>
                <input type="text" name="" placeholder='Enter your name' {...register("name", { required: true })} />
                {errors.name && <span>This field is required</span>}

                <label>Email</label>
                <input type="email" name="" id="" className="px-4 border w-80 outline-none rounded-md border-gray-300" placeholder="enter your email" {...register("email", { required: true })} />
                {errors.email&& <span>This field is required</span>}

                <label >Password</label>
                <input type="password" name="" className="px-4 border w-80 outline-none rounded-md border-gray-300 " id="" placeholder="enter password" {...register("password", { required: true })} />
                {errors.password && <span>This field is required</span>}


                <div className="flex justify-around mt-5 ">
                 <button className="bg-pink-500 text-white px-2 py-1 rounded-lg">Sign Up</button>
            
                  <div className="flex space-x-2">
                  <p>Have an account ?</p>
                  <button onClick={()=> document.getElementById("my_modal_3").showModal()} className="text-blue-500 underline">Log in</button> 
                  <LoginForSignUp />
                </div> 
          
              </div>


              </div>

             


          </form>

          
          

         
        </div>
      </div>
    </div>
  )
}

export default SignUp
