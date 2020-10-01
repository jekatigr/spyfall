import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Timer from 'components/common/Timer/Timer';

import useStore from 'hooks/useStore';
import { setDiscussionTimeStart } from 'store/time/actions';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';

import './Questions.less';

const b = block('questions');
const Questions: React.FC = () => {
    const {
        state: {
            time: {
                questions: { start, limit },
            },
        },
        dispatch,
    } = useStore();

    const [timeUp, setTimeUp] = React.useState(false);

    const handleTimeUp = (): void => {
        setTimeUp(true);
    };

    const handleStartDiscussionClick = (): void => {
        dispatch(setDiscussionTimeStart(Date.now()));
        dispatch(setScreen(SCREENS.DISCUSSION));
    };

    return (
        <div className={b()}>
            <Header>Кон</Header>
            <div className={b('timer', { 'has-margin': !timeUp })}>
                <Timer fullDuration={limit * 1000 * 60} startTimestamp={start} onTimeUp={handleTimeUp} />
            </div>
            {timeUp && (
                <Button onClick={handleStartDiscussionClick} type="action">
                    Начать обсуждение
                </Button>
            )}
        </div>
    );
};

export default Questions;