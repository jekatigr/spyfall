import * as React from 'react';
import { block } from 'bem-cn';

import Counter from 'components/common/Counter/Counter';
import Button from 'components/common/Button/Button';
import ButtonsWizard from 'components/common/ButtonsWizard/ButtonsWizard';
import Header from 'components/common/Header/Header';
import Switcher from 'components/common/Switcher/Switcher';

import { useStore } from 'store';
import { SET_SETTINGS_PHASE_TO_LOCATIONS, SET_SETTINGS_PHASE_TO_SPIES } from 'store/reducers/settings/settings';
import {
    INCREASE_ROUND_TIME,
    REDUCE_ROUND_TIME,
    INCREASE_DISCUSSION_TIME,
    REDUCE_DISCUSSION_TIME,
} from 'store/reducers/settings/timeSettings';

import './TimeSettings.less';

const b = block('time-settings');
const TimeSettings: React.FC = () => {
    const {
        state: {
            settings: { timeSettings },
        },
        dispatch,
    } = useStore();

    return (
        <div className={b()}>
            <Header>Время</Header>
            <div className={b('inner')}>
                <Switcher onChange={(): void => {}}>Звук по окончании</Switcher>
                <Counter
                    name="Длительность кона"
                    count={timeSettings.roundTime}
                    units="мин"
                    disabled={false}
                    onClickMinus={(): void => dispatch(REDUCE_ROUND_TIME)}
                    onClickPlus={(): void => dispatch(INCREASE_ROUND_TIME)}
                    min={1}
                    max={100}
                />
                <Counter
                    name="Длительность обсуждения"
                    count={timeSettings.discussionTime}
                    units="мин"
                    disabled={false}
                    onClickMinus={(): void => dispatch(REDUCE_DISCUSSION_TIME)}
                    onClickPlus={(): void => dispatch(INCREASE_DISCUSSION_TIME)}
                    min={1}
                    max={100}
                />
            </div>
            <ButtonsWizard
                previous={
                    <Button onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_SPIES)} type="additional">
                        Назад
                    </Button>
                }
                next={
                    <Button onClick={(): void => dispatch(SET_SETTINGS_PHASE_TO_LOCATIONS)} type="action">
                        Вперед
                    </Button>
                }
            />
        </div>
    );
};

export default TimeSettings;
