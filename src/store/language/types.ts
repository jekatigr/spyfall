import { InferValueTypes } from 'store/types';
import * as actions from './actions';

// eslint-disable-next-line import/prefer-default-export
export enum LanguagesEnum {
    EN = 'en',
    RU = 'ru',
}

export type Language = 'en' | 'ru';

export type LanguageActionsType = ReturnType<InferValueTypes<typeof actions>>;

export type LanguageStateType = Language;
