import { InferValueTypes } from 'store/types';
import * as actions from './actions';
import { SCREENS, SETTINGS_SCREENS } from './constants';

export type ScreenActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type ScreenStateType = {
    current: SCREENS;
    settings: SETTINGS_SCREENS;
    editUserId: number;
};
