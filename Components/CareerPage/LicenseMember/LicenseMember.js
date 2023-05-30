import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const LicenseMember = () => {
    const { licenseMemberInformation, licenseMemberRefetch } = useContext(ShareContext);


    const handleLicenseMemberDelete = (id) => {
        fetch(`https://it-project-server-side.vercel.app/licensemember/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('Licence Member is delete Successfully')
                    licenseMemberRefetch()
                }
            })
            .catch(error => {
                toast.error('Licence Member is not delete Successfully')
            })
    }

    return (
        <div className='px-[20px] md:px-[52px] py-14'>

            <div className='text-center w-1/2 ms-auto bg-[#840a2e] text-white py-2 text-xl font-semibold'>
                <h1>License Members</h1>
            </div>
            <div>

                <div className='hidden lg:block'>

                    <div className="relative overflow-x-auto shadow-md">
                        <table className="w-full text-sm text-left text-gray-900 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-[#340110] dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Share
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Role
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Nationality
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        No
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    licenseMemberInformation?.map((licenseMember, i) => <tr key={licenseMember._id} className="bg-[#e5dede]">
                                        <td scope="row" className="px-6 py-4 text-black blackspace-nowrap dark:text-black">
                                            {licenseMember?.shar}%
                                        </td>
                                        <td className="px-6 py-4">
                                            {licenseMember?.role}
                                        </td>
                                        <td className="px-6 py-4">
                                            {licenseMember?.nationality}
                                        </td>
                                        <td className="px-6 py-4 uppercase">
                                            {licenseMember?.name}%
                                        </td>
                                        <td className="px-6 py-4">
                                            {licenseMember?.number}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={() => handleLicenseMemberDelete(licenseMember._id)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'><svg xmlns="http://www.w3.org/2000/svg" className="text-[#340110] h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg></button>

                                        </td>
                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>

                </div>


                <div className='block lg:hidden'>
                    {
                        licenseMemberInformation.map((licenseMember, i) =>
                            <div className="relative overflow-x-auto shadow-md  mb-6">
                                <table className="w-full text-sm text-left text-black dark:text-gray-400">

                                    <tbody>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="w-20 md:w-80 lg:w-0 bg-[#340110] px-6 py-4 text-white blackspace-nowrap dark:text-black">
                                                Share
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.shar}%
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="w-20 md:w-80 lg:w-0 bg-[#340110] px-6 py-4 text-white blackspace-nowrap dark:text-black">
                                                Role
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.role}
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="w-20 md:w-80 lg:w-0 bg-[#340110] px-6 py-4 text-white blackspace-nowrap dark:text-black">
                                                Nationality
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.nationality}
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="w-20 md:w-80 lg:w-0  bg-[#340110] px-6 py-4 text-white blackspace-nowrap dark:text-black">
                                                Name
                                            </th>
                                            <td className="px-6 py-4 uppercase">
                                                {licenseMember?.name}%
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="w-20 md:w-80 lg:w-0 bg-[#340110] px-6 py-4 text-white blackspace-nowrap dark:text-black">
                                                No
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.number}
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="w-20 md:w-80 lg:w-0 bg-[#340110] px-6 py-4 text-white blackspace-nowrap dark:text-black">
                                                Action
                                            </th>
                                            <td className="px-6 py-4">
                                            <button onClick={() => handleLicenseMemberDelete(licenseMember._id)} className='font-medium text-blue-600 dark:text-blue-500 hover:underline'><svg xmlns="http://www.w3.org/2000/svg" className="text-[#340110] h-7 w-7 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        )
                    }
                </div>




            </div>
        </div>

    );
};

export default LicenseMember;