import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
    year: 2022,
    title: 'Manager at Salon Yangmi Inc',
    location: 'Niles, IL',
    duration: 'March 2022 - Present',
    details:
    'Manage and lead a team of 4 hair designers and 3 assistant staffs to deliver high quality of service and ensure clientele satisfaction',
    details1:
    'Coordinate daily scheduling amongst 4 hair designers on various type of service that requires different time length to fit as many clientele while maintaining high satisfaction which increased in daily sale by 8%~15%',
    details2:
    'Optimized internal policy and enforced to maintain efficient workflow and minimize number of backed up on the service',
  },
    {
      year: 2020,
      title: 'Receptionist at Salon Yangmi Inc',
      location: 'Niles, IL',
      duration: 'May 2020 - May 2021',
      details:
      'Analyzed the previous exisitng scheduling process and recommend a different time block length for each service, resulting in increase of number of clients served daily',
      details1:
      'Evaluated clients appointment scheduling system and implemented secondary scheduling procedure to ensure on clients need, which reduced number of complaints',
      details2:
      'Practice communicating with unsatisifed cllients to resolve conflicts by offering solutions to meet clients satisfaction'
  },
  {
    year: 2017,
    title: 'Website/App Tester at Knowre Company',
    location: 'Seoul, South Korea',
    duration: 'March 2017 - July 2017',
    details:
    'Analyzed the company testing method and conducted various testings of my own to detect programming, mathematical, navigation, or grammar errors, resulting in extra 10-15 errors found daily.',
    details1:
    'Improvedf communication with the software development team by reporting errors using video guidance to recreate certain errors.',
    details2:
    'Assess the newly updated software to ensure reported errors have been solved, while other exisitng functionalities perfrom correctly.'
},

]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center pb-4 text-[#001b5e]'>Work</h1>
        {data.map((item, idx)=>(
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                location={item.location}
                duration={item.duration} 
                details={item.details}
                details1={item.details1}
                details2={item.details2}/>
        ))}
    </div>
  )
}

export default Work