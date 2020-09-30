import * as React from 'react';
import { block } from 'bem-cn';

import Header from 'components/common/Header/Header';
import Button from 'components/common/Button/Button';
import Timer from 'components/common/Timer/Timer';

import useStore from 'hooks/useStore';
import { setScreen } from 'store/screen/actions';
import { SCREENS } from 'store/screen/constants';

import './Discussion.less';

const b = block('discussion');
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
        <div className={b()}>
            <Header>Обсуждение</Header>
            <div className={b('timer', { 'has-margin': !timeUp })}>
                <Timer fullDuration={limit * 1000 * 60} startTimestamp={start} onTimeUp={handleTimeUp} />
            </div>
            {timeUp && (
                <Button onClick={handleIdentifySpiesClick} type="action">
                    Угадать шпионов
                </Button>
            )}
        </div>
    );
};

export default Discussion;
