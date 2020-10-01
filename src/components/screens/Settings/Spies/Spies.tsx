import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Switcher from 'components/common/Switcher/Switcher';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import RandomOption from 'components/common/RandomOption/RandomOption';
import Counter from 'components/common/Counter/Counter';

import useStore from 'hooks/useStore';
import useI18n from 'hooks/useI18n';
import { setSpiesCount, setSpiesRandom, setSpiesSpecific, toggleSpiesFamiliar } from 'store/spies/actions';
import { setSettingsScreen } from 'store/screen/actions';
import { SETTINGS_SCREENS } from 'store/screen/constants';

import './Spies.less';

const b = block('spies');
const Spies: React.FC = () => {
    const {
        state: {
            players: { list: playerList },
            spies: { count, isRandom, isFamiliar },
        },
        dispatch,
    } = useStore();
    const text = useI18n();

    React.useEffect(() => {
        if (count > playerList.length) {
            dispatch(setSpiesCount(playerList.length));
        }
    }, [playerList, count, dispatch]);

    const handleRandomClick = (): void => {
        if (!isRandom) {
            dispatch(setSpiesRandom());
        }
    };

    const handleSpecificCountClick = (): void => {
        if (isRandom) {
            dispatch(setSpiesSpecific());
        }
    };

    const handleFamiliarToggle = (): void => {
        dispatch(toggleSpiesFamiliar());
    };

    const handleIncreaseCountClick = (): void => {
        dispatch(setSpiesCount(count + 1));
    };

    const handleDecreaseCountClick = (): void => {
        dispatch(setSpiesCount(count - 1));
    };

    const handleBackClick = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.PLAYERS));
    };

    const handleForwardClick = (): void => {
        dispatch(setSettingsScreen(SETTINGS_SCREENS.TIME));
    };

    return (
        <div className={b()}>
            <Header>{text('settings.spies.title')}</Header>

            <div className={b('inner')}>
                <RandomOption
                    name={text('settings.spies.random_count_of_spies')}
                    disabled={!isRandom}
                    onClick={handleRandomClick}
                />
                <Counter
                    name={text('settings.spies.set_specific_count_of_spies')}
                    count={count}
                    disabled={isRandom}
                    onClickMinus={handleDecreaseCountClick}
                    onClickPlus={handleIncreaseCountClick}
                    max={playerList.length}
                    min={1}
                    interactive
                    onClick={handleSpecificCountClick}
                />
                <Switcher onChange={handleFamiliarToggle} enabledByDefault={isFamiliar}>
                    {text('settings.spies.is_spies_familiar')}
                </Switcher>
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={handleBackClick} type="additional">
                        {text('settings.buttonsWizard.previous')}
                    </Button>
                }
                next={
                    <Button onClick={handleForwardClick} type="action">
                        {text('settings.buttonsWizard.next')}
                    </Button>
                }
            />
        </div>
    );
};

export default Spies;
