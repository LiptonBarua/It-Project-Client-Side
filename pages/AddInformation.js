
import AddAddress from '@/Components/AddInformation/AddAddress/AddAddress';
import AddInformationPage from '@/Components/AddInformation/AddInformationPage/AddInformationPage';
import AddLicenseActivitesPage from '@/Components/AddInformation/AddLicenseActivitesPage/AddLicenseActivitesPage';
import AddLicenseMemberPage from '@/Components/AddInformation/AddLicenseMemberPage/AddLicenseMemberPage';
import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const AddInformation = () => {

    return (
        <div className='px-[20px] lg:px-0'>
            <AddInformationPage></AddInformationPage>
            <AddLicenseMemberPage></AddLicenseMemberPage>
            <AddLicenseActivitesPage></AddLicenseActivitesPage>
            <AddAddress></AddAddress>
        </div>
    );
};

export default PrivateRoute(AddInformation);