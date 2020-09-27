import { Dispatch } from 'react';
import { ScreenStateType, ScreenActionsType } from 'store/screen/types';
import { PlayersStateType, PlayersActionsType } from 'store/players/types';
import { SpiesStateType, SpiesActionsType } from 'store/spies/types';
import { TimeStateType, TimeActionsType } from 'store/time/types';
import { LocationsStateType, LocationsActionsType } from 'store/locations/types';

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type StateType = {
    screen: ScreenStateType;
    players: PlayersStateType;
    spies: SpiesStateType;
    time: TimeStateType;
    locations: LocationsStateType;
};

export type CombinedActionsType =
    | ScreenActionsType
    | PlayersActionsType
    | SpiesActionsType
    | TimeActionsType
    | LocationsActionsType;

export type ContextType = {
    state: StateType;
    dispatch: Dispatch<CombinedActionsType>;
};
