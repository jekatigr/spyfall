import { SET_COUNT, SET_RANDOM, SET_SPECIFIC, TOGGLE_FAMILIAR } from './constants';

export const setSpiesCount = (count: number) => ({ type: SET_COUNT, payload: count } as const);
export const setSpiesRandom = () => ({ type: SET_RANDOM } as const);
export const setSpiesSpecific = () => ({ type: SET_SPECIFIC } as const);
export const toggleSpiesFamiliar = () => ({ type: TOGGLE_FAMILIAR } as const);
