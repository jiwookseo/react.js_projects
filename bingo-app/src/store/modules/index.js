/* eslint-disable no-console */
import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// action types
const START = 'bingo/START';
const RESTART = 'bingo/RESTART';
const SELETE = 'bingo/SELETE';

// actions
export const start = createAction(START); // numbers1, numbers2
export const restart = createAction(RESTART);
export const select = createAction(SELETE); // numbers

// initial state
const initialState = Map({
  gameStart: false,
  player1: Map({
    numbers: List(Array(25).fill('')),
    completed: List(Array(25).fill(false))
  }),
  player2: Map({
    numbers: List(Array(25).fill('')),
    completed: List(Array(25).fill(false))
  }),
  selected: List(Array(25).fill(false))
});

export default handleActions({
  [START]: (state, action) => {
    return state.set('gameStart', true)
    .setIn(['player1','numbers'], action.payload.numbers1)
    .setIn(['player2','numbers'], action.payload.numbers2);
    // TODO: 숫자 샘플 랜덤 생성
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
      .set('player2', init2);
  },
  [SELETE]: (state, action) => {
    return state.update(state.getIn(['player1','completed']),
        (bool, index) => index + 1 === action ? true : bool)
      .update(state.getIn(['player2','completed']),
        (bool, index) => index + 1 === action ? true : bool);
  },
}, initialState);
