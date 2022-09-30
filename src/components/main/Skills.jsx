import React from 'react'

const Skills = () => {
  return (
    <div className='md:p-14 p-8 w-full'>
      <h2 className='section-title'>Skills</h2>
      {
        [0,1,2].map((item,key)=> (
          <div key={key} className='md:mb-16 mb-8'>
            <div className='grid grid-cols-6'>
              <div className='col-span-1 flex justify-center items-center'>
                <img className=' block h-10 mr-4' src="https://soka.gitlab.io/blog/post/2019-09-10-angular-http-get-basico/images/angular2.png" alt="uned logo" />
              </div>
              <div className='col-span-4'>
                <h3 className='md:text-2xl text-xl text-primary-900 uppercase font-bold'>Angular</h3>
                <p>Version: <code>{'>7.0'}</code></p>
              </div>
              <div className='col-span-1'>
                <p className='green-pills'>Mid-Senior</p>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Skills