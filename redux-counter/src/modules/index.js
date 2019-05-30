import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

// action types
const CREATE = 'counter/CREATE';
const REMOVE = 'counter/REMOVE';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';
const SET_COLOR = 'counter/SET_COLOR';

// actions
export const create = createAction(CREATE); // color
export const remove = createAction(REMOVE);
export const increment = createAction(INCREMENT); // index
export const decrement = createAction(DECREMENT); // index
export const setColor = createAction(SET_COLOR); // { index, color }

export const incremnetAsync = index => (dispatch) => {
  setTimeout(
    () => { dispatch(increment(index)); },
    1000,
  );
};

export const decremnetAsync = index => (dispatch) => {
  setTimeout(
    () => { dispatch(decrement(index)); },
    1000,
  );
};

// initial state
const initialState = Map({
  counters: List([
    Map({
      color: 'black',
      number: 0,
    }),
  ]),
});

export default handleActions({
  [CREATE]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.push(
      Map({
        color: action.payload,
        number: 0,
      }),
    ));
  },
  [REMOVE]: (state) => {
    const counters = state.get('counters');
    return state.set('counters', counters.pop());
  },
  [INCREMENT]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload,
      counter => counter.set('number', counter.get('number') + 1),
    ));
  },
  [DECREMENT]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload,
      counter => counter.set('number', counter.get('number') - 1),
    ));
  },
  [SET_COLOR]: (state, action) => {
    const counters = state.get('counters');
    return state.set('counters', counters.update(
      action.payload.index,
      counter => counter.set('color', action.payload.color),
    ));
  },
}, initialState);
