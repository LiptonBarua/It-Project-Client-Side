import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';


const LicenseMember = () => {
    const { licenseMemberInformation } = useContext(ShareContext);

    return (
        <div className='px-[20px] md:px-[52px] py-24'>

            <div className='text-center w-1/2 ms-auto bg-[#840a2e] text-white py-2 text-xl font-semibold'>
                <h1>License Members</h1>
            </div>
            <div>

                <div className='hidden lg:block'>

                    <div className="relative overflow-x-auto shadow-md">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
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
                                        <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                            {licenseMember?.shar}
                                        </th>
                                        <td className="px-6 py-4">
                                            {licenseMember?.role}
                                        </td>
                                        <td className="px-6 py-4">
                                            {licenseMember?.nationality}
                                        </td>
                                        <td className="px-6 py-4">
                                            {licenseMember?.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {licenseMember?.number}
                                        </td>
                                        <td className="px-6 py-4">
                                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
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
                                            <th scope="row" className="bg-[#340110] px-6 w-20 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                Share
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.shar}
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="bg-[#340110] px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                Role
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.role}
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="bg-[#340110] px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                Nationality
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.nationality}
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="bg-[#340110] px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                Name
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.name}
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="bg-[#340110] px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                No
                                            </th>
                                            <td className="px-6 py-4">
                                                {licenseMember?.number}
                                            </td>
                                        </tr>
                                        <tr className="bg-[#e5dede]">
                                            <th scope="row" className="bg-[#340110] px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                                Action
                                            </th>
                                            <td className="px-6 py-4">
                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
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