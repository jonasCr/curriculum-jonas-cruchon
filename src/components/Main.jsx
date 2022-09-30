import React from 'react'
import About from './main/About'
import Certification from './main/Certification'
import Education from './main/Education'
import Experience from './main/Experience'
import Skills from './main/Skills'

const Main = ({sectionsRef}) => {
  
  return (
    <main>
      <section id="about" ref={sectionsRef[0]} className='min-h-screen flex items-center border-b-4 border-accent-900'>
        <About />
      </section>
      <section id="experience" ref={sectionsRef[1]} className='min-h-screen flex border-b-4 border-accent-900'>
        < Experience />
      </section>
      <section id="education" ref={sectionsRef[2]} className='min-h-screen flex items-center border-b-4 border-accent-900'>
        < Education />
      </section>
      <section id="skills" ref={sectionsRef[3]} className='min-h-screen flex items-center border-b-4 border-accent-900'>
        < Skills />
      </section>
      <section id="certification" ref={sectionsRef[4]} className='min-h-screen flex items-center border-b-4 border-accent-900'>
        < Certification />
      </section>
    </main>
  )
}

export default Main