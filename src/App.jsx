import React, { useRef } from 'react';
import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {

  const sectionsRefs = [useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)]

  return (
    <div className='block md:flex h-screen'>
      <div className="bg-accent-900 text-textAccent flex-none md:h-full w-full md:w-auto">
        <Navbar sectionsRef={sectionsRefs}></Navbar>
      </div>
      <div id='main' className='flex-auto h-screen overflow-y-scroll bg-accent-50'>
        <Main sectionsRef={sectionsRefs}/>
      </div>
    </div>
  );
}

export default App;
