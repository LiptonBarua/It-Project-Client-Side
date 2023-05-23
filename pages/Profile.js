import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import ProfileEdit from '@/Components/ProfilePage/ProfileEdit/ProfileEdit';
import ProfilePage from '@/Components/ProfilePage/ProfilePage';
import React from 'react';

const Profile = () => {
    return (
        <div className='py-24'>
            <ProfileEdit></ProfileEdit>
            {/* <ProfilePage></ProfilePage> */}
        </div>
    );
};

export default PrivateRoute(Profile);