import React from 'react'

const Education = () => {
  return (
    <div className='md:p-14 p-8 min-w-full'>
      <h2 className='section-title'>Education</h2>
      {
        [0,1,2].map((item,key)=> (
          <div className='md:mb-16 mb-8 grid grid-cols-3 justify-between' key={key}>
            <div className='col-span-2'>
              <h3 className='md:text-2xl text-xl mb-3 text-primary-900 uppercase font-bold'>Computer Engineering Degree</h3>
            </div>
            <div className='text-right'>
              <h5 className='text-accent-900 font-medium text-sm '>2022 - Present</h5>
            </div>
            <div className='flex items-center col-span-3 lg:col-span-2'>
              <img className=' block h-10 mr-4' src="https://unedmadrid.es/wp-content/uploads/centro-asociado-uned.png" alt="uned logo" />
              <h4 className='block  md:text-lg text-base uppercase font-normal text-primary-700'>
                <span>Universidad Nacional de Educacion a Distancia, Madrid, España</span>
              </h4>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Education