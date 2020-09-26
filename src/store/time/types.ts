import { InferValueTypes } from 'store/types';
import * as actions from './actions';

export type TimeActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type TimeStateType = {
    questions: number;
    discussion: number;
    sound: boolean;
};
