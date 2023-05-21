import React from 'react';

const AboutQuality = () => {
    const aboutQuality=[
        {
            id: '1',
            name: 'Join our team of certified experts',
            title: 'If you are looking for an opportunity to exhibit your skills to help businesses in the UAE and follow your dream by learning further by being in a group of experts, you are welcome to join us.',
            button: 'Apply Now'
        },
        {
            id: '2',
            name: 'Get quality technical support 24x7 a week',
            title: 'We offer extensive technical support for companies in the UAE round the clock. Our team of expert certified professionals with immense experience can handle requests for services with quality solutions.',
            button: 'Get a Quote'
        },
    ]
    return (
   <div className='bg-[#212121]'>
         <div className='grid grid-cols-1 md:grid-cols-2 px-[20px] md:px-[80px] gap-8 py-24'>
            {
                aboutQuality?.map(aboutQualite=><div className='h-[500px] md:h-[420px] relative'>
                                <h1 className='p-5svg'><svg id="Layer_5" enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m51.292 25.3c-.85-2.289-2.914-3.902-5.292-4.231v-6.365l15.876-5.67-15.69-6.034h-2.186v18.095c-2.417.406-4.43 2.121-5.186 4.524l-5.032 16.011c-.315-1.052-.963-1.989-1.876-2.641l-4.787-3.419 1.683-7.57h2.876c3.046 0 5.787-1.691 7.152-4.415l3.804-7.587c.24-.477.366-1.012.366-1.546 0-1.904-1.548-3.452-3.485-3.452-1.315 0-2.499.731-3.087 1.908l-3.217 6.434c-.511 1.023-1.539 1.658-2.683 1.658h-.638c1.3-1.272 2.11-3.042 2.11-5 0-3.86-3.14-7-7-7-.117 0-.23.012-.346.018-.828-2.373-3.07-4.018-5.654-4.018-.215 0-.431.014-.654.042-1.136-2.45-3.585-4.042-6.346-4.042-3.86 0-7 3.14-7 7 0 .034.008.067.008.1-2.283.462-4.008 2.483-4.008 4.9 0 2.757 2.243 5 5 5h12.295c.344 1.152.977 2.18 1.816 3h-.522c-3.792 0-7.381 2.006-9.368 5.235l-4.725 7.678c-.325.525-.496 1.13-.496 1.749 0 .476.104.928.285 1.338h-4.285v14h12.666l-1.545 6.381c-.08.333-.121.674-.121 1.014v.292c0 2.378 1.935 4.313 4.312 4.313 2.027 0 3.802-1.44 4.22-3.424l3.265-15.509 2.203 1.468v9.465c0 2.206 1.794 4 4 4h33v-2.18zm-5.292-20.229 10.124 3.894-10.124 3.616zm-5.278 21.148c.606-1.926 2.368-3.219 4.386-3.219 1.912 0 3.644 1.204 4.31 2.997l3.834 10.321c-.335.933-1.029 2.682-1.755 2.682-.899 0-1.709-2.491-2.301-4.309-.91-2.798-1.851-5.691-4.203-5.691-2.351 0-3.292 2.893-4.201 5.691-.591 1.818-1.4 4.309-2.298 4.309-.394 0-.84-.539-1.3-1.555zm-34.722-10.219c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3h2c0-2.411-1.716-4.43-3.992-4.898 0-.034-.008-.068-.008-.102 0-2.757 2.243-5 5-5 2.189 0 4.105 1.402 4.766 3.489l.288.91.922-.246c.393-.104.718-.153 1.024-.153 1.623 0 3.038.977 3.66 2.411-2.711.966-4.66 3.551-4.66 6.589zm14 0c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5zm-3.954 21h-4.224l4.948-7.776c.243-.382.573-.688.955-.898zm.336 2-.04.081c-1.209 2.417-3.639 3.919-6.342 3.919s-5.133-1.502-6.341-3.919l-.041-.081h4.72.378zm-13.382 2.682c1.702 2.075 4.232 3.318 7 3.318s5.298-1.243 7-3.318v7.318h-14zm25 13.318v-9.465c0-.67-.333-1.292-.891-1.664l-2.806-1.871h-2.114l-3.613 17.164c-.225 1.064-1.177 1.836-2.264 1.836-1.274 0-2.312-1.038-2.312-2.312v-.292c0-.183.022-.366.065-.544l1.659-6.852h3.276v-14h-.917l2.129-11h-1.212c-1.596 0-3.061.804-3.917 2.15l-5.237 8.23c-.248.389-.67.62-1.13.62h-.378c-.737 0-1.338-.601-1.338-1.338 0-.248.068-.49.198-.701l4.725-7.678c1.626-2.642 4.563-4.283 7.665-4.283h10.94c1.906 0 3.62-1.059 4.472-2.764l3.217-6.434c.247-.494.745-.802 1.331-.802.8 0 1.452.651 1.452 1.452 0 .225-.053.45-.154.65l-3.804 7.587c-1.023 2.042-3.079 3.311-l5.363 3.311h-4.481l-2.318 10.429 5.864 4.188c.786.562 1.256 1.475 1.256 2.442v11.941c0 1.103-.897 2-2 2s-2-.897-2-2zm5.444 2c.344-.591.556-1.268.556-2v-7.392l2.406-7.655c.513.582 1.188 1.047 2.088 1.047 2.351 0 3.292-2.893 4.201-5.691.591-1.818 1.4-4.309 2.298-4.309.899 0 1.709 2.491 2.301 4.309.91 2.798 1.85 5.691 4.203 5.691 1.278 0 2.147-.915 2.756-1.986l6.68 17.986z"></path><path d="m56 53h2v2h-2z"></path><path d="m52 53h2v2h-2z"></path><path d="m48 53h2v2h-2z"></path></svg></h1>
                    <h1 className='text-3xl font-bold text-white'>{aboutQualite.name}</h1>
                    <h2 className='text-white mt-5 text-justify'>{aboutQualite.title}</h2>
                    <button className="bg-white absolute bottom-0 text-black active:bg-white hover:bg-[#C40017] hover:text-white mt-10 font-bold text-sm px-8 py-4 mb-10 md:mb-0 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" style={{transitionDuration: `2s`}}>{aboutQualite.button}</button>

                </div>)
            }
        </div>
   </div>
    );
};

export default AboutQuality;