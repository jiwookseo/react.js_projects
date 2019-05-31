/* eslint-disable react/prop-types */
import React from 'react';

const Completed = ({player1, player2, index}) => {
  const player = index === 1 ? player1 : player2;
  const completedList = player.get('completed').map(completed => (
    <div>{completed}</div>
  ));
  return (
    <div>
      {completedList}
    </div>
    );
};

export default Completed;
