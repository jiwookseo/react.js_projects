import { createAction, handleActions } from 'redux-actions';

const INCREMET = 'counter/INCREMENT';
const DECREMET = 'counter/DECREMENT';

export const increment = createAction(INCREMET);
export const decrement = createAction(DECREMET);

const initialState = {
    number: 0
};

export default handleActions({
    [INCREMET]: ({ number }) => ({ number: number + 1 }),
    [DECREMET]: ({ number }) => ({ number: number - 1 }),
}, initialState);