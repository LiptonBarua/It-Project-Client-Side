import React, { useContext, useEffect } from 'react';
import { HiOutlineBookOpen, HiOutlineMailOpen } from "react-icons/hi";
import { CgPhone } from "react-icons/cg";
import { ShareContext } from '@/ShareProvider/ShareProvider';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactCard = () => {
const{userProfile }=useContext(ShareContext)

useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200, 
      easing: 'ease-in-out',
    });
  }, []);
    return (
        <div className='px-[20px] md:px-[36px] py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div data-aos="fade-right" className='bg-[#C60017] hover:bg-black text-center p-6' style={{transitionDuration: `2s`}}>
                    <h1><HiOutlineBookOpen className=' mx-auto w-14 h-14 text-white hover:text-black'></HiOutlineBookOpen></h1>
                    <div className='text-white'>
                    <h2 className='text-2xl font-bold mb-3'>Address</h2>
                    <p className=" text-sm text-white">Al Quasis, Coastal Plaza 218</p>
                    </div>
                </div>
                <div data-aos="fade-left" className='bg-[#C60017] hover:bg-black text-center p-6' style={{transitionDuration: `2s`}}>
                    <h1><HiOutlineMailOpen className=' mx-auto w-14 h-14 text-white hover:text-black'></HiOutlineMailOpen></h1>
                    <div className='text-white'>
                    <h2 className='text-2xl font-bold mb-3'>Email</h2>
                    <p>nnouralkhoritcom@gmail.com</p>
                    </div>
                </div>
                <div data-aos="fade-right" className='bg-[#C60017] hover:bg-black text-center p-6' style={{transitionDuration: `2s`}}>
                    <h1><CgPhone className=' mx-auto w-14 h-14 text-white hover:text-black'></CgPhone></h1>
                    <div className='text-white'>
                    <h2 className='text-2xl font-bold mb-3'>Phone</h2>
                    <p>+97143968561</p>
               
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;