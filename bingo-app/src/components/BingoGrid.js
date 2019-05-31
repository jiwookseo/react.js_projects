import React from 'react';
import Bingo from './Bingo'

function BingoGrid() {
  return (
    <div>
      {[1,2,3,4,5,6,7,8,9,10].map((num) => (<Bingo number={num} />))}
    </div>
  );
}

export default BingoGrid;
