import React from 'react';

const CardData = ({card}) => {
    return (
        <div className="w-full md:w-72" data-aos="fade-right">
        <figure><img className='h-60 w-full' src={card.img} alt="Shoes" /></figure>
        <div className="">
          <h2 className="card-title text-3xl text-white font-bold">{card.title}</h2>
        </div>
      </div>
    );
};

export default CardData;