import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Ashish Chandra",
            "Guy-who-loves-Biryani.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <picture>
                <img
                    className='relative rounded-full h-32 w-32 mx-auto object-cover'
                    src="https://user-images.githubusercontent.com/87669361/205507194-caf12fbf-70c3-4e68-b7f4-bf185d551274.jpg"
                    alt="pic"
                />
            </picture>

            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Developer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <buttton
                            className='px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all ☐hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                            About
                        </buttton>
                    </Link>
                    <Link href="#experience">
                        <buttton
                            className='px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all ☐hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                            Experience
                        </buttton>
                    </Link>
                    <Link href="#skills">
                        <buttton
                            className='px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all ☐hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                            Skills
                        </buttton>
                    </Link>
                    <Link href="#projects">
                        <buttton className='px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all ☐hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>
                            Projects
                        </buttton>
                    </Link>
                </div>
            </div>
        </div>
    );
}