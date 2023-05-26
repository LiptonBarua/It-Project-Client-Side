import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import AddressData from './AddressData';
import { toast } from 'react-toastify';

const Address = () => {
    const { userAddress, addressRefetch } = useContext(ShareContext);

    const handleAddressDelete=(id)=>{
        fetch(`https://it-project-server-side.vercel.app/address/${id}`, {
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount > 0){
                toast.success('address is delete Successfully')
                addressRefetch();
            }
        })
        .catch(error=>{
            toast.error('address is not delete Successfully')
        })
    }
    
    return (
        <div className='px-[20px] md:px-[52px]'>

            <div className='text-center w-1/2 ms-auto bg-[#840a2e] text-white py-2 text-xl font-semibold'>
                <h1>Address</h1>
            </div>
            <div>
                {
                    userAddress?.map(userAddress => <AddressData key={userAddress._id} userAddress={userAddress} handleAddressDelete={handleAddressDelete}></AddressData>)
                }
            </div>
        </div>
    );
};

export default Address;