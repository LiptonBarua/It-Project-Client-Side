
import CareerInformation from '@/Components/CareerPage/CareerInformation/CareerInformation';
import CareerBanner from '@/Components/CareerPage/CareerPage/CareerBanner';
import CareerProfessonal from '@/Components/CareerPage/CareerProfessonal/CareerProfessonal';
import CareerTable from '@/Components/CareerPage/CareerTable/CareerTable';
import LicenseMember from '@/Components/CareerPage/LicenseMember/LicenseMember';
import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const Career = () => {
    return (
        <div>
            <CareerBanner></CareerBanner>
            <div className='px-[20px] md:px-[52px]'>
            <CareerInformation></CareerInformation>
            </div>
            <CareerProfessonal></CareerProfessonal>
            <CareerTable></CareerTable>
            <LicenseMember></LicenseMember>
        </div>
    );
};

export default PrivateRoute(Career);