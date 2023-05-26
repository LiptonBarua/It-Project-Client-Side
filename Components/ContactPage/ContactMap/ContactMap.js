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
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.573489111011!2d91.84162477447407!3d22.369727890376875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2777c9c1cf83%3A0xb8796c419fa1021b!2sBahaddarhat%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1684591968657!5m2!1sen!2sbd"  className='h-full w-full md:px-0' style={{ border: `0` }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </section>
    </div>
  );
};

export default ContactMap;