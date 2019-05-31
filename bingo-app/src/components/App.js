import 'bulma/css/bulma.css'
import React from 'react';
import BingoListContainer from '../containers/BingoListContainer'
import StartButtonContainer from '../containers/StartButtonContainer'

const App = () => (
  <div className="container">
    <section className="section">
      <div className="title">
          빙고게임 <StartButtonContainer />
      </div>
      <div className="columns is-variable is-1">
        <div className="column">
          <div className="box">
            <div className="subtitle">
                1P
            </div>
            <BingoListContainer index={1} />
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="subtitle">
                2P
            </div>
            <BingoListContainer index={2} />
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default App;