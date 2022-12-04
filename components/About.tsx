import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}

            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://user-images.githubusercontent.com/87669361/205462037-a05b27a0-8031-40f5-a7fb-ee4c950506d8.jpg"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
            />

            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background

                    <p className='text-base pt-5 '>

                        I'm Ashish. Here's a little bit about me...
                        Currently, I'm in Third year of Computer Science Engineering with Iot, Cyber Security, Block Chain Technology at Chaitanya Bharathi Institute of Technology (CBIT).
                        A passionate Full Stack Software Developer 🚀 having an experience of building Web2, Web3 and Mobile applications with JavaScript / Reactjs / Nodejs / Nextjs / React Native and some other cool libraries and frameworks.
                        I love solving problems using programming and I'm very interested in Software Engineering, Web Development, Data Structures and Algorithms. I'm very proactive and I love teamwork. Be free to contact me :)

                    </p>
                </h4>
            </div>
        </motion.div>
    )
}