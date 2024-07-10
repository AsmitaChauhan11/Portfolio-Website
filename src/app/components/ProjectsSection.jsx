import React from 'react'
import ProjectCard from './ProjectCard'
import Image from 'next/image'

const projectsData = [
    {
        id: 1,
        title: "Calculator",
        description: "Made a calculator using html, css and js",
        image: "/assets/calculator.png",
    },
    {
        id: 2,
        title: "Form",
        description: "Made a sign up form for college students",
        image: "/assets/form.png",
    },
    {
        id: 3,
        title: "Cafe Landing Page",
        description: "Made a cafe landing page whete you can see the menu of the cafe, it's location and contact them.",
        image: "/assets/landingpage.png",
    },
    {
        id: 4,
        title: "Dice Game",
        description: "Made a dice game in which there are two players and two dices which roll randomly and tells which player win or it is draw.",
        image: "/assets/dicegame.png",
    },
    {
        id: 5,
        title: "Starbucks Clone",
        description: "Made a clone website of starbucks with few additional features",
        image: "/assets/Starbucks.jpg",
    },
    {
        id: 6,
        title: "Movie Recommendation",
        description: "Made a python movie recommendation that recommend you movies based on your favorite movie.",
        image: "/assets/movierecom.png",
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
                    imgUrl={project.image}
                />
            ))}
        </div>
    </>
  );
};

export default ProjectsSection