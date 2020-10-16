import {
    SET_LOCATION_FOR_GAME,
    TOGGLE_BASIC_CATEGORY,
    TOGGLE_CUSTOM_CATEGORY,
    TOGGLE_BASIC_LOCATION,
    TOGGLE_CUSTOM_LOCATION,
    ADD_CUSTOM_LOCATIONS,
    REMOVE_CUSTOM_LOCATION,
} from './constants';

export const toggleBasicLocationsCategory = () => ({ type: TOGGLE_BASIC_CATEGORY } as const);
export const toggleCustomLocationsCategory = () => ({ type: TOGGLE_CUSTOM_CATEGORY } as const);
export const toggleBasicLocation = (locationIndex: number) =>
    ({ type: TOGGLE_BASIC_LOCATION, payload: locationIndex } as const);
export const toggleCustomLocation = (locationName: string) =>
    ({ type: TOGGLE_CUSTOM_LOCATION, payload: locationName } as const);
export const addCustomLocations = (locationNames: string[]) =>
    ({ type: ADD_CUSTOM_LOCATIONS, payload: locationNames } as const);
export const removeCustomLocation = (locationName: string) =>
    ({ type: REMOVE_CUSTOM_LOCATION, payload: locationName } as const);
export const setLocationForGame = (locationName: string) =>
    ({ type: SET_LOCATION_FOR_GAME, payload: locationName } as const);
