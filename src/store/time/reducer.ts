import { Reducer } from 'combine-reducers';
import { TimeActionsType, TimeStateType } from './types';
import {
    SET_QUESTIONS_TIME_LIMIT,
    SET_DISCUSSION_TIME_LIMIT,
    TOGGLE_SOUND,
    SET_QUESTIONS_TIME_START,
    SET_DISCUSSION_TIME_START,
} from './constants';

const initialState = {
    questions: {
        limit: 1,
        start: 0,
    },
    discussion: {
        limit: 1,
        start: 0,
    },
    sound: false,
};

const timeReducer: Reducer<TimeStateType, TimeActionsType> = (
    state = initialState,
    action: TimeActionsType,
): TimeStateType => {
    switch (action.type) {
        case SET_QUESTIONS_TIME_LIMIT:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    limit: action.payload,
                },
            };
        case SET_QUESTIONS_TIME_START:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    start: action.payload,
                },
            };
        case SET_DISCUSSION_TIME_LIMIT:
            return {
                ...state,
                discussion: {
                    ...state.discussion,
                    limit: action.payload,
                },
            };
        case SET_DISCUSSION_TIME_START:
            return {
                ...state,
                discussion: {
                    ...state.discussion,
                    start: action.payload,
                },
            };
        case TOGGLE_SOUND:
            return {
                ...state,
                sound: !state.sound,
            };
        default:
            return state;
    }
};

export default timeReducer;
