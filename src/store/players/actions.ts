import { ADD, SET_NAME, REMOVE, SET_SPIES } from './constants';
import { Player } from './types';

export const addPlayer = (player: Player) => ({ type: ADD, payload: player } as const);
export const setPlayerName = (playerId: number, name: string) =>
    ({ type: SET_NAME, payload: { playerId, name } } as const);
export const removePlayer = (playerId: number) => ({ type: REMOVE, payload: playerId } as const);
export const setSpies = (playersIds: number[]) => ({ type: SET_SPIES, payload: playersIds } as const);
