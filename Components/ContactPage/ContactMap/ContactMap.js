import React, { useState } from 'react';

const ContactMap = () => {
  // const[color, setColor]=useState('')
  return (
    <div className="bg-[#212121]">
      {/* <div style={{backgroundColor: color, height: `100vh`}}>
                <input type="text" value={color} onChange={(e)=>setColor(e.target.value)} />
            </div> */}

      <section className="flex flex-wrap lg:h-screen">
        <div className=" w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8">

          <h1 className='text-white font-semibold text-3xl pb-5'>QUICK ENQUIRY</h1>

          <form action="" className="space-y-4">


            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-white" for="email">First Name</label>
                <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="" type="firstName" />
              </div>

              <div>
                <label className="text-white" for="phone">Last Name</label>
                <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="" type="lastName" />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-white" for="email">Email</label>
                <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="" type="email" />
              </div>

              <div>
                <label className='text-white' for="phone">Phone</label>
                <input className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder="" type="phone" />
              </div>
            </div>



            <div>
              <label className="text-white" for="message">Message</label>

              <textarea className="w-full rounded-lg border-gray-200 p-3 text-sm" placeholder=""
                type='message'
                rows="8"

              ></textarea>
            </div>

            <div className="mt-4 ms-auto">
              <button type="submit" className="inline-block w-full rounded-full bg-white  hover:bg-[#C60017] px-8 py-3 font-medium text-black hover:text-white sm:w-auto" style={{transitionDuration: `2s`}}>Submit</button>
            </div>
          </form>


        </div>

        <div className=" h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.573489111011!2d91.84162477447407!3d22.369727890376875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30ad2777c9c1cf83%3A0xb8796c419fa1021b!2sBahaddarhat%2C%20Chattogram!5e0!3m2!1sen!2sbd!4v1684591968657!5m2!1sen!2sbd"  className='h-full w-full px-4 md:px-0' style={{ border: `0` }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </section>
    </div>
  );
};

export default ContactMap;