import {
    SCREENS,
    SET_BASIC_LOCATIONS_SCREEN,
    SET_CUSTOM_LOCATIONS_SCREEN,
    SET_PLAYER_PROFILE_SCREEN,
    SET_SCREEN,
    SET_SETTINGS_SCREEN,
    SETTINGS_SCREENS,
} from './constants';

export const setScreen = (screen: SCREENS) => ({ type: SET_SCREEN, payload: screen } as const);
export const setSettingsScreen = (screen: SETTINGS_SCREENS) =>
    ({ type: SET_SETTINGS_SCREEN, payload: screen } as const);
export const setPlayerProfileScreen = (playerId: number) =>
    ({ type: SET_PLAYER_PROFILE_SCREEN, payload: playerId } as const);
export const setBasicLocationsScreen = () => ({ type: SET_BASIC_LOCATIONS_SCREEN } as const);
export const setCustomLocationsScreen = () => ({ type: SET_CUSTOM_LOCATIONS_SCREEN } as const);
