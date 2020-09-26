import MenuItem from 'components/common/Navigation/types';
import { setScreen, setSettingsScreen } from 'store/screen/actions';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getMenuItems = (dispatch: any): MenuItem[] => {
    return [
        {
            title: 'Новая игра',
            onClick: (): void => {
                dispatch(setSettingsScreen(SETTINGS_SCREENS.PLAYERS));
            },
        },
        {
            title: 'Как играть',
            onClick: (): void => {
                dispatch(setScreen(SCREENS.RULES));
            },
        },
        {
            title: 'Выйти из игры',
            onClick: (): void => {
                dispatch(setScreen(SCREENS.START_SCREEN));
            },
        },
    ];
};

export default getMenuItems;
