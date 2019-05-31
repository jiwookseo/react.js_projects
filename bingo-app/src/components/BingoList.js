/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types'
import { Map, List } from "immutable";
import Bingo from './Bingo'


const BingoList = ({ player1, player2, onSelect, index, selected }) => {
  const player = index === 1 ? player1 : player2;
  return (
    <div className="columns is-multiline is-mobile">
      {player.get('numbers').map((number, i) => (
        <div
          className="column is-one-fifth"
          style={{ padding: "0", }}
        >
          <Bingo 
            key={i}
            number={number}
            onSelect={onSelect}
            index={index}
            check={selected.get(number - 1)}
          />
        </div>
      ))}
    </div>
  )};

BingoList.propTypes = {
  index: PropTypes.number,
  player1: PropTypes.instanceOf(Map),
  player2: PropTypes.instanceOf(Map),
  selected: PropTypes.instanceOf(List),
  onSelect: PropTypes.func,
}

BingoList.defaultProps = {
  index: 0,
  player1: Map({
    numbers: List(Array(25).fill(0)),
    completed: List()
  }),
  player2: Map({
    numbers: List(Array(25).fill(0)),
    completed: List()
  }),
  selected: List(Array(25).fill(false)),
  onSelect: () => console.warn('onSelect not defined'),
};

export default BingoList;
