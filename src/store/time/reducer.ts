import { Reducer } from 'combine-reducers';
import { TimeActionsType, TimeStateType } from './types';
import { SET_DISCUSSION, SET_QUESTIONS, TOGGLE_SOUND } from './constants';

const initialState = {
    questions: 1,
    discussion: 1,
    sound: false,
};

const timeReducer: Reducer<TimeStateType, TimeActionsType> = (
    state = initialState,
    action: TimeActionsType,
): TimeStateType => {
    switch (action.type) {
        case SET_QUESTIONS:
            return {
                ...state,
                questions: action.payload,
            };
        case SET_DISCUSSION:
            return {
                ...state,
                discussion: action.payload,
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
