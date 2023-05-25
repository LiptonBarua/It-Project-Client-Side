import Link from 'next/link';
import React from 'react';

const CareerProfessonal = () => {
    return (
        <div className='px-[20px] md:px-[52px]'>
        <div className='px-[20px] md:px-[52px] text-center lg:flex lg:justify-between items-center py-8 text-white' style={{backgroundImage: `url(https://i.ibb.co/g6SqxrJ/Copy-of-Black-and-Red-Gradient-Professional-Linked-In-Banner.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}>
            <h1 className='text-3xl font-semibold'>Professional License</h1>
            <Link href='/AddInformation' ><button className="text-white border mt-5 md:mt-0   border-white hover:bg-[#f8f1f1] hover:text-[#11113d] active:bg-white font-bold uppercase text-sm px-8 py-4 rounded-full outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  type="button" style={{ transitionDuration: `2s` }}>Add Information</button></Link>
        </div>

        <div className='text-center w-1/2 ms-auto bg-[#840a2e] text-white py-2 text-xl font-semibold'>
                <h1>License Details</h1>
            </div>
</div>
    );
};

export default CareerProfessonal;