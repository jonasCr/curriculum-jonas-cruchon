import React from 'react'

const Navbar = ({sectionsRef, activeSection}) => {
  return (
    <div className='flex h-full items-center md:p-12 p-2 sm:pr-8 '>
      <div className='flex md:block justify-between w-full items-center'>
        <img className='inline-block md:h-48 h-14 mr-3 rounded-full md:border-8 border-4 border-accent-50/25' src='/assets/img/jonas-cruchon.JPG' />
        <nav className='md:mt-10 overflow-y-auto'>
          <ul className='text-accent-50 text-center flex space-x-3 md:flex-col'>
            <li className={
                activeSection == 0 
                ? 'font-bold md:mb-4 text-opacity-60'
                : 'font-bold md:mb-4 text-opacity-60 opacity-50'
              }>About</li>
            <li className={
                activeSection == 1
                ? 'font-bold md:mb-4 text-opacity-60'
                : 'font-bold md:mb-4 text-opacity-60 opacity-50'
              }>Experience</li>
            <li className={
                activeSection == 2
                ? 'font-bold md:mb-4 text-opacity-60'
                : 'font-bold md:mb-4 text-opacity-60 opacity-50'
              }>Education</li>
            <li className={
                activeSection == 3 
                ? 'font-bold md:mb-4 text-opacity-60'
                : 'font-bold md:mb-4 text-opacity-60 opacity-50'
              }>Skills</li>
            <li className={
                activeSection == 4 
                ? 'font-bold md:mb-4 text-opacity-60'
                : 'font-bold md:mb-4 text-opacity-60 opacity-50'
              }>Certification</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar