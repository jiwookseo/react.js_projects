import React from 'react';
import BingoGrid from '../components/BingoGrid'
import StartButton from '../components/StartButton'


function App() {
  return (
    <div className="">
      <div className="">
        <StartButton />
      </div>
      <div className="">
        <BingoGrid />
      </div>
      <div className="">
        <BingoGrid />
      </div>
    </div>
  );
}

export default App;
