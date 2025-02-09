'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>React.js</li>
                <li>MySQL</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>Next.js</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>GGSIPU BTech (2021-25)</li>
                <li>The Indian School (10th & 12th)</li>
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
                <li>Walmart USA Advanced Software Engineering Virtual Experience Program on Forage </li>
            </ul>
        )
    },
    {
        title: "Extra-Curricular",
        id: "extracurricular",
        content: (
            <ul className='list-disc pl-2'>
                <li>Active member of The Campus Chronicles Society ADGIPS</li>
                <li>Volunteered for Hope Project Charitable Trust(NGO)</li>
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
                <p className='text-base lg:text-lg'> Hi, I&apos;m Asmita Chauhan, a final-year B.Tech IT student at IP University, with a CGPA of 9.2. My passion for coding, creativity, and problem-solving drives me to explore diverse fields in technology. A quick learner and problem solver, I thrive in team environments, bringing efficiency, innovation, and a strong work ethic to every project. Always eager to explore new technologies and methodologies, I strive to stay ahead in the ever-evolving tech landscape.</p>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> {" "} Skills {" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> {" "} Education {" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}> {" "} Certifications {" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("extracurricular")} active={tab === "extracurricular"}> {" "} Extra-Curricular {" "} </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection