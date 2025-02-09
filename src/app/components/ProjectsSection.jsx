import React from 'react'
import ProjectCard from './ProjectCard'
import Image from 'next/image'

const projectsData = [
    {
        id: 1,
        title: "Smart Recipe Finder",
        description: "A web application that simplifies meal planning by recommending recipes based on user provided ingredients. It offers personalized recipe suggestions, allows users to save, share, and blog about recipes.",
        techstack: "Used : React.js, Python-Flask, MySQL and Spoonacular API",
        image: "/assets/recipefinder.png",
        demoUrl: "https://github.com/AsmitaChauhan11/Foodieland",
    },
    {
        id: 2,
        title: "Expense Tracker",
        description: "A web application for managing personal finances that includes features like adding budget, displaying expenses, editing, and deleting expenses and visualizing data through bar charts.",
        techstack: "Used : Next.js, Tailwind CSS, Drizzle ORM and Clerk(Authentication)",
        image: "/assets/expensetracker.png",
        demoUrl: "https://expense-tracker-woad-kappa.vercel.app"
    },
    {
        id: 3,
        title: "Pizza Website",
        description: "Developed a responsive landing page featuring a quick-ordering system, About, Menu, Services, Delivery Options, and Contact Us sections. Integrated a virtual assistant for enhanced customer support.",
        techstack: "Used : HTML, CSS, JavaScript",
        image: "/assets/pizza.png",
        demoUrl: "https://pizza-cafe-landing-page.vercel.app"
    },
    {
        id: 4,
        title: "Event Calendar",
        description: "The Event Calendar is an interactive website that allows users to manage their schedules effortlessly. It displays a well-aligned monthly grid where users can navigate between months, add events by clicking on a date, and edit or delete them as needed. Each event includes a name, start and end time, and description for better organization.",
        techstack: "Used: React.js",
        image: "/assets/eventcalendar.png",
        demoUrl: "https://event-calendar-sooty.vercel.app"
    },
    {
        id: 5,
        title: "Cafe Landing Page",
        description: "A cozy and inviting Café Landing Page featuring a seamless browsing experience. The homepage welcomes visitors with a warm 10% off and showcasing high-quality image of delicious food. The Menu section offers a detailed view of available drinks and food items, with descriptions and prices. The About section shares the café's story. The Contact section provides location details, and contact information.",
        techstack: "Used: HTML, CSS, JS",
        image: "/assets/bearcafe.png",
        demoUrl: "https://github.com/AsmitaChauhan11/Cafe-Landing-Page"
    },
    {
        id: 6,
        title: "Calculator",
        description: "Created a responsive calculator web page that performs basic arithmetic operations (addition, subtraction, multiplication, and division) with smooth button interactions and real-time result display.",
        techstack: "Used: HTML, CSS, JS",
        image: "/assets/calculator.png",
        demoUrl: "https://github.com/AsmitaChauhan11/Calculator"
    },
];
const ProjectsSection = () => {
  return (
    <>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8'>My Projects</h2>
        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
            {projectsData.map((project) => (
                <ProjectCard 
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    techstack={project.techstack}
                    imgUrl={project.image}
                    demoUrl={project.demoUrl}
                />
            ))}
        </div>
    </>
  );
};

export default ProjectsSection