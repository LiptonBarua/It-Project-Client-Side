import { ShareContext } from '@/ShareProvider/ShareProvider';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddAddress = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const{addressRefetch}=useContext(ShareContext)

    const date=new Date();

    const handleAddress = (data) => {
        const addAddress = {
            phone: data?.phone,
            mobile: data?.mobile,
            parcel: data?.parcel,
            email: data?.email,
            print: data?.print,
            receipt: data?.receipt,
            date
        }

        fetch('https://it-project-server-side.vercel.app/address', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addAddress)
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Address submit successfully')
                reset();
                addressRefetch();
            })
            .catch(error=>{
                toast.error('Address not a submit successfully')
            })
    }
    return (
        <div className='pb-10'>
            <section class="max-w-4xl p-6 mx-auto border border-black rounded-md shadow-md dark:bg-gray-800 mt-20">
                <h1 class="text-xl font-bold text-black capitalize dark:text-black">Address</h1>
                <form onSubmit={handleSubmit(handleAddress)}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-black dark:text-gray-200" for="username">Phone No.</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("phone", { required: "Phone Number is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.phone && <p className='text-red-600'>{errors.phone?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Mobile No.</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("mobile", { required: "Mobile Number is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.mobile && <p className='text-red-600'>{errors.mobile?.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label class="text-black dark:text-gray-200" for="">Parcel ID</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("parcel", { required: "Parcel ID is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.parcel && <p className='text-red-600'>{errors.parcel?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Email</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="email" {...register("email", { required: "Email is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                        </div>

                        <div>
                            <label class="text-black dark:text-gray-200" for="">Print Date</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="date" {...register("print", { required: "Number is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.print && <p className='text-red-600'>{errors.print?.message}</p>}
                            </div>
                        </div>
                        <div>
                            <label class="text-black dark:text-gray-200" for="">Receipt No.</label>
                            <div className="form-control w-full">
                                <input placeholder='' type="number" {...register("receipt", { required: "Receipt No is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.receipt && <p className='text-red-600'>{errors.receipt?.message}</p>}
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

export default AddAddress;