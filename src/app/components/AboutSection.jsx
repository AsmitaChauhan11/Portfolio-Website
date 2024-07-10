'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'
import { Content } from 'next/font/google'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>SQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>AI</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>GGSIPU</li>
                <li>The Indian School</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Apna College - Java DSA</li>
                <li>Udemy - Web Development</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image 
                src='/image/aboutme.jpg'
                width={500} 
                height={500}
            />
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'> Hi, I'm Asmita Chauhan, a 21-year-old B.Tech IT student at IP University, passionate about coding and exploring diverse fields. I excel in art, craft, and creativity, embodying organization, efficiency, and a strong work ethic. A dedicated learner and listener, I leverage my skills to achieve goals effectively. Beyond coding, I value collaboration and continuous learning. I enjoy working closely with clients to understand their goals and deliver solutions that exceed expectations. My goal is not just to write code, but to create impactful digital experiences that leave a lasting impression.</p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {" "} Skills {" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> {" "} Education {" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> {" "} Certifications {" "} </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection