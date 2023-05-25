import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import LicenseActivitie from './LicenseActivitie';

const LicenseActivities = () => {
    const { userInformation } = useContext(ShareContext);
    return (
        <div className='px-[20px] md:px-[52px] pb-14'>

            <div className='text-center w-1/2 ms-auto bg-[#840a2e] text-white py-2 text-xl font-semibold'>
                <h1>License Activities</h1>
            </div>
            <div className=' p-4 bg-[#e5dede]'>
                {
                    userInformation?.map(informationData => <LicenseActivitie key={informationData._id} informationData={informationData}></LicenseActivitie>)
                }
            </div>
        </div>
    );
};

export default LicenseActivities;