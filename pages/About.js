import AboutBanner from '@/Components/AboutPage/AboutBanner/AboutBanner';
import AboutSolution from '@/Components/AboutPage/AboutSolution/AboutSolution';
import AboutQuality from '@/Components/AboutPage/AboutQuality/AboutQuality';
import React from 'react';
import AboutImage from '@/Components/AboutPage/AboutImage/AboutImage';
import AboutVision from '@/Components/AboutPage/AboutVision/AboutVision';

const About = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <AboutSolution></AboutSolution>
            <AboutQuality></AboutQuality>
            <AboutImage></AboutImage>
            <AboutVision></AboutVision>
        </div>
    );
};

export default About;