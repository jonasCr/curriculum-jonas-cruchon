import React from 'react'

const About = () => {
  return (
    <div className='md:p-14 p-8'>
      <header className='uppercase text-primary-600 mb-6 md:mb-14'>
        <h1 className='md:text-5xl text-4xl mb-4 font-extrabold'>Jonas <span className='text-accent-900'>Cruchon</span></h1>
        <h3 className='text-2xl'>Self-taught <span className='text-accent-900 font-bold'>Full stack</span> Developper</h3>
        <h4 className='text-lg'>Madrid (MAD), Spain · <a className='text-accent-900 lowercase' href="mailto:jonas.cruchon@gmail.com">jonas.cruchon@gmail.com</a></h4>
      </header>
      <p className='max-w-3xl mb-6 md:mb-14 text-primary-600 font-light'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis placeat nobis repellat eligendi distinctio, itaque molestiae nihil quisquam aspernatur rem eius blanditiis sed tempora incidunt ipsum nesciunt minus tenetur delectus.
      </p>

      <ul className='flex justify-start space-x-4'>
        <li>
          <div className='bg-primary-600 w-12 h-12 rounded-full flex justify-center items-center'>
            <a target="_blank" className='text-textAccent' href="https://github.com/jonasCr">
              <svg className=' stroke-0 fill-textAccent' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </li>
        <li>
          <div className='bg-primary-600 w-12 h-12 rounded-full flex justify-center items-center'>
            <a target="_blank" className='text-textAccent' href="https://www.linkedin.com/in/jonas-cruchon-6b977b159">
              <svg className='stroke-0 fill-textAccent' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default About