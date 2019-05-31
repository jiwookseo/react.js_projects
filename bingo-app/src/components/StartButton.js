/* eslint-disable react/prop-types */
import React from 'react';

function StartButton({onStart, onRestart, gameStart}) {
  const handle = gameStart ? onRestart : onStart;
  const message = gameStart ? "게임 재시작" : "게임 시작";
  return (
    <button
      type="button"
      className="button"
      onClick={handle}
    >
      {message}
    </button>
    );
}

export default StartButton;
