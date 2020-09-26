import { InferValueTypes } from 'store/types';
import * as actions from './actions';

export type SpiesActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type SpiesStateType = {
    count: number;
    isRandom: boolean;
    isFamiliar: boolean;
};
