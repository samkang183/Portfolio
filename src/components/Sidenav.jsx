import React, { useState } from 'react';
import {AiOutlineMenu, AiOutlineHome, AiOutlineProject, AiOutlineMail} from 'react-icons/ai';
import {BsPerson} from 'react-icons/bs';
import {GrProjects} from 'react-icons/gr';
import Resume from '../assets/NewFinal.pdf'

const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
  return (
    <div>
        <AiOutlineMenu 
        onClick={handleNav} 
        className='absolute top-4 right-4 z-[99] md:hidden'
        />
        {nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                <a onClick={handleNav} href="#main" title="Home" className='w-[75%] md:w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineHome size={20}/>
                    <span className='pl-4'>Home</span>
                </a>
                <a onClick={handleNav} href="#work" title="Work" className='w-[75%] md:w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <GrProjects size={20}/>
                    <span className='pl-4'>Work</span>
                </a>
                <a onClick={handleNav} href="#project" title="Projects" className='w-[75%] md:w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineProject size={20}/>
                    <span className='pl-4'>Projects</span>
                </a>
                <a onClick={handleNav} href={Resume} title="Resume" className='w-[75%] md:w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <BsPerson size={20}/>
                    <span className='pl-4'>Resume</span>
                </a>
                <a onClick={handleNav} href="#contact" title="Contact" className='w-[75%] md:w-[50%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                    <AiOutlineMail size={20}/>
                    <span className='pl-4'>Contact</span>
                </a>
                </div>
            ) : (
                ''
            )}
             <div className='md:block hidden fixed top-[25%] z-10'>
                <div className='flex flex-col'>
                    <a href='#main' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineHome title="Home" size={20}/>
                    </a>
                    <a href='#work' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <GrProjects title="Work" size={20}/>
                    </a>
                    <a href='#project' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineProject title="Projects" size={20}/>
                    </a>
                    <a href={Resume} className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <BsPerson title="Resume" size={20}/>
                    </a>
                    <a href='#contact' className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <AiOutlineMail title="Contacts" size={20}/>
                    </a>
                </div>
             </div>
    </div>
  );
};

export default Sidenav