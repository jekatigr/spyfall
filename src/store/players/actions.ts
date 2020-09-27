import { ADD, SET_NAME, REMOVE, SET_SPIES, TOGGLE_UNDER_SUSPICION } from './constants';
import { Player } from './types';

export const addPlayer = (player: Player) => ({ type: ADD, payload: player } as const);
export const setPlayerName = (playerId: number, name: string) =>
    ({ type: SET_NAME, payload: { playerId, name } } as const);
export const removePlayer = (playerId: number) => ({ type: REMOVE, payload: playerId } as const);
export const setSpies = (playersIds: number[]) => ({ type: SET_SPIES, payload: playersIds } as const);
export const toggleUnderSuspicion = (playersId: number) =>
    ({ type: TOGGLE_UNDER_SUSPICION, payload: playersId } as const);
