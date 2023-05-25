import { AuthContext } from '@/AuthProvider/AuthProvider';
import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddLicenseMemberPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user } = useContext(AuthContext);
    const{licenseMemberRefetch}=useContext(ShareContext)

    const handleLicenseMember = (data) => {
        const licenseMemberAdd = {
            shar: data?.share,
            role: data?.role,
            nationality: data?.nationality,
            name: data?.name,
            number: data?.number,
            email: user?.email
        }

        fetch('https://it-project-server-side.vercel.app/licensemember', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(licenseMemberAdd)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('License Member information add Successfully');
                reset();
                licenseMemberRefetch();
            })
            .catch(error=>{
                toast.error('License Member is not a successfully')
            })
    }
    return (
        <div className='pb-10'>
            <section class="max-w-4xl p-6 mx-auto border border-black rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 class="text-xl font-bold text-black capitalize dark:text-black">License Members</h1>
                <form onSubmit={handleSubmit(handleLicenseMember)}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-black dark:text-gray-200" for="username">Share</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("share", { required: "Share is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.share && <p className='text-red-600'>{errors.share?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Role</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="text" {...register("role", { required: "Role is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.role && <p className='text-red-600'>{errors.role?.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label class="text-black dark:text-gray-200" for="">Nationality</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="text" {...register("nationality", { required: "Nationality is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.nationality && <p className='text-red-600'>{errors.nationality?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Name</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="text" {...register("name", { required: "Name is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Number</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("number", { required: "Number is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.number && <p className='text-red-600'>{errors.number?.message}</p>}
                            </div>
                        </div>

                    </div>

                    <div class="flex justify-end mt-6">
                    <button type='submit' className="px-6 py-2 leading-5 transition-colors duration-200 transform bg-black rounded-md hover:bg-[#C60017] focus:outline-none text-white">Submit</button>
                </div>
                </form>
            </section>

        </div>
    );
};

export default AddLicenseMemberPage;