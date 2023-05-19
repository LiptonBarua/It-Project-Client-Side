import React from 'react';

const AboutSolution = () => {
    const aboutSolution=[
        {
            _id: '1',
            number: '500+',
            title: 'We have successfully completed more than 500 projects'
        },
        {
            _id: '2',
            number: '100+',
            title: 'We have a team of more than 100 certified professionals'
        },
        {
            _id: '3',
            number: '300+',
            title: 'We have served more than 300 clients across the UAE'
        },
    ]
    return (
        <div className='px-[20px] md:px-[80px] py-24' style={{ backgroundImage: `url(https://www.itsolutions.ae/images/about-bg.png)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='text-white'>
                    <h1 className='text-3xl mt-8 md:text-6xl font-bold'>We understand what you need and we design the solutions</h1>
                    <p className='mt-6 text-justify'>IT Solutions, as our name itself reveals, offers IT infrastructure services to businesses in the UAE. We now have a world of technological advancement that forces companies to bring the changes that help them run their business in a better way. IT Solutions acts as a trusted service partner for different industries offering high-quality IT infrastructure services. We provide telecom solutions, telecom products, IT solutions, IT support, website solutions, ELV and security, audio-visual solutions, hardware services, software solutions.</p>
                    <p className='text-justify mt-4'>Our expert team of certified professionals with extensive industry experience brings high-quality service to our clients. We focus on building a long-term service relationship to help clients achieve their business goals. Our passion for serving brought us a clientele of satisfied customers across UAE, from small-scale companies to large business organizations.</p>
                </div>
                <div className='mt-5 md:mt-0 md:ml-32'>
                    <img className='w-80' src='https://www.itsolutions.ae/images/about-img.png' alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16'>
                {
                    aboutSolution.map((about,i)=><div className='text-white'>
                        <h1 className='text-5xl mb-3 font-bold'>{about.number}</h1>
                        <p className='text-2xl'>{about.title}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AboutSolution;