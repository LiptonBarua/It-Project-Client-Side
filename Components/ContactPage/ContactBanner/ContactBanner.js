import React from 'react';

const ContactBanner = () => {
    return (
        <div className="banner bg-[#c4d1c4] pt-24 flex md:pl-[65px] bg-white" style={{ height: `600px` }}>
        <div className="flex items-center px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 className="text-3xl font-bold text-black md:text-6xl">Contact <span className='text-[#C60017]'>Us</span></h2>
                <h1 className='text-3xl'>We are just a call or message away</h1>


            </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: `circle(77% at 78% 39%)` }}>
            <div className="h-full object-cover" style={{ backgroundImage: `url(https://www.verifone.com/sites/default/files/styles/hero_primary_m/public/DK_CustomerserviceCategory_Hero_3200x1800_1.jpg?itok=eN32zahF)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
                <div className="h-full bg-black opacity-25"></div>
            </div>

        </div>
    </div>
    );
};

export default ContactBanner;