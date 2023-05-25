import React from 'react';

const LicenseActivitie = ({informationData}) => {
    const{information}=informationData;


    return (
        <div>
            <h1 className='text-black'>{information}</h1>
        </div>
    );
};

export default LicenseActivitie;