import { InferValueTypes } from 'store/types';
import * as actions from './actions';

export type PlayerColor =
    | 'coral'
    | 'green'
    | 'wine'
    | 'dark-blue'
    | 'pink'
    | 'yellow'
    | 'purple'
    | 'raspberry'
    | 'acid-green'
    | 'light-green'
    | 'sky-blue'
    | 'blue';

// eslint-disable-next-line import/prefer-default-export
export const PLAYER_COLORS: PlayerColor[] = [
    'coral',
    'green',
    'wine',
    'dark-blue',
    'pink',
    'yellow',
    'purple',
    'raspberry',
    'acid-green',
    'light-green',
    'sky-blue',
    'blue',
];

export type Player = {
    id: number;
    name: string;
    color: PlayerColor;
    isSpy: boolean;
};

export type PlayersActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type PlayersStateType = {
    list: Player[];
};
