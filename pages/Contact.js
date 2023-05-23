import ContactBanner from '@/Components/ContactPage/ContactBanner/ContactBanner';
import ContactCard from '@/Components/ContactPage/ContactCard/ContactCard';
import ContactMap from '@/Components/ContactPage/ContactMap/ContactMap';
import Practice from '@/Components/ContactPage/Practice/Practice';
import { PrivateRoute } from '@/Components/PrivateRoute/PrivateRoute';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <ContactBanner></ContactBanner>
            <ContactCard></ContactCard>
            <ContactMap></ContactMap>
            <Practice></Practice>
        </div>
    );
};

export default PrivateRoute(Contact);