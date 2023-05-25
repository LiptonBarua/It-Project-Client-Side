import { ShareContext } from '@/ShareProvider/ShareProvider';
import Link from 'next/link';
import React, { useContext } from 'react';
import CareerTables from './CareerTables';

const CareerTable = () => {
    const { userInformation } = useContext(ShareContext);
    console.log(userInformation)
    return (
        <div className='px-[20px] md:px-[52px]'>
            
           <div className='mb-6'>
        
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