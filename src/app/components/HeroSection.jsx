'use client';
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold' ><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I'm </span>
                <TypeAnimation
                    sequence={[
                        'Ankit Bhardwaj',
                        1000, 
                        'Web Developer',
                        1000,
                        'Artificial Intelligence Enthusiast',
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ fontSize: '2em', display: 'inline-block' }}
                    repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'> Transforming ideas into seamless, responsive designs with a passion for innovation.  </p>
                <div>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black '>Hire me</button>
                    <button className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>Download CV</button>
                </div>
            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className="rounded-full bg-[#1a1818] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative">
                    <Image
                        src='/image/profilephoto.jpg'
                        alt='Profile Photo'
                        className='rounded-full aspect-square object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                        width={400}
                        height={400}
                    /> 
                </div> 
            </div>
        </div>
    </section>
  )
}

export default HeroSection