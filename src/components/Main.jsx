import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover' src='/src/assets/seoultop.jpeg'></img>
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-gray-900'>I'm Sam Kang</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I'm
            <TypeAnimation
                sequence={[
                    ' a Front-End Developer',
                    1000, 
                    ' aspired to become a Game Developer', 
                    2000,
                    ' a Tech Enthusiast',
                    2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ fontSize: '1em', paddingLeft:'5px' }}
                />
            </h2>
        <div className='flex justify-between pt-6 max-w-[100px] w-full'>
            <a href="https://www.linkedin.com/in/seunghyeong-kang/">
                <FaLinkedin className='cursor-pointer' size={20}/>
            </a>
            <a href="https://github.com/samkang183?tab=repositories">
                <FaGithub className='cursor-pointer' size={20}/>
            </a>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Main