import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
import { PageInfo } from '../typings';

type Props = { pageInfo: PageInfo; }

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string
};

export default function ContactMe({pageInfo}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => (
        window.location.href = `mailto:Ashishchandra8328@gmail.com?subject=${formData.subject} &body=Hi, my name is ${formData.name}.${formData.message}; (${formData.email} )`
    );

    return (
        <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contact
            </h3>
            <div className="flex flex-col space-y-10">
                <h4 className="text-4xl font-semibo ld text-center">
                    I have got just what you need.{" "}
                    <span className=" decoration-[#F7AB0A]/50 underline">Lets Talk. </span>
                </h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5 justify-center" >
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className=" text-2xl">{pageInfo.phoneNumber} </p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center" >
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className=" text-2xl">{pageInfo.email} </p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center" >
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className=" text-2xl">{pageInfo.address}</p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="flex flex-col space-y-2 w-fit mx-auto">
                        <div className="flex space-x-2">
                            <input
                                {...register('name')}
                                placeholder='Name'
                                className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" type="text" />
                            <input
                                {...register('email')}
                                placeholder='Email'
                                className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" type="email" />
                        </div>
                        <input
                            {...register('subject')}
                            placeholder='Subject'
                            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" type="text" />
                        <textarea
                            {...register('message')}
                            placeholder='Message'
                            className="outline-none bg-slate-400/10 rounded-sm border-b px-6 py-4 border-[#242424] text-gray-500 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40" />
                        <button
                            className=" bg-[#F7AB0A] py-5 px-10 rounded-md text-bzack font-bold text-lg">
                            Submit
                        </button>
                    </form>
                </div>
            </div >
        </div >
    )
}