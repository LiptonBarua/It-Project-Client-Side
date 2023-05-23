import React, { useContext } from 'react';
import { HiOutlineBookOpen, HiOutlineMailOpen } from "react-icons/hi";
import { CgPhone } from "react-icons/cg";
import { ShareContext } from '@/ShareProvider/ShareProvider';


const ContactCard = () => {
const{userProfile }=useContext(ShareContext)

    return (
        <div className='px-[20px] md:px-[36px] py-24'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='bg-[#C60017] hover:bg-black text-center p-6' style={{transitionDuration: `2s`}}>
                    <h1><HiOutlineBookOpen className=' mx-auto w-14 h-14 text-white hover:text-black'></HiOutlineBookOpen></h1>
                    <div className='text-white'>
                    <h2 className='text-2xl font-bold mb-3'>Address</h2>
                    {
                        userProfile[0]?.location? <p>{userProfile[0]?.location}</p> : <p>Shop No. G16 & G17, Ground Floor, Platinum Tower, Cluster I,Jumeirah Lakes Tower, Dubai,UAE</p>
                    }
                    </div>
                </div>
                <div className='bg-[#C60017] hover:bg-black text-center p-6' style={{transitionDuration: `2s`}}>
                    <h1><HiOutlineMailOpen className=' mx-auto w-14 h-14 text-white hover:text-black'></HiOutlineMailOpen></h1>
                    <div className='text-white'>
                    <h2 className='text-2xl font-bold mb-3'>Email</h2>
                    {
                        userProfile[0]?.email? <p>{userProfile[0]?.email}</p> : <p>info@itsolutions.ae</p>
                    }
                    
                    </div>
                </div>
                <div className='bg-[#C60017] hover:bg-black text-center p-6' style={{transitionDuration: `2s`}}>
                    <h1><CgPhone className=' mx-auto w-14 h-14 text-white hover:text-black'></CgPhone></h1>
                    <div className='text-white'>
                    <h2 className='text-2xl font-bold mb-3'>Phone</h2>
                    {
                        userProfile[0]?.phone? <p>{userProfile[0]?.phone}</p> : <p>+8801852405780</p>
                    }
               
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;