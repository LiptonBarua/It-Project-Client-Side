
import AddInformationPage from '@/Components/AddInformation/AddInformationPage/AddInformationPage';
import LicenseMemberPage from '@/Components/AddInformation/LicenseMemberPage/LicenseMemberPage';
import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const AddInformation = () => {
    return (
        <div>
            <AddInformationPage></AddInformationPage>
            <LicenseMemberPage></LicenseMemberPage>
        </div>
    );
};

export default PrivateRoute(AddInformation);