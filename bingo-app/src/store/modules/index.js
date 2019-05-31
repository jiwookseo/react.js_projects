/* eslint-disable no-alert */
/* eslint-disable no-console */
import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// action types
const START = 'bingo/START';
const RESTART = 'bingo/RESTART';
const SELECT = 'bingo/SELECT';

// actions
export const start = createAction(START); // numbers1, numbers2
export const restart = createAction(RESTART);
export const select = createAction(SELECT); // number, index

// initial state
const initialState = Map({
  gameStart: false,
  gameTurn: 1,
  player1: Map({
    numbers: List(Array(25).fill(0)),
    completed: List(Array(25).fill(false))
  }),
  player2: Map({
    numbers: List(Array(25).fill(0)),
    completed: List(Array(25).fill(false))
  }),
  selected: List(Array(25).fill(false))
});

export default handleActions({
  [START]: (state, action) => {
    return state.set('gameStart', true)
    .setIn(['player1','numbers'], action.payload.numbers1)
    .setIn(['player2','numbers'], action.payload.numbers2);
  },
  [RESTART]: (state, action) => {
    const init1 = Map({
      numbers: action.payload.numbers1,
      completed: List(Array(25).fill(false))
    });
    const init2 = Map({
      numbers: action.payload.numbers2,
      completed: List(Array(25).fill(false))
    });
    return state.set('selected', List(Array(25).fill(false)))
      .set('player1', init1)
      .set('player2', init2)
      .set('gameTurn', 1);
  },
  [SELECT]: (state, action) => {
    const {number, index} = action.payload;
    const gameTurn = state.get('gameTurn');
    // 게임이 시작되지 않았을 때
    if (!state.get('gameStart')) {
      alert(`게임을 시작해주세요`);
      return state
    }  
    // 잘못된 턴일 때
    if (index !== gameTurn){
      alert(`${gameTurn}P의 턴입니다.`);
      return state
    }
    // 알맞은 턴일 때
    return state
      .setIn(['selected', number - 1], true)
      .update('gameTurn', turn => 3 - turn);
  },
}, initialState);
