import * as React from 'react';
import { block } from 'bem-cn';

import Button from 'components/common/Button/Button';

import useStore from 'hooks/useStore';
import { setScreen, setSettingsScreen } from 'store/screen/actions';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';

import Logo from 'icons/logo.svg?sprite';

import './StartScreen.less';

const b = block('start-screen');
const StartScreen: React.FC = () => {
    const { dispatch } = useStore();

    const handlePlayClick = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.PLAYERS));
    };

    const handleShowRules = (): void => {
        dispatch(setScreen(SCREENS.RULES));
    };

    return (
        <div className={b()}>
            <Logo className={b('logo')} />
            <div className={b('buttons')}>
                <Button type="action" onClick={handlePlayClick}>
                    Играть
                </Button>
                <Button type="additional" onClick={handleShowRules}>
                    Правила игры
                </Button>
            </div>
        </div>
    );
};

export default StartScreen;
