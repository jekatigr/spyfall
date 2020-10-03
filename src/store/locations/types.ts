import { InferValueTypes } from 'store/types';
import * as actions from './actions';

// eslint-disable-next-line import/prefer-default-export
export const BASIC_LOCATIONS_COUNT = 52;

export type LocationsActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type CustomLocation = {
    name: string;
    isActive: boolean;
};

export type LocationsStateType = {
    basic: {
        isActive: boolean;
        selected: number[];
    };
    custom: {
        isActive: boolean;
        list: CustomLocation[];
    };
    locationForGame: string;
};
