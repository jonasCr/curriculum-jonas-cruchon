import React from 'react'

const Navbar = () => {
  return (
    <div className='flex h-full items-center p-12'>
      <div>
        <img className='w-48 rounded-full border-8 border-accent-50/25' src='jonas-cruchon.JPG' />
        <nav className='mt-10'>
          <ul className='text-accent-50 text-center'>
            <li className={`font-bold mb-4 text-opacity-60 opacity-50`}>About</li>
            <li className={`font-bold mb-4 text-opacity-60 opacity-50`}>Experience</li>
            <li className={`font-bold mb-4 text-opacity-60`}>Education</li>
            <li className={`font-bold mb-4 text-opacity-60 opacity-50`}>Skills</li>
            <li className={`font-bold mb-4 text-opacity-60 opacity-50`}>Certification</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar