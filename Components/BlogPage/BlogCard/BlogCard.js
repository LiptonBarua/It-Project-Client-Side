import React from 'react';
import BlogData from './BlogData';

const BlogCard = () => {
    const blogCard=[
        {
            id: '1',
            img: 'https://c1.wallpaperflare.com/preview/707/281/168/caucasian-female-woman-office.jpg',
            title: 'Lorem ipsum dolor',
            details: 'Environmentalists, corporate executives, academics policy and the cost curves.'
        },
        {
            id: '2',
            img: 'https://c1.wallpaperflare.com/preview/707/281/168/caucasian-female-woman-office.jpg',
            title: 'Lorem ipsum dolor',
            details: 'Environmentalists, corporate executives, academics policy and the cost curves.'
        },
        {
            id: '3',
            img: 'https://c1.wallpaperflare.com/preview/707/281/168/caucasian-female-woman-office.jpg',
            title: 'Lorem ipsum dolor',
            details: 'Environmentalists, corporate executives, academics policy and the cost curves.'
        },
        {
            id: '4',
            img: 'https://c1.wallpaperflare.com/preview/707/281/168/caucasian-female-woman-office.jpg',
            title: 'Lorem ipsum dolor',
            details: 'Environmentalists, corporate executives, academics policy and the cost curves.'
        },
        {
            id: '5',
            img: 'https://c1.wallpaperflare.com/preview/707/281/168/caucasian-female-woman-office.jpg',
            title: 'Lorem ipsum dolor',
            details: 'Environmentalists, corporate executives, academics policy and the cost curves.'
        },
        {
            id: '6',
            img: 'https://c1.wallpaperflare.com/preview/707/281/168/caucasian-female-woman-office.jpg',
            title: 'Lorem ipsum dolor',
            details: 'Environmentalists, corporate executives, academics policy and the cost curves.'
        },
    ]
    return (
        <div className='px-[20px] md:px-[36px] py-24 bg-[#212121]'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                {
                    blogCard.map(blog=><BlogData key={blog.id} blog={blog}></BlogData>)
                }
            </div>
        </div>
    );
};

export default BlogCard;