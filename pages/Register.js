import { AuthContext } from '@/AuthProvider/AuthProvider';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { user, updateUser, createUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmaii, setCreatedUserEmail] = useState('');

    const router=useRouter();

    const date = new Date()

    const handleSignUp = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const uri = `https://api.imgbb.com/1/upload?expiration?=600&key=33de90de0d198f3c751547fa3dc96a5e`
        fetch(uri, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                if (imageData.success) {
                    createUser(data.email, data.password)
                        .then(result => {
                            const user = result.user;
                            const userInfo = {
                                displayName: data.firstName,
                                displayLast: data.lastName,
                                email: data.email,
                                image: imageData.data.uri
                            }

                            updateUser(userInfo)
                                .then(() => {
                                    saveUser(data?.firstName, data.lastName, data?.email, imageData.data.url)
                                    toast.success('Register Successfully');
                                    router.replace('/')
                                    reset()
                                })
                                .catch(error => {
                                    toast.error('Register Is Not a Successfully')
                                })
                                .catch(error => {
                                    setSignUpError(error.message)
                                })
                        })
                }
            })

        const saveUser = (firstName, lastName, email, image) => {
            const user = {firstName, lastName, email, image, date}

            fetch('https://it-project-server-side.vercel.app/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(user)

            })

                .then(res => res.json())
                .then(data => {
                    setCreatedUserEmail(email);
                    
                })

        }


    }

    return (
        <section className="bg-[#212121] dark:bg-gray-900 py-36" style={{ backgroundImage: `url(https://c0.wallpaperflare.com/preview/762/377/314/apple-computer-desk-electronics.jpg)`, backgroundRepeat: `no-repeat`, backgroundSize: `cover` }}>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign Up to your account
                        </h1>
                        <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4 md:space-y-6" action="#">

                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                    <div className="form-control w-full">
                                        <input placeholder='' type="text" {...register("firstName", { required: "First Name is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        {errors.firstName && <p className='text-red-600'>{errors.firstName?.message}</p>}
                                    </div>
                                </div>
                                <div>
                                    <label for="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                    <div className="form-control w-full">
                                        <input placeholder='' type="text" {...register("lastName", { required: "Last Name is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                        {errors.lastName && <p className='text-red-600'>{errors.lastName?.message}</p>}
                                    </div>
                                </div>

                            </div>

                            <div>
                                <label for="phote" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phote</label>
                                <div className="form-control w-full">
                                    <input placeholder='' type="file" {...register("image", { required: "Phote is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.phote && <p className='text-red-600'>{errors.phote?.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <div className="form-control w-full">
                                    <input placeholder='' type="email" {...register("email", { required: "Email is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.password && <p className='text-red-600'>{errors.email?.message}</p>}
                                </div>
                            </div>

                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <div className="form-control w-full">
                                    <input placeholder='' type="password" {...register("password", { required: "Password is required" })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                                </div>
                            </div>



                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label for="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                                <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                            </div>
                            <button type="submit" className="w-full hover:bg-black text-white bg-[#C60017] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" style={{ transitionDuration: `1s` }}>Register</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link href="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;