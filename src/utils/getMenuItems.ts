import MenuItem from 'components/common/Navigation/types';

import { SET_SETTINGS_PHASE_TO_PLAYERS_LIST } from 'store/reducers/settings/settings';
import { SET_APP_STATE_TO_RULES, SET_APP_STATE_TO_SETTINGS, SET_APP_STATE_TO_START_SCREEN } from 'store/reducers/app';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function(dispatch: (type: string, payload?: any) => void): MenuItem[] {
    return [
        {
            title: 'Новая игра',
            onClick: (): void => {
                dispatch(SET_APP_STATE_TO_SETTINGS);
                dispatch(SET_SETTINGS_PHASE_TO_PLAYERS_LIST);
            },
        },
        {
            title: 'Как играть',
            onClick: (): void => {
                dispatch(SET_APP_STATE_TO_RULES);
            },
        },
        {
            title: 'Выйти из игры',
            onClick: (): void => {
                dispatch(SET_APP_STATE_TO_START_SCREEN);
            },
        },
    ];
}
