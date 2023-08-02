import { ShareContext } from '@/ShareProvider/ShareProvider';
import Link from 'next/link';
import React, { useContext } from 'react';

const Footer = () => {
    const { userProfile } = useContext(ShareContext)
    const navitem = (
        <>
            <li><Link href='/' className=' hover:text-[black]'>Home</Link></li>
            <li><Link href='/About' className=' hover:text-[black]'>About Us</Link></li>
            <li><Link href='/Blog' className=' hover:text-[black]'>Blog</Link></li>
            <li><Link href='/Career' className=' hover:text-[black]'>Information</Link></li>
            <li><Link href='/Contact' className=' hover:text-[black]'>Contact Us</Link></li>
            <li><Link href='/Profile' className=' hover:text-[black]'>My Profile</Link></li>
        </>
    )

    return (
        <div className=" px-[20px] md:px-[40px] bg-[#340110]" style={{ backgroundImage: `url(https://www.itsolutions.ae/images/footer-bg.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
            <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4 items-center">
                <div className="sm:col-span-2">

                    <div className="mt-6 lg:max-w-sm">
                        <div>
                            <p className='text-3xl md:text-6xl  font-semibold text-white'>Join our team of expert professionals</p>
                            <button className="bg-white text-black active:bg-white hover:bg-[black] hover:text-white mt-10 font-bold text-sm px-8 py-4 mb-10 md:mb-0 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{ transitionDuration: `2s` }}>View Location</button>
                        </div>

                    </div>
                </div>
                <div className="space-y-2 text-sm">
                    <div className="flex items-center mt-1 space-x-3">
                        <a
                            href="/"
                            className="text-white hover:text-black transition-colors duration-300 hover:text-deep-purple-accent-400" style={{ transitionDuration: `1s` }}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-12">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                            </svg>

                        </a>
                        <a
                            href="/"
                            className="text-white hover:text-black transition-colors duration-300 hover:text-deep-purple-accent-400" style={{ transitionDuration: `1s` }}
                        >
                            <svg viewBox="0 0 30 30" fill="currentColor" className="h-16">
                                <circle cx="15" cy="15" r="4" />
                                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
                            </svg>
                        </a>
                        <a
                            href="/"
                            className="text-white hover:text-black transition-colors duration-300 hover:text-deep-purple-accent-400" style={{ transitionDuration: `1s` }}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-16">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <div>
                        <h1 className='font-bold text-2xl lg:text-3xl text-white'>NOUR ALKHOR</h1>
                        <p className='text-sm text-white'>Information Technology Co.</p>
                    </div>

                    <div className='flex my-3'>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white mr-3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg></a>

                        <p className=" text-sm text-white">Al Quasis, Coastal Plaza 218</p>
                    </div>
                    <div className='flex items-center'>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 3.75L18 6m0 0l2.25 2.25M18 6l2.25-2.25M18 6l-2.25 2.25m1.5 13.5c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" />
                        </svg>
                        </a>
                        <p className=" text-sm text-white">+97143968561</p>
                    </div>
                    <div className='flex items-center my-3'>
                        <a href=""><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white mr-3">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        </a>
                        <p className=" text-sm text-white">nnouralkhoritcom@gmail.com</p>
                    </div>

                    <div>
                        <ul className='grid grid-cols-3 text-white'>
                            {navitem}
                        </ul>
                    </div>

                </div>
            </div>
            <div className="text-center py-8">
                <p className="text-sm  text-white">
                    Copyright © 2021 itsolutions.ae | All Rights Reserved
                </p>

            </div>
        </div>
    );
};

export default Footer;