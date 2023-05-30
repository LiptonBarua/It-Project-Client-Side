import Link from 'next/link';
import React from 'react';

const Solutions = () => {
    return (
        <div className="px-[20px] md:px-[40px] hero min-h-screen" style={{ backgroundImage: `url(https://www.itsolutions.ae/images/about-bg.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover`, flexWrap: `wrap-reverse` }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
                <div>
                    <h1 className='text-3xl md:text-6xl font-bold'>The solutions we design The solutions you need</h1>
                    <Link href='/About'><button className="bg-white text-black active:bg-white hover:bg-black hover:text-white mt-10 font-bold text-sm px-8 py-4 mb-10 md:mb-0 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{transitionDuration: `2s`}}>Explore More</button></Link>
                </div>
                <div className='md:ml-5'>
                    <p className='text-justify mb-3'>IT Solutions acts as a trusted service partner for different industries offering high-quality IT infrastructure services. We provide telecom solutions, telecom products, IT solutions, IT support, website solutions, ELV and security, audio-visual solutions, hardware services, software solutions.</p>

                    <p className='text-justify'>Our expert team of certified professionals with extensive industry experience brings high-quality service to our clients. We focus on building a long-term service relationship to help clients achieve their business goals. Our passion for serving brought us a clientele of satisfied customers across UAE, from small-scale companies to large business organizations.</p>
                </div>
            </div>

        </div>
    );
};

export default Solutions;