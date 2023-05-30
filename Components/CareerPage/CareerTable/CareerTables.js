import React from 'react';



const CareerTables = ({userData, handleLicenceDetailsDelete}) => {
    const{_id, licenseNo, tradeName, legalType, expiryDate, issueDate, dbduns, mainLicenseNo}=userData;
    return (
        <div className='bg-[#e5dede]'>
            {/* .............Large Device............... */}

<div className="relative overflow-x-auto shadow-md hidden lg:block my-12">
    <div className='flex justify-end'>
    <button onClick={() => handleLicenceDetailsDelete(_id)} className=''>	<svg xmlns="http://www.w3.org/2000/svg" className="text-[#340110] h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg></button>

    </div>
    <table className="w-full text-sm text-left text-black dark:text-gray-400">
      
        <tbody className="text-md ">
            <tr className="text-md">
                <th scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                    License No.
                </th>
                <td className="px-6 py-4">
                    {licenseNo}
                </td>
                <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                    Issue Date
                </td>
                <td className="px-6 py-4">
                   {issueDate}
                </td>
             
            </tr>
            <tr className="text-md">
                <th scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                    Trade Name.
                </th>
                <td className="px-6 py-4">
                    {tradeName}
                </td>
                <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                   Main License No.
                </td>
                <td className="px-6 py-4">
                    {mainLicenseNo}
                </td>
           
            </tr>
            <tr className="text-md">
                <th scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                    Legal Type
                </th>
                <td className="px-6 py-4">
                   {legalType}
                </td>
                <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                   Register No.
                </td>
                <td className="px-6 py-4">
                 
                </td>
             
            </tr>
            <tr className="text-md">
                <th scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                   Expiry Date.
                </th>
                <td className="px-6 py-4">
                    {expiryDate}
                </td>
                <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                    DCCI No.
                </td>
                <td className="px-6 py-4">
                   
                </td>
             
            </tr>
            <tr className="text-md">
                <th scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                D&B D-U-N-S
                </th>
                <td className="px-6 py-4">
                    {dbduns}
                </td>
                <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                  
                </td>
                <td className="px-6 py-4">
                   
                </td>
             
            </tr>
        </tbody>
    </table>
</div>


{/* .............Small Device............... */}

<div className="relative overflow-x-auto shadow-md blog lg:hidden  my-12">

    <table className="w-full text-sm text-left text-black dark:text-gray-400">
      
        <tbody className="text-md">
            <tr className="text-md">
                <th scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    License No.
                </th>
                <td className="px-6 py-4">
                    {licenseNo}
                </td>
          
             
            </tr>
            <tr className="text-md">
                <th scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    Trade Name.
                </th>
                <td className="px-6 py-4">
                    {tradeName}
                </td>
           
           
            </tr>
            <tr className="text-md">
                <th scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    Legal Type
                </th>
                <td className="px-6 py-4">
                   {legalType}
                </td>
            
             
            </tr>
            <tr className="text-md">
                <th scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                   Expiry Date.
                </th>
                <td className="px-6 py-4">
                    {expiryDate}
                </td>
            </tr>
            <tr className="text-md">
                <th scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                D&B D-U-N-S
                </th>
                <td className="px-6 py-4">
                    {dbduns}
                </td>
   
             
            </tr>
            <tr className="text-md">
            <td className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                    Issue Date
                </td>
                <td className="px-6 py-4">
                   {issueDate}
                </td>
     
             
            </tr>
            <tr className="text-md">
            <td className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                   Main License No.
                </td>
                <td className="px-6 py-4">
                    {mainLicenseNo}
                </td>
            </tr>
            <tr className="text-md">
            <td className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                   Register No.
                </td>
                <td className="px-6 py-4">
                 
                </td>
            </tr>
            <tr className="text-md">
            <td className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                   DCCI No.
                </td>
                <td className="px-6 py-4">
                 
                </td>
            </tr>

            <tr className="bg-[#e5dede]">
                            <th scope="row" className="w-20 md:w-80 lg:w-0 bg-[#340110] px-6 py-4 text-white blackspace-nowrap dark:text-black">
                                Action
                            </th>
                            <td className="px-6 py-4">
                                <button onClick={() =>handleLicenceDetailsDelete(licenseMember._id)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'><svg xmlns="http://www.w3.org/2000/svg" className="text-[#340110] h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg></button>
                            </td>
                        </tr>
        </tbody>
    </table>
</div>

        </div>
    );
};

export default CareerTables;