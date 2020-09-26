import { SET_LOCATION_FOR_GAME, TOGGLE_BASIC, TOGGLE_CUSTOM, UPDATE_BASIC, UPDATE_CUSTOM } from './constants';
import { Location } from './types';

export const toggleBasicLocations = () => ({ type: TOGGLE_BASIC } as const);
export const toggleCustomLocations = () => ({ type: TOGGLE_CUSTOM } as const);
export const updateBasicLocations = (locations: Location[]) => ({ type: UPDATE_BASIC, payload: locations } as const);
export const updateCustomLocations = (locations: Location[]) => ({ type: UPDATE_CUSTOM, payload: locations } as const);
export const setLocationForGame = (locationName: string) =>
    ({ type: SET_LOCATION_FOR_GAME, payload: locationName } as const);
