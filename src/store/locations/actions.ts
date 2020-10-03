import { SET_LOCATION_FOR_GAME, TOGGLE_BASIC, TOGGLE_CUSTOM, UPDATE_BASIC, UPDATE_CUSTOM } from './constants';
import { CustomLocation } from './types';

export const toggleBasicLocations = () => ({ type: TOGGLE_BASIC } as const);
export const toggleCustomLocations = () => ({ type: TOGGLE_CUSTOM } as const);
export const updateBasicLocations = (locationsIndexes: number[]) =>
    ({ type: UPDATE_BASIC, payload: locationsIndexes } as const);
export const updateCustomLocations = (locations: CustomLocation[]) =>
    ({ type: UPDATE_CUSTOM, payload: locations } as const);
export const setLocationForGame = (locationName: string) =>
    ({ type: SET_LOCATION_FOR_GAME, payload: locationName } as const);
