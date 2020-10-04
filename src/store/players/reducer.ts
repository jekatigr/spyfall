import { Reducer } from 'combine-reducers';
import { PLAYER_COLORS, PlayersActionsType, PlayersStateType } from './types';
import { ADD, REMOVE, SET_NAME, SET_SPIES, TOGGLE_UNDER_SUSPICION } from './constants';

const initialState: PlayersStateType = {
    list: [
        {
            id: 1,
            color: PLAYER_COLORS[0],
            name: 'Player 1',
            isSpy: false,
            isUnderSuspicion: false,
        },
        {
            id: 2,
            color: PLAYER_COLORS[1],
            name: 'Player 2',
            isSpy: false,
            isUnderSuspicion: false,
        },
        {
            id: 3,
            color: PLAYER_COLORS[2],
            name: 'Player 3',
            isSpy: false,
            isUnderSuspicion: false,
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
                            isUnderSuspicion: false,
                        };
                    }

                    return {
                        ...p,
                        isSpy: false,
                        isUnderSuspicion: false,
                    };
                }),
            };
        }
        case TOGGLE_UNDER_SUSPICION:
            return {
                ...state,
                list: state.list.map(p => {
                    if (p.id === action.payload) {
                        return {
                            ...p,
                            isUnderSuspicion: !p.isUnderSuspicion,
                        };
                    }

                    return p;
                }),
            };
        default:
            return state;
    }
};

export default playersReducer;
