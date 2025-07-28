'use client'
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Lenskart",
        id: "lenskart",
        content: (
            <ul className='list-disc pl-2'>
                <li>Participated in a structured Kissflow training program designed to provide comprehensive knowledge of workflow creation and platform functionality.</li>
                <li>Developed comprehensive Kissflow dashboards using Snowflake SQL, allowing cross-functional teams to track the real-time status of store openings, project milestones, and process bottlenecks. These dashboards significantly improved visibility and made TAT/KPI calculations 90% faster and easier by automating data aggregation and reporting.</li>
                <li>Leveraged JavaScript extensively to implement front-end functionalities, including custom buttons, conditional logic, field behaviors, and validations, enhancing the overall user experience and reducing manual effort.</li>
                <li>Designed and deployed custom Kissflow applications for the Commercials team, automating their NFA process with multi-level approvals, dynamic form logic, and integrations.</li>
                <li>Automated repetitive workflows using Kissflow’s scripting engine with JavaScript-based logic, enabling dynamic field values, user-specific rules, and seamless interaction between app modules.</li>
            </ul>
        )
    },
    {
        title: "Nokia",
        id: "nokia",
        content: (
            <ul className='list-disc pl-2'>
                <li>Designed and developed an end-to-end automation pipeline to streamline the CaDe summary session process, reducing manual effort by over 90%.</li>
                <li>Automated key tasks including attendance calculation, Q&A extraction from Microsoft Teams chat, unanswered question handling, feedback aggregation, and email generation.</li>
                <li>Built a drag-and-drop web interface that accepts session data files (CSV/Excel) and processes them using Ollama LLM to generate a polished .eml email report with attached Q&A documentation.</li>
                <li>Improved efficiency and accuracy by eliminating repetitive administrative tasks and ensuring timely, consistent reporting.</li>
            </ul>
        )
    }
]

const InternshipSection = () => {
    const [tab, setTab] = useState("lenskart");
    const [isPending, startTransition] = useTransition();
    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>Internship</h2>
                <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("lenskart")} active={tab === "lenskart"}> {" "} Lenskart {" "} </TabButton>
                    <TabButton selectTab={() => handleTabChange("nokia")} active={tab === "nokia"}> {" "} Nokia {" "} </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
            <Image 
                className='mt-4'
                src='/image/internship.jpg'
                width={500} 
                height={500}
            />
        </div>
    </section>
  );
};

export default InternshipSection