import React from 'react'

const Experience = () => {
  return (
    <div className='md:p-14 p-8 w-full'>
      <h2 className='section-title'>Experience</h2>
      {
        [0,1,2,3,4,5].map((item,key)=> (
          <div className='md:mb-16 mb-8' key={key}>
            <div className='grid grid-cols-3'>
              <div className='col-span-3 md:col-span-2'>
                <h3 className='md:text-2xl text-xl text-primary-900 uppercase font-bold'>Desarollador Full Stack</h3>
                <h4 className='md:text-xl text-lg uppercase font-normal text-primary-700'>Sopra Steria, Madrid, Spain</h4>
              </div>
              <div className='col-span-3 md:col-span-1 md:text-right'>
                <h5 className='text-accent-900 font-medium text-sm '>Feb 2018 - Present</h5>
              </div>
              <div className='col-span-3 text-justify'>
                <p className='font-light text-primary-700 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi pariatur illo quia officia aut? Tempora excepturi voluptas dolores, illum corrupti veniam earum minus voluptatum dolore nemo pariatur ut magni! Deserunt.</p>
              </div>
              
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Experience