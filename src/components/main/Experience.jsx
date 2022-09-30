import React from 'react'

const Experience = () => {
  return (
    <div className='md:p-14 p-8 w-full'>
      <h2 className='section-title'>Experience</h2>
      {
        [0,1,2,3,4,5].map((item,key)=> (
          <div className='md:mb-16 mb-8' key={key}>
            <div className='md:flex block'>
              <div className='flex-auto'>
                <h3 className='md:text-2xl text-xl text-primary-900 uppercase font-bold'>Desarollador Full Stack</h3>
                <h4 className='md:text-xl text-lg uppercase font-normal text-primary-700'>Sopra Steria, Madrid, Spain</h4>
                <h5 className='md:hidden block text-accent-900 font-medium text-sm '>Feb 2018 - Present</h5>
                <p className='font-light text-primary-700 mt-6'>Lorem ipsum dolor sit</p>
              </div>
              <div className='flex-none hidden md:block'>
                <h5 className='text-accent-900 font-medium text-sm '>Feb 2018 - Present</h5>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Experience