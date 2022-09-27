import React from 'react'
import About from './main/About'
import Certification from './main/Certification'
import Education from './main/Education'
import Experience from './main/Experience'
import Skills from './main/Skills'

const Main = () => {
  return (
    <main className='md:h-screen md:overflow-scroll'>
      <section className='h-screen flex items-center justify-center border-b-4 border-accent-900'>
        <About />
      </section>
      <section className='h-screen flex items-center justify-center border-b-4 border-accent-900'>
        < Certification />
      </section>
      <section className='h-screen flex items-center justify-center border-b-4 border-accent-900'>
        < Education />
      </section>
      <section className='h-screen flex items-center justify-center border-b-4 border-accent-900'>
        < Experience />
      </section>
      <section className='h-screen flex items-center justify-center border-b-4 border-accent-900'>
        < Skills />
      </section>
    </main>
  )
}

export default Main