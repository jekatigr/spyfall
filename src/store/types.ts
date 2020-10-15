import { Dispatch } from 'react';
import * as Rosetta from 'rosetta';
import { ScreenStateType, ScreenActionsType } from 'store/screen/types';
import { PlayersStateType, PlayersActionsType } from 'store/players/types';
import { SpiesStateType, SpiesActionsType } from 'store/spies/types';
import { TimeStateType, TimeActionsType } from 'store/time/types';
import { LocationsStateType, LocationsActionsType } from 'store/locations/types';
import { LanguageStateType, LanguageActionsType } from 'store/language/types';
import AudioElement from 'utils/AudioElement';

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type StateType = {
    screen: ScreenStateType;
    players: PlayersStateType;
    spies: SpiesStateType;
    time: TimeStateType;
    locations: LocationsStateType;
    language: LanguageStateType;
};

export type CombinedActionsType =
    | ScreenActionsType
    | PlayersActionsType
    | SpiesActionsType
    | TimeActionsType
    | LocationsActionsType
    | LanguageActionsType;

export type StoreType = {
    state: StateType;
    dispatch: Dispatch<CombinedActionsType>;
};

export type ContextType = StoreType & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    i18n: Rosetta.Rosetta<any>;
    notification: AudioElement;
};
