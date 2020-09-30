import * as React from 'react';
import { block } from 'bem-cn';

import Button from 'components/common/Button/Button';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { setScreen, setSettingsScreen } from 'store/screen/actions';
import { SCREENS, SETTINGS_SCREENS } from 'store/screen/constants';
import { toggleLanguage } from 'store/language/actions';

import Logo from 'icons/logo.svg?sprite';

import './StartScreen.less';

const b = block('start-screen');
const StartScreen: React.FC = () => {
    const {
        state: { language },
        dispatch,
    } = useStore();
    const text = useI18n();

    const handlePlayClick = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.PLAYERS));
    };

    const handleShowRules = (): void => {
        dispatch(setScreen(SCREENS.RULES));
    };

    const handleLangClicked = (): void => {
        dispatch(toggleLanguage());
    };

    return (
        <div className={b()}>
            <Logo className={b('logo')} />
            <div className={b('buttons')}>
                <Button type="action" onClick={handlePlayClick}>
                    {text('startScreen.play')}
                </Button>
                <Button type="additional" onClick={handleShowRules}>
                    {text('startScreen.rules')}
                </Button>
                <Button type="additional" onClick={handleLangClicked}>
                    {text('startScreen.language')}: {language.toUpperCase()}
                </Button>
            </div>
        </div>
    );
};

export default StartScreen;
