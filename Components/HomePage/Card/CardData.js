import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CardData = ({card}) => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 200, 
      easing: 'ease-in-out',
    });
  }, []);
    return (
        <div data-aos="fade-right" className="w-full md:w-72" data-aos="fade-right">
        <figure><img className='h-60 w-full' src={card.img} alt="Shoes" /></figure>
        <div className="">
          <h2 className="card-title text-3xl text-white font-bold">{card.title}</h2>
        </div>
      </div>
    );
};

export default CardData;