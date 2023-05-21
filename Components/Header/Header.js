import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiMenu} from "react-icons/hi";

const Header = () => {
  const [navbar, setNavbar] = useState(true);
  const [drop, setDrop] = useState(false)


  const navitem = (
    <>
      <li onClick={() => setNavbar(!navbar)}><Link href='/' className='relative before:absolute before:-bottom-1 before:h-0.5 before:w-20 before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{transitionDuration: `6s`}}>Home</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/About' className='relative before:absolute before:-bottom-1 before:h-0.5 before:w-20 before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{transitionDuration: `6s`}}>About Us</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Blog' className='relative before:absolute before:-bottom-1 before:h-0.5 before:w-20 before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{transitionDuration: `6s`}}>Blogs</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Career' className='relative before:absolute before:-bottom-1 before:h-0.5 before:w-20 before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{transitionDuration: `6s`}}>Career</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Contact' className='relative before:absolute before:-bottom-1 before:h-0.5 before:w-20 before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{transitionDuration: `6s`}}>Contact Us</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Login' className='relative before:absolute before:-bottom-1 before:h-0.5 before:w-20 before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{transitionDuration: `6s`}}>Login</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Register' className='relative before:absolute before:-bottom-1 before:h-0.5 before:w-20 before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{transitionDuration: `6s`}}>Register</Link></li>
    </>
  )
  return (
   <div className='fixed bg-gradient-to-r from-[#f5f0ef] via-[#f5f0ef] to-[#f5f0ef]  dark:bg-dark bg-opacity-30 shadow-md  z-50 w-full bg-white py-6 px-[20px] md:px-[80px]  right-0 top-0'>
     <div className=" flex justify-between">
      <div className="navbar-start">

        <Link href='/' className=" text-orange-500 font-bold"> <img className='w-[160px] md:w-80' src="https://www.itsolutions.ae/images/itsolutionslogo.svg" alt="" /></Link>
      </div>

      <div className='flex'>
        <div className='hidden md:block mr-10'>
          <h1>Call Us</h1>
          <h1 className='font-semibold'>+971 52688 7111</h1>
        </div>
        <div className="dropdown">
          <label onClick={() => { setDrop(!drop); setNavbar(!navbar) }} tabIndex={0} className="">
            <div className='flex items-center'>
              <h1 className='mr-2 font-bold text-black'>menu</h1>
              {
                navbar ? <HiMenu className="text-[#C60017] w-8 h-8 text-bold"></HiMenu>: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

              }
            </div>

          </label>
          {
            drop && (
              
              <ul onClick={() => setDrop(!drop)} tabIndex={0} className="flex menu menu-compact dropdown-content mt-8 md:mt-12 px-2 pb-3 shadow bg-gradient-to-r from-[#f5f0ef] via-[#f5f0ef] to-[#f5f0ef] w-52">
                {navitem}
              </ul>
            )
          }
        </div>
      </div>
    </div>
   </div>
  );
};

export default Header;




