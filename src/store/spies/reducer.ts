import { Reducer } from 'combine-reducers';
import { SpiesActionsType, SpiesStateType } from './types';
import { SET_COUNT, SET_RANDOM, SET_SPECIFIC, TOGGLE_FAMILIAR } from './constants';

const initialState = {
    count: 1,
    isRandom: false,
    isFamiliar: true,
};

const spiesReducer: Reducer<SpiesStateType, SpiesActionsType> = (
    state = initialState,
    action: SpiesActionsType,
): SpiesStateType => {
    switch (action.type) {
        case SET_COUNT:
            return {
                ...state,
                count: action.payload,
            };
        case SET_RANDOM:
            return {
                ...state,
                isRandom: true,
            };
        case SET_SPECIFIC:
            return {
                ...state,
                isRandom: false,
            };
        case TOGGLE_FAMILIAR:
            return {
                ...state,
                isFamiliar: !state.isFamiliar,
            };
        default:
            return state;
    }
};

export default spiesReducer;
