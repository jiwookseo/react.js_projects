import { createAction } from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT);
export const insert = createAction(INSERT);
export const toggle = createAction(TOGGLE);
export const remove = createAction(REMOVE);
