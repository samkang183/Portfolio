import React from 'react'
import ProjectItem from './ProjectItem'
import OlProjectItem from './OlProjectItem'
import pic1 from '../assets/cryptoweb.png';
import pic2 from '../assets/fakebnb.png';
import pic3 from '../assets/parallax.png';
import pic4 from '../assets/teamE.png';

const Project = () => {
  return (
    <div id='project'>
      <div className= "bg-[url('/seoulbot.jpg')] bg-cover ">
      <div className='bg-white/50'>
      <div className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
          <h1 className='text-4xl font-bold text-center py-8 text-[#001b5e]'>Projects</h1>
          <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={pic1} title='CryptoWeb' link='https://cryptoweb-e2587.web.app/'/>
            <OlProjectItem img={pic4} title='PetBarn'/>
            <ProjectItem img={pic2} title='Fakebnb' link='https://samkang183.github.io/Fakebnb/'/>
            <ProjectItem img={pic3} title='Parallax' link='https://samkang183.github.io/ParallaxScroll/'/>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project