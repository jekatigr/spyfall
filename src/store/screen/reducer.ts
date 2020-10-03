import { Reducer } from 'combine-reducers';
import {
    SCREENS,
    SET_BASIC_LOCATIONS_SCREEN,
    SET_CUSTOM_LOCATIONS_SCREEN,
    SET_PLAYER_PROFILE_SCREEN,
    SET_PREVIOUS_SCREEN,
    SET_SCREEN,
    SET_SETTINGS_SCREEN,
    SETTINGS_SCREENS,
} from './constants';
import { ScreenActionsType, ScreenStateType } from './types';

const initialState: ScreenStateType = {
    current: SCREENS.START_SCREEN,
    settings: SETTINGS_SCREENS.PLAYERS,
    editUserId: -1,
    previous: SCREENS.START_SCREEN,
    previousSettings: SETTINGS_SCREENS.PLAYERS,
};

const screenReducer: Reducer<ScreenStateType, ScreenActionsType> = (
    state = initialState,
    action: ScreenActionsType,
): ScreenStateType => {
    switch (action.type) {
        case SET_SCREEN:
            return {
                ...state,
                previous: state.current,
                previousSettings: state.settings,
                current: action.payload,
            };
        case SET_SETTINGS_SCREEN:
            return {
                ...state,
                previous: state.current,
                previousSettings: state.settings,
                current: SCREENS.SETTINGS,
                settings: action.payload,
                editUserId: -1,
            };
        case SET_PLAYER_PROFILE_SCREEN:
            return {
                ...state,
                previous: state.current,
                previousSettings: state.settings,
                current: SCREENS.PLAYER_PROFILE,
                editUserId: action.payload,
            };
        case SET_BASIC_LOCATIONS_SCREEN:
            return {
                ...state,
                previous: state.current,
                previousSettings: state.settings,
                current: SCREENS.BASIC_LOCATIONS,
            };
        case SET_CUSTOM_LOCATIONS_SCREEN:
            return {
                ...state,
                previous: state.current,
                previousSettings: state.settings,
                current: SCREENS.CUSTOM_LOCATIONS,
            };
        case SET_PREVIOUS_SCREEN:
            return {
                ...state,
                previous: state.current,
                previousSettings: state.settings,
                current: state.previous,
                settings: state.previousSettings,
            };

        default:
            return state;
    }
};

export default screenReducer;
