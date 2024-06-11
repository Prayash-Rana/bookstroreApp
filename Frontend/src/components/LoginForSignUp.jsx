import React from "react";
import { Link } from "react-router-dom";

const LoginForSignUp = () => {
  return (
    <div>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-700 dark:text-white">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>
          </form>

          <h3 className="font-bold text-lg">LogIn</h3>
          <div className="flex flex-col space-y-2 my-2">
            <label>Email</label>
            <input
              type="email"
              name=""
              id=""
              className="px-4 border w-80 outline-none rounded-md border-gray-300"
              placeholder="enter your email"
            />
            <label>Password</label>
            <input
              type="password"
              name=""
              className="px-4 border w-80 outline-none rounded-md border-gray-300 "
              id=""
              placeholder="enter password"
            />
          </div>

          <div className="flex justify-around mt-5 ">
            <button className="bg-pink-500 text-white px-2 py-1 rounded-lg">
              logIn
            </button>

            <div className="flex items-center space-x-2">
              <p>Not Registered ?</p>
              {/* <button  className="text-blue-500 underline">Sign Up</button> */}
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="  w-20 px-2">
                  sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default LoginForSignUp;
