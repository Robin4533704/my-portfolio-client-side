import { useState } from 'react';
import './App.css';
import ThemeToggle from './Componets/root/Homepage/banner page/ThemeToggle';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
   <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-8">
  <ThemeToggle/>
  <h1 className='text-5xl font-bold mt-4'>personal portfolio</h1>
</div>

    </>
  );
}

export default App;