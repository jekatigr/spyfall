import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Switcher from 'components/common/Switcher/Switcher';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import RandomOption from 'components/common/RandomOption/RandomOption';
import Counter from 'components/common/Counter/Counter';

import { useStore } from 'store';
import {
    SET_SETTINGS_PHASE_TO_PLAYERS_LIST,
    SET_SETTINGS_PHASE_TO_TIME_SETTINGS,
} from 'store/reducers/settings/settings';

import {
    UPDATE_SPIES_FAMILIAR,
    INCREASE_SPIES_COUNT,
    REDUCE_SPIES_COUNT,
    SELECT_RANDOM_SPIES_COUNT,
    SELECT_SPECIFIC_SPIES_COUNT,
} from 'store/reducers/settings/spies';

import './Spies.less';

const b = block('spies');
const Spies: React.FC = () => {
    const {
        state: {
            settings: { spies, playersInfo },
        },
        dispatch,
    } = useStore();

    const handleSwitchChange = (enabled: boolean): void => {
        // eslint-disable-next-line no-console
        console.log(enabled);
        dispatch(UPDATE_SPIES_FAMILIAR, !enabled);
    };

    return (
        <div className={b()}>
            <Header>Шпионы</Header>

            <div className={b('inner')}>
                <RandomOption
                    name="Случайное число шпионов"
                    disabled={spies.specificSpiesCount}
                    onClick={(): void => dispatch(SELECT_RANDOM_SPIES_COUNT)}
                />
                <Counter
                    name="Установить число шпионов"
                    count={spies.spiesCount}
                    disabled={!spies.specificSpiesCount}
                    onClickMinus={(): void => dispatch(REDUCE_SPIES_COUNT)}
                    onClickPlus={(): void => dispatch(INCREASE_SPIES_COUNT)}
                    max={playersInfo.players.length}
                    min={1}
                    interactive
                    onClick={(): void => dispatch(SELECT_SPECIFIC_SPIES_COUNT)}
                />

                <Switcher onChange={handleSwitchChange} enabledByDefault={spies.spiesFamiliar}>
                    Шпионы знакомы
                </Switcher>
            </div>

            <ButtonsWizard
                previous={
                    <Button onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_PLAYERS_LIST)} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_TIME_SETTINGS)} type="action">
                        Вперед
                    </Button>
                }
            />
        </div>
    );
};

export default Spies;
