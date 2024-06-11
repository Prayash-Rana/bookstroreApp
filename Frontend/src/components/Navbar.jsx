import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegMoon } from "react-icons/fa6";
import { CiLight } from "react-icons/ci";
import LogIn from "./LogIn";



const Navbar = () => {
  const [sticky,setSticky] = useState(false);
  
  const [theme,setTheme] = useState("light");

  const element = document.documentElement;

  useEffect(()=> {
    if(theme === 'dark'){
      element.classList.add('dark');
      localStorage.setItem('theme','dark');
      document.body.classList.add('dark')
    }
    else{
      element.classList.remove('dark');
      localStorage.setItem('theme','light');
      document.body.classList.remove('dark')
    }
  },[theme])

  useEffect(()=>{
    const handlesticky= () => {
      if(window.scrollY > 0){
        setSticky(true);
      }
      else{
        setSticky(false);
      }
    }

    window.addEventListener('scroll',handlesticky);
  },[])
  const navItems = (
    <>
      <li>
        <a  href="/">Home</a>
      </li>

      <li>
        <a href="/courses">Course</a>
      </li>

      <li>
        <a href="/contact">Contact</a>
      </li>

      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <>
      <div className={` dark:bg-slate-900 dark:text-white  max-w-screen-2xl mx-auto md:px-20 px-4 container fixed top-0 left-0 z-50 ${(sticky)?"bg-base-200 duration-300 shadow-md transition-all ease-in-out" : ""}`}>
        <div className="navbar flex justify-between">
          <div className="">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 d"
              >
                {navItems}
              </ul>
            </div>

            <a className="cursor-pointer font-bold text-2xl">BookStore</a>
          </div>

          <div className=" space-x-2   hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>

            <div className="flex items-center relative  ">
              <input
                type="text"
                placeholder="searchbox"
                className="mx-2 rounded-lg px-4 border-2 outline-none"
              />
              <CiSearch className="absolute right-6 text-xl" />
            </div>

            <div>
              {(theme === 'dark')?  <FaRegMoon onClick={()=>setTheme('light')} className="text-xl "/> : <CiLight onClick={()=> setTheme('dark')} className="text- 2xl" />
              }
           
            </div>

            <div>
              <button onClick={()=> document.getElementById("my_modal_3").showModal()}  className="px-2  py-1 rounded-lg dark:bg-blue-900 dark:text-white bg-gray-300 hover:bg-gray-400 duration-300">Log in</button>

              <LogIn />
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
