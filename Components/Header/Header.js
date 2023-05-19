import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const Header = () => {
  const [navbar, setNavbar] = useState(true);
  const [drop, setDrop] = useState(false)


  const navitem = (
    <>
      <li onClick={() => setNavbar(!navbar)}><Link href='/' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Home</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/About' className='hover:underline underline-offset-4 decoration-2 decoration-white'>About Us</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Blogs</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Career</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/' className='hover:underline underline-offset-4 decoration-2 decoration-white'>Contact Us</Link></li>
    </>
  )
  return (
   <div className='fixed bg-gradient-to-r from-[#f5f0ef] via-[#fcfafa] to-[#f9f8f77c]  dark:bg-dark bg-opacity-30 shadow-md  z-50 w-full bg-white py-6 px-[20px] md:px-[80px]  right-0 top-0'>
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
                navbar ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-[#CD373E] font-bold">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-bold">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>

              }
            </div>

          </label>
          {
            drop && (
              <ul onClick={() => setDrop(!drop)} tabIndex={0} className="flex menu menu-compact dropdown-content mt-6 md:mt-12 px-2 shadow bg-gradient-to-r from-[#f5f0ef] via-[#fcfafa] to-[#f9f8f77c] w-52">
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




