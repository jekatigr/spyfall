import { Reducer } from 'combine-reducers';
import { LocationsStateType, LocationsActionsType } from './types';
import {
    SET_LOCATION_FOR_GAME,
    TOGGLE_BASIC,
    TOGGLE_CUSTOM,
    UPDATE_BASIC,
    UPDATE_CUSTOM,
    BUILD_IN_LOCATIONS,
} from './constants';

const initialState = {
    basic: {
        isActive: true,
        list: BUILD_IN_LOCATIONS.map(l => ({ name: l, isActive: true })),
    },
    custom: {
        isActive: false,
        list: [],
    },
    locationForGame: '',
};

const screenReducer: Reducer<LocationsStateType, LocationsActionsType> = (
    state = initialState,
    action: LocationsActionsType,
): LocationsStateType => {
    switch (action.type) {
        case TOGGLE_BASIC:
            return {
                ...state,
                basic: {
                    ...state.basic,
                    isActive: !state.basic.isActive,
                },
            };
        case TOGGLE_CUSTOM:
            return {
                ...state,
                custom: {
                    ...state.custom,
                    isActive: !state.custom.isActive,
                },
            };
        case UPDATE_BASIC:
            return {
                ...state,
                basic: {
                    ...state.basic,
                    list: action.payload,
                },
            };
        case UPDATE_CUSTOM:
            return {
                ...state,
                custom: {
                    ...state.custom,
                    list: action.payload,
                },
            };
        case SET_LOCATION_FOR_GAME:
            return {
                ...state,
                locationForGame: action.payload,
            };
        default:
            return state;
    }
};

export default screenReducer;
