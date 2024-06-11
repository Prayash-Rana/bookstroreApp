import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-700 dark:text-white">
          <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
              </button>
          </form>
            
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
          
            <h3 className="font-bold text-lg">LogIn</h3>

            <div className="flex flex-col space-y-2 my-2">
              <label>Email</label>
              <input
              type="email"
              name=""
              id=""
              {...register("email", { required: true })}
              className="px-4 border w-80 outline-none rounded-md border-gray-300"
              placeholder="enter your email" />

              {errors.email&& <span className="text-md text-red-500">This field is required</span>}
            
            <label>Password</label>
            <input
              type="password"
              name=""
              className="px-4 border w-80 outline-none rounded-md border-gray-300 "
              id=""
              {...register("password", { required: true })}
              placeholder="enter password"
            />

            {errors.password&& <span className="text-md text-red-500">This field is required</span>}

            </div>

            <div className="flex justify-around mt-5 ">
            <button className="bg-pink-500 text-white px-2 py-1 rounded-lg">
              logIn
            </button>

            <div className="flex space-x-2">
              <p>Not Registered ?</p>
              <Link to="/signup" className="text-blue-500 underline">
                Sign Up
              </Link>
            </div>
          </div>

          </form>

         

          
        </div>
      </dialog>
    </div>
  );
};

export default LogIn;
