import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Switcher from 'components/common/Switcher/Switcher';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import RandomOption from 'components/common/RandomOption/RandomOption';
import Counter from 'components/common/Counter/Counter';

import { useStore } from 'store';
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
            <Header>Шпионы</Header>

            <div className={b('inner')}>
                <RandomOption name="Случайное число шпионов" disabled={!isRandom} onClick={handleRandomClick} />
                <Counter
                    name="Установить число шпионов"
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
                    Шпионы знакомы
                </Switcher>
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={handleBackClick} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={handleForwardClick} type="action">
                        Вперед
                    </Button>
                }
            />
        </div>
    );
};

export default Spies;
