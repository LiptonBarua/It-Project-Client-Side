import React from 'react';

const AddressData = ({userAddress}) => {
    const{phone, mobile, parcel, email, print, receipt}=userAddress;
    return (
        <div>
           

           {/* ..........large Device..................... */}
<div className="relative overflow-x-auto hidden lg:block">
    <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
 
        <tbody>
            <tr className="bg-[#e5dede]">
                <td scope="row" className="px-6 py-4">
                    Phone No.
                </td>
                <td className="px-6 py-4">
                  {phone}
                </td>
                <td className="px-6 py-4">
                  P.O.Box
                </td>
                <td className="px-6 py-4">
                   
                </td>
            </tr>
            <tr className="bg-[#e5dede]">
                <td scope="row" className="px-6 py-4">
                    Fax No.
                </td>
                <td className="px-6 py-4">
                  
                </td>
                <td className="px-6 py-4">
                    Parcel ID
                </td>
                <td className="px-6 py-4">
                    {parcel}
                </td>
            </tr>
            <tr className="bg-[#e5dede] dark:bg-gray-800">
                <td scope="row" className="px-6 py-4">
                    Mobile No.
                </td>
                <td className="px-6 py-4">
                   {mobile}
                </td>
                <td className="px-6 py-4">
                    Email:
                </td>
                <td className="px-6 py-4">
                   {email}
                </td>
            </tr>
        </tbody>
    </table>
</div>
 

 
<div className="relative overflow-x-auto block lg:hidden">
    <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
    
        <tbody>
            <tr className="bg-[#e5dede]">
                <th scope="row" className="bg-[#340110] w-20 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                  Phone No.
                </th>
                <td className="px-6 py-4">
                   {phone}
                </td>
              
            </tr>
            <tr className="bg-[#e5dede]">
                <th scope="row" className="bg-[#340110] w-20 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                   Fax No.
                </th>
                <td className="px-6 py-4">
                    
                </td>
              
            </tr>
            <tr className="bg-[#e5dede]">
                <th scope="row" className="bg-[#340110] w-20 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                   Mobile No.
                </th>
                <td className="px-6 py-4">
                    {mobile}
                </td>
              
            </tr>
            <tr className="bg-[#e5dede]">
                <th scope="row" className="bg-[#340110] w-20 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                P.O.Box
                </th>
                <td className="px-6 py-4">
                 
                </td>
              
            </tr>
            <tr className="bg-[#e5dede]">
                <th scope="row" className="bg-[#340110] w-20 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                Parcel ID
                </th>
                <td className="px-6 py-4">
                   {parcel}
                </td>
              
            </tr>
            <tr className="bg-[#e5dede]">
                <th scope="row" className="bg-[#340110] w-20 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                 Email
                </th>
                <td className="px-6 py-4">
                   {email}
                </td>
              
            </tr>
           
        </tbody>
    </table>
</div>

        </div>
    );
};

export default AddressData;