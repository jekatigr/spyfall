import { Reducer } from 'combine-reducers';

import buildInBasicLocations from 'constants/baseLocations';

import { LocationsStateType, LocationsActionsType } from './types';
import { TOGGLE_BASIC, TOGGLE_CUSTOM, UPDATE_BASIC, UPDATE_CUSTOM } from './constants';

const initialState = {
    basic: {
        isActive: true,
        list: buildInBasicLocations.map(l => ({ name: l, isActive: true })),
    },
    custom: {
        isActive: false,
        list: [],
    },
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
        default:
            return state;
    }
};

export default screenReducer;
