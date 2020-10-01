import { Reducer } from 'combine-reducers';
import { LanguageActionsType, LanguagesEnum, LanguageStateType } from './types';
import { TOGGLE } from './constants';

const initialState = LanguagesEnum.EN;

const languageReducer: Reducer<LanguageStateType, LanguageActionsType> = (
    state = initialState,
    action: LanguageActionsType,
): LanguageStateType => {
    switch (action.type) {
        case TOGGLE:
            return state === LanguagesEnum.EN ? LanguagesEnum.RU : LanguagesEnum.EN;
        default:
            return state;
    }
};

export default languageReducer;
