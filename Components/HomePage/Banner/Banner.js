import React from 'react';

const Banner = () => {
    return (
        <div className="banner pt-24  flex md:pl-[65px]" style={{height:`600px`}}>
        <div className="flex items-center px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 className="text-3xl font-semibold text-black md:text-6xl">Stay ahead of your competition with our expert IT <span className='text-[#C60017]'>support</span></h2>

              
            </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{clipPath:`circle(77% at 78% 39%)`}}>
            <div className="h-full object-cover" style={{backgroundImage: `url(https://media.istockphoto.com/id/622206824/photo/business-woman-working-at-a-cafe.jpg?s=612x612&w=0&k=20&c=vMeGPyCTQDQrJ5u0jkptEGMffLb9tbkRlH-qcklsFqg=)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`}}>
                <div className="h-full bg-black opacity-25"></div>
            </div>
        
        </div>
    </div>
    );
};

export default Banner;