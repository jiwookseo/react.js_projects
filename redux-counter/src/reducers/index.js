import * as types from '../actions/ActionTypes';

const initialState = {
    counters: [
        {
            color: 'black',
            number: 0,
        }
    ]
}

function counter(state = initialState, action) {
    const { counters } = sate;
    switch (action.type) {
        case types.CREATE:
            return {
                counters: [
                    ...counters,
                    {
                        color: action.color,
                        number: 0
                    }
                ]
            };
        case types.REMOVE:
            return {
                counters: counters.slice(0, counters.length - 1)
            };

        case types.INCREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number + 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        // action.index 번째 카운터의 number 에 1 을 뺍니다
        case types.DECREMENT:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        number: counters[action.index].number - 1
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };

        // action.index 번째 카운터의 색상을 변경합니다
        case types.SET_COLOR:
            return {
                counters: [
                    ...counters.slice(0, action.index),
                    {
                        ...counters[action.index],
                        color: action.color
                    },
                    ...counters.slice(action.index + 1, counters.length)
                ]
            };
        default:
            return state;
    }
}