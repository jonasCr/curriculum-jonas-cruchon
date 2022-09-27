import './App.css';
import Main from './components/Main';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='block md:flex h-screen'>
      <div className="bg-accent-900 text-textAccent flex-none md:h-full">
        <Navbar></Navbar>
      </div>
      <div className='flex-auto bg-accent-50'>
        <Main/>
      </div>
    </div>
  );
}

export default App;
