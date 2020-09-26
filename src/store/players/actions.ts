import { ADD, SET_NAME, REMOVE } from './constants';
import { Player } from './types';

export const addPlayer = (player: Player) => ({ type: ADD, payload: player } as const);
export const setPlayerName = (playerId: number, name: string) =>
    ({ type: SET_NAME, payload: { playerId, name } } as const);
export const removePlayer = (playerId: number) => ({ type: REMOVE, payload: playerId } as const);
