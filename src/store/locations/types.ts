import { InferValueTypes } from 'store/types';
import * as actions from './actions';

export type LocationsActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type Location = {
    name: string;
    isActive: boolean;
};

type LocationsList = {
    isActive: boolean;
    list: Location[];
};

export type LocationsStateType = {
    basic: LocationsList;
    custom: LocationsList;
};
