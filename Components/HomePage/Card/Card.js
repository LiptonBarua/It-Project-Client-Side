import React from 'react';
import CardData from './CardData';

const Card = () => {
    const cards=[
        {
            _id: '1',
            img: 'https://www.itsolutions.ae/images/tel-sol.jpg',
            title: 'Telecom Solutions'
        },  
        {
            _id: '2',
            img: 'https://www.itsolutions.ae/images/it-sol.jpg',
            title: 'IT Solutions'
        },  
        {
            _id: '3',
            img: 'https://www.itsolutions.ae/images/elv1.png',
            title: 'ELV Security'
        },  
        {
            _id: '4',
            img: 'https://www.itsolutions.ae/images/audio-visual-2.png',
            title: 'Audio Visual'
        },  
        {
            _id: '5',
            img: 'https://www.itsolutions.ae/images/tlp1.png',
            title: 'Telecom Products'
        },  
        {
            _id: '6',
            img: 'https://www.itsolutions.ae/images/ws.png',
            title: 'Website Solution'
        },  
    ];
    return (
        <div className='px-[20px] md:px-[40px] bg-gradient-to-r from-[#5D151D] to-[#C40017]'>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-20'>
                {
                    cards.map(card=><CardData key={card._id} card={card}></CardData>)
                }
            </div>
        </div>
    );
};

export default Card;