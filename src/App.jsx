import React, { useRef } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';
import useScrollSpy from './hooks/UseScrollSpy';

function App() {

  const sectionsRefs = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]
  const scrollElement = useRef()
  const activeSection = useScrollSpy({
    sectionElementRefs: sectionsRefs,
    offsetPx:-80,
    scrollingElement: scrollElement
  })
  return (
    <div className='block md:flex h-screen text-primary-800'>
      <div className="bg-accent-900 text-textAccent flex-none md:h-full w-full md:w-auto">
        <Navbar sectionsRef={sectionsRefs} activeSection={activeSection}></Navbar>
      </div>
      <div ref={scrollElement} className='flex-auto h-screen overflow-y-scroll bg-accent-50'>
        <Main sectionsRef={sectionsRefs}/>
      </div>
    </div>
  );
}

export default App;
