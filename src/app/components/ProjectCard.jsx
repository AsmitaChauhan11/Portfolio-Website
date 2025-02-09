import React from 'react'
import { CodeBracketIcon, EyeIcon} from '@heroicons/react/24/outline';
import Link from 'next/link'

const ProjectCard = ({ title, description, techstack, imgUrl, demoUrl }) => {
  return (
    <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
      <div className="cursor-pointer">
          <div className='h-52 md:h-72 rounded-t-xl relative group' style={{ background: `url(${imgUrl})`, backgroundSize: 'cover', width:'100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
              <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500'>
              </div>
          </div>
          <div className='text-white rounded-b-xl bg-[#181818] py-6 px-4'>
              <h5 className='font-xl font-semibold mb-2'>{title}</h5>
              <p className='text-[#ADB7BE] mb-2'>{description}</p>
              <p className='text-[#ADB7BE]'>{techstack}</p>
          </div>
      </div>
    </Link>
  );
};

export default ProjectCard