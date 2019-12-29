import * as React from 'react';

import TimeSettings from 'components/common/TimeSettings/TimeSettings';
import Header from 'components/common/Header/Header';
import Switcher from 'components/common/Switcher/Switcher';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import RandomOption from 'components/common/RandomOption/RandomOption';
import Counter from 'components/common/Counter/Counter';

import { useStore } from 'store';
import {
    SET_SETTINGS_STATE_TO_LOCATIONS,
    SET_SETTINGS_STATE_TO_PLAYERS,
    SET_SETTINGS_STATE_TO_TIME_SETTINGS,
} from 'store/reducers/settings';

import {
    UPDATE_SPIES_FAMILIAR,
    INCREASE_SPIES_COUNT,
    REDUCE_SPIES_COUNT,
    SELECT_RANDOM_SPIES_COUNT,
    SELECT_SPECIFIC_SPIES_COUNT,
} from 'store/reducers/spies';

import './Spies.less';

const Spies: React.FunctionComponent = () => {
    const {
        state: { spies, playersInfo },
        dispatch,
    } = useStore();

    const handleSwitchChange = (enabled: boolean): void => {
        // eslint-disable-next-line no-console
        console.log(enabled);
        dispatch(UPDATE_SPIES_FAMILIAR, !enabled);
    };

    return (
        <>
            <Header>Шпионы</Header>

            <RandomOption
                name="Случайное число шпионов"
                muted={spies.specificSpiesCount}
                onClick={(): void => dispatch(SELECT_RANDOM_SPIES_COUNT)}
            />
            <Counter
                name="Установить число шпионов"
                count={spies.spiesCount}
                disabled={!spies.specificSpiesCount}
                onClickMinus={(): void => dispatch(REDUCE_SPIES_COUNT)}
                onClickPlus={(): void => dispatch(INCREASE_SPIES_COUNT)}
                topLimit={playersInfo.players.length}
                bottomLimit={1}
                onClick={(): void => dispatch(SELECT_SPECIFIC_SPIES_COUNT)}
            />
            <Header>Настройки</Header>
            <Switcher onChange={handleSwitchChange} enabledByDefault={spies.spiesFamiliar}>
                Шпионы знакомы
            </Switcher>
            <Switcher onChange={(): void => {}}>Звук</Switcher>

            <ButtonsWizard
                previous={
                    <Button onClick={(): void => dispatch(SET_SETTINGS_STATE_TO_PLAYERS)} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={(): void => dispatch(SET_SETTINGS_STATE_TO_LOCATIONS)} type="action">
                        Вперед
                    </Button>
                }
            >
                <TimeSettings onClick={(): void => dispatch(SET_SETTINGS_STATE_TO_TIME_SETTINGS)}>
                    Настройки времени
                </TimeSettings>
            </ButtonsWizard>
        </>
    );
};

export default Spies;
