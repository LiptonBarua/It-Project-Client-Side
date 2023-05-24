import React from 'react';

const CareerInformation = () => {
    return (
        <div className='pt-24 mb-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
                <h1 className='text-[#43af2b] mx-auto md:mx-0 font-bold'>COVERNMENT OF DUBAI</h1>
                <img className='my-5 md:my-0 w-28 mx-auto' src="https://i.ibb.co/T0bVqZc/qr-code-scanner-removebg-preview.png" alt="" />
                <div className='mx-auto md:mx-0 md:ms-auto text-[#340110] '>
                    <h1 className='text-4xl font-bold'>DUBAI</h1>
                    <p>Economy and Tourism</p>
                </div>
            </div>
        </div>
    );
};

export default CareerInformation;