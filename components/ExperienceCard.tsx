import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function ExperienceCard({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] p-10 snap-center bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}

                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://user-images.githubusercontent.com/87669361/204091580-256f7d13-0f3a-4f9d-96b8-e0a3131aca26.jpg"
                alt=""
            />
            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>CEO of PLUTO</h4>
                <p className='text-2xl fond-bold mt-1'>ZARA</p>
                <div className='flex space-x-2 my-2'>
                    {/* Tech used */}
                    <picture>
                    <img 
                    className='rounded-full h-10 w-10'
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="" />
                    </picture>
                    {/* Tech used */}
                    {/* Tech used */}
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work... Ended...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg'>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    )
}