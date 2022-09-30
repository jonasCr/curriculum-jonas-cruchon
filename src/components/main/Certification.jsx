import React from 'react'

const Certification = () => {
  return (
    <div className='md:p-14 p-8 w-full'>
      <h2 className='section-title'>Certifications</h2>
      {
        [0,1,2].map((item,key)=> (
          <div key={key} className='ml-4 md:mb-16 mb-8'>
            <h3 className='md:text-2xl text-xl text-primary-900 uppercase font-bold'>Ansible</h3>
            <div className='flex space-x-3 items-baseline'>
              <h4 className='md:text-xl text-lg uppercase font-normal text-primary-600'>Sopra Steria Academy</h4>
              <p className='text-accent-900 uppercase font-light'>(Sept 2022)</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Certification