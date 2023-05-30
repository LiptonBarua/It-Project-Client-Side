import React from 'react';

const AddressData = ({ userAddress, handleAddressDelete }) => {
    const { _id, phone, mobile, parcel, email, print, receipt } = userAddress;
    return (
        <div className='bg-[#e5dede]'>


            {/* ..........large Device..................... */}
            <div className="relative overflow-x-auto hidden lg:block">
                <div className='flex justify-end '>
                    <button onClick={() => handleAddressDelete(_id)} className=''>	<svg xmlns="http://www.w3.org/2000/svg" className="text-[#340110] h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg></button>
                </div>
                <table className="w-full text-sm text-left text-black dark:text-gray-400">

                    <tbody>
                        <tr className="">
                            <td scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                                Phone No.
                            </td>
                            <td className="px-6 py-4">
                                {phone}
                            </td>
                            <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                                P.O.Box.
                            </td>
                            <td className="px-6 py-4">

                            </td>
                        </tr>
                        <tr className="">
                            <td scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                                Fax No.
                            </td>
                            <td className="px-6 py-4">

                            </td>
                            <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                                Parcel ID.
                            </td>
                            <td className="px-6 py-4">
                                {parcel}
                            </td>
                        </tr>
                        <tr className=" dark:bg-gray-800">
                            <td scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                                Mobile No.
                            </td>
                            <td className="px-6 py-4">
                                {mobile}
                            </td>
                            <td className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                                Email.
                            </td>
                            <td className="px-6 py-4">
                                {email}
                            </td>
                        </tr>
                        <tr className=" dark:bg-gray-800">
                            <td scope="row" className="px-6 py-4 font-bold text-black whitespace-nowrap dark:text-white">
                                Receipt No.
                            </td>
                            <td className="px-6 py-4">
                                {receipt}
                            </td>
                            <td scope="row" className="px-6 py-4">

                            </td>
                            <td className="px-6 py-4">

                            </td>

                        </tr>
                    </tbody>
                </table>
            </div>


{/* ......................Small Device........................ */}

            <div className="relative overflow-x-auto block lg:hidden">
                <div className='flex'>

                </div>
                <table className="w-full text-sm text-left text-black dark:text-gray-400">

                    <tbody>

                        <tr className="">
                            <td scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Phone No.
                            </td>
                            <td className="px-6 py-4">
                                {phone}
                            </td>

                        </tr>
                        <tr className="">
                            <td scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Fax No.
                            </td>
                            <td className="px-6 py-4">

                            </td>

                        </tr>
                        <tr className="">
                            <td scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Mobile No.
                            </td>
                            <td className="px-6 py-4">
                                {mobile}
                            </td>

                        </tr>
                        <tr className="">
                            <td scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                P.O.Box.
                            </td>
                            <td className="px-6 py-4">

                            </td>

                        </tr>
                        <tr className="">
                            <td scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Parcel ID.
                            </td>
                            <td className="px-6 py-4">
                                {parcel}
                            </td>

                        </tr>
                        <tr className="">
                            <td scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Email.
                            </td>
                            <td className="px-6 py-4">
                                {email}
                            </td>

                        </tr>
                        <tr className="">
                            <td scope="row" className="bg-[#340110] w-20 md:w-80 lg:w-0 px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                Receipt No.
                            </td>
                            <td className="px-6 py-4">
                                {receipt}
                            </td>

                        </tr>

                        <tr className="bg-[#e5dede]">
                            <th scope="row" className="w-20 md:w-80 lg:w-0 bg-[#340110] px-6 py-4 text-white blackspace-nowrap dark:text-black">
                                Action.
                            </th>
                            <td className="px-6 py-4">
                                <button onClick={() =>handleAddressDelete(licenseMember._id)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'><svg xmlns="http://www.w3.org/2000/svg" className="text-[#340110] h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

export default AddressData;