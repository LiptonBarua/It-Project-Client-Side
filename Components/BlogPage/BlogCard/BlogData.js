import Aos from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogData = ({ blog }) => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          offset: 200, 
          easing: 'ease-in-out',
        });
      }, []);


    return (
        <div data-aos="fade-right">


            <div className="bg-white h-[475px] relative group  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg">

                <div className=" overflow-hidden">

                    {/* <img src={img} alt="" className="w-full h-full object-cover object-center transition-all duration-300 transform group-hover:scale-110"/> */}
                    <img src={blog.img} alt="" className="w-full h-72 object-cover object-center transition-all duration-300 transform group-hover:scale-110" />


                </div>

                <div>
                    <div className="relative">
                        <div className="-mt-12">
                            <div className="translate-y-2 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                                <button className="bg-[#C40017] text-white active:bg-pink-600 font-bold uppercase text-base px-8 py-3 rounded shadow-md hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150" type="button">20 May 2023</button>
                            </div>
                        </div>
                    </div>

                   <div className='p-4'>
                   <h1 className='text-xl font-bold'>{blog.title}</h1>
                    <p className='mt-3'>{blog.details}</p>
                  
                   </div>
                   <Link href='' className="px-4 mb-10 bg-[#C40017] bg-clip-text text-transparent font-medium no-underline transform hover:scale-105">Read more</Link>
                </div>






            </div>
        </div>



    );
};

export default BlogData;



