import { ShareContext } from '@/ShareProvider/ShareProvider';
import Link from 'next/link';
import React, { useContext } from 'react';
import CareerTables from './CareerTables';

const CareerTable = () => {
    const { userInformation } = useContext(ShareContext);
    console.log(userInformation)
    return (
        <div className='px-[20px] md:px-[52px]'>
            
           <div className='my-6'>
           <div className='text-center bg-[#340110] text-white py-2 text-xl font-semibold'>
                <h1>License Details</h1>
            </div>
            <div>

                {
                    userInformation?.map(userData => <CareerTables key={userData._id} userData={userData}></CareerTables>)
                }
            </div>
           </div>
        </div>
    );
};

export default CareerTable;