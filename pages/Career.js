
import Address from '@/Components/CareerPage/Address/Address';
import CareerInformation from '@/Components/CareerPage/CareerInformation/CareerInformation';
import CareerBanner from '@/Components/CareerPage/CareerPage/CareerBanner';
import CareerProfessonal from '@/Components/CareerPage/CareerProfessonal/CareerProfessonal';
import CareerTable from '@/Components/CareerPage/CareerTable/CareerTable';
import LicenseActivities from '@/Components/CareerPage/LicenseActivities/LicenseActivities';
import LicenseMember from '@/Components/CareerPage/LicenseMember/LicenseMember';
import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const Career = () => {
    return (
        <div className='py-16'>
            {/* <CareerBanner></CareerBanner> */}
            <div className='px-[20px] md:px-[52px]'>
            <CareerInformation></CareerInformation>
            </div>
            <CareerProfessonal></CareerProfessonal>
            <CareerTable></CareerTable>
            <LicenseMember></LicenseMember>
           <LicenseActivities></LicenseActivities>
           <Address></Address>
        </div>
    );
};

export default PrivateRoute(Career);