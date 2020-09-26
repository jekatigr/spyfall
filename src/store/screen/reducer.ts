import { Reducer } from 'combine-reducers';
import {
    SCREENS,
    SET_BASIC_LOCATIONS_SCREEN,
    SET_CUSTOM_LOCATIONS_SCREEN,
    SET_PLAYER_PROFILE_SCREEN,
    SET_SCREEN,
    SET_SETTINGS_SCREEN,
    SETTINGS_SCREENS,
} from './constants';
import { ScreenActionsType, ScreenStateType } from './types';

const initialState = {
    current: SCREENS.START_SCREEN,
    settings: SETTINGS_SCREENS.PLAYERS,
    editUserId: -1,
};

const screenReducer: Reducer<ScreenStateType, ScreenActionsType> = (
    state = initialState,
    action: ScreenActionsType,
): ScreenStateType => {
    switch (action.type) {
        case SET_SCREEN:
            return {
                ...state,
                current: action.payload,
            };
        case SET_SETTINGS_SCREEN:
            return {
                ...state,
                current: SCREENS.SETTINGS,
                settings: action.payload,
                editUserId: -1,
            };
        case SET_PLAYER_PROFILE_SCREEN:
            return {
                ...state,
                current: SCREENS.SETTINGS,
                settings: SETTINGS_SCREENS.PLAYER_PROFILE,
                editUserId: action.payload,
            };
        case SET_BASIC_LOCATIONS_SCREEN:
            return {
                ...state,
                current: SCREENS.SETTINGS,
                settings: SETTINGS_SCREENS.BASIC_LOCATIONS,
            };
        case SET_CUSTOM_LOCATIONS_SCREEN:
            return {
                ...state,
                current: SCREENS.SETTINGS,
                settings: SETTINGS_SCREENS.CUSTOM_LOCATIONS,
            };
        default:
            return state;
    }
};

export default screenReducer;
