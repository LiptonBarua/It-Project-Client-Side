import React, { useState } from 'react';

const ContactMap = () => {
  // const[color, setColor]=useState('')
  return (
    <div className="bg-[#212121]">
      {/* <div style={{backgroundColor: color, height: `100vh`}}>
                <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} />
            </div> */}

      <section className="flex flex-wrap lg:h-screen">


        <div className=" h-64 w-full sm:h-96 lg:h-full">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14750.01865797127!2d92.02401628945019!3d22.447662105237487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad30f16e9ed9f7%3A0x87c5bae5db6825e9!2sSarafvata!5e0!3m2!1sen!2sbd!4v1685452653381!5m2!1sen!2sbd"  className='h-full w-full md:px-0' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactMap;