import React from 'react';

const BlogBanner = () => {
    return (
        <div className="banner  pt-24 bg-[#c4d1c4] flex md:pl-[65px] bg-white" style={{ height: `600px` }}>
        <div className="flex items-center px-8 md:px-12 lg:w-1/2">
            <div>
                <h2 className="text-3xl font-bold text-black md:text-6xl">BLOG</h2>
                <h1 className='text-3xl'>Read the best informative IT blogs</h1>


            </div>
        </div>
        <div className="hidden lg:block lg:w-1/2" style={{ clipPath: `circle(77% at 78% 39%)` }}>
            <div className="h-full object-cover" style={{ backgroundImage: `url(https://media.istockphoto.com/id/1086131484/photo/top-view-of-the-working-space-of-a-modern-business.jpg?s=170667a&w=0&k=20&c=sFu5hbdOQwlgT4JSC3a1hleAdFo1GeolTIqYxgQ8zao=)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
                <div className="h-full bg-black opacity-25"></div>
            </div>

        </div>
    </div>
    );
};

export default BlogBanner;