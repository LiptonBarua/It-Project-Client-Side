import React from 'react';

const CareerTables = ({userData}) => {
    const{licenseNo, tradeName, legalType, expiryDate, issueDate, dbduns, mainLicenseNo}=userData;
    return (
        <div>
            
            {/* .............Large Device............... */}

<div className="relative overflow-x-auto shadow-md hidden lg:block">
    <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
      
        <tbody className="text-xs uppercase bg-[#e5dede] dark:text-white">
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    License No.
                </th>
                <td className="px-6 py-4">
                    {licenseNo}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Issue Date
                </td>
                <td className="px-6 py-4">
                   {issueDate}
                </td>
             
            </tr>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Trade Name.
                </th>
                <td className="px-6 py-4">
                    {tradeName}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Main License No.
                </td>
                <td className="px-6 py-4">
                    {mainLicenseNo}
                </td>
           
            </tr>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Legal Type
                </th>
                <td className="px-6 py-4">
                   {legalType}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Register No.
                </td>
                <td className="px-6 py-4">
                 
                </td>
             
            </tr>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Expiry Date.
                </th>
                <td className="px-6 py-4">
                    {expiryDate}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    DCCI No.
                </td>
                <td className="px-6 py-4">
                   
                </td>
             
            </tr>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                D&B D-U-N-S
                </th>
                <td className="px-6 py-4">
                    {dbduns}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  
                </td>
                <td className="px-6 py-4">
                   
                </td>
             
            </tr>
        </tbody>
    </table>
</div>


{/* .............Small Device............... */}

<div className="relative overflow-x-auto shadow-md blog lg:hidden">
    <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
      
        <tbody className="text-xs uppercase bg-[#e5dede] dark:text-white">
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    License No.
                </th>
                <td className="px-6 py-4">
                    {licenseNo}
                </td>
          
             
            </tr>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Trade Name.
                </th>
                <td className="px-6 py-4">
                    {tradeName}
                </td>
           
           
            </tr>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Legal Type
                </th>
                <td className="px-6 py-4">
                   {legalType}
                </td>
            
             
            </tr>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Expiry Date.
                </th>
                <td className="px-6 py-4">
                    {expiryDate}
                </td>
            </tr>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                D&B D-U-N-S
                </th>
                <td className="px-6 py-4">
                    {dbduns}
                </td>
   
             
            </tr>
            <tr className="">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Issue Date
                </td>
                <td className="px-6 py-4">
                   {issueDate}
                </td>
     
             
            </tr>
            <tr className="">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Main License No.
                </td>
                <td className="px-6 py-4">
                    {mainLicenseNo}
                </td>
            </tr>
            <tr className="">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   Register No.
                </td>
                <td className="px-6 py-4">
                 
                </td>
            </tr>
            <tr className="">
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                   DCCI No.
                </td>
                <td className="px-6 py-4">
                 
                </td>
            </tr>
        </tbody>
    </table>
</div>

        </div>
    );
};

export default CareerTables;