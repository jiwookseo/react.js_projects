/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint radix: ["error", "as-needed"] */

import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';

// action types
const START = 'bingo/START';
const RESTART = 'bingo/RESTART';
const END = 'bingo/END';
const SELECT = 'bingo/SELECT';

// actions
export const start = createAction(START); // numbers1, numbers2
export const restart = createAction(RESTART);
export const end = createAction(END); // length1, length2
export const select = createAction(SELECT); // number, index

// initial state
const initialState = Map({
  gameStart: false,
  gameTurn: 1,
  player1: Map({
    numbers: List(Array(25).fill(0)),
    completed: List()
  }),
  player2: Map({
    numbers: List(Array(25).fill(0)),
    completed: List()
  }),
  selected: List(Array(26).fill(false))
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
    return state.set('selected', List(Array(26).fill(false)))
      .set('player1', init1)
      .set('player2', init2)
      .set('gameTurn', 1);
  },

  [END]: (state, action) => {
    const {length1, length2} = action.payload;
    if (length1 > length2) {
      alert('1P가 빙고를 완성했습니다.');
    } else if (length1 === length2) {
      alert('무승부입니다.');
    } else {
      alert('2P가 빙고를 완성했습니다.');
    };
    return initialState
  },

  [SELECT]: (state, action) => {
    const {number, index} = action.payload;
    const s = state.get('selected').toJS()

    // 게임이 시작되지 않았을 때
    if (!state.get('gameStart')) return state

    // 이미 누른 번호
    if (s[number]) return state

    // 잘못된 턴일 때
    if (index !== state.get('gameTurn')){
      alert('잘못된 차례입니다.');
      return state
    }

    // 알맞은 턴일 때
    s[number] = true;
    const player = [
      state.get('player1').toJS(),
      state.get('player2').toJS()
    ];
    const n = player.map(p => p.numbers);
    const i = player.map(p => p.numbers.indexOf(number));
    const c = [player[0].completed, player[1].completed];
    
    i.forEach((temp, p) => {
      if (temp % 6 === 0) {
        if (s[n[p][0]] && s[n[p][6]] && s[n[p][12]] && s[n[p][18]] && s[n[p][24]]) {
          c[p].push('\\');  // 역슬래시 대각선
        }
      }
      if (temp % 4 === 0) {
        if (s[n[p][4]] && s[n[p][8]] && s[n[p][12]] && s[n[p][16]] && s[n[p][20]]) {
          c[p].push('/');  // 슬래시 대각선
        }
      }
      const tr = parseInt(temp / 5);
      const tc = temp % 5;
      if (s[n[p][tr*5]] && s[n[p][tr*5+1]] && s[n[p][tr*5+2]] && s[n[p][tr*5+3]] && s[n[p][tr*5+4]]) {
        c[p].push(`${tr+1}행`);  // 가로행
      }
      if (s[n[p][tc]] && s[n[p][tc+5]] && s[n[p][tc+10]] && s[n[p][tc+15]] && s[n[p][tc+20]]) {
        c[p].push(`${tc+1}열`);  // 세로열
      }
    })
    return state
    .setIn(['selected', number], true)
    .setIn(['player1', 'completed'], fromJS(c[0]))
    .setIn(['player2', 'completed'], fromJS(c[1]))
    .update('gameTurn', turn => 3 - turn);
  },
}, initialState);