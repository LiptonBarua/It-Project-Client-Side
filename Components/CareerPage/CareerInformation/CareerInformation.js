import { QRCodeCanvas } from 'qrcode.react';
import React from 'react';

const CareerInformation = () => {
    return (
        <div className='pt-24 mb-4'>
            <div className='grid grid-cols-1 md:grid-cols-3 items-center'>
                <h1 className='text-[#111311] mx-auto md:mx-0 font-bold'>COVERNMENT OF DUBAI</h1>
                <QRCodeCanvas className='my-5 md:my-0 w-28 mx-auto' value="https://it-project-client-side.vercel.app/" />
                <div className='mx-auto md:mx-0 md:ms-auto text-[#340110] '>
                    <h1 className='text-4xl text-center lg:text-left font-bold'>DUBAI</h1>
                    <p>Economy and Tourism</p>
                </div>
            </div>
        </div>
    );
};

export default CareerInformation;