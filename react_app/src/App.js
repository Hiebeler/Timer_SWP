import { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0)
  const [inputTime, setInputTime] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    let interval;

    if (started && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 0.1);
      }, 100);
    } else {
      setTime(0)
      setStarted(false)
    }

    return () => clearInterval(interval);
  }, [started, time]);

  const start = () => {
    if (!isNaN(inputTime) && inputTime > 0 && !started) {
      setTime(parseInt(inputTime, 10));
      setStarted(true);
    }
  };
  return (
    <div className="h-screen w-screen bg-gray-900 pt-24">
      <h1 className="text-3xl font-bold text-white text-center">
        Timer
      </h1>
      <div className='flex flex-row align-middle justify-center mt-10 gap-5'>
        <input disabled={started} placeholder='seconds' type='number' value={inputTime} onChange={(e) => {setInputTime(e.target.value); setTime(e.target.value)}} class="w-44 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button onClick={start} disabled={started} className='text-xl font-bold text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Start</button>
      </div>
      <div className='text-white text-center'>
        {Math.round(time)}
      </div>
    </div>
  );
}

export default App;
