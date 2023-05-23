import CareerBanner from '@/Components/CareerPage/CareerPage/CareerBanner';
import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const Career = () => {
    return (
        <div>
            <CareerBanner></CareerBanner>
        </div>
    );
};

export default PrivateRoute(Career);