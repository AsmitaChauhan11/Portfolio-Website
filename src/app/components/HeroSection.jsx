// 'use client';
// import React from 'react'
// import Image from 'next/image'
// import { TypeAnimation } from 'react-type-animation';
// import { motion } from 'framer-motion';
// import Link from 'next/link';

// const HeroSection = () => {
//   return (
//     <section className='lg:py-16'>
//         <div className='grid grid-cols-1 sm:grid-cols-12'>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
//             >                
//                 <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-8xl font-extrabold' ><span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>Hello, I&apos;m </span>
//                 <br></br>
//                     <TypeAnimation
//                         sequence={[
//                             'Asmita Chauhan',
//                             1000, 
//                             'Web Developer'
//                         ]}
//                         wrapper="span"
//                         speed={30}
//                         repeat={Infinity}
//                     />
//                 </h1>
//                 <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-12'> I&apos;m a passionate Web Developer who believes that a website is more than just code — it&apos;s an experience. I love designing visually stunning, interactive, and user-friendly websites that not only function smoothly but also captivate users. I enjoy bringing creative ideas to life through clean code and modern web technologies.</p><br/><p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>Let&apos;s build something amazing together! 🚀✨</p>
//                 <div>
//                     <Link href="#contact">
//                         <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black '>Hire me</button>
//                     </Link>
//                     <button 
//                         onClick={() => window.open('https://tan-ellen-97.tiiny.site', '_blank')}
//                         className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'>
//                     Download CV</button>
//                 </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, scale: 0.5 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="col-span-4 place-self-center mt-4 lg:mt-0"
//             >                
//                 <div className="rounded-full bg-[#48cee6] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative ml-20">
//                     <Image
//                         src='/image/profilephoto.jpg'
//                         alt='Profile Photo'
//                         className='rounded-full aspect-square object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
//                         width={400}
//                         height={400}
//                     /> 
//                 </div> 
//             </motion.div>
//         </div>
//     </section>
//   )
// }

// export default HeroSection
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const sectionRef = useRef(null);
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowAnimation(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Trigger when 30% of HeroSection is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className='lg:py-16'>
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className='text-white mb-4 text-4xl sm:text-4xl lg:text-8xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
              Hello, I&apos;m
            </span>
            <br />
            {showAnimation && (
              <TypeAnimation
                sequence={['Asmita Chauhan', 1000, 'Web Developer']}
                wrapper="span"
                speed={30}
                repeat={Infinity}
              />
            )}
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl mt-12'>
            I&apos;m a passionate Web Developer who believes that a website is more than just code — it&apos;s an experience. I love designing visually stunning, interactive, and user-friendly websites that not only function smoothly but also captivate users. I enjoy bringing creative ideas to life through clean code and modern web technologies.
          </p>
          <br />
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            Let&apos;s build something amazing together! 🚀✨
          </p>
          <div>
            <Link href="#contact">
              <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-black'>
                Hire me
              </button>
            </Link>
            <button
              onClick={() => window.open('https://tan-ellen-97.tiiny.site', '_blank')}
              className='px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3'
            >
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#48cee6] w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] relative ml-20">
            <Image
              src='/image/profilephoto.jpg'
              alt='Profile Photo'
              className='rounded-full aspect-square object-cover absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={400}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
