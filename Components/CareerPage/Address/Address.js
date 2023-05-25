import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import AddressData from './AddressData';

const Address = () => {
    const{userAddress}=useContext(ShareContext)
    return (
        <div className='px-[20px] md:px-[52px]'>

            <div className='text-center w-1/2 ms-auto bg-[#840a2e] text-white py-2 text-xl font-semibold'>
                <h1>Address</h1>
            </div>
  <div>
    {
        userAddress?.map(userAddress=><AddressData key={userAddress._id} userAddress={userAddress}></AddressData>)
    }
  </div>
        </div>
    );
};

export default Address;