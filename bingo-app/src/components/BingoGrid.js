import React from 'react';
import Bingo from './Bingo'

function BingoGrid() {
  return (
    <div className="columns is-multiline is-mobile is-vcentered">
      {[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25].map((num) => (
        <div className="column is-one-fifth">
          <Bingo number={num} />
        </div>
      ))}
    </div>
  );
}

export default BingoGrid;
