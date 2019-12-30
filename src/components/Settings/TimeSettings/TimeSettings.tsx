import * as React from 'react';

import Counter from 'components/common/Counter/Counter';

import { useStore } from 'store';
import {
    INCREASE_ROUND_TIME,
    REDUCE_ROUND_TIME,
    INCREASE_DISCUSSION_TIME,
    REDUCE_DISCUSSION_TIME,
} from 'store/reducers/settings/timeSettings';

import './TimeSettings.less';

const TimeSettings: React.FunctionComponent = () => {
    const {
        state: {
            settings: { timeSettings },
        },
        dispatch,
    } = useStore();

    return (
        <>
            <Counter
                name="Время на кон"
                count={timeSettings.roundTime}
                units="мин"
                disabled={false}
                onClickMinus={(): void => dispatch(REDUCE_ROUND_TIME)}
                onClickPlus={(): void => dispatch(INCREASE_ROUND_TIME)}
                min={1}
                max={100}
            />
            <Counter
                name="Время на обсуждение"
                count={timeSettings.discussionTime}
                units="мин"
                disabled={false}
                onClickMinus={(): void => dispatch(REDUCE_DISCUSSION_TIME)}
                onClickPlus={(): void => dispatch(INCREASE_DISCUSSION_TIME)}
                min={1}
                max={100}
            />
        </>
    );
};

export default TimeSettings;
