import { AuthContext } from '@/AuthProvider/AuthProvider';
import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddInformationPage = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const{user}=useContext(AuthContext);
    const{personalInformationRefetch}=useContext(ShareContext)

    const handleInformation=(data)=>{
        const addInformatins={
            licenseNo: data?.licenseNo,
            tradeName: data?.tradeName,
            legalType: data?.legalType,
            expiryDate:data?.expiryDate,
            issueDate: data?.issueDate,
            dbduns: data?.dbduns,
            mainLicenseNo: data?.mainLicenseNo,
            email: user?.email
        }

        console.log(addInformatins)
        fetch('https://it-project-server-side.vercel.app/personalInformation', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addInformatins)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success('information is a successfully');
            reset();
            personalInformationRefetch()
        })
        .catch(error=>{
            toast.error('information is not a successfully')
        })
    }


    return (
        <div className='pt-24'>
            <section class="max-w-4xl p-6 mx-auto border border-black rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 class="text-xl font-bold  text-black capitalize dark:text-black">License Information Add</h1>
                <form onSubmit={handleSubmit(handleInformation)}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-black dark:text-gray-200" for="username">License Number</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("licenseNo", { required: "License Number is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.licenseNo&& <p className='text-red-600'>{errors.licenseNo?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Trade Name</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="text" {...register("tradeName", { required: "Trade Name is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.tradeName && <p className='text-red-600'>{errors.tradeName?.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label class="text-black dark:text-gray-200" for="">Legal Type</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="text" {...register("legalType", { required: "Trade Name is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.legalType && <p className='text-red-600'>{errors.legalType?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Expiry Date</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="date" {...register("expiryDate", { required: "Expiry Date is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.expiryDate && <p className='text-red-600'>{errors.expiryDate?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Issue Date</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="date" {...register("issueDate", { required: "Issue Date is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.issueDate && <p className='text-red-600'>{errors.issueDate?.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label class="text-black dark:text-gray-200" for="">D&B D-U-N-S</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("dbduns", { required: "D&B D-U-N-S is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.dbduns && <p className='text-red-600'>{errors.dbduns?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Main License No</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("mainLicenseNo", { required: "Main License No is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.mainLicenseNo && <p className='text-red-600'>{errors.mainLicenseNo?.message}</p>}
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

export default AddInformationPage;