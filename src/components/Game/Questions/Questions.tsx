import * as React from 'react';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Timer from 'components/common/Timer/Timer';

import { useStore } from 'store';
import { setDiscussionTimeStart } from 'store/time/actions';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';

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
        <>
            <Header>Кон</Header>
            <Timer fullDuration={limit * 1000 * 60} startTimestamp={start} onTimeUp={handleTimeUp} />
            {timeUp && (
                <Button onClick={handleStartDiscussionClick} type="action">
                    Начать обсуждение
                </Button>
            )}
        </>
    );
};

export default Questions;
