import React from 'react';

const AboutBanner = () => {
    return (
        <div className="banner bg-[#c4d1c4] flex md:pl-[65px] bg-white" style={{ height: `600px` }}>
            <div className="flex items-center px-8 md:px-12 lg:w-1/2">
                <div>
                    <h2 className="text-3xl font-bold text-black md:text-6xl">ABOUT <span className='text-[#C60017]'>US</span></h2>
                    <h1 className='text-3xl'>The story of who we are</h1>


                </div>
            </div>
            <div className="hidden lg:block lg:w-1/2" style={{ clipPath: `circle(77% at 78% 39%)` }}>
                <div className="h-full object-cover" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1201992144/photo/industry-4-0-fourth-industrial-revolution-digitalization-of-modern-business-process-and-using.jpg?s=612x612&w=0&k=20&c=Ygi6rLhKDcT-sPPI_LW3gmefUhj4G_LbBIQsNsWD85c=)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
                    <div className="h-full bg-black opacity-25"></div>
                </div>

            </div>
        </div>
    );
};

export default AboutBanner;