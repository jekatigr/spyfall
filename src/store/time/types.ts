import { InferValueTypes } from 'store/types';
import * as actions from './actions';

export type TimeActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type TimeStateType = {
    questions: {
        limit: number;
        start: number;
    };
    discussion: {
        limit: number;
        start: number;
    };
    sound: boolean;
};
