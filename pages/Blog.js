import BlogBanner from '@/Components/BlogPage/BlogBanner/BlogBanner';
import BlogCard from '@/Components/BlogPage/BlogCard/BlogCard';
import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const Blog = () => {
    return (
        <div>
            <BlogBanner></BlogBanner>
            <BlogCard></BlogCard>
        </div>
    );
};

export default PrivateRoute(Blog);