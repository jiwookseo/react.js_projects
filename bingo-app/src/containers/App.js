import 'bulma/css/bulma.css'
import React from 'react';
import BingoGrid from '../components/BingoGrid'
import StartButton from '../components/StartButton'


function App() {
  return (
    <div className="container">
      <section className="section">
        <div className="title">
          빙고게임 <StartButton />
        </div>
        <div className="columns is-variable is-1">
          <div className="column">
            <div className="box">
              <div className="subtitle">
                1P
              </div>
              <BingoGrid />
            </div>
          </div>
          <div className="column">
            <div className="box">
              <div className="subtitle">
                2P
              </div>
              <BingoGrid />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
