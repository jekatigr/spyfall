import { Reducer } from 'combine-reducers';
import { LocationsStateType, LocationsActionsType, BASIC_LOCATIONS_COUNT } from './types';
import { SET_LOCATION_FOR_GAME, TOGGLE_BASIC, TOGGLE_CUSTOM, UPDATE_BASIC, UPDATE_CUSTOM } from './constants';

const initialBasicLocationsSelection = new Array(BASIC_LOCATIONS_COUNT).fill(0).map((_cur, index) => index);

const initialState: LocationsStateType = {
    basic: {
        isActive: true,
        selected: initialBasicLocationsSelection,
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
                    selected: action.payload,
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
