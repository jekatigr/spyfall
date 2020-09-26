import { Reducer } from 'combine-reducers';
import { PLAYER_COLORS, PlayersActionsType, PlayersStateType } from './types';
import { ADD, REMOVE, SET_NAME, SET_SPIES } from './constants';

const initialState: PlayersStateType = {
    list: [
        {
            id: 1,
            color: PLAYER_COLORS[0],
            name: 'Игрок 1',
            isSpy: false,
        },
        {
            id: 2,
            color: PLAYER_COLORS[1],
            name: 'Игрок 2',
            isSpy: false,
        },
        {
            id: 3,
            color: PLAYER_COLORS[2],
            name: 'Игрок 3',
            isSpy: false,
        },
    ],
};

const playersReducer: Reducer<PlayersStateType, PlayersActionsType> = (
    state = initialState,
    action: PlayersActionsType,
): PlayersStateType => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                list: [...state.list, action.payload],
            };
        case SET_NAME: {
            const { playerId, name } = action.payload;
            return {
                ...state,
                list: state.list.map(p => {
                    if (p.id === playerId) {
                        return {
                            ...p,
                            name,
                        };
                    }

                    return p;
                }),
            };
        }
        case REMOVE:
            return {
                ...state,
                list: state.list.filter(p => p.id !== action.payload),
            };
        case SET_SPIES: {
            const playersIds = action.payload;
            return {
                ...state,
                list: state.list.map(p => {
                    if (playersIds.includes(p.id)) {
                        return {
                            ...p,
                            isSpy: true,
                        };
                    }

                    return {
                        ...p,
                        isSpy: false,
                    };
                }),
            };
        }
        default:
            return state;
    }
};

export default playersReducer;
