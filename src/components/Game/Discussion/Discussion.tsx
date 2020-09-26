import * as React from 'react';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Timer from 'components/common/Timer/Timer';

import { useStore } from 'store';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';

const Discussion: React.FC = () => {
    const {
        state: {
            time: {
                discussion: { start, limit },
            },
        },
        dispatch,
    } = useStore();

    const [timeUp, setTimeUp] = React.useState(false);

    const handleTimeUp = (): void => {
        setTimeUp(true);
    };

    const handleIdentifySpiesClick = (): void => {
        dispatch(setScreen(SCREENS.IDENTIFY_SPIES));
    };

    return (
        <>
            <Header>Обсуждение</Header>
            <Timer fullDuration={limit * 1000 * 60} startTimestamp={start} onTimeUp={handleTimeUp} />
            {timeUp && (
                <Button onClick={handleIdentifySpiesClick} type="action">
                    Угадать шпионов
                </Button>
            )}
        </>
    );
};

export default Discussion;
