import { AuthContext } from '@/AuthProvider/AuthProvider';
import { ShareContext } from '@/ShareProvider/ShareProvider';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { HiMenu } from "react-icons/hi";

const Header = () => {
  const [navbar, setNavbar] = useState(true);
  const [drop, setDrop] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const { userProfile } = useContext(ShareContext)

 
  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(() => { })
  }

  const navitem = (
    <>
      {
        user?.email ? <li onClick={() => setNavbar(!navbar)}>
        <Link href='/Profile'>
        <div className="border-b-2 border-gray-400 mb-3 w-full flex items-center p-2 space-x-4">
            <img src={userProfile[0]?.image} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-lg font-semibold text-[#340110]">{userProfile[0]?.firstName} {userProfile[0]?.lastName}</h2>
              <span className="flex items-center space-x-1">
                <a rel="noopener noreferrer" href="#" className="text-xs text-[#340110] hover:underline ">View profile</a>
              </span>
            </div>
          </div>
        </Link>
        </li>
          : ''
      }
  
      <li onClick={() => setNavbar(!navbar)}><Link href='/' className='text-[#340110] font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{ transitionDuration: `6s` }}>Home</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/About' className='text-[#340110] font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{ transitionDuration: `6s` }}>About Us</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Blog' className='text-[#340110] font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{ transitionDuration: `6s` }}>Blog</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Career' className='text-[#340110] font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{ transitionDuration: `6s` }}>My Information</Link></li>
      <li onClick={() => setNavbar(!navbar)}><Link href='/Contact' className='text-[#340110] font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{ transitionDuration: `6s` }}>Contact Us</Link></li>

      {
        user?.email ? <li onClick={()=>{handleLogOut(); setNavbar(!navbar)}}><Link href='' className='text-[#340110] font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{ transitionDuration: `6s` }}>Log Out</Link></li>
          :
          <>
            <li onClick={() => setNavbar(!navbar)}><Link href='/Login' className='text-[#340110] font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{ transitionDuration: `6s` }}>Login</Link></li>
            <li onClick={() => setNavbar(!navbar)}><Link href='/Register' className='text-[#340110] font-bold relative before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-[#C40017] before:transition hover:before:scale-100' style={{ transitionDuration: `6s` }}>Register</Link></li>
          </>
      }

    </>
  )
  return (
    <div className='fixed bg-gradient-to-r from-[#f5f0ef] via-[#f5f0ef] to-[#f5f0ef]  dark:bg-dark bg-opacity-30 shadow-md  z-50 w-full bg-white py-6 px-[20px] md:px-[80px]  right-0 top-0'>
      <div className=" flex justify-between">
        <div className="navbar-start">
         <Link href='/'>
         <div>
          <h1 className='font-bold text-xl lg:text-3xl text-[#340110]'>NOUR ALKHOR</h1>
          <p className='text-sm md:text-lg text-[#340110]'>Information Technology Co.</p>
          </div>
         </Link>

          {/* <Link href='/' className=" text-orange-500 font-bold"> <img className='w-[160px] md:w-80' src="https://www.itsolutions.ae/images/itsolutionslogo.svg" alt="" /></Link> */}
        </div>

        <div className='flex'>
          <div className='hidden md:block mr-10'>
            <h1 className='text-[#340110]'>Call Us</h1>
            <h1 className='font-semibold text-[#340110]text-[#340110] font-bold '>971523496967</h1>
          </div>
          <div className="dropdown">
            <label onClick={() => { setDrop(!drop); setNavbar(!navbar) }} tabIndex={0} className="">
              <div onClick={()=>setNavbar(!navbar)} className='flex items-center'>
                <h1 className='mr-2 font-bold text-black'>menu</h1>

                
                {
                  navbar ? <HiMenu onClick={() => setDrop(!drop)} className="text-[#C60017] w-8 h-8 text-bold"></HiMenu> : <svg onClick={() => setDrop(!drop)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-bold text-[#340110]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>

                }
              </div>

            </label>
          
            {
              drop && (
                <ul onClick={() => setDrop(!drop)} tabIndex={0} className="flex menu menu-compact -right-10 md:-right-24 dropdown-content mt-10 md:mt-14 pb-5 shadow bg-gradient-to-r from-[#f5f0ef] via-[#f5f0ef] to-[#f5f0ef] w-60">
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




