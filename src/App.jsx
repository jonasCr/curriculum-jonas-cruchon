import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='block md:flex h-screen'>
      <div className="bg-accent-900 text-textAccent flex-none">
        <Navbar></Navbar>
      </div>
      <div className='bg-accent-50 flex-auto'>
        <h1>Mi career</h1>
      </div>
    </div>
  );
}

export default App;
