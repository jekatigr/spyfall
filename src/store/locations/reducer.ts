import { Reducer } from 'combine-reducers';
import { LocationsStateType, LocationsActionsType, BASIC_LOCATIONS_COUNT } from './types';
import {
    SET_LOCATION_FOR_GAME,
    TOGGLE_BASIC_CATEGORY,
    TOGGLE_CUSTOM_CATEGORY,
    TOGGLE_BASIC_LOCATION,
    TOGGLE_CUSTOM_LOCATION,
    ADD_CUSTOM_LOCATIONS,
    REMOVE_CUSTOM_LOCATION,
} from './constants';

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
        case TOGGLE_BASIC_CATEGORY:
            return {
                ...state,
                basic: {
                    ...state.basic,
                    isActive: !state.basic.isActive,
                },
            };
        case TOGGLE_CUSTOM_CATEGORY:
            return {
                ...state,
                custom: {
                    ...state.custom,
                    isActive: !state.custom.isActive,
                },
            };
        case TOGGLE_BASIC_LOCATION: {
            const {
                basic: { selected },
            } = state;
            let newSelected;

            if (selected.includes(action.payload)) {
                newSelected = selected.filter(index => index !== action.payload);
            } else {
                newSelected = [...selected, action.payload];
                newSelected.sort();
            }

            return {
                ...state,
                basic: {
                    ...state.basic,
                    selected: newSelected,
                },
            };
        }
        case TOGGLE_CUSTOM_LOCATION:
            return {
                ...state,
                custom: {
                    ...state.custom,
                    list: state.custom.list.map(l => {
                        if (l.name === action.payload) {
                            return {
                                ...l,
                                isActive: !l.isActive,
                            };
                        }

                        return l;
                    }),
                },
            };
        case ADD_CUSTOM_LOCATIONS:
            return {
                ...state,
                custom: {
                    ...state.custom,
                    list: [
                        ...state.custom.list,
                        ...action.payload.map(l => ({
                            name: l,
                            isActive: true,
                        })),
                    ],
                },
            };
        case REMOVE_CUSTOM_LOCATION:
            return {
                ...state,
                custom: {
                    ...state.custom,
                    list: state.custom.list.filter(l => l.name !== action.payload),
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
