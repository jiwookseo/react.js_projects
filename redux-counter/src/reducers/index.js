import * as types from '../actions/ActionTypes';
import { Map, List } from 'immutable';

const initialState = Map({
    counters: List([
        Map({
            color: 'black',
            number: 0,
        })
    ])
})

function counter(state = initialState, action) {
    const counters = state.get('counters');
    switch (action.type) {
        case types.CREATE:
            return state.set('counters', counters.push(Map({ color: action.color, number: 0, })));
        case types.REMOVE:
            return state.set('counters', counters.pop());
        case types.INCREMENT:
            return state.set('counters', counters.update(
                action.index,
                counter => counter.set('number', counter.get('number') + 1)));
        case types.DECREMENT:
            return state.set('counters', counters.update(
                action.index,
                counter => counter.set('number', counter.get('number') - 1)));

        case types.SET_COLOR:
            return state.set('counters', counters.update(
                action.index,
                counter => counter.set('color', action.color)));
        default:
            return state;
    }
};

export default counter;