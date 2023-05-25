import { ShareContext } from '@/ShareProvider/ShareProvider';
import Link from 'next/link';
import React, { useContext } from 'react';
import CareerTables from './CareerTables';
import { toast } from 'react-toastify';

const CareerTable = () => {
    const { userPersonalInformation } = useContext(ShareContext);

    const handleLicenceDetailsDelete=(id)=>{
        fetch(`http://localhost:5000/personalInformation/${id}`, {
            method: 'DELETE'
        })
     .then(res=>res.json())
     .then(data=>{
        if(data.deletedCount > 0){
            toast.success(` deleted Successfully`)
        }
     })
     .catch(error=>{
        toast.error('deleted not successfully')
     })
    }
    return (
        <div className='px-[20px] md:px-[52px]'>
            
           <div className='mb-6'>
        
            <div>

                {
                    userPersonalInformation?.map(userData => <CareerTables key={userData._id} userData={userData} handleLicenceDetailsDelete={handleLicenceDetailsDelete}></CareerTables>)
                }
            </div>
           </div>
        </div>
    );
};

export default CareerTable;