import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = { experiences: Experience[]; }

function WorkExperience({ experiences }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1 }}

            className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Experience
            </h3>

            <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20  scrollbar-thumb-[#F7AB0A]/80 pt-24'>
                {/*ExperienceCard*/}
                {experiences.map((experience) => (
                    <ExperienceCard key={experience._id} experience={experience} />
                ))}
            </div>
        </motion.div>
    )
}

export default WorkExperience;