import * as React from 'react';
import { block } from 'bem-cn';

import Button from 'components/common/Button/Button';

import { useStore } from 'store';
import { SET_SETTINGS_PHASE_TO_PLAYERS_LIST } from 'store/reducers/settings/settings';
import { SET_APP_STATE_TO_RULES, SET_APP_STATE_TO_SETTINGS } from 'store/reducers/app';

import Logo from 'icons/logo.svg?sprite';

import './StartScreen.less';

const b = block('start-screen');
const StartScreen: React.FC = () => {
    const { dispatch } = useStore();

    const handlePlayClick = (): void => {
        dispatch(SET_APP_STATE_TO_SETTINGS);
        dispatch(SET_SETTINGS_PHASE_TO_PLAYERS_LIST);
    };

    return (
        <div className={b()}>
            <Logo className={b('logo')} />
            <div className={b('buttons')}>
                <Button type="action" onClick={handlePlayClick}>
                    Играть
                </Button>
                <Button type="additional" onClick={(): void => dispatch(SET_APP_STATE_TO_RULES)}>
                    Правила игры
                </Button>
            </div>
        </div>
    );
};

export default StartScreen;
