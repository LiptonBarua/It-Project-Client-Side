import AddInformationPage from '@/Components/AddInformation/AddInformationPage';
import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const AddInformation = () => {
    return (
        <div>
            <AddInformationPage></AddInformationPage>
        </div>
    );
};

export default PrivateRoute(AddInformation);