import React from 'react'
import { motion } from 'framer-motion';
import { Skill as Skilltype } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    skill: Skilltype;
    directionLeft?: boolean;
}

export default function Skill({skill, directionLeft }: Props) {
    return (
        <div className="group relative flex cursor-pointer">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
                src={urlFor(skill?.image).url()}
                alt=""
                className=" rounded-full border border-gray-500 object h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale ease-in-out duraition-300"
            />
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 xl:w-32 xl:h-32 md rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">{skill.progress}%</p>
                </div>
            </div>
        </div>
    )
}