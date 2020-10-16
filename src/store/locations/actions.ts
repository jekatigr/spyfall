import {
    SET_LOCATION_FOR_GAME,
    TOGGLE_BASIC_CATEGORY,
    TOGGLE_CUSTOM_CATEGORY,
    TOGGLE_BASIC_LOCATION,
    UPDATE_CUSTOM,
} from './constants';
import { CustomLocation } from './types';

export const toggleBasicLocationsCategory = () => ({ type: TOGGLE_BASIC_CATEGORY } as const);
export const toggleCustomLocationsCategory = () => ({ type: TOGGLE_CUSTOM_CATEGORY } as const);
export const toggleBasicLocation = (locationIndex: number) =>
    ({ type: TOGGLE_BASIC_LOCATION, payload: locationIndex } as const);
export const updateCustomLocations = (locations: CustomLocation[]) =>
    ({ type: UPDATE_CUSTOM, payload: locations } as const);
export const setLocationForGame = (locationName: string) =>
    ({ type: SET_LOCATION_FOR_GAME, payload: locationName } as const);
