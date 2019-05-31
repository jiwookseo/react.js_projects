/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types'
import { Map, List } from "immutable";
import Bingo from './Bingo'


const BingoList = ({ player1, player2, onSelete, index }) => {
  const player = index === 1 ? player1 : player2;
  return (
    <div className="columns is-multiline is-mobile is-vcentered">
      {player.get('numbers').map((number, i) => (
        <Bingo 
          key={i}
          number={number}
          onSelete={onSelete}
        />
      ))}
    </div>
  )};

BingoList.propTypes = {
  index: PropTypes.number,
  player1: PropTypes.instanceOf(Map),
  player2: PropTypes.instanceOf(Map),
  onSelete: PropTypes.func,
}

BingoList.defaultProps = {
  index: 0,
  player1: Map({
    numbers: List(Array(25).fill('')),
    completed: List(Array(25).fill(false))
  }),
  player2: Map({
    numbers: List(Array(25).fill('')),
    completed: List(Array(25).fill(false))
  }),
  onSelete: () => console.warn('onSelete not defined'),
};

export default BingoList;
